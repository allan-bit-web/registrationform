function submitForm(e){
    e.preventDefault();
    const outputA=document.getElementById('output1');
    const outputB=document.getElementById('output2');
    const outputc=document.getElementById('output3');
    const outputd=document.getElementById('output4');
    const name =document.forms['registrationform']['username'].value;

    if(name.length ==0){
        outputA.innerHTML="empty username ";
        
    }else if(name.length <3){
        outputA.innerHTML="be atleast 3 characters long"
    }

    const email =document.forms['registrationform']['email'].value;
    const emailRegex=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if(email.length==0){
        outputB.innerHTML="empty"  
    }
    else if(!emailRegex.test(email)){
        outputB.innerHTML="invalid";
    }
    else{
        outputB.innerHTML="";

    }

    const password =document.forms['registrationform']['password'].value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(password.length ==0){
        outputc.innerHTML="empty username ";
        
    }else if(password.length <8){
        outputc.innerHTML="be atleast 8 characters long"
    }else if(!passwordRegex.test(password)){
        outputc.innerHTML="invalid";
    }
    else{
        outputc.innerHTML="";

    }

    const confirmpassword =document.forms['registrationform']['confirm password'].value;

    if(confirmpassword.length ==0){
        outputd.innerHTML="empty!! ";
        
    }else if(password != confirmpassword){
        outputd.innerHTML="the password do not match!!";
    }else{
         outputd.innerHTML="";
    }




}