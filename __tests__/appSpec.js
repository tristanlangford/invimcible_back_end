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
      .get("/bob")
      .then(response => {
        expect(response.statusCode).toBe(404);
      });
  });