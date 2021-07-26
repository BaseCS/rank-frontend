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
import {Publication} from './Publication';

/**
 * The InlineResponse2008 model module.
 * @module model/InlineResponse2008
 * @version 0.1.0
 */
export class InlineResponse2008 {
  /**
   * Constructs a new <code>InlineResponse2008</code>.
   * @alias module:model/InlineResponse2008
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2008} obj Optional instance to populate.
   * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2008();
      if (data.hasOwnProperty('publication'))
        obj.publication = Publication.constructFromObject(data['publication']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Publication} publication
 */
InlineResponse2008.prototype.publication = undefined;

