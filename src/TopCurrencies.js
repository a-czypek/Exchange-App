import React from 'react';

const TopCurrencies = ({ topCurrencies, localCurrency, rates, onViewAllClick }) => {
    if (!localCurrency) {
        return <div>Loading...</div>;
    }

    return (
        <div className="top-currencies">
            <h2>Top Currencies</h2>
            <button className="view-all-button" onClick={onViewAllClick}>
                View All Currencies
            </button>
            <div className="top-currencies-container">
                {topCurrencies.map((currency) => {
                    const rate = rates[currency];
                    return (
                        <div key={currency} className="currency-card">
                            <h3>{currency}</h3>
                            {rate ? (
                                <p>1 {currency} = {(1 / rate).toFixed(4)} {localCurrency}</p>
                            ) : (
                                <p>N/A</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopCurrencies;