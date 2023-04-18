import React, { Dispatch, useRef } from 'react';
import SunEditor from 'suneditor-react';
import SunEditorCore from 'suneditor/src/lib/core';
import './Editor.scss';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { message } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

interface Props {
  state?: string;
  setState?: Dispatch<string>;
  image?: boolean;
  disabled?: boolean;
  styles?: React.CSSProperties;
  width?: string;
  height?: string;
}

export const Editor: React.FC<Props> = ({
  state: editorState = '',
  setState: setEditorState,
  image,
  styles,
  disabled,
  width,
  height,
}): JSX.Element => {
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  const onImageUploadError = (errorMessage: Any) => {
    message.error(errorMessage);
  };

  // changeEditor
  const onChangeEditor = (content: string) => {
    if (setEditorState) setEditorState(content);
  };

  // const buttonImage = image ? ['table', 'link', 'video'] : ['table', 'link', 'image', 'video'];
  const images = image ? ['image'] : [];

  return (
    <div className="editor-wrapper" style={{ ...styles }}>
      <SunEditor
        disable={disabled}
        setContents={editorState}
        placeholder="컨텐츠를 입력하세요."
        getSunEditorInstance={getSunEditorInstance}
        lang="ko"
        width={width || '800px'}
        height={height || '100%'}
        setAllPlugins
        onChange={onChangeEditor}
        onImageUploadError={onImageUploadError}
        defaultValue=""
        setOptions={{
          resizeEnable: false,
          imageUploadSizeLimit: 1000000,
          imageAccept: 'image/jpeg,image/jpg,image/png,image/svg',
          fontSize: [10, 11, 12, 13, 14, 16, 18, 24, 30],
          // font: ['MalgunGothic', '맑은 고딕'],
          defaultStyle: 'font-size: 14px; line-height:1.3',
          buttonList: [
            // ['undo', 'redo'],
            ['codeView', 'fontSize', 'formatBlock'],
            // ['paragraphStyle', 'blockquote'],
            ['bold', 'underline', 'italic', 'strike'],
            ['fontColor', 'hiliteColor'],
            // ['fontColor', 'hiliteColor', 'textStyle'],
            // ['removeFormat'],
            // ['outdent', 'indent'],
            ['align'],
            images,
            // ['image'], // You must add the 'katex' library at options to use the 'math' plugin.
            // ['fullScreen', 'showBlocks', 'codeView'],
            // ['preview', 'print'],
            // ['save', 'template'],
            // '/', Line break
          ],
          // prettier-ignore
          colorList: [
            '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',
            '#ff0000', '#ff5e00', '#ffe400', '#abf200', '#00d8ff', '#0055ff', '#6600ff', '#ff00dd', '#000000',
            '#ffd8d8', '#fae0d4', '#faf4c0', '#e4f7ba', '#d4f4fa', '#d9e5ff', '#e8d9ff', '#ffd9fa', '#f1f1f1',
            '#ffa7a7', '#ffc19e', '#faed7d', '#cef279', '#b2ebf4', '#b2ccff', '#d1b2ff', '#ffb2f5', '#bdbdbd',
            '#f15f5f', '#f29661', '#e5d85c', '#bce55c', '#5cd1e5', '#6699ff', '#a366ff', '#f261df', '#8c8c8c',
            '#980000', '#993800', '#998a00', '#6b9900', '#008299', '#003399', '#3d0099', '#990085', '#353535',
            '#670000', '#662500', '#665c00', '#476600', '#005766', '#002266', '#290066', '#660058', '#222222',
            '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000',
          ],
        }}
      />
    </div>
  );
};
