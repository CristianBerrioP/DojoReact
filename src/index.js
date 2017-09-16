import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {App, NASA} from './App'

ReactDOM.render(<div> <App /> <NASA /> </div>, document.getElementById('root'))

registerServiceWorker()
