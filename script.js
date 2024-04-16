
function Click() {
const amount = document.getElementById('amount').value;
const currency = document.getElementById('currency').value;
  fetch('https://api.exchangerate-api.com/v4/latest/AZN')
    .then(res => res.json())
    .then(data => {
        let exchange = [];
 
        if (currency === "USD") {
            exchange.push(amount / data.rates.USD);
            exchange.push("Dollar"); 
        } else if (currency === "EUR") {
            exchange.push(amount / data.rates.EUR);
            exchange.push("euro");
        } else if (currency === "GBP") {
            exchange.push(amount / data.rates.GBP);
            exchange.push("Pound");
        }
     
        
    let result = document.getElementById('result')
    result.innerHTML =`${amount}  AZN  = ${exchange[0].toFixed(2)} ${exchange[1]}`;
    })
    .catch(error => {
        console.error(error);
    });
}


document.getElementById('Button').addEventListener('click', Click);