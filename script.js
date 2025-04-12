document.getElementById('registrationform').addEventListener('submit', function(e) {
    e.preventDefault();

    const outputA=document.getElementById('output1');
    const outputB=document.getElementById('output2');
    const outputc=document.getElementById('output3');
    const outputd=document.getElementById('output4');
    const outpute=document.getElementById('output5');
    const outputf=document.getElementById('success');

    let valid = true;

    const name =document.forms['registrationform']['username'].value;
    if(name.length ==0){
        valid=false;
        outputA.innerHTML="empty username ";   
    }else if(name.length <3){
        outputA.innerHTML="be atleast 3 characters long"
    }else{
        outputA.innerHTML="";
    }

    const email =document.forms['registrationform']['email'].value;
    const emailRegex=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if(email.length==0){
        valid=false;
        outputB.innerHTML="empty"  
    }
    else if(!emailRegex.test(email)){
        outputB.innerHTML="must be a valid email address eg., (example@example.com)";
    }
    else{
        outputB.innerHTML="";
    }

    const password =document.forms['registrationform']['password'].value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(password.length ==0){
        valid=false;
        outputc.innerHTML="empty username ";  
    }else if(password.length <8){
        outputc.innerHTML="be atleast 8 characters long";
    }else if(!passwordRegex.test(password)){
        outputc.innerHTML=" Must contain at least one uppercase letter, one lowercase letter, and one digit";
    }
    else{
        outputc.innerHTML="";
    }

    const confirmpassword =document.forms['registrationform']['confirm password'].value;
    if(confirmpassword.length ==0){
        valid=false;
        outputd.innerHTML="empty!! ";   
    }else if(password != confirmpassword){
        valid=false;
        outputd.innerHTML="the password do not match!!";
    }else{
         outputd.innerHTML="";
    }

    const terms =document.forms['registrationform']['terms'].checked;
    if(!terms){
        valid=false;
        outpute.innerHTML="not checked";   
    }else{
        outpute.innerHTML="";
    }

    if(valid){
        outputf.innerHTML="form submitted successfully!!!!😀🎉"
    }else{
         outputf.innerHTML="";
    }
   
     
  

});
