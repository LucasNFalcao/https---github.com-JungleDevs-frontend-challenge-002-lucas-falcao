

const totalSum = document.querySelector(".totalSum");
totalSum.textContent = calculateTotal().toString();



/* Object and Functions of the program */

let item = class{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.total = price * quantity;
    }

    plusItem = (item) => {
        return (item.total += item.price);
    }

    minusItem = (item) => {
        return (item.total -= item.price);
    }

}

function openAddItem() {
    const newItemForAdd = document.querySelector(".newItemForAdd");
    newItemForAdd.style.display = 'flex';
}

function closeAddItem() {
    const newItemForAdd = document.querySelector(".newItemForAdd");
    if(newItemForAdd.style.display != 'none');
    newItemForAdd.style.display = 'none';
}

let calculateTotal = () => {
    return 0;
}
