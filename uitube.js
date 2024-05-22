// Create style element where we'll add our custom CSS rules
let style = document.createElement('style');

// Define CSS rule to move recommendations 25vh units down:
const recommendations_selector = 'div#bottom-grid.style-scope.ytd-watch-grid ytd-rich-grid-renderer.style-scope.ytd-watch-grid div#contents.style-scope.ytd-rich-grid-renderer';

const recommendations_declaration = "{margin-top: 25vh;}";

const recommendations_rule = recommendations_selector + " " + recommendations_declaration;

// Add rule to our style element:
style.appendChild(document.createTextNode(recommendations_rule));

// Define CSS rules hide comments:

const comments_default_selector = "html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch-grid.style-scope.ytd-page-manager.hide-skeleton div#fixed-columns-secondary.style-scope.ytd-watch-grid div#secondary.style-scope.ytd-watch-grid div#secondary-inner.style-scope.ytd-watch-grid ytd-comments#comments.style-scope.ytd-watch-grid ytd-item-section-renderer#sections.style-scope.ytd-comments div#contents.style-scope.ytd-item-section-renderer"
const vis_hidden_declaration = "{visibility: hidden;}";
const hide_comments_rule = comments_default_selector + " " + vis_hidden_declaration;
style.appendChild(document.createTextNode(hide_comments_rule));

document.head.appendChild(style);
