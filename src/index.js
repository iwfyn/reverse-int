module.exports = function reverse(n) {
    let result = [];
    let nArr = n.toString().split("");
    for (let i = 0; i < nArr.length; i++) {
        result.unshift(nArr[i]);
    }
    return parseInt(result.join(""));
};
