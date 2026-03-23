const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const { app } = require('../server');
const User = require('../models/User');

test('POST /api/users creates user and hides password', async () => {
    const originalFindOne = User.findOne;
    const originalSave = User.prototype.save;
    const originalFindById = User.findById;

    User.findOne = async () => null;
    User.prototype.save = async function () {
        return { _id: '507f1f77bcf86cd799439011' };
    };
    User.findById = () => ({
        select: async () => ({
            _id: '507f1f77bcf86cd799439011',
            username: 'smokeuser',
            email: 'smoke@example.com'
        })
    });

    const response = await request(app)
        .post('/api/users')
        .send({
            username: 'smokeuser',
            email: 'smoke@example.com',
            password: 'password123'
        })
        .expect(201);

    assert.equal(response.body.username, 'smokeuser');
    assert.equal(response.body.email, 'smoke@example.com');
    assert.equal(Object.prototype.hasOwnProperty.call(response.body, 'password'), false);
    assert.ok(response.body._id);

    User.findOne = originalFindOne;
    User.prototype.save = originalSave;
    User.findById = originalFindById;
});

test('GET /api/users lists users without passwords', async () => {
    const originalFind = User.find;
    User.find = () => ({
        select: async () => ([
            {
                _id: '507f1f77bcf86cd799439011',
                username: 'smokeuser',
                email: 'smoke@example.com'
            }
        ])
    });

    const response = await request(app)
        .get('/api/users')
        .expect(200);

    assert.ok(Array.isArray(response.body));
    assert.ok(response.body.length >= 1);
    assert.equal(Object.prototype.hasOwnProperty.call(response.body[0], 'password'), false);

    User.find = originalFind;
});
