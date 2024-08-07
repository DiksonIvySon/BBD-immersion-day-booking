let submit = document.querySelector('button') 
let json_data;  
let data ; 
const { saveFile} = require('./server')

let getData = () => {
    console.log(`json ${json_data}`)
}

data = window.addEventListener('click',function(e){
    e.preventDefault() 

    let firstName = document.querySelector('#fname').value; 
    let lastName = document.querySelector('#lname').value; 
    let email = document.querySelector('#email').value; 
    let cellphone = document.querySelector('#cellphone').value;

     data = { 
        firstName, 
        lastName, 
        email, 
        cellphone, 
    }     
    json_data = JSON.stringify(data)   

    getData()
    saveFile(json_data)


}) 


console.log(`jason ${json_data}`) 
