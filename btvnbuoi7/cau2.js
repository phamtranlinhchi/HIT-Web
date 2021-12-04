const cong1donvi = (arr) => {
    return (Number(arr.join(''))+1).toString().split('');
}

digits1 = [1,2,3];
console.log(cong1donvi(digits1));

digits2 = [0];
console.log(cong1donvi(digits2));

digits3 = [9];
console.log(cong1donvi(digits3));
