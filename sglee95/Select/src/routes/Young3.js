import { useNavigate } from "react-router-dom";
import img from '../img/24.jpg';
import face from '../img/face.jpg';

function Young3()  {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <h1 className="Head">그의 나이 24세</h1>
      <img src={img} className="Img" alt="img" />
      <img src={face} className="Img" alt="img" />
      <button className="Back" onClick={handleClick}>이전화면으로</button>
    </div>
  );
}

export default Young3;