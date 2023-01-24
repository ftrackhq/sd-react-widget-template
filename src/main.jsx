import React from 'react';
import { Session } from "@ftrack/api";
import { SessionProvider } from "./session_context";
import { initialize, getCredentials  } from "@ftrack/web-widget";

import ReactDOM from 'react-dom/client';
import App from './App';


function onWidgetLoad() {
  const credentials = getCredentials();

  const session = new Session(
    credentials.serverUrl,
    credentials.apiUser,
    credentials.apiKey,
    {
      autoConnectEventHub: true,
    }
  );

  session.initializing
    .then(() => {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <SessionProvider value={session}>
          <App />
        </SessionProvider>
      );
    })
    .catch((response) => {
      throw new Error(
        "Could not set up API session. (is the ftrack server running?)\n\n" +
          response
      );
    });
}

function onDomContentLoaded() {
  initialize({
    onWidgetLoad: onWidgetLoad,
  });
}

window.addEventListener("DOMContentLoaded", onDomContentLoaded);


