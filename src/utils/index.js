export function debounce(func, ms) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
  }

export 	function getURLParam( name ) {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  return  urlParams.get(name);
}