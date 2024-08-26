const car = "color:red" +"weight:800kg" + "mcdel:Bmw"
console.log(car)

const person = {

     firstName : "Rakib",
     lastname: "ahmed",
     age:20,
     phone: "0124587632",
     address:"Dhaka BAngladesh"


     
}
//uisng valu change and adding here
person.firstName = 'Raiyan'
person.lastname = 'Rana'
person.age = 30
person.phone =10101
person.gfnumber = " 787987878798 "
person.tmi = ' hello bangladesh'
person.kaka = " Ami sudu tmr jone basi bon"
person.address = ' Rangpur Bangladesh'
//uising valu delete here 
delete person.gfnumber
delete person.firstName
delete person.age
delete person.lastname


console.log('age' in person)

