import { useState, useEffect } from 'react';

const CurrencyCalculator = ({ rates, localCurrency, foreignCurrencies }) => {
    const [sourceCurrency, setSourceCurrency] = useState(localCurrency);
    const [targetCurrency, setTargetCurrency] = useState(foreignCurrencies.length > 0 ? foreignCurrencies[0] : localCurrency);
    const [amount, setAmount] = useState('');
    const [converted, setConverted] = useState('');

    useEffect(() => {
        setSourceCurrency(localCurrency); // Aktualizuj walutę źródłową, jeśli lokalna waluta się zmieni
    }, [localCurrency]);

    const handleConvert = () => {
        const numericAmount = parseFloat(amount);

        if (isNaN(numericAmount) || numericAmount <= 0) {
            setConverted('Invalid amount');
            return;
        }

        if (sourceCurrency === targetCurrency) {
            setConverted(`${numericAmount.toFixed(2)} ${targetCurrency}`);
            return;
        }

        const sourceToLocalRate = rates[sourceCurrency];
        const targetToLocalRate = rates[targetCurrency];

        if (sourceToLocalRate && targetToLocalRate) {
            const conversionRate = targetToLocalRate / sourceToLocalRate;
            const result = (numericAmount * conversionRate).toFixed(2);
            setConverted(`${result} ${targetCurrency}`);
        } else {
            setConverted('Conversion rate not available');
        }
    };

    const handleSwapCurrencies = () => {
        const tempCurrency = sourceCurrency;
        setSourceCurrency(targetCurrency);
        setTargetCurrency(tempCurrency);
        setConverted('');
    };

    const handleSourceChange = (e) => {
        setSourceCurrency(e.target.value);
    };

    const handleTargetChange = (e) => {
        setTargetCurrency(e.target.value);
    };

    if (!localCurrency) {
        return <div>Loading...</div>;
    }

    return (
        <div className="currency-calculator">
            <h2>Currency Calculator</h2>
            <div className="form-group">
                <label htmlFor="sourceCurrency">From:</label>
                <select id="sourceCurrency" value={sourceCurrency} onChange={handleSourceChange}>
                    {[localCurrency, ...foreignCurrencies].map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <div className="from-group">
                <label htmlFor="targetCurrency">To:</label>
                <select id="targetCurrency" value={targetCurrency} onChange={handleTargetChange}>
                    {[localCurrency, ...foreignCurrencies].map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={`Enter amount in ${sourceCurrency}`}
            />
            <button onClick={handleConvert}>Convert to {targetCurrency}</button>

            {/* Nowy przycisk do zamiany kierunku walut */}
            <button onClick={handleSwapCurrencies}>Swap currencies</button>

            {converted && <p>{`Converted: ${converted}`}</p>}
        </div>
    );
};

export default CurrencyCalculator;