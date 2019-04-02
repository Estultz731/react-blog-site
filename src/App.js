import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () => 
(<nav>
  <a className="left" href="#blog">Acme Blog Site</a>
  <a className="right" href="#contact">Contact</a>
  <a className="right" href="#social">Social</a>
</nav>
)

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><h2>Lorem</h2></div>
                <div className="bottom"><img className="picture" src="./images/authors.jpg" /></div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><h2>Ipsum</h2></div>
                <div className="bottom"><img className="picture" src="./images/bookreviews.jpg" /></div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><h2>Nunc</h2></div>
                <div className="bottom"><img className="picture" src="./images/library.jpg" /></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
