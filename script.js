let password = document.querySelector('.password')
let iconPassword = document.querySelector('.icon-password')

iconPassword.addEventListener('click',()=>{
    if(iconPassword.className == 'icon-password  bi-eye-slash-fill'){
        iconPassword.className = 'icon-password bi-eye-fill'
        password.setAttribute('type','text')
    }else{
        iconPassword.className = 'icon-password  bi-eye-slash-fill'
        password.setAttribute('type','password')
    }
})
