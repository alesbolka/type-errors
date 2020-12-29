const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru();
chai.use(chaiAsPromised);
global.expect = chai.expect;
global.sinon = sinon;
global.proxyquire = proxyquire;

process.on('unhandledRejection', (reason, promise) => {
  throw reason;
});
