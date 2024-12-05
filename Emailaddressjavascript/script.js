function changeBackgroundcolor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let color = "#" + randomColor;
    document.body.style.backgroundColor = color;
  }
  
  window.addEventListener("load", changeBackgroundcolor());

function generateEmail() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    if (firstName != '' & lastName != '') {
      var email = firstName.toString() + '.' + lastName.toString() + '@gmail.com';
      document.getElementById('result').innerHTML = 'din e-postadress är: ' + email;
    } else {
      document.getElementById('result').innerHTML = 'fyll i förnamn och efternamn.';
    }
}