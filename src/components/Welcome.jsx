// :copyright: Copyright (c) 2023 ftrack
import { openSidebar } from "@ftrack/web-widget";
import { defaultThumbnail } from "../ftrack_utils.jsx";
import logo_dark from "../assets/ftrack-studio-logo-dark.png";
import logo_light from "../assets/ftrack-studio-logo-light.png";

function Welcome(props) {
  let session = props.session;
  let theme = props.theme;
  let selection = props.selection;
  let logo = theme === "light" ? logo_dark : logo_light;

  function onEntityClick(selection) {
    openSidebar(selection.__entity_type__, selection.id);
  }

  return (
    <div className="welcome">
      <img className="logo" src={logo} />
      <hr />
      <button className="entityButton" onClick={() => onEntityClick(selection)}>
        <b>{selection.name}</b> [{selection.__entity_type__}]
      </button>
      <hr />
      <img src={selection.thumbnail_url.url || defaultThumbnail(session)} />

      <h3>Instance : {session.serverUrl}</h3>
      <h3>Server Version : {session.serverVersion}</h3>
      <h3>Event Hub Connected: {session.eventHub.isConnected().toString()}</h3>
      <h3>
        Server Storage:{" "}
        {session.serverInformation.storage_scenario.data.location_name}
      </h3>
      <h3>User : {session.apiUser}</h3>
      <h3>Theme : {theme}</h3>
      <hr />
      <h3>Application base url : {import.meta.env.BASE_URL}</h3>
      <h3>Application mode : {import.meta.env.MODE}</h3>
    </div>
  );
}

export default Welcome;
