document.getElementById("amount-to-convert").addEventListener('focusout', toConvert);
document.getElementById("convert-from").addEventListener('change', ConvertFrom);
document.getElementById("convert-to").addEventListener('change', ConvertTo);



//below function of found online it makes '.number-only' class elements to only accept numbers and period.
onload = function(){ 
    var ele = document.querySelectorAll('.number-only')[0];
    ele.onkeypress = function(e) {
       if(isNaN(this.value+""+String.fromCharCode(e.charCode)))
          return false;
    }
    ele.onpaste = function(e){
       e.preventDefault();
    }
  }

var amountToConvert = 1;
var convertFromValue = document.getElementById("convert-from").value;
var convertToValue = document.getElementById("convert-to").value;



function toConvert() {
    amountToConvert = document.getElementById("amount-to-convert").value;
    console.log(amountToConvert);
};

function ConvertFrom() {
    convertFromValue = document.getElementById("convert-from").value;
    console.log(convertFromValue);
};

function ConvertTo() {
    convertToValue = document.getElementById("convert-to").value;
    console.log(convertToValue);
};











