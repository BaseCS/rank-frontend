/*
 * BaseCaSE API Draft
 * Preliminary OpenAPI documentation. Subject to change.
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.27
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BaseCaSeApiDraft);
  }
}(this, function(expect, BaseCaSeApiDraft) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BaseCaSeApiDraft.PeopleApi();
  });

  describe('(package)', function() {
    describe('PeopleApi', function() {
      describe('peopleGet', function() {
        it('should call peopleGet successfully', function(done) {
          // TODO: uncomment, update parameter values for peopleGet call and complete the assertions
          /*
          var opts = {};

          instance.peopleGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse20010);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('peopleIdAffiliationGet', function() {
        it('should call peopleIdAffiliationGet successfully', function(done) {
          // TODO: uncomment, update parameter values for peopleIdAffiliationGet call and complete the assertions
          /*

          instance.peopleIdAffiliationGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse2001);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('peopleIdCollaboratorsGet', function() {
        it('should call peopleIdCollaboratorsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for peopleIdCollaboratorsGet call and complete the assertions
          /*

          instance.peopleIdCollaboratorsGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse2005);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('peopleIdCoworkersGet', function() {
        it('should call peopleIdCoworkersGet successfully', function(done) {
          // TODO: uncomment, update parameter values for peopleIdCoworkersGet call and complete the assertions
          /*

          instance.peopleIdCoworkersGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse2005);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('peopleIdGet', function() {
        it('should call peopleIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for peopleIdGet call and complete the assertions
          /*

          instance.peopleIdGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse20011);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('peopleIdPublicationsGet', function() {
        it('should call peopleIdPublicationsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for peopleIdPublicationsGet call and complete the assertions
          /*

          instance.peopleIdPublicationsGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
