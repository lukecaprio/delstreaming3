import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { StreamingTHREE } from './ui-components';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import Streams from './Streams'
Amplify.configure(awsconfig);

class Header extends Component {
  render() {
    return (
      <div className="flex pa1 justify-between nowrap orange">
<div className="flex flex-fixed black">
  <div className="fw7 mr1">Spotify Streaming</div>
  <Streams to="/users" className="ml1 no-underline black">
    users
  </Streams>
  <div className="ml1">|</div>
  <Streams to="/" className="ml1 no-underline black">
    new
  </Streams>
  <div className="ml1">|</div>
  <Streams to="/top" className="ml1 no-underline black">
  top
</Streams>
<div className="ml1">|</div>
  <Streams to="/search" className="ml1 no-underline black">
    search
  </Streams>
  
    <div className="flex">
      <div className="ml1">|</div>
      <Streams to="/stream" className="ml1 no-underline black">
        streaming page |
      </Streams>
    </div>
  )
</div>

        <div className="flex flex-fixed">

            <div
              className="ml1 pointer black"
              onClick={() => {
                this.props.history.push(`/`)
              }}
            >
              logout
            </div>
          ) : (
            <Streams to="/login" className="ml1 no-underline black">
              login
            </Streams>
          
        </div>
      </div>
    )
  }  
}

export default Header