// // Föräldrar sjunger och barnet lyssnar
// console.log("Blinka lilla stjärna");
// console.log("Blinka lilla stjärna");
// console.log("hur jag undrar var du är");
// console.log("fjärran lockar du min syn");
// console.log("likt en diamant i skyn");

// // barnet nynnar med
// console.log("Blinka lilla stjärna");
// console.log("Blinka lilla stjärna");
// console.log("hur jag undrar var du är");
// console.log("fjärran lockar du min syn");
// console.log("likt en diamant i skyn");

// // nu sjunger barnet helt själv
// console.log("Blinka lilla stjärna");
// console.log("Blinka lilla stjärna");
// console.log("hur jag undrar var du är");
// console.log("fjärran lockar du min syn");
// console.log("likt en diamant i skyn");

// This code is wet! Write Everything Twice
// eftersträva att er kod är dry! Don't Repeat Yourself

function twinkleTwinkle() {
    console.log("Blinka lilla stjärna");
    console.log("Blinka lilla stjärna");
    console.log("hur jag undrar var du är");
    console.log("fjärran lockar du min syn");
    console.log("likt en diamant i skyn");
}

twinkleTwinkle();
twinkleTwinkle();
twinkleTwinkle();


// deklarera en funktion
function doSomething(){
    console.log("Hello World!");
    console.log("Im doing something");
}

// anropa function
doSomething();
// cisar innehållet i funktionen
doSomething;

// parameter och argument
function square(num, num1){
    console.log(num * num1);
}
// anropar funktionen med två stycket argument
square(5, 6);

function sayHello(name){
    console.log("Well Hello There " + name );
}

sayHello("KIng");

function area(length, height){
    console.log("The area of: " + length + " and " + height + " is: " + length * height);  
}

area(5, 10);