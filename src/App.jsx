// :copyright: Copyright (c) 2023 ftrack

import {useEffect, useState} from 'react';
import { getEntity , getActiveTheme } from "@ftrack/web-widget";
import useSession from "./session_context";
import {SETTINGS} from './config'
import logo from './assets/ftrack-studio-logo-dark.png';
import { ThreeCircles } from  'react-loader-spinner'

import './App.css'
import Welcome from './components/Welcome.jsx'

function loadStyleSheet(theme){
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/style-' + theme + '.css';
    console.log(link)
    head.appendChild(link);
}

function App() {
  const session = useSession();
  let current_entity = getEntity();
  const theme = getActiveTheme()
  loadStyleSheet(theme)

  const [selection, setSelection] = useState(current_entity);
  const [isLoading, setIsLoading] = useState(false);


  function onFtrackWidgetUpdate(ftrack_event){
      console.log(`Selection changed to type:  ${ftrack_event.detail.entity.type} with id : ${ftrack_event.detail.entity.id}.`)
      setSelection(ftrack_event.detail.entity)
  }

  useEffect(()=>{
      setIsLoading(true)
      window.addEventListener('ftrackWidgetUpdate', onFtrackWidgetUpdate);
      setIsLoading(false)
  }, [session, selection])

    const render_widget = (
        <div>
            <Welcome session={session} theme={theme} selection={selection} logo={logo}/>
        </div>
    )

    return (
        <div>
          {isLoading ? <ThreeCircles
              height="250"
              width="250"
              color="#935ba2"
              wrapperStyle={{}}
              wrapperClass="spinner"
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            /> : render_widget}
        </div>
    )
}

export default App;

