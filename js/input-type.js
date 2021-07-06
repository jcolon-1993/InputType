// Use iify
(function ()
{
  // Get password input
  var pwd = document.getElementById("pwd");
  // Get checkbox
  var chk = document.getElementById("showPwd");

  // When user clicks on checkbox
  addEvent(chk, "change", function(e)
  {
    // Get that element
    var target = e.target || e.srcElement;

    // Implement try catch block
    try
    {
      // If checkbox is checked
      if (target.checked)
      {
        // Set pwd type to text
        pwd.type = "text";
      }
      // Otherwise, set pwd type to password
      else
      {
        pwd.type = "password";
      }
    }
    // If causes error, display message to user
    catch (error)
    {
      alert("This browser cannot switch type");
    }
  });
}());
