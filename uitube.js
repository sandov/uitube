// Create style element where we'll add our custom CSS rules
let style = document.createElement('style');

// Define CSS rule to move recommendations 30vh units down:
const recommendations_selector = 'div#bottom-grid.style-scope.ytd-watch-grid ytd-rich-grid-renderer.style-scope.ytd-watch-grid div#contents.style-scope.ytd-rich-grid-renderer';

const recommendations_declaration = "{margin-top: 30vh;}";

const recommendations_rule = recommendations_selector + " " + recommendations_declaration;

// Add rule to our style element:
style.appendChild(document.createTextNode(recommendations_rule));

// Define CSS rules hide comments:

const comments_default_selector = "html body ytd-app div#content.style-scope.ytd-app ytd-page-manager#page-manager.style-scope.ytd-app ytd-watch-grid.style-scope.ytd-page-manager.hide-skeleton div#fixed-columns-secondary.style-scope.ytd-watch-grid div#secondary.style-scope.ytd-watch-grid div#secondary-inner.style-scope.ytd-watch-grid ytd-comments#comments.style-scope.ytd-watch-grid ytd-item-section-renderer#sections.style-scope.ytd-comments div#contents.style-scope.ytd-item-section-renderer"
const vis_hidden_declaration = "{visibility: hidden;}";
const hide_comments_rule = comments_default_selector + " " + vis_hidden_declaration;
const hide_comments_element = document.createTextNode(hide_comments_rule);
style.appendChild(hide_comments_element);

document.head.appendChild(style);

// Toggle comment visibility:
var see_comments = false;
var comments_title_selector = ".ytd-comments-header-renderer .count-text";

function toggle_comments_visibility() {
    see_comments = !see_comments;
    if (see_comments){
        style.removeChild(hide_comments_element);
    }
    else {
        style.appendChild(hide_comments_element);
    }
}

// Function to add the event listener once the element exists
function addCommentsToggleListener() {
    let comments_title_element = document.querySelector(comments_title_selector);
    if (comments_title_element) {
        comments_title_element.addEventListener('click', toggle_comments_visibility);
    }
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            addCommentsToggleListener();
        }
    }
});

// Start observing the document body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Initial call to add the event listener if the element already exists
addCommentsToggleListener();

