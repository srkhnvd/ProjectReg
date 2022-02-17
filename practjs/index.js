$(document).ready(function(){
  $("#submit").click(function(){
    var name = $("#name").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();
    if (name == ""){
      alert("Enter your name");
    }
    else if (password == "") {
      alert("Enter your password");
    }
    else if (password2 == "") {
      alert("Repeat your password");
    }
    else if (password!=password2) {
      alert("Your password doesn't match");
    }
    else{
      alert("Your data is saved");
    }
  });
});
