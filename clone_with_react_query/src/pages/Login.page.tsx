import { App, Button, Form, Input } from 'antd';
import React from 'react';
import './Login.page.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useLogin } from 'queries/useLoginQuery';
import { useNavigate } from 'react-router-dom';
import { validator } from './rules';

type T_Form = {
  userId: string;
  userPasswd: string;
};

export const Login_page: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { message } = App.useApp();
  const { control, handleSubmit } = useForm<T_Form>({ mode: 'onSubmit' });

  const { isLoading, mutate: onLogin } = useLogin(() => {
    message.success('로그인에 성공하였습니다.');
    navigate('/main');
  });

  const onSubmit: SubmitHandler<T_Form> = (data) => {
    onLogin(data);
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
                  validate: (value) => {
                    const { validError } = validator.excute(['EMAIL'], value);

                    if (!validError) return undefined;
                    return validError;
                  },
                  required: '아이디는 필수 입력입니다.',
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      extra={error?.message}
                      label="아이디"
                      labelAlign="right"
                      colon={false}
                      style={{ color: '#fff' }}
                    >
                      <Input {...field} />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                control={control}
                name="userPasswd"
                rules={{
                  required: '비밀번호는 필수 입력입니다.',
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item extra={error?.message} label="비밀번호">
                      <Input {...field} type="password" />
                    </Form.Item>
                  );
                }}
              />

              <Button
                htmlType="submit"
                style={{
                  width: 330,
                  height: 50,
                  borderRadius: 7,
                  backgroundColor: '#286B86',
                  borderColor: '#286B86',
                  fontWeight: 600,
                  color: '#fff',
                }}
                loading={isLoading}
              >
                Login
              </Button>
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
