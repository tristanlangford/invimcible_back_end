const supertest = require('supertest');
const http = require('http')
const app = require('../app')
const imports = require('../routes/index')
const addData = imports.addData


describe('Index router', () => {
  let server;
  let request;
  const expectedResult = {"value": "B", "x": 32, "y": 32, "blocked": true}
  const expectedResultF1 = {"value": "F1", "x": 10, "y": 10, "blocked": false}
  const expectedResultP1 = {"value": "P1", "x": 15, "y": 15, "blocked": true}
  const expectedResultOther = {"value": "something", "x": 30, "y": 30, "blocked": false}


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
    expect(res.body.level1Data[0][1]).toEqual(expectedResult)
  })

  test("It should response the GET method", () => {
    return supertest(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("It should return an object from a tile letter, 'B' ", () => {
    expect(addData([["B"]])).toEqual([[expectedResult]])
  })
  test("It should return an object from a tile letter, 'F1' ", () => {
    expect(addData([["F1"]])).toEqual([[expectedResultF1]])
  })
  test("It should return an object from a tile letter, 'P1' ", () => {
    expect(addData([["P1"]])).toEqual([[expectedResultP1]])
  })
  test("It should return an object from a tile letter, 'other' ", () => {
    expect(addData([["something"]])).toEqual([[expectedResultOther]])
  })
});
