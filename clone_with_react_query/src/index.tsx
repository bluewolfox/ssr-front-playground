import { ConfigProvider, ThemeConfig, App as Antd_App } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import locale from 'antd/locale/ko_KR';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { App } from './App';
import { queryClient } from './queries';
import history from './common/history';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

/** ant design 기본 설정 */
const antdDefaultConfig: ThemeConfig = {
  token: {
    colorPrimary: '#2e6da4',
    fontFamily: 'MalgunGothic',
    borderRadius: 2,
    colorLinkHover: 'none',
    fontSize: 12,
  },
};

root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <HistoryRouter history={history}>
        <ConfigProvider locale={locale} theme={antdDefaultConfig}>
          <Antd_App>
            <App />
          </Antd_App>
        </ConfigProvider>
      </HistoryRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </RecoilRoot>
  </QueryClientProvider>
);
