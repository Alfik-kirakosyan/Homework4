//Homework 4

//Task 1

//Create a function that determines whether a shopping order is eligible for free shipping. An
//order is eligible for free shipping if the total cost of items purchased exceeds $50.00


Object.prototype.freeShipping = function(obj) {
    const cost = [...Object.values(obj)].reduce((acc, el) => acc + el, 0);
return cost > 50 ? true : false;
}


//Task 2

//Given a word, create an object that stores the indexes of each letter in an array.
//  ● Make sure the letters are the keys.
//  ● Make sure the letters are symbols.
//  ● Make sure the indexes are stored in an array and those arrays are values

    Object.prototype.mapLetters = function(str) {
      const result = {};

      [...str].forEach((el, index) => {
        if (result.hasOwnProperty(el)) {
          return result[el].push(index)
        }
      return result[el] = [index]
    })

      return result
    }

    console.log(mapLetters("dodo"))





//Task 3

//Create a TV() constructor with properties like brand, channel and volume.
//  ● Specify brand in a constructor parameter. Channel should be 1 by default. Volume
//  should be 50 by default.
//  ● Add methods to increase and decrease volume. Volume can't never be below 0 or
//  above 100.
//  ● Add a method to set the channel. Let's say the TV has only 50 channels so if you try
//  to set channel 60 the TV will stay at the current channel.
//  10.07.2022
//  ● Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint:
//  consider using it from the constructor).
//  ● It's useful to write a status that returns info about the TV status like: "Panasonic
//  at channel 8, volume 75".


function TV(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  
  TV.prototype.setVolume = function(vol) {
    if (vol > 0 || vol <= 100) {
      return this.volume = vol;
    }
    return "Volume can't never be below 0, above 100 or undefined "
  };
  
  TV.prototype.setChannel = function(chan) {
    if (chan < 1 || chan > 50) {
      return this.channel
    }
    return this.channel = chan;
  };
  
  TV.prototype.reset = function() {
    this.channel = 1;
    this.volume = 50
  };
  
  TV.prototype.status = function() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
  }
  






//Task 4

// Create a Circle() constructor that takes the radius as a single argument and has the
// following properties and methods:
// ● .radius
// ● .diameter
// ● .getC() (get circumference)
// ● .getA() (get area)

function Circle(radius) {
  this.radius = radius;
  this.diameter = 2 * radius;
  this.getC = () => {
  	return Math.round((2 * Math.PI * this.radius) * 100) / 100;
  }
  this.getA = () => {
  	return Math.round((Math.PI * this.radius**2) * 100) / 100
  }
}


//Task 5

// Create a constructor CoffeeShop, which has three properties:
// ● name : a string (basically, of the shop)
// ● menu : an array of items (of object type), with each item containing the item (name of
// the item), type (whether food or a drink) and price.
// ● orders : an empty array
// and seven methods:
// ● addOrder: adds the name of the item to the end of the orders array if it exists on the
// menu. Otherwise, return "This item is currently unavailable!"
// ● fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If
// the orders array is empty, return "All orders have been fulfilled!"
// ● listOrders: returns the list of orders taken, otherwise, an empty array.
// ● dueAmount: returns the total amount due for the orders taken.
// ● cheapestItem: returns the name of the cheapest item on the menu.
// ● drinksOnly: returns only the item names of type drink from the menu.
// ● foodOnly: returns only the item names of type food from the menu

class CoffeeShop {
	constructor(name, menu, orders){
		this.name = name
  	this.menu = menu
  	this.orders = orders
  }
  
  addOrder(item) {
  		return this.menu.map((el) => {
      	if(el.itemName === item){
        	this.orders.push(item);
            console.log("Order added!")
        }
      })
  }
  fulfillOrder() {
		if(this.orders.length === 0) {
  		return "All orders have been fulfilled!"
  	}
    console.log(`The ${this.orders[this.orders.lenght - 1]} is ready!`)
    this.orders.pop()
  }
  listOrders() {
		return this.orders
	}
  dueAmount() {
  	return this.menu.filter(itm => {
        if(this.orders.includes(itm.itemName)){
            return itm.price
        }
    }).reduce((acc, el) => acc + el.price, 0) 
  }
  cheapestItem() {
      return this.menu.reduce((a, b) => Math.min(a.price, b.price))
  }
  drinksOnly() {
      let result = [];
      this.menu.map(item => {
          if(item.type === "drink"){
              result.push(item.itemName)
          }
      })
      return result
  }
  foodOnly() {
      let result = [];
      this.menu.map(item => {
          if(item.type == "food"){
            result.push(item.itemName)
          }
      })
      return result
  }
}

const shop1 = new CoffeeShop("shop", [
	{
      	itemName: "coffee",
    	type: "drink",
        price: 50    
	},
    {
      	itemName:"tea",
        type: "drink",
        price: 250
    }
], [])

shop1.addOrder("tea")
shop1.drinksOnly()



















