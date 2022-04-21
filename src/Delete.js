import React, { Component } from 'react'
import {NavBar} from "./ui-components";
import logo from './logo.svg';
import './App.css';
import { DeletePage } from './ui-components';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


class Streams extends Component {
    render() {
        return (
          <AmplifyProvider>
          <div className="App">
          
              <p>
              <NavBar/>
                <DeletePage/>
              </p>
          </div>
          </AmplifyProvider>
        );
        
      }
      
}

  

export default Streams