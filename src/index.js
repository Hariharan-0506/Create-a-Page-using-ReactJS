import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
function Mywebsite(){
  return(
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}
ReactDOM.render(<Mywebsite />,document.getElementById("root"));