const app = require("../../index");
const supertest = require('supertest');
const api = supertest(app)

test('api calendar are return as json', async () => {
    await api
        .get('/api/calendar')
        .expect(402)
        .expect('Content-Type', /application\/json/)
})

test('Search for two users', async () => {
    const response = await api.get('/api/calendar/usersbyname/j')
    expect(response.body).toHaveLength(2);
})

test('the first user is about midudev', async () => {
    const response = await api.get('/api/calendar/usersbyname/j')

    const emails = response.body.map(user => user.email)
    expect(emails).toContain('jordi@gmail.com')
})

test('filterUser are return as json', async () => {
    await api
        .get('/api/calendar/filterusersokr/611205b7c39a061e98cce51d')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('filterUser for two users', async () => {
    const response = await api.get('/api/calendar/filterusersokr/611205b7c39a061e98cce51d')
    expect(response.body).toHaveLength(2);
})

test('filterUser error', async () => {
    await api
        .get('/api/calendar/filterusersokr/ide')
        .expect(402)
        .expect('Content-Type', /application\/json/)
})