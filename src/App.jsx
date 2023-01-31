// :copyright: Copyright (c) 2023 ftrack

import {useEffect, useState} from 'react';
import { getEntity , getActiveTheme } from "@ftrack/web-widget";
import useSession from "./session_context";
import {SETTINGS} from './config'
import logo from './assets/ftrack-studio-logo-dark.png';

import './App.css'


function loadStyleSheet(theme){
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = process.env.PUBLIC_URL+ '/style-' + theme + '.css';
    console.log(link)
    head.appendChild(link);
}

function App() {
  const session = useSession();
  let current_entity = getEntity();
  const theme = getActiveTheme()
  loadStyleSheet(theme)

  const [selection, setSelection] = useState(current_entity);


  function onFtrackWidgetUpdate(ftrack_event){
      console.log(`Selection changed to type:  ${ftrack_event.detail.entity.type} with id : ${ftrack_event.detail.entity.id}.`)
      setSelection(ftrack_event.detail.entity)
  }

  useEffect(()=>{
      window.addEventListener('ftrackWidgetUpdate', onFtrackWidgetUpdate);
  }, [session])


    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default App;

