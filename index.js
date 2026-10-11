const div= document.querySelector('.Intro');
const text= "Hello and welcome to this calculator. Feel free to punch some numbers in, but be nice to your keyboard :)";
const display= document.getElementById('display');
function typeWriting(element, text, i=0){
    
    if (i ===0){
        element.textContent='';
    }
    element.textContent += text[i];

    if (i === text.length - 1){
        return;
    }

    setTimeout(() => typeWriting(element, text, i+1),75);

    setTimeout(()=> element.textContent='', 20000);



}
function Number(input){
    display.value += input;
}

function Calculate(){
    display.value = eval(display.value);
}

function Clear(){
    display.value= '';
}
typeWriting(div, text);


