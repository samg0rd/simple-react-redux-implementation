import React from 'react';
import './App.scss';

import {connect} from 'react-redux';
import * as actions from './store/actions/index';

import SimpleSlider from './components/UI/slider/SimpleSlider';


// function App(props) {
class App extends React.Component {  

  incHandler = () => {
    this.props.increment();
  }

  decHandler = () => {    
    this.props.decrement();
  } 

  fetchAlbumsHandler = () => {
    this.props.fetchAlbums()
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">   

          <div className="sliderWrapper">
            <SimpleSlider />
          </div>

          <div className="counter">
            <span className="btn" onClick={this.incHandler}>+</span> <p>{this.props.count}</p> <span className="btn" onClick={this.decHandler}>-</span>
          </div>
          <button onClick={this.fetchAlbumsHandler}>fetch Albums!</button>
          {
            this.props.albums ? this.props.albums.map((el,i) => <p key={i}>{el.title}</p>) : ''
          }
        </header>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    albums: state.albums.albums
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement()),
    fetchAlbums: () => dispatch(actions.fetchAlbums()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
