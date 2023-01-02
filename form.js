const firstname = document.getElementById('first_name')
const lastname = document.getElementById('last_name')
const email = document.getElementById('email')
const mobile = document.getElementById('mobile')
const conselling = document.getElementById('conselling')
const studylevel = document.getElementById('studyLevel')
const checkbox1 = document.getElementById('Mycheck-box')
const checkbox2 = document.getElementById('Mycheck-box-2')
const checkbox3 = document.getElementById('Mycheck-box-3')
const form = document.getElementById('form')
const error = document.getElementById('error')
const success = document.getElementById('success-msg')
// const active = [fullname,email,subject,workdetails]

form.addEventListener('submit', (e) => { 
    let messages = []
    if(firstname.value === '' || firstname.value == null){
         messages.push("Firstname field is required!!!!")
         red(firstname);
     }
    else if(firstname.value.length > 0){
         green(firstname);
    }


    if(lastname.value === '' || lastname.value == null){
        messages.push("Lastname field is required!!!!")
        red(lastname);
    }
    else if(lastname.value.length > 0){
        green(lastname);
    }
 
     
 
    if(email.value === '' || email.value == null){
         messages.push("email field is required!!!!")
         red(email);
    }
    else if(!email.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
         messages.push("please enter valid email address!!!!")
         red(email);
    }
    else if(email.value.length > 0){
         green(email);
    }

    
    if(mobile.value === '' || mobile.value == null){
        messages.push("Mobile field is required!!!!")
        red(mobile);
    }
    else if(mobile.value.length > 0){
        green(mobile);
    }
     
     
    if(conselling.value === '' || conselling.value == null){
         messages.push("select the conselling field")
         red(conselling);
    }
    else if(conselling.value.length > 0){
         green(conselling);
    }


    if(studylevel.value === '' || studylevel.value == null){
        messages.push("select the studylevel field")
        red(studylevel);
    }
    else if(studylevel.value.length > 0){
        green(studylevel);
    }


    if(checkbox1.checked){
        green(checkbox1);
    }
    else if(checkbox1.checked == false){
        messages.push("please agree to Think Study Terms and privacy policy")
        red(checkbox1);
    }
 
      
    if(messages.length > 0){
         e.preventDefault()
         error.innerHTML = messages.join('<br>,')
         error.style.display = "block";
    }
    else if(messages.length == 0){
        alert("Successfully Submitted press OK")
        
    }
})

function red(color){
    color.style.backgroundColor = "rgba(251, 196, 196, 0.65)";
    color.style.border = "1px solid red";
}

function green(color){
    color.style.backgroundColor = "";
    color.style.border = "1px solid green";
}
