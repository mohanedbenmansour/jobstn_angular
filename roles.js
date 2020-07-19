const AccessControl = require('accesscontrol');
const access = new AccessControl();

module.exports.roles = (function () {
  access
    .grant('applicant')
    .readOwn('profile')
    .updateOwn('profile')
    .readAny('post');

  access
    .grant('enterprise')
    .createOwn('post')
    .deleteOwn('post')
    .updateOwn('post');

  access
    .grant('admin')
    .extend('applicant')
    .extend('enterprise')

    .deleteAny('profile')
    .deleteAny('post');

  return access;
})();
