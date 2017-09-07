export function calculate(number1, number2, sign) {
    if (isNaN(number1) || isNaN(number2)) {
        return 'Error';
    }
    switch (sign) {
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1 - number2;
            break;
        case ':':
            return number1 / number2;
            break;
        case '*':
            return number1 * number2;
            break;
        default:
        return '';
            break;
    }
}