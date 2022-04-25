function FirstReverse(str) {
    const splitString = str.split('');
    const reversedString = splitString.reverse().join('');
    return reversedString; 
}