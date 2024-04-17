// CSS rule to move recommendations 25vh units down:

let style = document.createElement('style');

const recommendations_selector = 'html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch-grid.style-scope.ytd-page-manager.hide-skeleton div#columns.style-scope.ytd-watch-grid div#primary.style-scope.ytd-watch-grid div#primary-inner.style-scope.ytd-watch-grid div#below.style-scope.ytd-watch-grid div#bottom-grid.style-scope.ytd-watch-grid ytd-rich-grid-renderer.style-scope.ytd-watch-grid div#contents.style-scope.ytd-rich-grid-renderer';

const recommendations_declaration = "{margin-top: 25vh;}";

const recommendations_rule = recommendations_selector + " " + recommendations_declaration;

// CSS rule to hide comments:

const comments_selector = "html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch-grid.style-scope.ytd-page-manager.hide-skeleton div#columns.style-scope.ytd-watch-grid div#secondary.style-scope.ytd-watch-grid div#secondary-inner.style-scope.ytd-watch-grid ytd-comments#comments.style-scope.ytd-watch-grid ytd-item-section-renderer#sections.style-scope.ytd-comments div#contents.style-scope.ytd-item-section-renderer"

const comments_declaration = "{visibility: hidden;}"

const comments_rule = comments_selector + " " + comments_declaration;

// Add rules to the DOM:

style.appendChild(document.createTextNode(recommendations_rule));
style.appendChild(document.createTextNode(comments_rule));

document.head.appendChild(style);

