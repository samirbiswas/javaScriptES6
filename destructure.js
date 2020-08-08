const information = { name :"Rain", address:"Dhaka",phone :123446, };

//console.log(information.phone);
//const address1 = information.address;
//const phone1 = information.phone;

const { address,phone } =information;


// console.log(address,phone);
// console.log(address);


const frindList= ["rahim", "karim","rasel", "kasem", "kabir"];

const [first,second,...third] = frindList;
console.log(third);



