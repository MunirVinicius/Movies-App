import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovie from './component/navbar';


class Main extends React.Component {
  render(){
    return (
      <div>
        <SearchMovie></SearchMovie>
        <div className="container">
          <h1 className="title">Movie Search</h1>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Main/>, document.getElementById("root"));
