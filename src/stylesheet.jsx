// :copyright: Copyright (c) 2023 ftrack

function loadStyleSheet(theme){
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/style-' + theme + '.css';
    head.appendChild(link);
}

export default loadStyleSheet