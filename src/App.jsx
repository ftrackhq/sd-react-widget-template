import {useEffect, useState} from 'react';
import { getEntity  } from "@ftrack/web-widget";
import useSession from "./session_context";
import {SETTINGS} from './config'

import './App.css'


function App() {
  const session = useSession();
  let current_entity = getEntity();

  const [selection, setSelection] = useState(current_entity);


  function onFtrackWidgetUpdate(ftrack_event){
      console.log(`Selection changed to type:  ${ftrack_event.detail.entity.type} with id : ${ftrack_event.detail.entity.id}.`)
      setSelection(ftrack_event.detail.entity)
  }

  useEffect(()=>{
      window.addEventListener('ftrackWidgetUpdate', onFtrackWidgetUpdate);
  }, [session])

}

export default App;

