const products = [   { id: 1, name: "Widget", price: 50, quantity: 120 },   
    { id: 2, name: "Gadget", price: 30, quantity: 80 },   
    { id: 3, name: "Doohickey", price: 100, quantity: 200 },   
    { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];

var discount= products.map((item)=>{
    if(item.quantity>100){
        return {id:item.id, name: item.name, price: item.price*0.9, quantity: item.quantity}
    }
    return item;
});

// console.log(discount[0]);

var discounted_products= discount.filter((item)=>{
    return item.quantity>100;
})

console.log(discounted_products[0]);
console.log(discounted_products[1]);


discounted_products.forEach((item)=>{
    console.log(`Product: ${item.name}, Price: ${item.price}`);
})
