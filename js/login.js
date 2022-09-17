document.getElementById('submit-btn').addEventListener('click', function(){

    const emailField = document.getElementById('type-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('type-password');
    const userPassword = passwordField.value;

    if(userEmail == 'noushad@gbb.com' && userPassword == "secret"){
        // window.location.href= 'other-site.html'
        console.log('Access Granted')
    }
    else{
        console.log('Not Accessed')
    }
})

document.get