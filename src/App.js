import React, { Component } from 'react';
import './App.css';
import Mean from './Mean';

const api_key='Oar732qIkwoe5t2KuFpk54mZgnEwJpHv';

class App extends Component {
  state={
    mean:'',
    count:10
  }
  meanchange = (e) => {
    const mean=e.target.value;
    this.setState(()=>({
      mean
    }))
  }
  countchange = (e) =>{
    const count=e.target.value;
    this.setState(()=>({
      count
    }))
  }
  getgiphy= async (e) => {
    e.preventDefault();
    const mean=e.target[0].value;
    const count=e.target[1].value;
    console.log(count);
    let api_call=await fetch(`http://api.giphy.com/v1/gifs/search?q=${mean}&api_key=${api_key}&limit=${count}`);
    const data=await api_call.json();
    this.setState(()=>{
      const r=[];
      for(let i=0;i<count;i++){
        r.push(data.data[i].images.original_mp4.mp4)
      }
      return {
        gifs:r
      }
    })
   
  }
  render() {
    return (
      <div>
        <h1>Giphy</h1>
        <form onSubmit={this.getgiphy}>
          <input type='text' value={this.state.mean} onChange={this.meanchange} placeholder='what u want to search' ></input>
          <input type='range' min='0' max='50' step='10' value={this.state.count} onChange={this.countchange} ></input>
          <button>Search!!</button>
        </form>
        <button>Randomize</button>
        <button>Select on</button>
        <button>Reverse order</button>
        <button>Clear All</button>
        {this.state.gifs &&  this.state.gifs.map((item)=>{ return <Mean image={item}/>})}
      </div>
    );
  }
}

export default App;
