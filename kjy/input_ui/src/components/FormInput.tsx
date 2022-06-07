import React from "react";
import styled from "styled-components";

type FormProps = {
  //   onSubmit: React.FormEventHandler<HTMLFormElement>;
  children?: React.ReactNode;
  userRef?: any;
  setUserName?: any;
  type: string;
  placeholder: string;
  title: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  margin?: string;
  backgroundColor?: string;
  padding?: string;
  submitName: string;
};

const FormInput = (props: FormProps) => {
  const {
    children,
    placeholder,
    submitName,
    title,
    type,
    setUserName,
    userRef,
  } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const data = new FormData(e.target as HTMLFormElement);
    // console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="form-input">
      <form onSubmit={handleSubmit}>
        <label>{title}</label>
        <StylesInput {...props} type={type} placeholder={placeholder} required>
          {/* {children} */}
        </StylesInput>

        {/* // <input
        //   //   ref={userRef}
        //   type={type}
        //   placeholder={placeholder}
        //   width={width}
        //   height={height}
        //   //   borderRadius={borderRadius}
        //   // border={border}
        //   // margin={margin}
        //   // backgroundColor={backgroundColor}

        //   //   onChange={(e) => {
        //   //     setUserName(e.target.value);
        //   //   }}
        // /> */}

        <button>{submitName}</button>
      </form>
    </div>
  );
};

export default FormInput;

const StylesInput = styled.input<FormProps>`
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) =>
    props.backgroundColor ? `background-color : ${props.backgroundColor}` : ""};
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius}` : ""};
`;

export { StylesInput };
