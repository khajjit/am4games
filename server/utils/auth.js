/* should return `true` or `false` */
// TODO: User access confirmation.
const checkAccess = (requiredRole, req) => requiredRole === req.cookies.role

module.exports = {
  checkAccess
}
