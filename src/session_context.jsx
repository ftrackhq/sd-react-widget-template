import { createContext, useContext } from "react";

const SessionContext = createContext(null);

export const SessionProvider = SessionContext.Provider;

// useSession will contain our session object when
// SessionProvider is initialized. We will make sure SessionProvider
// is initialized before useSession is called.
function useSession() {
  return useContext(SessionContext);
}

export default useSession;
