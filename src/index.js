import React from "react";
import reactDom from "react-dom";
// import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";

import './index.css'

const divRoot = document.querySelector('#root');

reactDom.render(<CounterApp value={ 10 } />, divRoot);
// reactDom.render(<FirstApp hello="hello, falkry" />, divRoot);