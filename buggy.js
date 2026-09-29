// buggy.js

function calculateOrder(items, discountCode, taxRate = 0.18) {
    if (!Array.isArray(items) || items.length === 0) {
        throw new Error("Order must contain at least one item");
    }

    const discountRates = {
        SAVE10: 0.10,
        SAVE20: 0.20,
        SAVE30: 0.30
    };

    const discountRate = discountRates[discountCode] || 0;

    // Calculate subtotal
    const subtotal = items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    // BUG: Discount is calculated correctly,
    // but later it is added instead of subtracted.
    const discount = subtotal * discountRate;

    // BUG: Tax should be calculated AFTER discount.
    const tax = subtotal * taxRate;

    // Free shipping for orders of 1000 or more.
    // BUG: The condition is reversed.
    const shipping = subtotal >= 1000 ? 100 : 0;

    // BUG: Discount is added instead of subtracted.
    // BUG: Shipping logic is also incorrect.
    const total = subtotal + discount + tax + shipping;

    return {
        subtotal,
        discount,
        tax,
        shipping,
        total
    };
}


// Example order
const items = [
    {
        name: "Keyboard",
        price: 800,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 400,
        quantity: 1
    }
];

const result = calculateOrder(items, "SAVE10");

console.log("Order Summary");
console.log("----------------");
console.log("Subtotal:", result.subtotal);
console.log("Discount:", result.discount);
console.log("Tax:", result.tax);
console.log("Shipping:", result.shipping);
console.log("Total:", result.total);
