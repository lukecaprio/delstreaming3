import React, { Component } from 'react'
import {NavBar} from "./ui-components";
import './App.css';
import { useParams } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import { Streaming7 } from './ui-components';
import { useState, useEffect } from "react";
import { Streaming } from "./models";


class Delete extends Component {
    render(){
        return (<DeleteStream />);
    }
}

    function DeleteStream() {
    const { did } = useParams();
    const [se, DeletePage] = useState(0);
    useEffect(()=>{
      const pullData = async() => {
        const songs = await DataStore.query(Streaming, s => s.id("eq", did));
        console.log(songs);
        DeletePage(songs[0]);
        console.log(songs[0].Song);
        }
        pullData()
      }, []) 
      return (
        <div><p>{did}</p>
          <NavBar/>
          <Streaming7 streaming={se}/>
        </div>
      );
    }

export default Delete

