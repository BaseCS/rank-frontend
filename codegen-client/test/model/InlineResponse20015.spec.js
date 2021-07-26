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
    describe('InlineResponse20015', function() {
      beforeEach(function() {
        instance = new BaseCaSeApiDraft.InlineResponse20015();
      });

      it('should create an instance of InlineResponse20015', function() {
        // TODO: update the code to test InlineResponse20015
        expect(instance).to.be.a(BaseCaSeApiDraft.InlineResponse20015);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

    });
  });

}));
