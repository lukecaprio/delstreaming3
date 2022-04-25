import React, { Component } from 'react'
import {NavBar} from "./ui-components";
import './App.css';
import { useParams } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import { Streaming6 } from './ui-components';
import { useState, useEffect } from "react";
import { Streaming } from "./models";

class Edit extends Component {
    render(){
        return (<PutStream />);
    }
}

    function PutStream() {
    const { sid } = useParams();
    const [se, Edit1] = useState(0);
    useEffect(()=>{
      const pullData = async() => {
        const songs = await DataStore.query(Streaming, s => s.id("eq", sid));
        console.log(songs);
        Edit1(songs[0]);
        console.log(songs[0].Song);
        }
        pullData()
      }, []) 
      return (
        <div><p>{sid}</p>
          <NavBar/>
          <Streaming6 streaming={se}/>
        </div>
      );
    }

export default Edit

