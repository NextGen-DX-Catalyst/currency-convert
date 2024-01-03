function currencyConverter(amount, fromCurrency, toCurrency) {
    // Dummy conversion rates for demonstration
    const rates = {
        "USD": 1,
        "EUR": 0.85,
        "GBP": 0.75
    };
    return (amount / rates[fromCurrency]) * rates[toCurrency];
}

function categorizeTransaction(amount) {
    // Simple categorization logic
    if (amount < 100) return 'Small Transaction';
    if (amount >= 100 && amount < 500) return 'Medium Transaction';
    return 'Large Transaction';
}

module.exports = {
    currencyConverter,
    categorizeTransaction
};
