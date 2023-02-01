// :copyright: Copyright (c) 2023 ftrack
import { openSidebar } from "@ftrack/web-widget";

function Welcome(props) {
    const session = props.session
    const theme = props.theme
    const selection = props.selection
    const logo = props.logo

    function onEntityClick(selection) {
        openSidebar(selection.__entity_type__, selection.id)
    }

    return (
        <div className="welcome">
            <img className="logo" src={logo} />
            <h2 onClick={() => onEntityClick(selection)}> {selection.name}[{selection.__entity_type__}] with id {selection.id}</h2>
            <h3>Theme : {theme}</h3>
            <hr/>
            <h3>Instance : {session.serverUrl}</h3>
            <h3>Server Version : {session.serverVersion }</h3>
            <h3>User : {session.apiUser}</h3>
            <hr/>
            <h3>BASE_URL : {import.meta.env.BASE_URL}</h3>
        </div>
    )
}

export default Welcome;