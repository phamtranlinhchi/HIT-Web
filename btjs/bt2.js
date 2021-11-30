const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 }
];

console.log('Menu');
console.log('1. Xem danh sach');
console.log('2. Them nguoi dung');
console.log('3. Xoa nguoi dung');
console.log('4. Cap nhat thong tin nguoi dung');
const showUsers = (users) => console.log(users);
// function showUsers(){
//     console.log("Danh sach: ");
//     console.log(users);
// }
const addUser = (user) => users.push(user);
// function addUser(newid, newname, newage, newgender, newmoney) {
//     users.push({id: newid, name: newname, age: newage, gender: newgender,money: newmoney});
// }
const deleteUser = (userID) => {
    return users.filter((user) => user.id !== userID);
};
// function deleteUser(id){
//     for(let i=0; i<users.length; i++){
//         if(users[i].id===id){
//             users.splice(i, 1);
//             break;
//         }
//     }
// }
const updateUser = (userID, body) => {
    return users.map((user) => 
    user.id===userID ? {...user, ...body} : user
    );
};
// function updateUser(id, newname, newage, newgender, newmoney){
//     for(let i=0; i<users.length; i++){
//         if(users[i].id===id){
//             users[i].name=newname;
//             users[i].age=newage;
//             users[i].gender=newgender;
//             users[i].money=newmoney;
//         }
//     }
// }

const user = { id: 5, name: "Chi Pham", age: 18, gender: "female", money: 1500 };


console.log("Chon 1: ");
showUsers(users);
console.log("Chon 2: ");
console.log("Da them id 5.");
addUser(user);
showUsers(user);
console.log("Chon 3: ");
console.log("Da xoa id 5.");
deleteUser(5);
showUsers(users);
console.log("Chon 4: ");
console.log("Da cap nhat id 4.");
console.log(updateUser(4, user));
//CAU 2
// addUser(users.length+1, "BroA", 15, "female", 2300);
// addUser(users.length+1, "BroB", 18, "male", 2000);
// console.log("Da them 2 nguoi vao danh sach.");
console.log("Thong ke: ");
// var countmale=0, olderthan15=0, sumeven=0, rich=0, poor=0;
// for(let i=0; i<users.length; i++){
//     if(users[i].gender==="male"){
//         ++countmale;
//         users[i].gender="female";
//     }
//     if(users[i].age>15)
//         ++olderthan15;
//     if(users[i].id%2===0)
//         sumeven += users[i].money;
//     if(users[i].money>users[rich].money)
//         rich=i;
//     if(users[i].money<users[poor].money)
//         poor=i;  
// }
// console.log(`Tong tien nhung nguoi co id chan: ${sumeven}`);
// console.log("Nguoi ngheo nhat la: ");
// console.log(users[poor]);
// console.log("Nguoi giau nhat la: ");
// console.log(users[rich]);
// console.log("Sau khi chuyen nhung nguoi co gioi tinh male thanh female: ");
// console.log(users);
const staUsers = (users) => {
    const stat = { nam:0, teen: 0};
    users.map((user) => {
        if(user.gender === 'male') ++stat.nam;
        if(user.age >=15) ++stat.teen;
    });
    return stat;
};

const calcTotalMoney = (users) => {
    return users.reduce(
        (acc, { id, money }) => (id % 2 === 0 ? acc + money : acc),
        0
    );
};

const female = (users) => {
    return users.map((user) => {
            user.gender="female";
            return user;
    });
};

console.log(`Co ${staUsers(users).nam} nam, ${staUsers(users).teen} nguoi co tuoi lon hon 15 tuoi`);
console.log(`Tong tien: ${calcTotalMoney(users)}`);
console.log(female(users));


