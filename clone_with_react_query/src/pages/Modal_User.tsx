import { App, Col, Form, Input, Row, Select } from 'antd';
import { Modal, ModalContext } from 'common/custom/Modal';
import { M_SettingUser } from 'models/settingUser.model';
import { usePutUser } from 'queries/useUserQuery';
import React, { useContext } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { userRecoilState } from 'state';
import { validator } from './rules';

type T_Form = {
  userId: string;
  userPasswd: string;
  userPasswdConfirm: string;
  userName: string;
  userEmail: string;
  userTel: string;
  userStatus: number;
  userDept: string;
  userDuty: string;
  isAutolockExcept: number;
  allowAccessIp: string;
  multiLogin: number;
  additionalInfo: string;
  userRole: string;
};

interface Props {
  data: M_SettingUser.I_User;
}
export const Modal_User: React.FC<Props> = ({ data: PropsData }): JSX.Element => {
  const { message } = App.useApp();
  const userInfo = useRecoilValue(userRecoilState);

  const { setOpen } = useContext(ModalContext);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setError,
    clearErrors,
    resetField,
  } = useForm<T_Form>({
    mode: 'all',
    values: {
      userId: PropsData.userId,
      userPasswd: '',
      userPasswdConfirm: '',
      userName: PropsData.userName,
      userEmail: PropsData.userEmail,
      userTel: PropsData.userTel,
      userStatus: PropsData.userStatus,
      userDept: PropsData.userDept,
      userDuty: PropsData.userDuty,
      isAutolockExcept: PropsData.isAutolockExcept,
      allowAccessIp: JSON.stringify(PropsData.accessIp) === '[]' ? '' : JSON.stringify(PropsData.accessIp),
      multiLogin: PropsData.multiLogin,
      additionalInfo: PropsData.additionalInfo,
      userRole: PropsData.userRole,
    },
  });

  const { mutate, isLoading } = usePutUser(
    () => {
      message.success('유저 수정 성공');
      setOpen(false);
    },
    (err) => {
      if (err.response.data.message === 'FAIL_PWPOLICY') {
        setError('userPasswd', {
          message: '기존 비밀번호와 동일합니다.',
        });
      }
    }
  );

  const onSubmit: SubmitHandler<T_Form> = (data) => {
    if (data.userPasswd || data.userPasswdConfirm) {
      if (data.userPasswd !== data.userPasswdConfirm) {
        setError('userPasswd', {
          message: '비밀번호가 다릅니다.',
          type: 'validate',
        });
        return;
      }
    }

    mutate({ ...data, userNo: PropsData.userNo });
  };

  return (
    <Modal
      afterClose={reset}
      title="사용자 수정"
      onOk={handleSubmit(onSubmit)}
      width={700}
      okText="수정"
      confirmLoading={isLoading}
    >
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        <Row gutter={4}>
          <Controller
            control={control}
            name="userRole"
            render={({ field }) => {
              return (
                <Col span={6}>
                  <Form.Item required label="사용자 타입" colon={false}>
                    <Select
                      {...field}
                      options={[
                        { label: '관리자', value: 'ROLE_ADMIN' },
                        { label: '일반 사용자', value: 'ROLE_USER' },
                      ]}
                    />
                  </Form.Item>
                </Col>
              );
            }}
          />
          <Controller
            control={control}
            name="multiLogin"
            render={({ field }) => {
              return (
                <Col span={6}>
                  <Form.Item required label="중복 로그인" colon={false}>
                    <Select
                      {...field}
                      options={[
                        { label: '허용', value: 1 },
                        { label: '허용 안함', value: 0 },
                      ]}
                    />
                  </Form.Item>
                </Col>
              );
            }}
          />
          <Controller
            control={control}
            name="userStatus"
            render={({ field }) => {
              return (
                <Col span={6}>
                  <Form.Item required label="상태" colon={false}>
                    <Select
                      {...field}
                      options={[
                        { label: '활성', value: 1 },
                        { label: '중지', value: 2 },
                        { label: '잠김', value: 3 },
                      ]}
                    />
                  </Form.Item>
                </Col>
              );
            }}
          />
          <Controller
            control={control}
            name="isAutolockExcept"
            render={({ field }) => {
              return (
                <Col span={6}>
                  <Form.Item required label="자동 잠김 예외" colon={false}>
                    <Select
                      {...field}
                      options={[
                        { label: '사용', value: 1 },
                        { label: '사용 안함', value: 0 },
                      ]}
                    />
                  </Form.Item>
                </Col>
              );
            }}
          />
        </Row>

        <Controller
          control={control}
          name="userId"
          render={({ field }) => {
            return (
              <Form.Item required label="아이디" colon={false}>
                <Input {...field} disabled />
              </Form.Item>
            );
          }}
        />

        <Form.Item label="비밀번호" extra={errors.userPasswd?.message} colon={false}>
          <Controller
            control={control}
            name="userPasswd"
            render={({ field }) => {
              return <Input {...field} placeholder="새 비밀번호 입력" style={{ marginBottom: 4 }} type="password" />;
            }}
          />
          <Controller
            control={control}
            name="userPasswdConfirm"
            render={({ field }) => {
              return <Input {...field} placeholder="새 비밀번호 재입력" type="password" />;
            }}
          />
        </Form.Item>

        <Controller
          control={control}
          rules={{
            required: '필수 입력입니다.',
            maxLength: {
              message: '최대 10자리까지 입력 가능합니다..',
              value: 10,
            },
          }}
          name="userName"
          render={({ field, fieldState }) => {
            return (
              <Form.Item required extra={fieldState.error?.message} label="이름" colon={false}>
                <Input {...field} />
                {fieldState.error?.message || ''}
              </Form.Item>
            );
          }}
        />

        <Controller
          control={control}
          name="userEmail"
          rules={{
            required: '필수 입력입니다.',
            validate: (value) => {
              const { validError } = validator.excute(['email'], value);

              if (!validError) return undefined;
              return validError;
            },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <Form.Item required extra={error?.message} label="이메일" colon={false}>
                <Input {...field} />
              </Form.Item>
            );
          }}
        />
        <Controller
          control={control}
          name="userTel"
          rules={{
            required: '필수 입력입니다.',
          }}
          render={({ field }) => {
            return (
              <Form.Item required label="연락처" colon={false}>
                <Input {...field} />
              </Form.Item>
            );
          }}
        />
        <Controller
          control={control}
          name="userDept"
          render={({ field }) => {
            return (
              <Form.Item label="부서" colon={false}>
                <Input {...field} placeholder="부서를 입력하세요." />
              </Form.Item>
            );
          }}
        />
        <Controller
          control={control}
          name="userDuty"
          render={({ field }) => {
            return (
              <Form.Item label="직급" colon={false}>
                <Input {...field} placeholder="직급을 입력하세요." />
              </Form.Item>
            );
          }}
        />
        <Controller
          control={control}
          name="additionalInfo"
          render={({ field }) => {
            return (
              <Form.Item label="설명" colon={false}>
                <Input {...field} placeholder="내용을 입력하세요" />
              </Form.Item>
            );
          }}
        />
      </Form>
    </Modal>
  );
};
