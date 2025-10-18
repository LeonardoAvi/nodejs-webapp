const request = require('supertest');
const app = require('../../app');


test('fluxo criar item -> redireciona para /items', async () => {
    const res = await request(app)
        .post('/items')
        .send('name=TesteAce&description=Ace')
        .set('Content-Type', 'application/x-www-form-urlencoded');
    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe('/items');


    const list = await request(app).get('/items');
    expect(list.text).toContain('TesteAce');
});