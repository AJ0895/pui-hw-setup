//------------------------------HW5-----------------------------//

//Adding Glazing price
let glazingPriceAdaptation = {
    "Keep Original" : 0.0,
    "Vanilla Milk" : 0.0,
    "Sugar Milk" : 0.5,
    "Double Chocolate" : 1.5
}

//Adding Packing price 
let packPriceAdaptation = {
    1:1,
    3:3,
    6:5,
    12:10
}

//Creating a cart array
let cart=[];
let finalCart = new Set();

//Total price initialization
let TotalPrice = 0.0;

//Class initialization
class Roll {
    type;
    glazing;
    size;
    basePrice;

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//Objects are created 
let roll1= new Roll("Original","Sugar Milk",1,2.49);
let roll2= new Roll("Walnut","Vanilla Milk",12,3.49);
let roll3= new Roll("Raisin","Sugar Milk",3, 2.99);
let roll4= new Roll("Apple","Keep Original",3, 3.49);

//Adding the objects to the array cart
cart.push(roll1, roll2, roll3, roll4);

console.log(cart);

//Function to calculate price
function calcPrice(basePrice,glazingPrice,packPrice) {
    return((basePrice+glazingPrice)*packPrice).toFixed(2);
}

// function test(){
//     console.log("sdds");
// }

//Template made in HTML
//console.log(document.getElementsByTagName("template"));

for(let i=0; i<cart.length; i++){

    finalCart.add(cart[i]);

    let cartItem= document.getElementsByTagName("template")[0];
    let cartItemClone= cartItem.content.cloneNode(true);

    //Changing the Roll Name for each item in template
    cartItemClone.querySelector(".rollName").innerText= cart[i].type + " cinnamon roll";

    //Changing the Glazing Name for each item in template
    cartItemClone.querySelector(".glazeName").innerText="Glazing: " + cart[i].glazing;

    //Changing the Pack size for each item in template
    cartItemClone.querySelector(".packSize").innerText="Pack Size: " + cart[i].size;

    //Importing image from rollsData
    cartItemClone.querySelector(".imgstyle").src= rolls[cart[i].type].imageFile;


    //Adding information from the objects
    let glazingPrice = glazingPriceAdaptation[cart[i].glazing];
    let packPrice = packPriceAdaptation[cart[i].size];

    //Changing to float
    let rollPrice = parseFloat(calcPrice(cart[i].basePrice, glazingPrice, packPrice));

    //Changing price
    cartItemClone.querySelector(".price").innerText=rollPrice;

    //Total price
    TotalPrice = TotalPrice+rollPrice;
    document.querySelector(".T2").innerText = "$"+TotalPrice;

    //-----Removing Items from the template------
    let c = cartItemClone.querySelector(".Productlist");
    cartItemClone.querySelector("button").onclick = (() => {
        c.remove();
        TotalPrice = (TotalPrice - rollPrice).toFixed(2);
        document.querySelector(".T2").innerText = "$"+TotalPrice;
        finalCart.delete(cart[i]);
        console.log(finalCart);
        
    });

    document.querySelector(".onlyProducts").appendChild(cartItemClone);

}



