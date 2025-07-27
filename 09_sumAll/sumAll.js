const sumAll = function(a , b) {
    if(a < 0 || b < 0) return 'ERROR' 
    if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    let array = [];
    if(b > a){
        for (let i = a; i <= b; i ++){
        array.push(i);
    }
    } else if(a > b) {
        for (let i = a; i >= b; i --){
        array.push(i);
    }
    }
    return array.reduce((acc, ele) => acc + ele)
};


// Do not edit below this line
module.exports = sumAll;
