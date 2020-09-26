import React, { Component } from 'react';

import './App.css';
import 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Product from './components/Product.js'
import Category from './components/Category.js'


class App extends Component {

  constructor() {
    super();
    this.state = {
        data : [{
                    id: 1,
                    image : "https://i.imgur.com/q7N4fWv.jpg",
                    price : "Starting from INR 550*",
                    name : "J-20200718_163609",
                    gender: "F",
                    category: "J"
                },
                {
                    id: 2,
                    image : "https://i.imgur.com/R0KicUF.jpg",
                    price : "Starting from INR 450*",
                    name : "J-20200718_164349_1",
                    gender: "F",
                    category: "J"
                },
                {
                    id: 3,
                    image : "https://i.imgur.com/jKbn9I4.jpg",
                    price : "Starting from INR 600*",
                    name : "J-20200718_155844_1",
                    gender: "F",
                    category: "J"
                },
                {
                    id: 4,
                    image : "https://i.imgur.com/uvm5oFy.jpg",
                    price : "Starting from INR 450*",
                    name : "J-20200718_151221",
                    gender: "F",
                    category: "J"
                },
                {   id: 5,
                    image : "https://i.imgur.com/Lex4OV4.jpg",
                    price : "Starting from INR 700*",
                    name : "J-20200718_163551_1",
                    gender: "F",
                    category: "J"
                },
                {   id: 6,
                    image : "https://i.imgur.com/BBJkSeP.jpg",
                    price : "Starting from INR 600*",
                    name : "J-20200718_150841",
                    gender: "M",
                    category: "J"
                }
                ]
    
   }
  }
  render() {
    return (
      <div style={{backgroundColor: "azure"}}>
        <Header />
       {/* <Category />*/}
       { this.state.data.map(product => <Product key={product.id} data={product} />) }  
        <Footer />
      </div>
    );
  }
}

export default App;
