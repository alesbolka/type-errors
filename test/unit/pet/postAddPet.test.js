const factory = ({ body } = {}) => {
  const next = sinon.spy();
  const req = {
    body: {
      userId: 1,
      ...body,
    }
  }

  return { req, next };
};

describe.skip('GET /user route - test/unit/user/getUser.test.js', () => {
  it('runs under normal operation', async () => {
    const { req, res, next, handler } = factory();
    await handler(req, res, next);
  });
});
