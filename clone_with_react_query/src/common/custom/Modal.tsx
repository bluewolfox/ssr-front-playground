/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, Dispatch, useContext, useState } from 'react';
import { Modal as Antd_Modal, ModalFuncProps, ModalProps } from 'antd';
import './Modal.scss';
import { useLocation } from 'react-router-dom';

export const ModalContext = createContext<{
  open: boolean;
  setOpen: Dispatch<boolean>;
}>({
  open: false,
  setOpen: () => {},
});

export const ModalWrapper: React.FC<{
  children: JSX.Element;
  content: JSX.Element;
}> = ({ children: triggerChildren, content }): JSX.Element => {
  const [open, setOpen] = useState(false);

  const TRIGGER_CHILDREN = React.Children.map(triggerChildren, (child) => {
    return React.cloneElement(child, {
      ...child.props,
      style: { ...child.props.style, cursor: 'pointer' },
      onClick: () => {
        if (child.props.onClick) child.props.onClick();
        setOpen(true);
      },
    });
  });

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {TRIGGER_CHILDREN}
      {content}
    </ModalContext.Provider>
  );
};

export const Modal: React.FC<ModalProps & ModalFuncProps> = (props) => {
  const { open, setOpen } = useContext(ModalContext);
  const { pathname } = useLocation();
  const isAdmin = pathname.includes('admin');

  const config: ModalProps & ModalFuncProps = {
    ...props,
    open,
    title: props.title || '타이틀',
    onCancel: () => {
      if (props.onCancel) props.onCancel();
      setOpen(false);
    },
    style: { top: props.style?.top || 0 },
    closable: props.closable || false,
  };

  /** admin 페이지일때 모달 다르게 표시 */
  if (isAdmin) {
    if (config.className) config.className = `${config.className} admin__modal`;
    if (!config.className) config.className = 'admin__modal';
  }

  return <Antd_Modal {...config} destroyOnClose />;
};
