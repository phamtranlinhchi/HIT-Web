const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

//CAU 1
console.log('Menu');
console.log('1. Xem danh sach');
console.log('2. Them nguoi dung');
console.log('3. Xoa nguoi dung');
console.log('4. Cap nhat thong tin nguoi dung');
//cac ham
function showUsers(){
    console.log("Danh sach: ");
    console.log(users);
}
function addUser(newid, newname, newage, newgender, newmoney) {
    users.push({id: newid, name: newname, age: newage, gender: newgender,money: newmoney});
}
function deleteUser(id){
    for(let i=0; i<users.length; i++){
        if(users[i].id===id){
            users.splice(i, 1);
            break;
        }
    }
}
function updateUser(id, newname, newage, newgender, newmoney){
    for(let i=0; i<users.length; i++){
        if(users[i].id===id){
            users[i].name=newname;
            users[i].age=newage;
            users[i].gender=newgender;
            users[i].money=newmoney;
        }
    }
}

//lua chon
console.log("Chon 1: ");
showUsers();
console.log("Chon 2: ");
console.log("Da them id 5.");
addUser(5, "Chi Pham", 18, "female", 1500);
showUsers();
console.log("Chon 3: ");
console.log("Da xoa id 5.");
deleteUser(5);
showUsers();
console.log("Chon 4: ");
console.log("Da cap nhat id 4.");
updateUser(4, "Phuong Dao", 18, "female", 2500);
showUsers();

//CAU 2
addUser(users.length+1, "BroA", 15, "female", 2300);
addUser(users.length+1, "BroB", 18, "male", 2000);
console.log("Da them 2 nguoi vao danh sach.");
showUsers();
console.log("Thong ke: ");
var countmale=0, olderthan15=0, sumeven=0, rich=0, poor=0;
for(let i=0; i<users.length; i++){
    if(users[i].gender==="male"){
        ++countmale;
        users[i].gender="female";
    }
    if(users[i].age>15)
        ++olderthan15;
    if(users[i].id%2===0)
        sumeven += users[i].money;
    if(users[i].money>users[rich].money)
        rich=i;
    if(users[i].money<users[poor].money)
        poor=i;  
}
console.log(`Co ${countmale} nam, ${olderthan15} nguoi co tuoi lon hon 15 tuoi`);
console.log(`Tong tien nhung nguoi co id chan: ${sumeven}`);
console.log("Nguoi ngheo nhat la: ");
console.log(users[poor]);
console.log("Nguoi giau nhat la: ");
console.log(users[rich]);
console.log("Sau khi chuyen nhung nguoi co gioi tinh male thanh female: ");
console.log(users);





