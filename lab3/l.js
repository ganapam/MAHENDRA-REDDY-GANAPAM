function fun() {
    var userv = document.forms[0].user.value;
    var pwdv = document.forms[0].pwd.value;
    var emailv = document.forms[0].email.value;
    var phv = document.forms[0].ph.value;

    var userreg = new RegExp("^[a-zA-Z][a-zA-Z0-9]*$");
    var emailreg = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
    var phreg = new RegExp("^[0-9]{10}$");

    var ruser = userreg.exec(userv);
    var remail = emailreg.exec(emailv);
    var rph = phreg.exec(phv);

    if (ruser && remail && rph && (pwdv.length > 6)) {
        alert("All values are valid");
        return true;
    } else {
        if (!ruser) {
            alert("user name invalid");
            document.forms[0].user.focus();
        }
        if (!remail) {
            alert("user email invalid");
            document.forms[0].email.focus();
        }
        if (!rph) {
            alert("user phone.no invalid");
            document.forms[0].ph.focus();
        }
        if (!pwdv.length > 6) {
            alert("user password invalid");
            document.forms[0].pwd.focus();
        }
        return false;
    }

}