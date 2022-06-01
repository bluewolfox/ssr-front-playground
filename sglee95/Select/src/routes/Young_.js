/*global kakao*/
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './App.css';
import data from './data_';
import img7 from 'img/7.jpg';
import img15 from 'img/15.jpg';
import img26 from 'img/26.jpg';
import img28 from 'img/28.gif';

function Young() {
  let navigate = useNavigate();
  let { id } = useParams();

  const item = data[id];
  useEffect(() => {
    if (!item) return; // 잘못된 경로로 왔을 경우
    // var 대신 const or let 쓰기
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(item.LatLngX, item.LatLngY),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(item.LatLngX, item.LatLngY);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  // 잘못된 경로로 왔을 경우 안내 메세지
  if (!item) return <>페이지를 찾을 수 없습니다.</>;
  // item은 밑에 형식
  // {
  //   year: 2001,
  //   title: '그의 나이 7세',
  //   LatLngX: 37.5843,
  //   LatLngY: 126.9224,
  //   age: 7,
  //   label: '어',
  // }

  function handleClick() {
    navigate('/');
  }

  // 이미지 경로 넣기
  let imgUrl = '';
  switch (item.age) {
    case 7:
      imgUrl = img7;
      break;
    case 15:
      imgUrl = img15;
      break;
    case 26:
      imgUrl = img26;
      break;
    case 28:
      imgUrl = img28;
      break;
    default:
      break;
  }

  return (
    <div>
      <h1 className="Head">{item.title}</h1>
      <img src={imgUrl} className="Img" alt="img" />
      <div
        className="Map"
        id="map"
        style={{ width: '300px', height: '280px' }}
      />
      <button className="Back" onClick={handleClick}>
        이전화면으로
      </button>
    </div>
  );
}

export default Young;
