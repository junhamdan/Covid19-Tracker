const activeCases = document.getElementById("active-cases");
const newCases = document.getElementById("new-cases");
const recoveredCases = document.getElementById("recovered-cases");
const totalCases = document.getElementById("total-cases");
const totalDeaths = document.getElementById("total-deaths");
const totalTest = document.getElementById("total-tests");

const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", async () => {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  const BASE_URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1d182b7099msh95caa4615b2e510p1040d9jsn3a17359c9aee",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const response = await fetch(BASE_URL, options);
  const data = await response.json();

  if (data.response.length) {
    const dataResponse = data.response[0];

    console.log(dataResponse);
    activeCases.innerText = dataResponse.cases.active;

    console.log(dataResponse);
    activeCases.innerText = dataResponse.cases.active;
    newCases.innerText = dataResponse.cases.new ? dataResponse.cases.new : 0;
    recoveredCases.innerText = dataResponse.cases.recovered;
    totalCases.innerText = dataResponse.cases.total;
    totalDeaths.innerText = dataResponse.deaths.total;
    totalTest.innerText = dataResponse.tests.total;
  }
});
