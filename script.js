$(function () {
    var  name = document.getElementById('name-input');
    var password= document.getElementById('pass-input')
    name.onkeyup=
        function()
        {
            if(name.value.length<5)
            {
                name.style.border="2px solid red"
            document.getElementById('name-condition').style.color="red"
            conditions=false;
            }
            else{
                name.style.border="none"
                document.getElementById('name-condition').style.color="white"
            }
        }
        name.onkeydown=function(){
            if(name.value.length<5)
            {
                name.style.border="2px solid red"
            }
            else{
                    name.style.border="none"
                }
        }
        password.onkeyup=
        function()
        {
            if(password.value.length<8)
            {
                password.style.border="2px solid red"
                // document.getElementById('pass-condition').style.color="red"
                $("#pass-condition").style.color="red"
                conditions=false;
            }
            else{
                password.style.border="none"
                // document.getElementById('pass-condition').style.color="white"
                $("#pass-condition").style.color="white"
            }
        }
        password.onkeydown=function(){
            if(password.value.length<8)
            {
                password.style.border="2px solid red"
            }
            else{
                    password.style.border="none"
                }
        }
    
  $("#myForm").submit(function(){
      var orig_pass="ZH124567"
    
    //   var  password = document.getElementById('pass-input');
    //   var  name = document.getElementById('name-input');
      if(name.value.length<5){
          document.getElementById('name-condition').style.color="red"
          conditions=false;
          return false;
        // alert("INVALID NAME")
      }
      if(password.value.length<8)
      {
            password.style.border="5px solid red"
            document.getElementsById('pass-condition').style.color="red"
            condition=false;
            return false;
            // alert("Password cannot be less than 8")
            // alert(password.style.border);
        }
    if(conditions)
    {
        alert("Form Submitted. Thanks For your Response!")
        this.preventDefault()
        return true;
    }
  });
});