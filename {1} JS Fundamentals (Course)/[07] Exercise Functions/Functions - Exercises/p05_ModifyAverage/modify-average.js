function modifyAverage(num) {
    let numStr = String(num);

    let getAverage = (numString) => numStr.split("").map(Number).reduce((a,b) => a += b) / numStr.length;

    while(getAverage(numStr) <= 5) {
        numStr += "9";
    }

    return numStr;
}