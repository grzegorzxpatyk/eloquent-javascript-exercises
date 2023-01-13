function minimumOfTwo(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') return undefined;
    if (x === y) return 'equal';
    if (x < y) return x;
    if (y < x) return y;
}

export default minimumOfTwo;