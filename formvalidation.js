function validate()
{
    var un = document.getElementById("username").value
    var unp = /^[a-zA-Z]+$/
    var ph=document.getElementById("phno").value
    var php=/^[6-9]{1}[0-9]{9}$/
    var email=document.getElementById("email").value
    var emailp=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(un=="")
    {
        document.getElementById("message").innerHTML="Enter  the Username";
        return false;
    }
    if(un.match(unp))
    true
    else    
    {
        document.getElementById("message").innerHTML="username should contain alphbets only"
        return false
    }
    true
    if(un.length<3)
    {
        document.getElementById("message").innerHTML="username should contain alphbets minimum 3 alphabets"
        return false
    }
    if(un.length>8) 
    {
        document.getElementById("message").innerHTML="username should contain maximum 8 alphabets"
        return false
    }
    if(php=="")
    {
        document.getElementById("msg1").innerHTML="Enter  the phone number";
        return false;
    }
    if(ph.match(php))
    true
    else
  
    {
        document.getElementById("msg1").innerHTML="Invaild phone number"
        return false
    }
    if(emailp=="")
    {
        document.getElementById("msg2").innerHTML="Enter  the phone number";
        return false;
    }
    if(ph.match(php))
    true
    else
  
    {
        document.getElementById("msg1").innerHTML="Invaild phone number"
        return false
    }


    
    
    

}