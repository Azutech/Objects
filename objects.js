/**
     
Using the umbrella example from the class slide, see if you can follow the example open() method and create the close() method.

const umbrella = {
 color: "pink",
 isOpen: false,
 open: function() {
   if (umbrella.isOpen === true) {
     return "The umbrella is already opened!";
   } else {
     umbrella.isOpen = true;
     return "Julia opens the umbrella!";
   }
  }
};

 */

const umbrella = {
    color: "blue",
    isOpen: true,
    open: function () {
      if (umbrella.isOpen === true){
        return "The umbrella is opened!";
      } else { 
         umbrella.isOpen = true;
         return "Emmanuel opened the umbrella!";
  
      }
    },
  
    close: function() {
          if(umbrella.isOpen === false) {
              return "The umbrella is already closed!";
          } else {
              umbrella.isOpen = false;
              return "Julia closed the umbrella";
          }
      }
  
  }
  console.log(umbrella)

  /**
   * 
  Create a breakfast object to represent the following menu item:

The Lumberjack - $9.95
eggs, sausage, toast, hashbrowns, pancakes
The object should contain properties for the name, price, and ingredients.

/*
* Programming Quiz: Menu Items
* Create an object named `breakfast`.
* The object should contain properties for the `name`, `price`, and `ingredients`.
* Print the entire object on the console
your code goes here
*/

var breakfast = {
    name: "Biggs Breakfast",
    price : "$9.99",
    ingredients : ["eggs","sausage","toast","hashbrowns","pancakes"]
    
  }
  console.log(breakfast) 

  /**
   const savingsAccount = {
 balance: 1000,
 interestRatePercent: 1,
 deposit: function addMoney(amount) {
   if (amount > 0) {
     savingsAccount.balance += amount;
   }
 },
 withdraw: function removeMoney(amount) {
   var verifyBalance = savingsAccount.balance - amount;
   if (amount > 0 && verifyBalance >= 0) {
     savingsAccount.balance -= amount;
   }
 }
};
add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.
/*
* Programming Quiz: Bank Accounts 1
*/
 
   
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary:function  printAccountSummary() {
        return "Welcome!\n" +  "Your balance is currently " + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + " %"
    }
};

console.log(savingsAccount.printAccountSummary());




/**
 * 4. Using the object from exercise 3, answer the following quiz question:
Which of the following are valid ways to access properties and call methods from the savingsAccount object?

 */

savingsAccount.balance;
savingsAccount[balance];


/**
  Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1


 */



var facebookProfile = {
    name:"Emmanuel Onugha",
    friends:403,
    messages:["hello","good morning"],
     postMessage : function(message) {
        return facebookProfile.messages.push(message);
    } ,
    deleteMessage : function(index) {
        var remove= facebookProfile.messages.splice(index,1);
        return remove
    },
    addFriend : function() {
        return facebookProfile.friends +=1;
    } ,
    removeFriend : function () {
        return facebookProfile.friends -= 1;
    }
    
};
console.log(facebookProfile.friends) 


/**
  Here is an array of donut objects.

const donuts = [
 { type: "Jelly", cost: 1.22 },
 { type: "Chocolate", cost: 2.45 },
 { type: "Cider", cost: 1.59 },
 { type: "Boston Cream", cost: 5.99 }
];
Use the forEach() method to loop over the array and print out the following donut summaries using console.log.
Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each

 */
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(snack){
    console.log(snack.type + " donuts cost $"+snack.cost+" each");

})
  