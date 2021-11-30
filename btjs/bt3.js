
function perfect(string){
    string=string.trim().toLowerCase().split(''); 
    for(let i=0; i<string.length; i++){
        if(string[i]===string[i+1] && string[i]===' '){ 
            string.splice(i, 1);
            --i;  
        }
        if(Number(string[i])){ 
            string.splice(i, 1);
            --i;  
        }
    }
    string=string.join('').split(' ').map(function(char) {
        return char.replace(char.charAt(0), char.charAt(0).toUpperCase());
    }).join(' ');
    return string;
}


const case1 = "    hOang Bui   ";
// -> Hoang Bui
console.log(perfect(case1));

const case2 = " hOANG      BUI   hOang     ";
console.log(perfect(case2));

const case3 = "23traN    dUOng23     ";
console.log(perfect(case3));
