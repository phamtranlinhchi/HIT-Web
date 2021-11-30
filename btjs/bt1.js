function demlap(nums) {
    // num.sort(); 
    // // num.sort(function(a, b){return a - b});
    // let count=0;
    // for(let i=0; i<num.length; i++){
    //     ++count;
    //     if(num[i]!==num[i+1]){
    //         console.log(`So ${num[i]} xuat hien ${count} lan`);
    //         count=0;
    //     }
    // }
    // console.log('\n');

    let map = {};
    for(const num of nums)
        map[num]=map.hasOwnProperty(nums)? ++map[num] : 1;
    return map;
}


//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
console.log(demlap(nums));

//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
console.log(demlap(nums1));

//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
console.log(demlap(nums2));



