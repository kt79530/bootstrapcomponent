
import ReactDOM from 'react-dom/client';
//라우터 선언
import{BrowserRouter, Routes, Route} from 'react-router-dom';
//부트스트랩을 사용하기 위한 cdn 선언
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './include/Header';
import Home from './pages/Home';
import Cont from './pages/Cont';
import Typo from './pages/Typo';
import Color from './pages/Color';
import Table from './pages/Table';
import Img from './pages/Img';
import Jumbo from './pages/Jumbo';
import Alerts from './pages/Alerts';
import Btn from './pages/Btn';
import Badges from './pages/Badges';
import Progress from './pages/progress';
import Cards from './pages/Cards';
import Layer from './pages/Layer';
import Toastm from './pages/Toastm';


export default  function App(){
    return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}>{/*헤더*/}
            <Route index element={<Home/>}/>{/*body*/}
            <Route path="container" element={<Cont/>}/>
            <Route path="typo" element={<Typo/>}/>
            <Route path="color" element={<Color/>}/>
            <Route path="table" element={<Table/>}/>
            <Route path="img" element={<Img/>}/>
            <Route path="jumbo" element={<Jumbo/>}/>
            <Route path="alerts" element={<Alerts/>}/>
            <Route path="btn" element={<Btn/>}/>
            <Route path="badges" element={<Badges/>}/>
            <Route path="progress" element={<Progress/>}/>
            <Route path="cards" element={<Cards/>}/>
            <Route path="layer" element={<Layer/>}/>
            <Route path="toastm" element={<Toastm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);
/* 위의 이 문법은 리액트 18버젼부터*/

