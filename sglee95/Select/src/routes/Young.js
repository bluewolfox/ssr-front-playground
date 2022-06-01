/*global kakao*/
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function Young(props) {
  let navigate = useNavigate();
  let { id } = useParams();
  // 여기 이미지 어떻게 import 하는지 알려주셨는데 다시 알려주시면 감사하겠습니다.//
  const imgUrl =
    "https://github.com/magmom95/interex/blob/main/" +
    props.test[id].String +
    ".jpg?raw=true";
  function handleClick() {
    navigate("/");
  }
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(
        props.test[id].LatLngX,
        props.test[id].LatLngY
      ),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      props.test[id].LatLngX,
      props.test[id].LatLngY
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <h1 className="Head">{props.test[id].title}</h1>
      <img src={imgUrl} className="Img" alt="img" />
      <div
        className="Map"
        id="map"
        style={{ width: "300px", height: "280px" }}
      ></div>
      <button className="Back" onClick={handleClick}>
        이전화면으로
      </button>
    </div>
  );
}

export default Young;
