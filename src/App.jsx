// :copyright: Copyright (c) 2023 ftrack

import {useEffect, useState} from 'react';
import { getEntity , getActiveTheme } from "@ftrack/web-widget";
import useSession from "./session_context";
import {SETTINGS} from './config'
import logo_dark from './assets/ftrack-studio-logo-dark.png';
import logo_light from './assets/ftrack-studio-logo-light.png';

import { ThreeCircles } from  'react-loader-spinner'
import {defaultThumbnail, loadStyleSheet, isOverview} from "./ftrack_utils.jsx";
import Welcome from './components/Welcome.jsx'

import './App.css'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function App() {
  const is_overview = isOverview()
  if (is_overview){
      return <h1 className="warning">Please install this widget as project dashboard</h1>
  }

  const session = useSession();
  let current_entity = getEntity();
  const theme = getActiveTheme()
  const logo = ((theme === 'light') ? logo_dark : logo_light)

  loadStyleSheet(theme)

  const [selection, setSelection] = useState({thumbnail_url:defaultThumbnail(session), id:'', __entity_type__:''});
  const [isLoading, setLoading] = useState(false);

  function onFtrackWidgetUpdate(ftrack_event){
      console.log(ftrack_event)
      const entity_query = `select thumbnail_url, name, id from ${ftrack_event.detail.entity.type} where id is ${ftrack_event.detail.entity.id}`
      session.query(entity_query).then((entity)=>{
          const f_entity = entity.data[0]
          setSelection(f_entity)
      })

  }

  useEffect(()=>{
      setLoading(true)
      window.addEventListener('ftrackWidgetUpdate', onFtrackWidgetUpdate);

      // FOR SPINNER DEMO PURPOSES ONLY
      sleep(SETTINGS.spinner_timeout).then(() => {
          setLoading(false);
      });

  }, [session])

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

