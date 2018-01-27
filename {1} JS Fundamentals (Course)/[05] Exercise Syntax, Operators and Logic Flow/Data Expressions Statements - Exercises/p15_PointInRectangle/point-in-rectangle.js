function pointInRectangle(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input;

    if(x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        return "inside";
    } else {
        return "outside";
    }
}