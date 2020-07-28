const supertest = require('supertest');
const http = require('http')
const app = require('../app')

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(done);
  request = supertest(server);
});

afterAll((done) => {
  server.close(done);
});


test("It should response the GET method", () => {
  return supertest(app)
    .get("/")
    .then(response => {
      expect(response.statusCode).toBe(404);
    });
});

test("It should response the GET method, not currently a level", () => {
  return supertest(app)
    .get("/3")
    .then(response => {
      expect(response.statusCode).toBe(404);
    });
});