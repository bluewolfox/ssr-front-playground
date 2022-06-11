import { Fragment } from "react";
import { useSelector } from "react-redux";

// Array
import Array from "./study/Array";
import ArrayAPI from "./study/ArrayAPI";

// Redux
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {/* <Array /> */}
      {/* <ArrayAPI /> */}
      <Fragment>
        <Header />
        {!isAuth && <Auth />}
        {isAuth && <UserProfile />}
        <Counter />
      </Fragment>
    </div>
  );
}

export default App;
