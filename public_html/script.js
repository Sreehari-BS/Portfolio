function validate(){
    var username=document.getElementById("username");
    var email=document.getElementById("email");
    var phone=document.getElementById("phone");
    var password=document.getElementById("password");
    var comment=document.getElementById("comment");
    var age=document.getElementById("Age");
    

    if(username.value==""){
        alert("Must have a Username");
        document.form1.username.focus();
        return false;
    }
    if(email.value==""){
        alert("Must have a emailid");
        document.form1.email.focus();
        return false;
    }
    if(phone.value==""){
        alert("Must have a Phonenumber");
        document.form1.phone.focus();
        return false;
    }
    if(password.value==""){
        alert("Must have a Password");
        document.form1.password.focus();
        return false;
    }
    if(comment.value==""){
        alert("Must have a Comment");
        document.form1.comment.focus();
        return false;
    }
    if(age.value==""){
        alert("Must Enter your age");
        document.form1.Age.focus();
        return false;
    }
}
