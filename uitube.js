let style = document.createElement('style');

const selectors = [
    'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch-grid.style-scope.ytd-page-manager.hide-skeleton div#columns.style-scope.ytd-watch-grid div#primary.style-scope.ytd-watch-grid div#primary-inner.style-scope.ytd-watch-grid div#below.style-scope.ytd-watch-grid div#bottom-grid.style-scope.ytd-watch-grid ytd-rich-grid-renderer.style-scope.ytd-watch-grid div#contents.style-scope.ytd-rich-grid-renderer',
];

const declaration = "{margin-top: 25vh;}";

const rule = selectors.join(', ') + declaration;

style.appendChild(document.createTextNode(rule));

document.head.appendChild(style);


