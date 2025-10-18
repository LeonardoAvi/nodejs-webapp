const request = require('supertest');
const app = require('../../app');


test('GET / responde 200 e contém Home link', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Bem-vindo');
});


test('GET /items mostra lista', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Lista de itens');
});