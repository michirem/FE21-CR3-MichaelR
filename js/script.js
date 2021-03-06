// Invoince calculator

function calculateInvoice (starterPrice, maindishPrice, dessertPrice,beveragePrice) {
    let sum = starterPrice + maindishPrice + dessertPrice + beveragePrice;

    return sum
}

// menu items and prices, passed as arguments to be logged in the console

let frenchFries = 4.90;
let tasty = 13.90;
let chocoColorsdelight = 3.90;
let coke = 3.20;

console.log(`The total is: ` + calculateInvoice(frenchFries,tasty,chocoColorsdelight,coke) + `€`);

// added 8 more variables and created 3 combinations

let classic = 12.90;
let blackJack = 15.90;
let oneBite = 18.90;
let sweetPotato = 5.90;
let strawberryDelight = 3.90;
let darkDesire = 4.40;
let greenSmoothie = 3.90;
let orangeJuice = 3.40;
let caramelZebra = 3.90;

console.log(`The total is: ` + calculateInvoice(sweetPotato,classic,strawberryDelight,orangeJuice) + `€`);
console.log(`The total is: ` + calculateInvoice(frenchFries,blackJack,darkDesire,greenSmoothie) + `€`);
console.log(`The total is: ` + calculateInvoice(sweetPotato,oneBite,caramelZebra,coke) + `€`);

// function for 10% discount for students on all items but drinks

function studentInvoice(starterPrice, maindishPrice, dessertPrice,beveragePrice) {
    let sumDiscounted = (starterPrice + maindishPrice + dessertPrice) * 0.9;
    let discount = sumDiscounted / 0.9 * 0.1;
    let invoice = sumDiscounted + beveragePrice;

    return [invoice, discount]
}

// console log total and discount

console.log(`The total is: ` + studentInvoice(sweetPotato,classic,strawberryDelight,orangeJuice)[0] + `€, 
            \nDiscount: ` + studentInvoice(sweetPotato,classic,strawberryDelight,orangeJuice)[1] + `€`);
console.log(`The total is: ` + studentInvoice(frenchFries,blackJack,darkDesire,greenSmoothie)[0] + `€, 
            \nDiscount: ` + studentInvoice(frenchFries,blackJack,darkDesire,greenSmoothie)[1] + `€`);
console.log(`The total is: ` + studentInvoice(sweetPotato,oneBite,caramelZebra,coke)[0] + `€, 
            \nDiscount: ` + studentInvoice(sweetPotato,oneBite,caramelZebra,coke)[1] + `€`);