import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovie from './component/navbar';


class Main extends React.Component {
  render(){
    return (
      <div>
        <SearchMovie></SearchMovie>
      </div>
    );
  }
}


ReactDOM.render(<Main/>, document.getElementById("root"));
