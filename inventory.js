// Researched mdn for objects, arrays, and array methods
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//2
let shoeList = [];

//3
function Shoes(name, productCode, quantity, valuePerItem){
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
}

//4
let shoesOne = new Shoes("Nike", 01234, 1, 20);
let shoesTwo = new Shoes("New Balance", 12345, 2, 35);
let shoesThree = new Shoes("Mizuno", 89012, 1, 10);
let shoesFour = new Shoes("Asics", 34567, 4, 50);
let shoesFive = new Shoes("Adidas", 67890, 3, 15);

//5
shoeList.push(shoesOne, shoesTwo, shoesThree, shoesFour, shoesFive);

//6
let search = (shoeName) => {
    shoeList.forEach(item => {
        if(item.name === shoeName){
            console.log(`Yes, ${item.name} is a match!`);
        }
    });
}

//7
let lowestValue = () => {
    let newList = shoeList.map(item => {
        return item.valuePerItem;
    });

    let lowValue = Math.min(...newList);

    shoeList.forEach(item => {
        if(item.valuePerItem === lowValue){
            console.log(item.name);
        }
    });    
}

//8
let highestValue = () => {
    let values = shoeList.map(item => {
        return item.valuePerItem;
    });

    let highValue = Math.max(...values);

    shoeList.forEach(item => {
        if(item.valuePerItem === highValue){
            console.log(item.name);
        }
    }); 
}

//9
let editValuePerItem = (whichShoe, newValue) => {
    whichShoe.valuePerItem = newValue;

    console.log(`Value per item for ${whichShoe.name} has been updated to ${whichShoe.valuePerItem}!`);
}

//10
let ascending = () => {
    let sorted = shoeList.sort(function (nameOne, nameTwo) {
        if (nameOne.name < nameTwo.name) {
          return -1;
        }
        if (nameOne.name > nameTwo.name) {
          return 1;
        }
        return 0;
      });
      
      console.log(sorted);
}

//11
search("New Balance");
lowestValue();
highestValue();
editValuePerItem(shoesOne, 151);
ascending();

/*
    Thinking
        1. Note - lecturer said not to create a class, but an object instructor, and to create functions not methods, as the task instructions contained typos. This program is about shoes, 5 instances of those shoes, and the actions we can carry out on those instances.

        2. Empty array created named "shoeList" which will hold all of our "Shoe" instances.

        3. "Shoes" is our constructor function, which contains 4 parameters ("name", the name of our shoes, "productCode", unique shoe id, "quantity", how many shoes, and "valuePerItem", the cost of our shoes). Each prooperty is initialised inside our constructor function. 

        4. Five instances created from our "Shoes" constructor function. Each contains specific values relating to their name, productCode, quantity, and valuerPerItem.

        5. Each of these instances is pushed into our "shoeList" array.

        6. 5 arrow functions created: 
            a. search - search for a shoe within our shoeList.
            b. lowestValue - finds the shoe with the lowest value per item.
            c. highestValue - finds the shoe with the highest value per item.
            d. editValuePerItem - edits the valuePerItem property of an instance.
            e. ascending - orders our shoes in alphabetical order

        Our "search" arrow function has one parameter "shoeName", which is the name of the show we are searching for. The forEach() method is used to go through our "shoeList". In conjunction, a conditional statement checks if the value of "shoeName" matches any of the names in our "shoeList" array. If so, the user is notified.
        
        7. To find the lowest value there are 3 steps: first, we use .map() to loop through all our items in "shoeList", extract their "valuePerItem" and store in a new array named "newList". Next, we use Math.min() and pass in "newList" as an argument. The spread operator (...) is used to destructure our array so each item can be acessed by Math.min(). The result of this is stored in "lowValue". At this point, we have the lowest "valuePerItem" value, but we don't know which instance it belongs to. We use the same process as our "search" arrow function. This time, we check to see which object has the same value stored in "lowValue", and print the name of those shoes to the console. For the last process, we could have used a comparison function as a callback, like I have used in my "ascending" function, step 10 below, but wanted to try to see if there was a different way to achieve the same result. 

        8. The same process used as step 7 above. Math.min replaced by Math.max() instead to find the shoes with the highest value per item.

        9. Our "editValuePerItem" edits the "valuePerItem" property of any of our instances. This takes two parameters "whichShoe", this is the name of the instance the user wishes to change, and, "newValue", is the value they want to change in "valuePerItem". We use a template literal to output the change has been successful and the value has been changed. 

        10. Last arrow function, "ascending" outputs a new array of our "shoeList" in ascending order. Sort() is used on our "shoeList" array, taking a callback function as it's argument. This callback function has two parameters - "nameOne" and "nameTwo" whose values are passed in by sort(). We use a conditional statement to grab the name property of each object inside our "shoeList" array. The first name from "shoeList" is taken and compared against the second name in the next object inside "shoeList". If alphabetically it is lower "-1" is returned. A second if statement is used to check go through the same process, this time checking to see if "nameOne" is alphabetically higher than "nameTwo", then "1" is returned, otherwise "0". We need this function to work out where each object should be placed in our "sorted" array, which holds all of our "shoeList" objects ordered alphabetically.

        11. Calling and testing all of our arrow functions work as intended.

*/
