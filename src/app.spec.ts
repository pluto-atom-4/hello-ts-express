import app from './app';
import * as chai from 'chai';
import chaiHttp = require("chai-http");
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;


describe('Hello API Request', () => {
  it('should return response on call', () => {
    return chai.request(app).get('/hello')
      .then(res => {
        expect(res.text).to.eql("How's it going?");
      })
  });
});
