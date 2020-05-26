import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import * as CounterActions from "./reducers/counter"

function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  console.log("counter", counter)

  function _handleIncrement() {
    dispatch(CounterActions.increment("Click A"))
  }

  function _handleDecrement() {
    console.log(" in here ")
    dispatch(CounterActions.decrement("Click B"))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <p>ตัวเลขปัจจุบันคือ {counter.number}</p>
        <p>ปุ่มที่กดล่าสุด {counter.clickOn}</p>
        <div>
          <button onClick={() => _handleIncrement()}>เพิ่ม</button>
          <button onClick={() => _handleDecrement()}>ลบ</button>
        </div>
      </header>
    </div>
  );
}

export default App;
