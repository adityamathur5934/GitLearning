function calculateTotal(price, quantity) {
    const total = price * quantity;
    return total;
}

function applyDiscount(total, discount) {
    // Bug: discount is added instead of subtracted
    return total + (total * discount / 100);
}

function checkout(price, quantity, discount) {
    const total = calculateTotal(price, quantity);
    const finalPrice = applyDiscount(total, discount);

    console.log("Final Price:", finalPrice);
    return finalPrice;
}

checkout(1000, 2, 10);
