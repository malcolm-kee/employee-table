/**
 * @todo provide fallback when Intl.NumberFormat is not available.
 */
const formater = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatMoney = (amount: number): string => formater.format(amount);
