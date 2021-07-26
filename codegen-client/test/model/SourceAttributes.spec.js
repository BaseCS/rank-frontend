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
    describe('SourceAttributes', function() {
      beforeEach(function() {
        instance = new BaseCaSeApiDraft.SourceAttributes();
      });

      it('should create an instance of SourceAttributes', function() {
        // TODO: update the code to test SourceAttributes
        expect(instance).to.be.a(BaseCaSeApiDraft.SourceAttributes);
      });

      it('should have the property dBLPType (base name: "DBLP_type")', function() {
        // TODO: update the code to test the property dBLPType
        expect(instance).to.have.property('dBLPType');
        // expect(instance.dBLPType).to.be(expectedValueLiteral);
      });

      it('should have the property electronicEdition (base name: "electronic_edition")', function() {
        // TODO: update the code to test the property electronicEdition
        expect(instance).to.have.property('electronicEdition');
        // expect(instance.electronicEdition).to.be(expectedValueLiteral);
      });

      it('should have the property isbn (base name: "isbn")', function() {
        // TODO: update the code to test the property isbn
        expect(instance).to.have.property('isbn');
        // expect(instance.isbn).to.be(expectedValueLiteral);
      });

      it('should have the property publisher (base name: "publisher")', function() {
        // TODO: update the code to test the property publisher
        expect(instance).to.have.property('publisher');
        // expect(instance.publisher).to.be(expectedValueLiteral);
      });

      it('should have the property series (base name: "series")', function() {
        // TODO: update the code to test the property series
        expect(instance).to.have.property('series');
        // expect(instance.series).to.be(expectedValueLiteral);
      });

      it('should have the property year (base name: "year")', function() {
        // TODO: update the code to test the property year
        expect(instance).to.have.property('year');
        // expect(instance.year).to.be(expectedValueLiteral);
      });

    });
  });

}));