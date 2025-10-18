const fs = require('fs');
const path = require('path');
const api = require('../../services/externalApi');


const dbPath = path.join(__dirname, '..', '..', 'mock_data.json');


beforeEach(() => {
    // resetar mock_data.json para estado conhecido
    const seed = { items: [ { id: '1', name: 'Seed', description: 'Seed' } ] };
    fs.writeFileSync(dbPath, JSON.stringify(seed, null, 2));
});


test('fetchItems retorna array', async () => {
    const items = await api.fetchItems();
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
});


test('createItem adiciona item', async () => {
    const newItem = await api.createItem({ name: 'Novo', description: 'Desc' });
    expect(newItem).toHaveProperty('id');
    const items = await api.fetchItems();
    expect(items.find(i => i.id === newItem.id)).toBeDefined();
});