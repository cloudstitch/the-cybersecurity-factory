var fbref = new Firebase("https://burning-fire-949.firebaseio.com/");
var thisVisit = fbref.push({});
var updateVisit = function() {

}
function setAttempt() {

}
function logFirebase() {
  var e = $(this);
  thisVisit.child(e.attr('name')).set(e.val(), setAttempt);  
  thisVisit.child('allpeople').set($('#allpeople').html(), setAttempt);
}

$(function() {
  $('input, textarea').on('blur', logFirebase);
})
