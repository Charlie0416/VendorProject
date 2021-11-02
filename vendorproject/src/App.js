import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './layout/Header';
import Body from './layout/Body';
import Menu from './layout/Menu';
import Login from './layout/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageContext, PAGES, PageSetter } from "./hooks/usePage";
function App() {
  const [isLogin,setIsLogin]=useState(false);
  const checkLogin = React.createContext(isLogin);
  const [page, setPage] = useState(PAGES.CUSTOMER);
  const user={ account:"123",password:"123",name:"789",id:"1231234561"}
  useEffect(()=>{ 
    axios.get("https://140.135.113.18/23:8000/api/users")
    .then(response => {
  
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    })
  
},[])
  return (
    <>
      <div>
      <checkLogin.Provider value={isLogin}>
      <PageSetter.Provider value={setPage}>
       
          <Header />
          <Menu user={user} setIsLogin={setIsLogin}/>
          <PageContext.Provider value={page}>
          <Body/>
        </PageContext.Provider>
      </PageSetter.Provider>
      </checkLogin.Provider>
     
      </div>
    </>
  );
}

export default App;
