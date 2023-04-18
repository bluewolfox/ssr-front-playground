import { Form, Input } from "antd";
import React from "react";
import "./Login.page.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type T_Form = {
  userId: string;
  userPasswd: string;
};

export const Login_page: React.FC = (): JSX.Element => {
  const { control, handleSubmit } = useForm<T_Form>({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<T_Form> = (data) => {
    console.log({ data });
  };
  return (
    <div id="login-wrapper">
      <div className="login-content">
        <section className="login-content-section">
          <div className="login-form-field">
            <h3>Sign in</h3>
            <p>로그인 정보를 입력하세요.</p>
            <Form onFinish={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="userId"
                rules={{
                  required: "아이디는 필수 입력입니다.",
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item extra={error?.message} label="아이디">
                      <Input {...field} />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                control={control}
                name="userPasswd"
                rules={{
                  required: "비밀번호는 필수 입력입니다.",
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item extra={error?.message} label="비밀번호">
                      <Input {...field} type="password" />
                    </Form.Item>
                  );
                }}
              />
              {/* <Input
                styles={inputStyle}
                className="login-input"
                placeholder="Username"
                value={state.userId}
                onChange={(e): void => setState({ type: 'USER_ID', value: e.target.value })}
                onBlur={
                  (e): void => {
                    loginErrorHandler(e.currentTarget.value as string, 'id');
                  }
                  // setState({ type: 'error', value: { errorId: e.target.value, errorPassword: e.target.value } })
                }
              />

              <Input
                type="password"
                styles={inputStyle}
                className="login-input"
                placeholder="Password"
                value={state.userPasswd}
                onChange={(e): void => setState({ type: 'USER_PASSWORD', value: e.target.value })}
                onBlur={(e): void => {
                  loginErrorHandler(e.currentTarget.value as string, 'pw');
                }}
              />

              <Button
                className="sign-btn"
                type="submit"
                text="Sign in"
                loading={state.loading}
                styles={{
                  width: 330,
                  height: 50,
                  radius: 7,
                  backgroundColor: '#286B86',
                  fontWeight: 600,
                  hover: { backgroundColor: '#337996' },
                  active: { backgroundColor: '#21627C' },
                }}
              /> */}
            </Form>

            <div className="login-util-field">
              <div className="id__save__wrapper">
                {/* <CheckBox
                  className="login-checkbox"
                  text="아이디 저장"
                  checked={state.saveId}
                  onChange={(check): void => setState({ type: 'SAVE_CHECK', value: check })}
                  styles={{ size: 17, color: '#EFF4F8', backgroundColor: '#286B86' }}
                /> */}
              </div>
            </div>
          </div>
          <i className="main-logo" />
        </section>
      </div>
    </div>
  );
};
