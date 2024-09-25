import React, { useEffect, useState } from 'react';
import { apiKey } from './key';
import { IPapiKey } from "./IPapiKey";
import './App.css';
import InteractiveExchange from './InteractiveExchange';
import TopCurrencies from './TopCurrencies';
import CurrencyCalculator from './CurrencyCalculator';
import AllCurrenciesCard from "./AllCurrenciesCard";

const base_url = 'https://v6.exchangerate-api.com/v6';
const base_ip_url = 'https://ipinfo.io/json?token='

const App = () => {
    const [currencies, setCurrencies] = useState('');
    const [error, setError] = useState('');
    const [localCurrency, setLocalCurrency] = useState('');
    const [localCurrenciesRate, setLocalCurrenciesRate] = useState({});
    const [showAllCurrencies, setShowAllCurrencies] = useState(false);
    const foreignCurrencies = ['EUR', 'CHF', 'GBP', 'USD'];
    const topCurrencies = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'];

    const handleViewAllClick = () => {
        setShowAllCurrencies(true);
    };

    const handleBackClick = () => {
        setShowAllCurrencies(false);
    };

    const getLocalCurrency = async () => {
        try {
            const response = await fetch(`${base_ip_url}${IPapiKey}`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();

            if (data && data.country) {
                const countryCode = data.country;
                const countryResponse = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
                const countryData = await countryResponse.json();

                if (countryData && countryData[0] && countryData[0].currencies) {
                    const currencyCode = Object.keys(countryData[0].currencies)[0];
                    setLocalCurrency(currencyCode);
                    searchCurrencies(currencyCode);
                } else {
                    setError('Could not retrieve the currency for your location.');
                }
            } else {
                setError('Could not retrieve your location. Please check your settings.');
            }
        } catch (e) {
            console.error('Error fetching location or currency data: ', e);
            setError('An error occurred while fetching your location or currency. Please try again later.');
        }
    };

    useEffect(() => {
        getLocalCurrency();
    }, []);

    const searchCurrencies = async (currency) => {
        if (!currency) {
            setError('Please enter a valid currency code.');
            return;
        }
        try {
            setError('');
            const response = await fetch(`${base_url}/${apiKey}/latest/${currency}`);
            if (!response.ok) {
                throw new Error('Failed to fetch currency data. Network response was not ok.');
            }

            const data = await response.json();
            console.log('API response', data);

            if (data.result === "success") {
                console.log('Conversion Rates:', data.conversion_rates);
                setLocalCurrenciesRate(data.conversion_rates);
                setCurrencies(Object.entries(data.conversion_rates)
                    .map(([code, rate]) => ({
                        id: code,
                        name: code,
                        rate
                    })));
            } else if (data.result === "error") {
                setCurrencies([]);
                setError(`Error: ${data['error-type']}. Please check the currency code and try again.`);
            } else {
                setCurrencies([]);
                setError('No currencies found for the provided currency code.');
            }
        } catch (e) {
            console.error('Error fetching currency data: ', e);
            setError('An unexpected error occurred while fetching currency data. Please try again later.');
        }
    };

    return (
        <div className="App">
            <h1>Multi-Currency Exchange</h1>

            {error && <div className="error-message">{error}</div>}

            {!showAllCurrencies ? (
                <>
                    <InteractiveExchange
                        localCurrency={localCurrency}
                        foreignCurrencies={foreignCurrencies}
                        rates={localCurrenciesRate}
                    />

                    <div className="exchange-container">
                        <div className="top-currencies-block">
                            <TopCurrencies
                                topCurrencies={topCurrencies}
                                localCurrency={localCurrency}
                                rates={localCurrenciesRate}
                                onViewAllClick={handleViewAllClick}
                            />
                        </div>

                        <div className="calculator-block">
                            <CurrencyCalculator
                                rates={localCurrenciesRate}
                                localCurrency={localCurrency}
                                foreignCurrencies={Object.keys(localCurrenciesRate)}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <AllCurrenciesCard
                    rates={localCurrenciesRate}
                    localCurrency={localCurrency}
                    onBackClick={handleBackClick}
                />
            )}
        </div>
    );
};

export default App;