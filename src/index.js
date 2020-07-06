import panic from 'panic-overlay'
panic.configure ({ projectRoot: '/Users/new/Documents/reactpizza' })

import React from 'react'
import ReactDOM from 'react-dom'

import './reset.css'
import './loading.css'
import './index.css'

import App from './App'

ReactDOM.render (<App />, document.getElementById ('root'))