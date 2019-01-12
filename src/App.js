import React, { Component } from 'react';
import './App.css';
import Carousal from './Carousal'

class App extends Component {
  constructor(){
    super();
    this.state = {
      width: "455px",
      height: "350px"
    }
  }
  onSubmit = () =>  {
    this.setState()
  };
  HeightHandler = (e) => {
    this.setState({height: e.target.value + "px"})
  };
  widthHandler = (e) => {
    this.setState({width: e.target.value + "px"})
  };
  render() {
    var userList=[
      {
        "From": "Bangalore",
        "To": "Delhi",
        "Date":"24/1/2019",
        "PNR" : "12367",
        "Mode": "Bus",
        "Purpose": "Tour"

      },
      {
        "From": "Mumbai",
        "To": "Bangalore",
        "Date":"14/2/2019",
        "PNR" : "12367",
        "Mode": "Bus",
        "Purposel": "Tour"

      },
      {
        "From": "Mysure",
        "To": "Patna",
        "Date":"4/3/2019",
        "PNR" : "12367",
        "Mode": "Train",
        "Purpose": "Tour"
      },
      {
        "From": "Mumbai",
        "To": "Delhi",
        "Date":"24/1/2019",
        "PNR" : "12367",
        "Mode": "Bus",
        "Purpose": "Tour"

      },
      {
        "From": "Patna",
        "To": "Manali",
        "Date":"14/2/2019",
        "PNR" : "12367",
        "Mode": "Bus",
        "Purposel": "Tour"

      },
      {
        "From": "Mysure",
        "To": "Kolkata",
        "Date":"4/3/2019",
        "PNR" : "12367",
        "Mode": "Train",
        "Purpose": "Tour"
      }
    ];
   
    return (
      <div className="App" style={{"width": this.state.width, "height": this.state.height}}>
      <Carousal
      userList= {userList}
      height={this.state.height}
      />
      <div>
        <form onSubmit={ this.onSubmit}>
          <div className="input-container">
            Height:
          <input
          placeholder="Height"
          name="name"
          className="input-data"
          onChange={(e) => this.HeightHandler(e)}>
          </input>
          </div>
          <div className="input-container">
            Width :  
          <input
           placeholder="Width"
           className="input-data"
           name="name"
           onChange={(e) => this.widthHandler(e)}
           >
          </input>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default App;
