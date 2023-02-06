// :copyright: Copyright (c) 2023 ftrack

function loadStyleSheet(theme){
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = import.meta.env.BASE_URL + 'style-' + theme + '.css';
    // console.log(link)
    head.appendChild(link);
}

function defaultThumbnail(session){
    return `${session.serverUrl}/img/thumbnail2.png`
}

export { loadStyleSheet, defaultThumbnail }