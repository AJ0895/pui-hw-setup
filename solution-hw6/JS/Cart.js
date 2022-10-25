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

// Attempting to retreive cart from localStorage on refresh or set to empty array at beginning
let cartItems= JSON.parse(localStorage.getItem("cart")) || [];

let finalCart = new Set();

//Total price initialization
let TotalPrice = 0.0;

//Function to calculate price
function calcPrice(basePrice,glazingPrice,packPrice) {
    return((basePrice+glazingPrice)*packPrice).toFixed(2);
}

for(let i=0; i<cartItems.length; i++){

    finalCart.add(cartItems[i]);

    let cartItem= document.getElementsByTagName("template")[0];
    let cartItemClone= cartItem.content.cloneNode(true);

    //Changing the Roll Name for each item in template
    cartItemClone.querySelector(".rollName").innerText= cartItems[i].type + " cinnamon roll";

    //Changing the Glazing Name for each item in template
    cartItemClone.querySelector(".glazeName").innerText="Glazing: " + cartItems[i].glazing;

    //Changing the Pack size for each item in template
    cartItemClone.querySelector(".packSize").innerText="Pack Size: " + cartItems[i].size;

    //Importing image from rollsData
    cartItemClone.querySelector(".imgstyle").src= rolls[cartItems[i].type].imageFile;


    //Adding information from the objects
    let glazingPrice = glazingPriceAdaptation[cartItems[i].glazing];
    let packPrice = packPriceAdaptation[cartItems[i].size];

    //Changing to float
    let rollPrice = parseFloat(calcPrice(cartItems[i].basePrice, glazingPrice, packPrice));

    //Changing price
    cartItemClone.querySelector(".price").innerText=rollPrice;

    //Total price
    TotalPrice = TotalPrice+rollPrice;
    document.querySelector(".T2").innerText = "$"+TotalPrice.toFixed(2);

    //-----Removing Items from the template------
    let c = cartItemClone.querySelector(".Productlist");
    cartItemClone.querySelector("button").onclick = (() => {
        c.remove();
        TotalPrice = (TotalPrice - rollPrice).toFixed(2);
        document.querySelector(".T2").innerText = "$"+TotalPrice;
        finalCart.delete(cartItems[i]);

        // Convert the finalCart from Set to Array, and then into String and saving it to localStorage (updating the localStorage)
        const updatedArray = Array.from(finalCart);
        const cartArrayString =  JSON.stringify(updatedArray);
        localStorage.setItem("cart", cartArrayString);

        console.log(localStorage.getItem("cart"));
    });

    document.querySelector(".onlyProducts").appendChild(cartItemClone);

}



