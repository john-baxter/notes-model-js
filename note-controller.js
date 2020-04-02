(function(exports) {
  // This function has been superceeded and is no longer included in the "exports"
  function ListIsOnWebsite(htmlConversion) {
    document.getElementById("app").innerHTML = htmlConversion

  }
  function ShowTruncatedNotes(showTruncatedNotes) {
    document.getElementById("app").innerHTML = showTruncatedNotes
  }

  // exports.ListIsOnWebsite = ListIsOnWebsite
  exports.ShowTruncatedNotes = ShowTruncatedNotes
})(this)
