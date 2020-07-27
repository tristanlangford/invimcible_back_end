const supertest = require('supertest');
const http = require('http')
const app = require('../app')
const imports = require('../routes/index')
const addData = imports.addData


describe('Index router', () => {
  let server;
  let request;

  const expectedResult = {"value": "B", "x": 13 * 32, "y": 6 * 32, "blocked": true}
  const expectedResultF1 = {"value": "F1", "x": 4 * 32, "y": 1 * 32, "blocked": false}
  const expectedResultP1 = {"value": "P1", "x": 1 * 32, "y": 1 * 32, "blocked": true}
  const expectedResultOther = {"value": "something", "x": 1 * 32, "y": 1 * 32, "blocked": false}


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
    expect(res.body.level1Data.mapArray[0][1]).toEqual(expectedResult)
  })

  test("It should response the GET method", () => {
    return supertest(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("It should return an object from a tile letter, 'B' ", () => {
    expect(addData([["B"]]).mapArray).toEqual([[expectedResult]])
  })
  test("It should return an object from a tile letter, 'F1' ", () => {
    expect(addData([["F1"]]).mapArray).toEqual([[expectedResultF1]])
  })
  test("It should return an object from a tile letter, 'P1' ", () => {
    expect(addData([["P1"]]).mapArray).toEqual([[expectedResultP1]])
  })
  test("It should return an object from a tile letter, 'other' ", () => {
    expect(addData([["something"]]).mapArray).toEqual([[expectedResultOther]])
  })
});
