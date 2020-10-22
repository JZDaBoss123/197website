import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/components/App'
 

const store = createStore(rootReducer)

ReactDOM.render(<App/>, document.getElementById('react-root'))