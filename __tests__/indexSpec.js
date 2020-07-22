const supertest = require('supertest');
const http = require('http')
const app = require('../app')

describe('Index router', () => {
  let server;
  let request;
  const expectedResult = {"level1": [
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'VS', 'F1', 'F1', 'F1', 'F1', 'I1', 'F1', 'F1', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'F1', 'F1', 'B', 'B', 'B', 'B', 'P1', 'B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'E', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
  ['B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'B'],
  ['B', 'B', 'F1', 'B', 'B', 'F1', 'F1', 'F1', 'F1', 'B', 'B', 'B', 'B', 'F1', 'B', 'B'],
  ['B', 'B', 'F1', 'B', 'B', 'F1', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'F1', 'B', 'B'],
  ['B', 'P3', 'I3', 'B', 'B', 'F1', 'B', 'B', 'F1', 'B', 'F1', 'F1', 'F1', 'I2', 'P2', 'B'],
  ['B', 'B', 'F1', 'F1', 'F1', 'F1', 'B', 'B', 'F1', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
  ], "level2": [
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'T', 'P2', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'PB', 'B', 'B', 'B', 'VS', 'I1', 'F1', 'PB', 'F1', 'PB', 'F1', 'F1', 'B'],
    ['B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'P1', 'B', 'B', 'B', 'B', 'B', 'F1', 'B'],
    ['B', 'B', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'B'],
    ['B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'F1', 'PB', 'F1', 'PB', 'F1', 'PB', 'F1', 'B'],
    ['B', 'B', 'F1', 'F1', 'PB', 'F1', 'PB', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
  ]}

  beforeAll((done) => {
    server = http.createServer(app);
    server.listen(done);
    request = supertest(server);
  });

  afterAll((done) => {
    server.close(done);
  });

  test('it should return data', async () => {
    const res = await request.get('/');
    expect(res.body).toEqual(expectedResult)
  })

  test("It should response the GET method", () => {
    return supertest(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
