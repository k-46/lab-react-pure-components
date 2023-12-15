import React, { Component } from 'react'
import Counter from './components/Counter'
import PureCounter from './components/PureCounter'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter />
        <hr />
        <PureCounter />
      </div>
    )
  }
}
