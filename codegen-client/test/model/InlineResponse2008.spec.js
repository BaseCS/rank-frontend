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

  describe('(package)', function() {
    describe('InlineResponse2008', function() {
      beforeEach(function() {
        instance = new BaseCaSeApiDraft.InlineResponse2008();
      });

      it('should create an instance of InlineResponse2008', function() {
        // TODO: update the code to test InlineResponse2008
        expect(instance).to.be.a(BaseCaSeApiDraft.InlineResponse2008);
      });

      it('should have the property publication (base name: "publication")', function() {
        // TODO: update the code to test the property publication
        expect(instance).to.have.property('publication');
        // expect(instance.publication).to.be(expectedValueLiteral);
      });

    });
  });

}));
