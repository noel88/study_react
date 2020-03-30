import React from 'react';
import {Link, Route} from 'react-router-dom';
import Home from "./screens/Home";
import About from "./screens/About";
import Profile from "./screens/Profile";
import Profiles from "./screens/Profiles";
import HistorySample from "./screens/HistorySample";

function App() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">홈</Link>
            </li>
            <li>
                <Link to="/about">소개</Link>
            </li>
            <li>
                <Link to="/profiles">프로필</Link>
            </li>
            <li>
                <Link to="/profile/velopert">velopert 프로필</Link>
            </li>
            <li>
                <Link to="/profile/gildong">gildong 프로필</Link>
            </li>
            <li>
                <Link to="/history">History 예제</Link>
            </li>
        </ul>
        <hr />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About}/>
      <Route path="/profile/:username" component={Profile}/>
      <Route path="/profiles" component={Profiles}/>
      <Route path="/history" component={HistorySample}/>
    </div>
  );
}

export default App;
