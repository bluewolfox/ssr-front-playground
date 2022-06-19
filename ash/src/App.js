import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

// Array
import Array from "./study/Array";
import ArrayAPI from "./study/ArrayAPI";

// Redux
import Header from "./redux-components/Header";
import Auth from "./redux-components/Auth";
import Counter from "./redux-components/Counter";
import UserProfile from "./redux-components/UserProfile";

// ContextAPI
import Page from "./context-components/Page";
import { ThemContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      {/* <Array /> */}
      {/* <ArrayAPI /> */}
      {/* <Fragment>
        <Header />
        {!isAuth && <Auth />}
        {isAuth && <UserProfile />}
        <Counter />
      </Fragment> */}
      <UserContext.Provider value={"사용자"}>
        <ThemContext.Provider value={{ isDark, setIsDark }}>
          <Page />
        </ThemContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
