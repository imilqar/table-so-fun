/** @param {number} index */
module.exports = function* (index) {
    const parsedIndex = parseInt(index,10);

    if (isNaN(parsedIndex)) throw new Error("initial index is not a number!")

    while (index >= 0) {
        yield index;
        index++;
    }
    return false;
}