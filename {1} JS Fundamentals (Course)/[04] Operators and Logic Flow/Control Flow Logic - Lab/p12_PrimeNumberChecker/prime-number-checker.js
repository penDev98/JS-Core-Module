function primeNumberChecker(number) {
    let prime = true;

    for (let i = 2; i < number; i++) {
        if(number % i === 0) {
            prime = false;
            break;
        }
    }

    return prime && (number > 1);
}