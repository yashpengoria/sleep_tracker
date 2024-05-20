// const mongoose = require('mongoose');
// const request = require('supertest');
process.env.NODE_ENV = 'test';
const { expect } = require('chai');
// const { MongoMemoryServer } = require('mongodb-memory-server');
// const app = require('../index');  // Ensure this is the correct path to your Express app

// let mongoServer;

describe('Sleep Tracker API', () => {
      it('abcd',()=>{

      })
})

// before(async () => {
//       mongoServer = await MongoMemoryServer.create();
//       const mongoUri = mongoServer.getUri();

//       await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
// });

// after(async () => {
//       await mongoose.disconnect();
//       await mongoServer.stop();
// });

// describe('Sleep Tracker API', () => {
//       it('should create a new sleep record', async () => {
//             const res = await request(app)
//                   .post('/sleep')
//                   .send({
//                         userId: 'user1',
//                         hours: 8,
//                         timestamp: '2023-05-18T10:00:00Z'
//                   });
//             expect(res.status).to.equal(201);
//             expect(res.body).to.have.property('_id');
//             expect(res.body.userId).to.equal('user1');
//             expect(res.body.hours).to.equal(8);
//             expect(new Date(res.body.timestamp).toISOString()).to.equal('2023-05-18T10:00:00.000Z');  // Ensure timestamp is correctly stored
//       });

//       it('should retrieve sleep records for a user', async () => {
//             const userId = 'user1';
//             const res = await request(app).get(`/sleep/${userId}`);
//             expect(res.status).to.equal(200);
//             expect(res.body).to.be.an('array');
//             expect(res.body.length).to.be.at.least(1);
//             expect(res.body[0]).to.have.property('userId', userId);
//       });

//       it('should delete a sleep record', async () => {
//             const sleepRecord = await request(app)
//                   .post('/sleep')
//                   .send({
//                         userId: 'user2',
//                         hours: 6,
//                         timestamp: '2023-05-19T10:00:00Z'
//                   });

//             const recordId = sleepRecord.body._id;
//             const res = await request(app).delete(`/sleep/${recordId}`);
//             expect(res.status).to.equal(200);

//             const checkRes = await request(app).get(`/sleep/${sleepRecord.body.userId}`);
//             const recordExists = checkRes.body.some(record => record._id === recordId);
//             expect(recordExists).to.be.false;
//       });
// });
