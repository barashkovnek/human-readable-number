module.exports = function toReadable(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let res = ' ';

    let restForUnits = number % 10;
    let restForTens = number % 100;

    if (number === 0) {
        res = 'zero';
    } else if (number < 10) {
        res = units[number];
    } else if (number < 20) {
        res = teens[restForUnits];
    } else if (number < 100) {
        res = `${tens[Math.floor(number / 10)]} ${units[restForUnits]}`;
        if (number < 100 && number % 10 === 0) {
            res = tens[number / 10];
        }
    } else if (number < 1000) {
        res = `${units[Math.floor(number / 100)]} hundred ${tens[Math.floor(restForTens / 10)]} ${units[restForUnits]}`;
        if (number % 100 >= 10 && number % 100 < 20) {
            res = `${units[Math.floor(number / 100)]} hundred ${teens[restForTens % 10]}`;

        }
    }

    return res.replace(/ +/g, ' ').trim();
}
