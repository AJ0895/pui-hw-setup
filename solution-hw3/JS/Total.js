//------------Populating Options-------------//

//creating a class for glazing options
class GlazingOptions {
    glazingName;
    glazingPrice;

    constructor(glaze,glazePrice) {
        this.glazingName=glaze;
        this.glazingPrice=glazePrice;
    }
}

//creating objects of class GlazingOptions
let keepOrg= new GlazingOptions("Keep Original",0.00);
let sugarMlk= new GlazingOptions("Sugar Milk",0.00);
let vanillaMlk= new GlazingOptions("Vanilla Milk",0.50);
let doubChoc= new GlazingOptions("Double Chocolate",1.50);

//arrays for glazing
let glazingArray=[keepOrg,sugarMlk,vanillaMlk,doubChoc];

//function to dynamically populating glazing options
function addDropdownOptions1() {
    let glazePopulate=document.getElementById('glazingoptions');

    for(let i=0; i < glazingArray.length; i++) {
        let glazeItem= document.createElement('option');
        glazeItem.textContent=glazingArray[i].glazingName;
        glazePopulate.appendChild(glazeItem);
    }
}

//calling the function to populate glazing options
addDropdownOptions1();

//creating a class for pack sizes
class PackSize {
    packSize;
    packPrice;

    constructor(size,packPrice){
        this.packSize=size;
        this.packPrice=packPrice;
    }
}

//create objects of class PackSize
let one= new PackSize(1, 1);
let three= new PackSize(3,3);
let six=new PackSize(6,5);
let twlve=new PackSize(12,10);

//arrays for packsize
let packArray=[one,three,six,twlve];


//function to dynamically populating pack size options
function addDropdownOptions2() {
    let pricePopulate=document.getElementById('packSize');

    for(let j=0; j<packArray.length; j++) {
        let priceItem= document.createElement('option');
        priceItem.textContent=packArray[j].packSize;
        pricePopulate.appendChild(priceItem);
    }
}

//calling the function to populate glazing options
addDropdownOptions2();

//------------Price calculation-------------//

const basePrice=2.49;
let pChange=1;
let gChange=0;
let finalPrice=0;

function onOptionsChange(element) {
    console.log('Its working!');
    const change = element.value;

    //Check if the change is in glazing name
    for(let i=0;i<glazingArray.length;i++){
        if (glazingArray[i].glazingName==change){
            gChange=glazingArray[i].glazingPrice;
            // console.log(gChange);
        }
    }

    //Check if the change is in pack size
    for(let i=0;i<packArray.length;i++){
        if (packArray[i].packSize==change) {
            pChange=packArray[i].packPrice;
            // console.log(pChange);
        }

    }

    //(basePrice + glazingPrice) * packPrice. 

    finalPrice=((basePrice+ gChange)* pChange).toFixed(2);
    console.log(finalPrice);

    document.getElementById('totalPrice').textContent=finalPrice;
}