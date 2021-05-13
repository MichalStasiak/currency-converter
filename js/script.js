{
    const welcome = () => {
        console.log("Hi everyone!");

    }
    welcome();
    const calculateResult = (plnAmount, currency) => {

        const rateEUR = 4.565;
        const rateGBP = 5.252;
        const rateUSD = 3.782;
        const rateUAH = 0.136;

        switch (currency) {
            case "EUR":
                return (plnAmount / rateEUR).toFixed(2);

            case "GBP":
                return (plnAmount / rateGBP).toFixed(2);

            case "USD":
                return (plnAmount / rateUSD).toFixed(2);

            case "UAH":
                return (plnAmount / rateUAH).toFixed(2);

        }
    }

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `Wynik:${result.toFixed(2)} ${currency.toCase()}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const fieldlElement = document.querySelector(".js-field");
        const currencyElement = document.querySelector(".js-currency");
        const submitElement = document.querySelector(".js-submit");
        const resetElement = document.querySelector(".js-reset");

        const plnAmount = +fieldlElement.value;
        const currency = currencyElement.value;

       
        const result = calculateResult(plnAmount, currency);
        updateResultText(result, currency);
    }

const onFormReset = () => {
    resultElement.innerText = "Wynik:";
    const resultElement = document.querySelector(".js-result");
}
const init = () => {

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
    formElement.addEventListener("reset", onFormReset);
};
init();
}

