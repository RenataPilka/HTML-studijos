const products = ['Laptop', 'Smartphone', 'Tablet', 'Smartwatch'];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' }
];

const emailAddresses = [];

for (let i = 0; i < users.length; i++) {
    emailAddresses.push(users[i].email);
}

console.log(emailAddresses);