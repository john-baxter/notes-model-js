(function(exports) {
  function ListIsOnWebsite(htmlConversion) {
    document.getElementById("app").innerHTML = htmlConversion

  }
  function ShowTruncatedNotes(showTruncatedNotes) {
    document.getElementById("app").innerHTML = showTruncatedNotes
  }

  // exports.ListIsOnWebsite = ListIsOnWebsite
  exports.ShowTruncatedNotes = ShowTruncatedNotes
})(this)
