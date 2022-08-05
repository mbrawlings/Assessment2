///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(acc, element) {return acc + element.price}, 0)
//console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return (cartTotal * (tax+1)) - couponValue
}
console.log(calcFinalPrice(20,2,.06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    4 things that would be good to know about a customer would be ; age, hunger level, dietary restrictions, food preferences
    Age because then you can recammend certain alcohol, or not
    Hunger level to guage how large of a meal they might want (1-5 scale, 1 being not hungry and 5 being very hungry)
    Dietary restrictions so you know if they are allergic to anyting or can't each lactoce, gluten, etc
    Food preferences so you know if they are looking for something with red meat, veggies, fish, protein, carbs, etc
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    age: 52,
    hunger: 4,
    restrictions: ['gluten', 'lactose', 'peanuts'],
    preferences: ['meat', 'salad']
}
