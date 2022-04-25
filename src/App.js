import React, { Component } from 'react'
import {NavBar} from "./ui-components";
import Streams from './Streams'
import Edit from './Edit'
import { Routes, Route } from 'react-router-dom'
import Details from './Details'
import Delete from './Delete'
import AddStream from './AddStream'
import {Flex } from '@aws-amplify/ui-react';

class App extends Component {
  render() {
    return (
      <div className='App'>

      <Routes>
            <Route exact path='/' element={<div><NavBar/><Streams/></div>} />
            <Route exact path='/add' element={<AddStream/>} />
            <Route exact path='/Streams' element={<Streams/>} />
            <Route exact path='/details' element={<Details/>} />
            <Route exact path='/edit/:sid' element={<Edit/>} />
            <Route exact path='/delete/:did' element={<Delete/>} />
          </Routes>

      </div>
  
    )
  } 
 
  
}

export default App