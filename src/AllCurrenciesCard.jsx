import React, {useState} from 'react';

const AllCurrenciesCard = ({ rates, localCurrency, onBackClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const sortedCurrencies = Object.keys(rates).sort();

    const filteredCurrencies = sortedCurrencies.filter((currency) =>
        currency.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="all-currencies-page">
            <h2>All Currencies</h2>

            <input
                type="text"
                placeholder="Search currency..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="currency-search"
            />

            <div className="currency-list">
                {filteredCurrencies.map((currency) => (
                    <div key={currency} className="currency-item">
                        <p>
                            1 {currency} = {(1 / rates[currency]).toFixed(4)} {localCurrency}
                        </p>
                    </div>
                ))}
            </div>

            <button onClick={onBackClick} className="go-back-button">Go Back</button>
        </div>
    );
};

export default AllCurrenciesCard;