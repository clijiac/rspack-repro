import './render.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

export function render() {
    ReactDOM.createRoot(document.getElementsByTagName('body')[0]).render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
