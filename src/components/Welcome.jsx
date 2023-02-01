// :copyright: Copyright (c) 2023 ftrack

function Welcome(props) {
    const session = props.session
    const theme = props.theme
    const selection = props.selection
    const logo = props.logo

    return (
        <div className="welcome">
            <img src={logo} />
            <h3>Theme : {theme}</h3>
            <h3>Selection : {selection.__entity_type__} : {selection.id} </h3>
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