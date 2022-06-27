
const form = document.getElementById('form').value.trim();
const uname = document.getElementById('uname').value.trim();
const fname = document.getElementById('fname').value.trim();
const lname = document.getElementById('lname').value.trim();
const email = document.getElementById('email').value.trim();
const pword = document.getElementById('pword').value.trim();
const cpword = document.getElementById('cpword').value.trim();

function checkInputs(){
    // const unamevalue = uname.value.trim();
    // const fnameValue = fname.value.trim();
    // const lnameValue = lname.value.trim();
    // const emailValue = email.value.trim();
    // const pwordValue = pword.value.trim();
    // const cpwordValue = cpword.value.trim();

    if(uname === ' '){
        setErrorFor(uname, 'Username cannot be blank');
        console.log("username cant be blank");
    }else{
        setSuccessfor(uname);
        console.log(uname);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');


    small.innertext = message;


    formControl.className = 'form-control error';
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    checkInputs();
});