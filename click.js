/**
 * Attach click event handler.
 * @param {EventTarget} target
 * @param {function} handler
 */
function click(target, handler) {
    target.addEventListener("click", function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        handler.call(this);
    });
}

module.exports = click;

