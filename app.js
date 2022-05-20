
let Screen = document.querySelector('.screen');
let Screen1 = document.querySelector('.screen1');
let Screen2 = document.querySelector('.screen2');
const Nums = document.querySelectorAll('.nums');
const Opp = document.querySelectorAll('.opp');
const Eq = document.querySelector('.eq');
const Cl = document.querySelector('.Clear');
const Del = document.querySelector('.del');


let results = null;
let results1 = '';
let results2 = '';
let Lasts = '';
let Dots = false;

Nums.forEach(numbers =>{
    numbers.addEventListener('click', (e)=>{
        if(e.target.innerText === '.' && !Dots){
            Dots = true;
        }else if(e.target.innerText === '.' && Dots){
            return;
        }
         results2 += e.target.innerText;
         Screen2.value = results2;
         console.log(results1)
    })
})

Opp.forEach(opps =>{
    opps.addEventListener('click', (e)=>{
        if(!results2)results1;
        Dots = false;
        const OppN = e.target.innerText;
        if(results2 && results && Lasts){
            MathOpp();
        }else{
            results = parseFloat(results2);
        }
        clearVar(OppN);
        Lasts=OppN
        console.log(results)
    })
})

function clearVar(name = ''){
    results1 += results2 + '' + name + '';
    Screen1.value = results1;
    Screen2.value = '';
    results2 = '';
    Screen.value = results;
}

function MathOpp(){
    if(Lasts === 'x' ){
        results = parseFloat(results) * parseFloat(results2);
    }else if(Lasts === '+' ){
        results = parseFloat(results) + parseFloat(results2);
    }
    else if(Lasts === '-' ){
        results = parseFloat(results) - parseFloat(results2);
    }
    else if(Lasts === '/' ){
        results = parseFloat(results) / parseFloat(results2);
    }
    else if(Lasts === '%' ){
        results = parseFloat(results) / parseFloat(100);
    }
    
}
Eq.addEventListener('click', (e)=>{
    if( !results1 || !results2) return;
    Dots=false;
    MathOpp();
    clearVar();
    Screen2.value=results;
    Screen.value='';
    results2=results;
    results1='';
})
Cl.addEventListener('click', (e)=>{

    Screen2.value='';
    Screen1.value='';
    Screen.value='';
    results='';
    results1='';
    results2='';
})
Del.addEventListener('click', (e)=>{
    Screen22 = Screen2.value.slice(0,-1);
    results2= Screen22;
    Screen2.value=Screen22;
})
window.addEventListener('keydown', (e)=>{
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' 
    ){
        Click(e.key);
    }else if(
        e.key === '+' ||
        e.key === '/' ||
        e.key === '%' 
    ){
        ClickOpp(e.key)
    }else if(
        e.key === '*'  
    ){
        ClickOpp('x')
    }
    else if(
        e.key === 'Enter' || e.key === "="  
    ){
        ClickEq('x')
    }
    else if(
        e.key === 'Backspace' 
    ){
        ClickDel('x')
    }
})
function Click (key){
    Nums.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}
function ClickOpp (key){
    Opp.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}
function ClickEq (){
            Eq.click();
}
function ClickDel (){
    Del.click();
}
/* function display(numb){
    Screen.value += numb;
}
function calculate(){
    try{
        Screen2.value = eval(Screen.value);
    }
    catch(err){
        alert("invalid entry")
    }
}

function Clear(){
    Screen.value = "";
}
function del(){
    Screen.value = Screen.value.slice(0,-1);
}
 */

