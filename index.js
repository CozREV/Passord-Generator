const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",]

let randomPassword = document.querySelector(".randomPass")
let password = ""
let hasPassword = false


function hasPassword() {
    if 
}


function generatePassword() {
    for (let i = 0; i < 15; i++) {
        let length = 15
        let randomNumber = characters[Math.floor(characters.length * Math.random())]
        console.log(randomNumber)
        password += randomNumber
    }
    randomPassword.textContent = password
}
