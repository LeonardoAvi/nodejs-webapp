// Este módulo "mocka" a comunicação com uma API externa.
// Em um caso real, você poderia usar axios para chamar um endpoint remoto.
// Aqui lemos mock_data.json e simulamos atraso.


const fs = require('fs');
const path = require('path');


const dbPath = path.join(__dirname, '..', 'mock_data.json');


function delay(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}


async function fetchItems() {
await delay(50); // simula latência
const raw = fs.readFileSync(dbPath, 'utf8');
const data = JSON.parse(raw);
return data.items;
}


async function createItem(item) {
await delay(50);
const raw = fs.readFileSync(dbPath, 'utf8');
const data = JSON.parse(raw);
const id = (data.items.length + 1).toString();
const newItem = { id, ...item };
data.items.push(newItem);
fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
return newItem;
}


module.exports = { fetchItems, createItem };