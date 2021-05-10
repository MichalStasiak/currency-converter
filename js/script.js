console.log("Hi everyone!");

let formElement = document.querySelector(".js-form");
let fieldlElement = document.querySelector(".js-field");
let currencyElement = document.querySelector(".js-currency");
let submitElement = document.querySelector(".js-submit");
let resetElement = document.querySelector(".js-reset");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let rateEUR = 4.565;
    let rateGBP = 5.252;
    let rateUSD = 3.782;
    let rateUAH = 0.136;

    let plnAmount = +fieldlElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = (plnAmount / rateEUR).toFixed(2);
            resultElement.innerText = `Wynik:${result} euro`;
            break;

        case "GBP":
            result = (plnAmount / rateGBP).toFixed(2);
            resultElement.innerText = `Wynik:${result} funtów`;
            break;    
          
        case "USD":
            result = (plnAmount / rateUSD).toFixed(2);
            resultElement.innerText = `Wynik:${result} dolarów`;
            break;   
             
        case "UAH":
            result = (plnAmount / rateUAH).toFixed(2);
            resultElement.innerText = `Wynik:${result} hrywien`;
            break;    
    }
    
    formElement.addEventListener("reset", () => {
        resultElement.innerText = "Wynik:";
    })
});