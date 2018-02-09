import React from 'react'
import ReactDOM from 'react-dom'

import './styles.scss'

  const App = () => (
    <div>
      <h1>yeah， react</h1>
      <p>it is {new Date().toLocaleTimeString()}.</p>
    </div>
  )

const rootDiv = document.getElementById('root')
ReactDOM.render(<App />, rootDiv)
