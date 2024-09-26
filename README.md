# Multi-Currency Exchange Application

This project is a comprehensive platform offering real-time currency exchange rates, automatic detection of local currency based on the user's location, and a currency conversion tool. Developed using modern web technologies, it ensures a smooth and efficient experience for users such as travelers, financial analysts, or anyone needing up-to-date currency data.

## Key Features:
1.**Location-Based Currency Detection:**
Utilizes the IPInfo API to detect the user's geographic location and local currency automatically.

2.**Real-Time Exchange Rates:**
Integrates with the ExchangeRate API to provide up-to-date exchange rates for major global currencies.

3.**Interactive Currency Tools:**
- **Top Currencies Overview:** Quick comparisons between local and the most traded currencies (USD, EUR, JPY, etc.).
- **Currency Calculator:** Real-time currency conversion between the user's local and foreign currencies.
- **All Currencies View:** A detailed list of all available exchange rates with toggle options for easy navigation.
  
## Development Process:

1.**Data Collection & Processing:**
- IPInfo API for location detection.
- ExchangeRate API for real-time rates.
- JSON parsing and error handling.
  
2.**UI & Interaction:**
Built using React, the app has modular components (e.g., InteractiveExchange, TopCurrencies, CurrencyCalculator) to ensure smooth transitions between different views.

## Technologies Used:
- **React** for front-end development.
- **JavaScript** for handling API requests and logic.
- **CSS** for responsive styling.
- **APIs:** IPInfo and ExchangeRate for data retrieval.
  
### How to Run the App:
1. **Install Dependencies:**
Run npm install to install required packages.

2. **Start the App:**
Use npm start to launch the development server, accessible at http://localhost:3000.

## Project Structure:
- **App.js:** Manages global state, including local currency and exchange rates.
InteractiveExchange.js: Displays exchange rates for local vs. pre-defined foreign currencies.
- **TopCurrencies.js:** Shows exchange rates for popular global currencies.
- **CurrencyCalculator.js:** Allows real-time currency conversions.
- **AllCurrenciesCard.js:** Lists detailed exchange rates for all available currencies.
  
## Examples

![Zrzut ekranu 2024-09-25 192713](https://github.com/user-attachments/assets/eeed142d-f5c9-4a3b-87a8-6f2f086dc26a)
![Zrzut ekranu 2024-09-25 192754](https://github.com/user-attachments/assets/f67c253a-d56c-43f4-ac22-fdbb67651008)
![Zrzut ekranu 2024-09-25 192930](https://github.com/user-attachments/assets/7f14064b-bfd2-4573-a436-b4d6e1b97b3d)
![Zrzut ekranu 2024-09-25 192827](https://github.com/user-attachments/assets/d3d476d4-15ac-4ff2-a96f-838ab87cdd34)
