$(function () {
    $("#myForm").submit(function(){
        var password = $("#pass-input")
        var confirm_pass= $("#confirm_pass-input")
        var name = $("#name-input")
        var email = $("#email-input")
        var Submit_form=true;
        // if(email.val() =='' || name.val() =='' || password.val() ==''||confirm_pass.val() =='')
        // {
        //     alert("Some input field is empty")
        //     return false;
        // }
        if(name.val().length<5 || name.val()=='')
        {
            alert("Name must be Greater than 5 characters");
            name.css("border","2px solid red")
            $("#name-condition").css({"color":"red","transition":"1s"})
            Submit_form=false;
            // return false;
        }
        else{
            name.css("border","none")
            $("#name-condition").css({"color":"white"})
            
        }
        if(email.val()=='')
        {
            $("#email-input").css("border","2px solid red")
            alert("Email Input Field is Empty")
            $("#email-condition").css({"color":"red","transition":"0.8s"})
            Submit_form=false;
        }
        else{
            $("#email-input").css("border","none")
            $("#email-condition").css({"color":"white"})
        }
        if(password.val().length<8 || password.val()=='')
        {
            alert("Password must be greater than 8 characters")
            password.css("border","2px solid red")
            $("#pass-condition").css({"color":"red","transition":"1s"})
            Submit_form=false;
            // return false;
        }
        else{
            password.css("border","none")
            $("#pass-condition").css({"color":"white"})
        }
        if(password.val()!=confirm_pass.val() || confirm_pass.val()=='')
        {
            alert("Confirm Password does not match");
            confirm_pass.css("border","2px solid red")
            $("#conf-pass").css({"color":"red","transition":"1s"})
            Submit_form=false;
            // return false;
        }
        else{
            confirm_pass.css("border","none")
            $("#conf-pass").css({"color":"white"})
        }
        if(Submit_form==true)
        {
            alert("FORM SUBMITTED SUCCESSFULLY")
            this.preventDefault()
            return true;
        }
        else
        {
            $("#form-condition").css({"color":"red","transition":"1s"})         
            // this.preventDefault()
            return false;
        }
    });
});
// $(function () {
//     var  name = document.getElementById('name-input');
//     var password= document.getElementById('pass-input')
//     name.onkeyup=
//         function()
//         {
//             if(name.value.length<5)
//             {
//                 name.style.border="2px solid red"
//             document.getElementById('name-condition').style.color="red"
//             conditions=false;
//             }
//             else{
//                 name.style.border="none"
//                 document.getElementById('name-condition').style.color="white"
//             }
//         }
//         name.onkeydown=function(){
//             if(name.value.length<5)
//             {
//                 name.style.border="2px solid red"
//             }
//             else{
//                     name.style.border="none"
//                 }
//         }
//         password.onkeyup=
//         function()
//         {
//             if(password.value.length<8)
//             {
//                 password.style.border="2px solid red"
//                 // document.getElementById('pass-condition').style.color="red"
//                 $("#pass-condition").style.color="red"
//                 conditions=false;
//             }
//             else{
//                 password.style.border="none"
//                 // document.getElementById('pass-condition').style.color="white"
//                 $("#pass-condition").style.color="white"
//             }
//         }
//         password.onkeydown=function(){
//             if(password.value.length<8)
//             {
//                 password.style.border="2px solid red"
//             }
//             else{
//                     password.style.border="none"
//                 }
//         }
    
//   $("#myForm").submit(function(){
//       var orig_pass="ZH124567"
    
//     //   var  password = document.getElementById('pass-input');
//     //   var  name = document.getElementById('name-input');
//       if(name.value.length<5){
//           document.getElementById('name-condition').style.color="red"
//           conditions=false;
//           return false;
//         // alert("INVALID NAME")
//       }
//       if(password.value.length<8)
//       {
//             password.style.border="5px solid red"
//             document.getElementsById('pass-condition').style.color="red"
//             condition=false;
//             return false;
//             // alert("Password cannot be less than 8")
//             // alert(password.style.border);
//         }
//     if(conditions)
//     {
//         alert("Form Submitted. Thanks For your Response!")
//         this.preventDefault()
//         return true;
//     }
//   });
// });
