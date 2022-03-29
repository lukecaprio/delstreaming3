import logo from './logo.svg';
import './App.css';
import { StreamingTHREE } from './ui-components';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <AmplifyProvider>
    <div className="App">
      <h1>StreamingTHREE</h1>

        <p>
          <StreamingTHREE/>
        </p>
    </div>
    </AmplifyProvider>
  );
  
}


export default App;
