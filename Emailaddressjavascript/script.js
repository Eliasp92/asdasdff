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