/**
 * 1. 컴포넌트 : src\common\history.ts
 * 2. 작성일 : 2023.04.17 / 13시 25분 34초
 * 3. 설명 : browser history 기능 => 컴포넌트를 렌더링할때 props 로 history 객체를 전달하는데, 이 객체는 history 패키지의 createBrowserHistory() 함수를 호출함으로써 생성
 */

import { createBrowserHistory } from "history";
import { Any } from "../models/index.model";

export default createBrowserHistory() as Any;
