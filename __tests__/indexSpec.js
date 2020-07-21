const router = require('../routes/index')
const request = require("supertest");
const express = require('express');
const app = require('../app');



describe('Index router', () => {
  test('it should return data', async () => {
    const res = await request(app)
    .get('/')
    .expect('Content-Type', "application/json; charset=utf-8")
    .expect('Content-Length', '862')
      expect(res.statusCode).toEqual(200)
      expect(res.body).toEqual([
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
        ['B', 'F1', 'F11', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
        ['B', 'F1', 'F11', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
        ['B', 'F1', 'F11', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
        ['B', 'F1', 'F11', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
        ['B', 'F1', 'F11', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
        ['B', 'F1', 'F11', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
        ['B', 'F1', 'F11', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
        ['B', 'F1', 'F11', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
        ['B', 'F1', 'F11', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
      ])
    })
})