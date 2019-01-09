const { assert } = require('chai')
const { checkAccess } = require('./auth')

const createRequestBody = role => ({ cookies: { role } })

describe('utils/auth.js', () => {
  it('function checkAccess', () => {
    const roles = ['user', 'admin', 'editor']
    roles.forEach(selectedRole => {
      const otherRoles = roles.filter(e => e !== selectedRole)
      const req = createRequestBody(selectedRole)

      assert.equal(checkAccess(selectedRole, req), true)
      otherRoles.forEach(otherRole => {
        assert.equal(checkAccess(otherRole, req), false)
      })
    });
  });
});
