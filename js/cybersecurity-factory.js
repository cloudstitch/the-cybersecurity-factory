function preSignupSuccess(form, intoList, relation) {
  CTS.Util.$('form').hide();
  CTS.Util.$('#success').show();  
}

function preSignupError(form, intoList, relation) {
  CTS.Util.$('#failure').show();  
}