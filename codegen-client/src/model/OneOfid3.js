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

/**
 * The OneOfid3 model module.
 * @module model/OneOfid3
 * @version 0.1.0
 */
export class OneOfid3 {
  /**
   * Constructs a new <code>OneOfid3</code>.
   * @alias module:model/OneOfid3
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfid3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfid3} obj Optional instance to populate.
   * @return {module:model/OneOfid3} The populated <code>OneOfid3</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfid3();
    }
    return obj;
  }
}
