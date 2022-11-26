const spanError = document.getElementById('error');
const RegExt = /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/ig;
const emailContainer = document.querySelector(".Address__Container");
const email = document.getElementById('Email');
const btn = document.getElementById('btn');

btn.addEventListener(("click"), (e) =>{
   
    e.preventDefault();
    if(!RegExt.test(email.value) || !email.value.trim()){
        emailContainer.classList.add('error');
        spanError.textContent = "Por favor ingrese un correo valido";
        
    } else{
        email.value ="";
        emailContainer.classList.remove('error');
        emailContainer.classList.add('enviado');
        spanError.textContent = "correo valido";
    }
})
   

    
