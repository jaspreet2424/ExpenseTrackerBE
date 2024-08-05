let pass = "";
const alphabets = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&*';

for(let i = 1 ; i <= 12 ; i++){
    let rand = Math.floor(Math.random()* alphabets.length);
    pass = pass + alphabets.charAt(rand);
}

console.log(pass);