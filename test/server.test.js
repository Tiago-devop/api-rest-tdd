const supertest = require("supertest");

const request = supertest("http://localhost:4001");

test("Deve responder na porta 4001", () => {
  // acessar a url http://localhost:4001
  return request.get("/").then((res) => expect(res.status).toBe(200));
  // verificar que a resposta foi 200
});
