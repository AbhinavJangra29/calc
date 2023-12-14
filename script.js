// script.js
//this part get ref to the input box and buttons
const inputBox=document.getElementById('inputbox')
const buttons=document.querySelectorAll('.calculator .buttons button');

//sets up a click event listener for each button
//when button is clicked it calls the functionClick
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        functionClick(button.innerText)
    });
});


function functionClick(value){
    switch(value){
        case '=':
            calculateResult();
            break;
        case 'clear':
            clearInput();
            break;
        default:
            appendToInput(value)
    }
}

function appendToInput(value){
    inputBox.value+=value;
}
function clearInput(){
    inputBox.value='';
}
function calculateResult(){
    try{
        //eval fn returns the answer of the calculations
        inputBox.value=eval(inputBox.value);
    }
    catch(error){
        inputBox.value='Error';
    }
}