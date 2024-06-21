// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


const characters =' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/'

let finalPassword = ''

const showPassword = document.getElementById('show-password')

const passwordLength = document.getElementById('password-length')

const range = document.getElementById('range')

const buttonElement = document.getElementById('button')

const setPasswordLength = (event) =>{
    length = event.target.value
    passwordLength.textContent = `Length: ${length}`
    return length
    
}


range.addEventListener('change', setPasswordLength)



const generateIndex = () =>{
    let finalPassword = ''
    
    for (let i = 0; i<length; i++){
        let index = Math.floor(Math.random()*90)
        finalPassword += characters.charAt(index)
    }

    showPassword.textContent = finalPassword
}



buttonElement.addEventListener('click', generateIndex)
