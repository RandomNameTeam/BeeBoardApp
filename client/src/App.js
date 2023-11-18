import './reset.sass'
import './App.sass'
import MyLeftNavBar from './components/leftNavBar/MyLeftNavBar';
import MyUserName from './components/ui/userName/MyUserName';
import MainPage from './components/pages/mainPage/MainPage';
import MySmallCard from './components/ui/smallCard/MySmallCard';
import { Routes, Route } from 'react-router-dom';
import CreateOrder from './components/pages/createOrder/CreateOrder';
import CreateOrder2 from './components/pages/createOrder/CreateOrder2';
import CreateOrder3 from './components/pages/createOrder/CreateOrder3';
import CreateOrder4 from './components/pages/createOrder/CreateOrder4';
import SearchClient from './components/pages/searchClient/SearchClient';
import MyBee from './components/ui/beeImg/MyBee';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div className="App">
      <MyLeftNavBar/>
      <Routes>
        <Route path="/"
          element={<MainPage/>}
          />
          <Route path="/user"
          element={<CreateOrder/>}
          />
          <Route path="/order"
          element={<SearchClient/>}
          />
          <Route path="/create2"
          element={<CreateOrder2/>}
          >
          </Route>
          <Route path="/create3"
          element={<CreateOrder3/>}
          >
          </Route>
          <Route path="/create4"
          element={<CreateOrder4/>}
          >
          </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
