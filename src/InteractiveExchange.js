import React, {useState} from "react";
import App from "./App";

const InteractiveExchange = ({localCurrency, foreignCurrencies, rates={}}) => {
    const [flip, setFlip] = useState(false);

    const handleFlip = () => {
        setFlip(prevFlip => !prevFlip);
    };

    console.log('Rates object:', rates);
    console.log('Foreign Currencies:', foreignCurrencies);

    return (
        <div className="interactive-exchange">
            <h2>Interactive Exchange</h2>
            <div className="currency-container">
                {foreignCurrencies && foreignCurrencies.length > 0 ? (
                    foreignCurrencies.map((foreignCurrency) => {
                        const localToForeignRate = rates[foreignCurrency];

                        if (!localToForeignRate) {
                            return (
                                <div key={foreignCurrency} className="currency-card">
                                    <h2>N/A</h2>
                                </div>
                            );
                        }

                        return (
                            <div key={foreignCurrency} className="currency-card">
                                <h2>
                                    {flip
                                        ? `1 ${localCurrency} = ${(localToForeignRate).toFixed(4)} ${foreignCurrency}`
                                        : `1 ${foreignCurrency} = ${(1 / localToForeignRate).toFixed(4)} ${localCurrency}`}
                                </h2>
                            </div>
                        );
                    })
                ) : (
                    <div>No currencies available.</div>
                )}
            </div>
            <button onClick={handleFlip}>
                {flip ? 'Click to see forward rates' : 'Click to see reverse rates'}
            </button>
        </div>
    );
};

export default InteractiveExchange;