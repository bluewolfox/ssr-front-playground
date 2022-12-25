import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import EduArr from './education/EduArr';
import EduObj from './education/EduObj';
import EduTypescript from './education/EduTypescript';
import EduOperator from './education/EduOperator';
import EduOptionalChaining from './education/EduOptionalChaining';
import EduFragment from './education/EduFragment';
import EduES2022 from './education/EduES2022';
import EduTransition from './education/EduTransition';
import { EduInfinityLoading } from './education/EduInfinityLoading';
import { EduUseMemoCallback } from './education/EduUseMemoCallback';
import { BFS, DFS } from './functions/index.js';
import { Query } from './components';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    // <div>
    //   {/* <EduObj /> */}
    //   {/* <EduArr /> */}
    //   {/* <EduTypescript /> */}
    //   {/* <EduOperator /> */}
    //   {/* <EduOptionalChaining /> */}
    //   {/* <EduFragment /> */}
    //   {/* <EduES2022 /> */}
    //   {/* <EduTransition /> */}
    //   {/* <EduInfinityLoading /> */}
    //   {/* <EduUseMemoCallback /> */}
    //   {/* Hello world! */}
    // </div>
    <QueryClientProvider client={queryClient}>
      <Query />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default App;
