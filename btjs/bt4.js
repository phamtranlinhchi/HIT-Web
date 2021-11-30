const takeEmail = (email) =>{
    let check=/[a-z0-9](\.?[a-z0-9]){8}@g(oogle)?mail\.com/g;
    return email.match(check);
};
const takePhoneNum = (num) =>{
    let check=/[0](\.?[0-9]){9}/g;
    return num.match(check);
};


//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex
const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
console.log(takeEmail(textEmail)); 

// - Lấy ra tất cả sdt trong đoạn text sau
// - Yêu cầu dùng regex
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";
console.log(takePhoneNum(textPhone)); 




