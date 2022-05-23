/*global kakao*/ 
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import img from '../img/15.jpg';
import './App.css';

function Young2(){
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.581387192133256, 126.92505042549021),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.581387192133256, 126.92505042549021); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div>
          <h1 className="Head">그의 나이 15세</h1>
          <img src={img} className="Img" alt="img" />
          <div className="Map" id="map" style={{width:"300px", height:"280px"}}></div>
          <button className="Back" onClick={handleClick}>이전화면으로</button>
        </div>
    )
}

export default Young2;