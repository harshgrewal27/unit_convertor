const unit = document.getElementById('unit');
const inputDrop = document.getElementById("input");
const outDrop = document.getElementById("output");

const options = {
    "Length" : ["Kilometer","Meter","Centimeter","Millimeter"],
    "Weight" : ["Tonnes","Kilogram","Gram","Milligram"],
    "Temperature" : ["Celcius","Fehrenheit"]
}

function updateSelection(){
    const selectedOption = unit.value ;
    const optionlist = options[selectedOption] ;

    function update(dropDown){
    dropDown.innerHTML = '';
    optionlist.forEach((option) => {
        const optionElement = document.createElement('option')
        optionElement.value = option ;
        optionElement.text = option ; 
        dropDown.add(optionElement);

   
    });
}

update(inputDrop);
update(outDrop);
inputText.addEventListener('input',convertValue)
outText.addEventListener('input',convertValue)
inputText.addEventListener('change',convertValue)
outText.addEventListener('change',convertValue)
outDrop.addEventListener('change',convertValue)
inputDrop.addEventListener('change',convertValue)

}

unit.addEventListener('change',updateSelection)
unit.addEventListener('click',updateSelection)


const convert = document.getElementById('convert')
const inputText = document.getElementById('from');
const outText = document.getElementById('to');
lengthDict = {
    'Kilometer': 1000,
    'Meter': 1,
    'Centimeter': 0.01,
    'Millimeter': 0.001,
}
weightDict = {
    'Tonnes' : 1000,
    'Kilogram' : 1,
    'gram' : 0.001,
    'Milligram' : 0.0001

}


function convertValue(){
    const selectedOption = unit.value ;
    if(inputText.value===NaN){
        inputText.value =0; 
    }
    if(outText.value===NaN){
        outText.value =0; 
    }
    if(selectedOption==='Weight'){
        outText.value = inputText.value*(weightDict[inputDrop.value]/weightDict[outDrop.value]);
        inputText.value = outText.value*(weightDict[outDrop.value]/weightDict[inputDrop.value]);
    }
    else if (selectedOption==='Length') {
        outText.value = inputText.value*(lengthDict[inputDrop.value]/lengthDict[outDrop.value]);
        inputText.value = outText.value*(lengthDict[outDrop.value]/lengthDict[inputDrop.value]);
    } 
    else {
        if(inputDrop.value ==='Celcius' & outDrop.value === 'Fehrenheit'){
            const Celcius = inputText.value ;
            const Fehrenheit = (9/5)*Celcius + 32;
            outText.value = Fehrenheit;
        }
        if(outDrop.value ==='Celcius' & inputDrop.value === 'Fehrenheit'){
            const Fehrenheit = outText.value ;
            const Celcius = (5/9)*(Fehrenheit - 32);
            outText.value = Celcius;
        }  
    }  
}

document.getElementById('calculate').addEventListener('click',convertValue)
const clear = document.getElementById('clear');

clear.addEventListener('click',function(){
    inputText.value = 0;
    outText.value = 0;
})


