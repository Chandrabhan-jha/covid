// Importing required module
const axios = require("axios");

// Your RapidAPI key
const rapidAPIKey = "States"; // Replace 'Your_RapidAPI_Key' with your actual RapidAPI key

// Axios request options
const options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  headers: {
    "x-rapidapi-key": rapidAPIKey,
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
};

// Function to fetch and display COVID-19 statistics
async function fetchCovidStatistics() {
  try {
    // Making API request
    const response = await axios.request(options);

    // Extracting data from response
    const statistics = response.data.response;

    // Displaying statistics for each country
    statistics.forEach((countryStats) => {
      console.log(`Country: ${countryStats.country}`);
      console.log(`Total Cases: ${countryStats.cases.total}`);
      console.log(`Total Deaths: ${countryStats.deaths.total}`);
      console.log(`Total Tests: ${countryStats.tests.total}`);
      console.log("--------------------------------------");
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Calling the function to fetch and display COVID-19 statistics
fetchCovidStatistics();
