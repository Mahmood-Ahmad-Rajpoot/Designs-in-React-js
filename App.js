import React, { Component } from "react";
import './App.css';
import Nav from "./Components/Home/Nav.js";
import FirstComponent from './Components/Home/FirstComponent.js';
import SecondComponent from "./Components/Home/SecondComponent";
import ThirdComponent from './Components/Home/ThirdComponent.js';
import FourthComponent from './Components/Home/FourthComponent.js';
import NavMobile from "./Components/Home/NavMobile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavMobile: false,

    };
  }
  NavMobileFunc = () => {
    // e.preventDefault();
    if (this.state.isNavMobile === false) {
      this.setState({ isNavMobile: true });
      console.log(true);

    }
    else{
      this.setState({ isNavMobile: false });
      console.log(false);

    }


  }


  render() {

    return (
      <div>




        {

          (this.state.isNavMobile
            ?
            <NavMobile NavMobile={this.NavMobileFunc} />
            :
            <>
              <Nav NavMobile={this.NavMobileFunc} />
              <FirstComponent />
              <SecondComponent />
              <ThirdComponent />
              <FourthComponent />
            </>
          )
        }







      </div>
    );



  }
}
export default App;