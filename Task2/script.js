// //Main function

// function ConvertDegree(){
//     let inputValue = document.getElementById('inputValue').value;
//     let InputDegree = document.getElementById('degree1').value;
//     let OutputDegree = document.getElementById('degree2').value;
    

//     let resultValue = '';

//     switch (InputDegree) {
//         case 'C':
//             resultValue = Celsius(inputValue , OutputDegree);
//             break;
        
//         case 'F':
//             resultValue = Fahrenheit(inputValue , OutputDegree);
//             break;

//         case 'K':
//             resultValue = Kelvin(inputValue , OutputDegree);
//             break;
 
        
//     }

//     document.getElementById('convertedUnit').value = OutputDegree;
    
//     let convertedValue = document.getElementById('convertedValue');

//     if(convertedValue === InputDegree)
//     {
//         document.getElementById('convertedValue').innerText = InputDegree;
//         console.log(convertedValue);
//     }
//     else{
//         convertedValue.innerText = resultValue;
//         console.log(convertedValue);
//     }
    
// }
// // This is for Celsius Conversion

// function Celsius(inputValue,OutputDegree)
// {
//     let temp = '';
//     switch (OutputDegree) {
//         case 'C':
//             temp = inputValue;
//             break;

//         case 'F':
//             temp = eval(((inputValue) * (9 / 5)) + 32);
//             break;
        
//         case 'K':
//             temp =  eval((inputValue + 273.15));

//     }
//     return temp;
// }
// // This is for Fahrenheit Conversion

// function Fahrenheit(inputValue,OutputDegree)
// {
//     let temp = '';
//     switch (OutputDegree) {
//         case 'F':
//             temp = inputValue;
//             break;

//         case 'C':
//             temperature = eval((inputValue - 32) * (5 / 9));
//             break;
        
//         case 'K':
//             temperature = eval((inputValue + 459.67) * (5 / 9));

//     }
//     return temp;
// }
// // This is for Kelvin Conversion

// function Kelvin(inputValue,OutputDegree)

// {
//     let temp = '';
//     switch (OutputDegree) {
//         case 'K':
//             temp = inputValue;
//             break;

//         case 'F':
//             temp = eval((inputValue - 273.15) * (9 / 5) + 32);
//             break;
        
//         case 'C':
//             temp =  eval((inputValue - 273.15));

//     }
//     return temp;
// }



function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var conversionType = document.getElementById("conversionType").value;
    var resultElement = document.getElementById("result");
  
    if (conversionType === "celsiusToFahrenheit") {
      var fahrenheit = (temperature * 9/5) + 32;
      resultElement.innerText = temperature + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.";
    } else if (conversionType === "fahrenheitToCelsius") {
      var celsius = (temperature - 32) * 5/9;
      resultElement.innerText = temperature + " degrees Fahrenheit is equal to " + celsius + " degrees Celsius.";
    } else {
      resultElement.innerText = "Invalid conversion type selected.";
    }
  }
  