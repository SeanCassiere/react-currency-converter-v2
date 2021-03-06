export const calculateTotalConversionAmount = (value, currency, rates) => {
	const converted_amount_raw = value + rates[currency];
	const converted_amount = converted_amount_raw.toFixed(2);
	return converted_amount;
};
