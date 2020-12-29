/**
 * @type {UnitTests.HandlerFactory}
 */
const factory = ({ body } = {}) => {
  const next = sinon.spy();
  const req = {
    body: {
      userId: 1,
      ...body,
    }
  };
  const res = {
    jsonParams: [],
    json(...args) {
      this.jsonParams.push(args);
    },
  };
  const handler = proxyquire('../src/user/getUser.js', {
    '../constants': {
      CUSTOM_PROP: 'unit-prop',
    },
  })

  return { req, res, next, handler };
};

describe.only('GET /user route - test/unit/user/getUser.test.js', () => {
  it('runs under normal operation', async () => {
    const { req, res, next, handler } = factory();
    await handler(req, res, next);
    expect(next.callCount, 'next was called').to.equal(0);
    expect(res.jsonParams[0], 'invalid json response').to.deep.equal([{ userId: 1, val: 'unit-prop' }]);
  });

  it('rejects users with ids other than 1, 2 or 3', async () => {
    const { req, res, next, handler } = factory({
      body: {
        userId: 7
      }
    });
    await handler(req, res, next);
    expect(next.callCount, 'next was not called').to.equal(1);
    expect(next.firstCall.args).to.deep.equal(['Wrong user id']);
  });
});
