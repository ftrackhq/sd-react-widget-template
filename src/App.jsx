// :copyright: Copyright (c) 2023 ftrack

import { useEffect, useState } from "react";
import { getActiveTheme } from "@ftrack/web-widget";
import useSession from "./session_context";
import { SETTINGS } from "./config";

import { ThreeCircles } from "react-loader-spinner";
import {
  defaultThumbnail,
  loadStyleSheet,
  isOverview,
} from "./ftrack_utils.jsx";
import Welcome from "./components/Welcome.jsx";

import "./App.css";


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
  let is_overview = isOverview();

  if (is_overview) {
    return (
      <h1 className="warning">
        Please install this widget as project dashboard
      </h1>
    );
  }

  let session = useSession();
  let theme = getActiveTheme();

  loadStyleSheet(theme);

  const [selection, setSelection] = useState({
    thumbnail_url: defaultThumbnail(session),
    id: "",
    __entity_type__: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function onFtrackWidgetUpdate(ftrack_event) {
    let entity_query = `select thumbnail_url, name, id \
        from ${ftrack_event.detail.entity.type} where id is ${ftrack_event.detail.entity.id}`;

    session.query(entity_query).then((entity) => {
      const f_entity = entity.data[0];
      setSelection(f_entity);
    });
  }

  useEffect(() => {
    setIsLoading(true);
    window.addEventListener("ftrackWidgetUpdate", onFtrackWidgetUpdate);

    // FOR SPINNER DEMO PURPOSES ONLY
    sleep(SETTINGS.spinner_timeout).then(() => {
      setIsLoading(false);
    });
  }, [session]);

  let render_widget = (
    <div>
      <Welcome session={session} theme={theme} selection={selection} />
    </div>
  );

  return (
    <div>
      {isLoading ? (
        <ThreeCircles
          height="125"
          width="125"
          color="#935ba2"
          wrapperStyle={{}}
          wrapperClass="spinner"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      ) : (
        render_widget
      )}
    </div>
  );
}

export default App;
