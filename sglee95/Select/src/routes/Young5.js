/*global kakao*/ 
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import img from '../img/28.gif';
import './App.css';

function Young5(){
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.48275936584787, 126.89827101185179),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.48275936584787, 126.89827101185179); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div>
          <h1 className="Head">그의 나이 28세</h1>
          <img src={img} className="Img" alt="img" />
          <div className="Map" id="map" style={{width:"300px", height:"280px"}}></div>
          <button className="Back" onClick={handleClick}>이전화면으로</button>
        </div>
    )
}

export default Young5;