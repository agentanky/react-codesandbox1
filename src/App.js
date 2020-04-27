import React from 'react';
import HelloWorld from './HelloWorld'
import reducer from './reducers'
import {createStore} from 'redux'

const initialState = {tech: "react"}
const store = createStore(reducer, initialState)

function App() {
  return (
    <div className="App">
      <HelloWorld tech ={store.getState().tech} />
    </div>
  );
}

export default App;
