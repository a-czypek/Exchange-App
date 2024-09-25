# Multi-Currency Exchange Application
  This project is a comprehensive multi-currency exchange platform designed to provide real-time exchange rates, calculate currency conversions, and give users insights into global currency trends. The system automatically detects the user's local currency based on their geographic location and compares it with other foreign currencies, providing a seamless user experience.
  The application is built using modern web development technologies, and it incorporates external APIs for real-time currency and location data, making it a practical tool for travelers, financial analysts, or anyone needing up-to-date currency exchange information.

## Project Description
The objective of the Multi-Currency Exchange project is to deliver a highly interactive and responsive currency conversion platform that automatically identifies the user’s local currency through their IP address and provides real-time exchange rates for global currencies. Users can access exchange rates for top international currencies, use a currency conversion calculator, and view detailed information on a wide range of currencies from around the world.

### Key Features and Steps in Development:
1.**Location-Based Currency Detection:**
- The application uses the **IPInfo API** to determine the user's geographic location and then fetches the associated local currency. This feature ensures the application is personalized to the user without manual input of their country or currency.
  
2.**Real-Time Currency Exchange Rates:**
- The **ExchangeRate API** is employed to retrieve the latest currency exchange rates. Users can compare their local currency against major foreign currencies and also access a comprehensive list of all available currency rates.
  
3.**Interactive Currency Tools:**
- **Top Currencies Overview:** Users can see exchange rates for a pre-selected list of the most traded currencies (USD, EUR, JPY, etc.), allowing for quick comparisons between the user’s local currency and these top foreign currencies.
- **Currency Conversion Calculator:** This tool enables users to perform real-time calculations between the user’s local currency and other foreign currencies, making the platform highly functional for real-world applications like travel budgeting or international shopping.
- **All Currencies View:** A detailed breakdown of all available currencies and their exchange rates, with the option to toggle between different views and return to the main screen.
  
### Development Process:
The following steps outline the key stages in the development of the application:

1.**Data Collection via APIs:**
- Fetching the user’s location data using the **IPInfo API**.
- Collecting real-time exchange rate data from the **ExchangeRate API**.
  
2.**Data Preprocessing:**
- Parsing JSON responses from the APIs to extract essential information such as the user's country, local currency code, and currency conversion rates.
- Error handling and data validation ensure that if data cannot be fetched, appropriate error messages are displayed to the user.
  
3.**User Interface and Interaction Design:**

- A clean, modular design was implemented using **React**. Components like **InteractiveExchange**, **TopCurrencies**, and **CurrencyCalculator** manage specific parts of the user interface, ensuring the app is easy to navigate and use.
- The application’s state management allows for seamless transitions between different views (e.g., toggling between top currencies and all currencies).
  
4. **User-Driven Features:**
- Allowing users to switch between a summarized view (e.g., top global currencies) and a detailed view of all available currencies.
- Enabling quick calculations between different currencies using the calculator feature.
## Technologies Used:
- **React:** A JavaScript library for building the user interface. React was chosen for its modular component-based architecture, making it easy to manage complex interactions and state.
- **JavaScript (ES6+):** The core programming language used to handle API requests, user inputs, and data processing.
- **CSS:** Used for styling the components, ensuring a clean and responsive design across different device sizes.
- **APIs:**
  - **IPInfo API:** Used for determining the user’s location based on their IP address.
  - **ExchangeRate API:** Provides up-to-date currency conversion rates.
- **Asynchronous Fetch:** Used to retrieve data from the APIs without blocking the user interface, ensuring a smooth and fast experience.
  
## How to Run the Application
To run the Multi-Currency Exchange Application locally on your machine, follow these steps:

1. **Install Dependencies:
- Ensure that you have **Node.js** and **npm** installed on your machine.
- Navigate to the project directory and run the following command to install the necessary dependencies:
  
      npm install
  
2.**Start the Application:**
- Once the dependencies are installed, run the application with the following command:

      npm start


- This will start the development server, and the application should be accessible at http://localhost:3000.
  
3.**Usage:**
- Upon loading the application, it will automatically detect your local currency based on your geographic location.
- You can then interact with the app by comparing your local currency with popular global currencies, performing currency conversions, or viewing all available currencies.
  
## Structure Overview
The project is organized into various components, each handling specific aspects of the application’s functionality:

1.**App.js:**
- The main container for the application. It manages the overall state of the app, including the local currency, exchange rates, and the display mode (top currencies vs. all currencies).
  
2.**InteractiveExchange.js:**
- Displays interactive exchange rate information between the user’s local currency and pre-defined foreign currencies (e.g., USD, EUR, GBP).
  
3.**TopCurrencies.js:**
-Lists the exchange rates for the most popular currencies globally, allowing the user to quickly compare rates.

4.**CurrencyCalculator.js:**
- A simple currency conversion tool where users can input amounts to convert between their local currency and other available currencies.
- 
5.**AllCurrenciesCard.js:**
- Provides a detailed breakdown of all available currencies and their corresponding exchange rates. Users can return to the main view from this component.
  
## Examples

![Zrzut ekranu 2024-09-25 192713](https://github.com/user-attachments/assets/eeed142d-f5c9-4a3b-87a8-6f2f086dc26a)
![Zrzut ekranu 2024-09-25 192754](https://github.com/user-attachments/assets/f67c253a-d56c-43f4-ac22-fdbb67651008)
![Zrzut ekranu 2024-09-25 192930](https://github.com/user-attachments/assets/7f14064b-bfd2-4573-a436-b4d6e1b97b3d)
![Zrzut ekranu 2024-09-25 192827](https://github.com/user-attachments/assets/d3d476d4-15ac-4ff2-a96f-838ab87cdd34)
