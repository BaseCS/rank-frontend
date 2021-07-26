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
import {ApiClient} from '../ApiClient';
import {Person} from './Person';

/**
 * The InlineResponse20011 model module.
 * @module model/InlineResponse20011
 * @version 0.1.0
 */
export class InlineResponse20011 {
  /**
   * Constructs a new <code>InlineResponse20011</code>.
   * @alias module:model/InlineResponse20011
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20011</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20011} obj Optional instance to populate.
   * @return {module:model/InlineResponse20011} The populated <code>InlineResponse20011</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20011();
      if (data.hasOwnProperty('person'))
        obj.person = Person.constructFromObject(data['person']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Person} person
 */
InlineResponse20011.prototype.person = undefined;
