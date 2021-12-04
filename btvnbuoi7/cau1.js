const khonglap = (str) => {
    let vitriklapdautien=-1;
    let lap={};
    for(let i=0; i<str.length; i++){
        if(lap.hasOwnProperty(str[i]))
            continue;
        if(str.indexOf(str[i],i+1) !== -1){
            lap[str[i]]=1;
        }
        else{
            vitriklapdautien=i;
            break;
        }
    }
    return vitriklapdautien;
}

str1 = "tranduong";
console.log(khonglap(str1));

str2 = "hitclubhiuhiu"
console.log(khonglap(str2));

str3 = "aabb"
console.log(khonglap(str3));
