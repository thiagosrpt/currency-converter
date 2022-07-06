window.addEventListener("load", function () {
  var currencies = [];
  document.getElementById("convert-button").addEventListener("click", Convert);
  document.getElementById("swap-button").addEventListener("click", Swap);

  function Swap() {
    //Grab Current Selected in the UI:
    convertFromValue = document.getElementById("convert-from").value;
    convertToValue = document.getElementById("convert-to").value;

    //Swap them out in the UI:
    document.getElementById("convert-from").value = convertToValue;
    document.getElementById("convert-to").value = convertFromValue;

    //Reassining the variables for API request and respose:
    convertFromValue = document.getElementById("convert-from").value;
    convertToValue = document.getElementById("convert-to").value;
  }

  function getRates() {
    const proxy = "https://cros-anywhere.herokuapp.com/";
    let response = `${[[proxy]]}https://api.exchangerate.host/latest?base=USD`;
    fetch(response)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { rates } = data;
        currencies = Object.keys(rates).map((key) => String(key));
        currencies.reverse();
        console.log(currencies);
        var select = document.getElementById("convert-from");
        var select2 = document.getElementById("convert-to");
        for (var i = 0; i < currencies.length; i++) {
          var opt = currencies[i];
          var opt2 = currencies[i];
          var el = document.createElement("option");
          var el2 = document.createElement("option");
          el.textContent = opt;
          el.value = opt;
          el2.textContent = opt2;
          el2.value = opt2;
          select.appendChild(el);
          select2.appendChild(el2);
        }
      });
  }

  function Convert() {
    console.log(
      `works on click ${amountToConvert} ${convertFromValue} ${convertToValue}`
    );
    const proxy = "https://cros-anywhere.herokuapp.com/";
    let response = `${[
      [proxy],
    ]}https://api.exchangerate.host/latest?base=${convertFromValue}`;
    fetch(response)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let convertedBase = parseFloat(data.rates[convertToValue]);
        amountToConvert = parseFloat(amountToConvert); //converts text into float parseFloat()
        console.log(convertedBase * amountToConvert);
        let convertedAmount = Number(
          (convertedBase * amountToConvert).toFixed(2)
        ); //converts into Number with 4 decimals
        document.getElementById("converted-amount").innerHTML =
          convertedAmount + " " + convertToValue;

        document.getElementById("base").innerText = `Current Value in ${convertFromValue}`;

        let table = document.getElementById("currency_table");
        table.innerHTML = `<tr>
            <th>Currency/ISO Code</th>
            <th id="base">BASE</th>
            </tr>`;
        const { rates } = data;
        for (const key in rates) {
            let newRow = table.insertRow(-1);
            let newCell = newRow.insertCell(0);
            let newText = document.createTextNode(key);
            newCell.appendChild(newText);

            let newCell2 = newRow.insertCell(1);
            let newText2 = document.createTextNode(`${Number(rates[key]).toFixed(2)} ${convertFromValue}`);
            newCell2.appendChild(newText2);

        }


      });
  }

  //calling functions

  getRates();
});
