import {useParams} from "react-router-dom";

interface RouteParams {
  coinId: string;
}

function Coin() {
  const {coinId} = useParams<RouteParams>();
  return (
    <div>
      <h1>Coin {coinId}</h1>
    </div>
  )
}


export default Coin;


