import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {fetchCoins} from "../api";
import {Helmet} from "react-helmet";
import {useSetRecoilState} from "recoil";
import {isDarkAtom} from "../atoms";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    padding: 20px;
    transition: color 0.2s ease-in;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor}
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor}
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;


interface CoinInterface {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string
}


interface IConinsProps {
  toggleDark: () => void;
}

// function Coins({toggleDark}: IConinsProps) {
function Coins() {
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // //https://api.coinpaprika.com/v1/coins
  // //https://cryptoicon-api.vercel.app/api/icon/btc
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100))
  //     setLoading(false);
  //   })();
  // }, []);

  const {isLoading, data} = useQuery<CoinInterface[]>("allCoins", fetchCoins)
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom(prev => !prev);
  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
        {/*<button onClick={toggleDark}>Toggle Dark Mode</button>*/}
        <button onClick={toggleDarkAtom}>Toggle Mode</button>
      </Header>
      {isLoading ? <Loader>Loading ..</Loader> : (
        <CoinsList>
          {data?.slice(0,10).map((coin) =>
            <Coin key={coin.id}>
              <Link to={{
                pathname: `/${coin.id}`,
                state: { name: coin.name }
              }}>
                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                {coin.name} &rarr;
              </Link>
            </Coin>
          )}
        </CoinsList>
      )}
    </Container>
  )
}


export default Coins;


