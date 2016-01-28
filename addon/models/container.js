/*
 * There are significant differences between browsers
 * in how they implement "scroll" on document.body
 *
 * The only cross-browser listener for scroll on body
 * is to listen on window with capture.
 *
 * They also implement different standards for how to
 * access the scroll position.
 *
 * This class provides a cross-browser way to access
 * the scrollTop and scrollLeft properties.
 *
 */
export default function Container() {
  Object.defineProperty(this, 'scrollTop', {
    get: function() {
      return window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;
    },
    set: function(v) {
      return window.scrollY =
        window.pageYOffset =
          document.body.scrollTop =
            document.documentElement.scrollTop = v;
    }
  });
  Object.defineProperty(this, 'scrollLeft', {
    get: function() {
      return window.scrollX ||
        window.pageXOffset ||
        document.body.scrollLeft ||
        document.documentElement.scrollLeft;
    },
    set: function(v) {
      return window.scrollX =
        window.pageXOffset =
          document.body.scrollLeft =
            document.documentElement.scrollLeft = v;
    }
  });
}
