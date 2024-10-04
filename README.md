# Countries App

A React application that displays detailed information about various countries using the [Countries](https://countries.trevorblades.com/) API. The app features a sidebar for organized navigation and presents each country's name, flag, and reference photo.

## Features

- Displays information about different countries, including their name, flag, and reference photo.
- Sidebar for easy navigation between countries.
- Clean and responsive user interface.
- Utilizes GraphQL to fetch data from the API.

## Technologies Used

- *React*: Library for building user interfaces.
- *GraphQL*: Query language for APIs used to retrieve data.
- *CSS*: For styling and design of the application.
- *Axios*: For making HTTP requests.

## Installation

1. Clone the repository:

   git clone https://github.com/MiguelSarmientoo/countriesapp.git

2. Navigate to the project directory:

  cd countriesapp
  
3. Install the dependencies:

  npm install
  
## Usage

1. Start the application:
  
  npm start

2. Open your browser and visit http://localhost:3000 to view the application in action.

## Project Structure

countriesapp/
├── public/
│   ├── index.html
├── src/
│   ├── apollo/
│   │   └── apolloClient.js            # Apollo Client configuration for GraphQL
│   ├── components/
│   │   ├── CountryCard.js             # Component to display brief country information
│   │   ├── CountryDetails.js          # Component for detailed country information
│   │   ├── CountryList.js             # Component that lists all the countries
│   │   ├── SearchBar.js               # Search bar component for filtering countries
│   │   ├── SideBar.js                 # Sidebar component for navigation
│   │   ├── Vista1.js                  # Example of an additional view component
│   │   ├── Vista2.js                  # Example of another additional view component
│   ├── graphql/
│   │   └── queries.js                 # GraphQL queries for fetching data
│   ├── services/
│   │   └── unsplashService.js         # Service to fetch images from Unsplash API
│   ├── styles/
│   │   ├── CountryDetails.css         # Styles specific to the CountryDetails component
│   │   ├── CountryList.css            # Styles specific to the CountryList component
│   │   └── styles.css                 # Global styles for the application
│   ├── App.js                         # Main component of the application
│   ├── index.js                       # Entry point of the application
├── .env                               # Environment variables
├── .gitignore                         # Git ignore file
├── README.md                          # Project documentation
├── package-lock.json                  # Locked versions of installed packages
├── package.json                       # Project metadata and dependencies

## License

This project is licensed under the MIT License.
