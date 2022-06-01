import { useNavigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import logo from '../img/logo.gif';
import data from './data_';

function Home() {
  let navigate = useNavigate();
  // const homes = ['어', '디', '든', '문'];
  // const homeList = homes.map((home, index) => (
  //   <button
  //     key={home} // key에 index를 넣는 방식은 지양함 => 항목의 순서가 바뀔 수 있는 경우 key에 인덱스를 사용하는 것은 권장하지 않습니다. 이로 인해 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 발생할 수 있습니다.(https://ko.reactjs.org/docs/lists-and-keys.html)
  //     onClick={() => {
  //       navigate(`/${index}`);
  //     }}
  //   >
  //     {home}
  //   </button>
  // ));

  const homeList = Object.keys(data).map((key) => {
    return (
      <button
        key={key}
        onClick={() => {
          navigate(`/${key}`);
        }}
      >
        {data[key].label}
      </button>
    );
  });

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <select onChange={(e) => navigate(e.target.value)}>
        <option value="">골라주세요</option>
        {Object.keys(data).map((key, idx) => {
          return <option key={key} value={key}>{`${data[key].age}살`}</option>;
        })}
      </select>
      <hr />
      {/* <p>{selects}</p> */}
      {homeList}
      <button
        onClick={() => {
          navigate(`/5000`);
        }}
      >
        잘못된 버튼
      </button>
    </div>
  );
}

export default Home;
