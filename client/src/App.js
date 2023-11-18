import './reset.sass'
import './App.sass'
import MyLeftNavBar from './components/leftNavBar/MyLeftNavBar';
import MyUserName from './components/ui/userName/MyUserName';
import MainPage from './components/pages/mainPage/MainPage';
import MySmallCard from './components/ui/smallCard/MySmallCard';
import { Routes, Route } from 'react-router-dom';
import CreateOrder from './components/pages/createOrder/CreateOrder';
import SearchClient from './components/pages/searchClient/SearchClient';
import MyBee from './components/ui/beeImg/MyBee';

function App() {
  return (
    <div className="App">
      <MyLeftNavBar/>
      <MyBee/>
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
      </Routes>
    </div>
  );
}

export default App;
