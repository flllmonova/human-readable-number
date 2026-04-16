module.exports = function toReadable(number) {
  const n = number;
  const store = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
  };

  if (n > 999 || n < 0) {
    return 'Not implemented yet';
  }

  if (n === 0) {
    return store[n];
  }

  const result = [];

  const hundreds = Math.floor(n / 100);
  const tens = Math.floor((n % 100) / 10) * 10;
  const units = Math.floor(n % 10);
  const tensAndUnits = Math.floor(n % 100);

  if (hundreds > 0) {
    result.push(store[hundreds], store[100]);
  }

  if (tensAndUnits > 19) {
    result.push(store[tens]);
    if (units !== 0) {
      result.push(store[units]);
    }
  } else if (tensAndUnits !== 0) {
    result.push(store[tensAndUnits]);
  }

  return result.join(' ');
};
