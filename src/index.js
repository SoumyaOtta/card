/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
<App />,
document.getElementById('root')); */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Card(props){
  console.log(props);
  return(
   <>
    <div className="cards">
      <div className="card ">
        <img src={props.imgsrc} alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="Card__title"> {props.sname} </h3>
          <a 
            href={props.link} tarket="_blank">
            <button> Watch Now </button>
          </a>
        </div>
      </div>
    </div>
   </>
  );
}

ReactDOM.render(<>
    <Card
    imgsrc="https://tse3.mm.bing.net/th?id=OIP.Y10uYGZBxmZ_rZMXHPYW8wHaKe&pid=Api&P=0&h=180"
    title=" A Netflix Original Series "
    sname="DARK"
    link="https://www.netflix.com/in/title/80990668?source=35"
     />
    <Card 
      imgsrc="https://tse3.explicit.bing.net/th?id=OIP.T2cf74kAIabjOisBjmjAAQHaK-&pid=Api&P=0&h=180"
      title=" A Netflix Original Series "
      sname="extra curricular"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
    <Card
    imgsrc="https://tse1.mm.bing.net/th?id=OIP.wjFP7nyzzpnBFq1P8ldxnQHaJQ&pid=Api&P=0&h=180"
    title=" A Netflix Original Series "
    sname="Strainger things"
    link="https://www.netflix.com/in/title/80990668?source=35" />

   <Card 
      imgsrc="https://tse1.mm.bing.net/th?id=OIP.edyQyYfeg5xyE6BzzKbbcAHaLH&pid=Api&P=0&h=180"
      title=" A Netflix Original Series "
      sname="lovesick"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
    <Card 
      imgsrc="https://tse1.mm.bing.net/th?id=OIP.RU26N48EHtnT_3-5xIjSFAHaKY&pid=Api&P=0&h=180"
      title=" A Netflix Original Series "
      sname="Sweet Tooth"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
  </>,
  document.getElementById('root'));