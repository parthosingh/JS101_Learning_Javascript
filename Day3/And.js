//AndOperator
//--> Any of the condition is false , you will get false value
//console.log( 5 < 7 && 4 > 3)
//console.log( 5 > 7 && 4 > 3)

let age = 25;
let haslicense = true;
let isInsured = false;
let canDrive = age >=18 && haslicense && isInsured;
console.log(canDrive);

let isLogged = true;
let isAdmin = true;
let canAccessAdminPanel = isLogged && isAdmin;
console.log(canAccessAdminPanel)

let isPremiumUser = true;
let hasValidSubscription = false;
let canAccessPremiumContent = isPremiumUser && hasValidSubscription;
console.log(canAccessPremiumContent)