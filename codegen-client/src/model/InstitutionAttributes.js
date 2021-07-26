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
 * The InstitutionAttributes model module.
 * @module model/InstitutionAttributes
 * @version 0.1.0
 */
export class InstitutionAttributes {
  /**
   * Constructs a new <code>InstitutionAttributes</code>.
   * @alias module:model/InstitutionAttributes
   * @class
   * @param isUni {Boolean} 
   */
  constructor(isUni) {
    this.isUni = isUni;
  }

  /**
   * Constructs a <code>InstitutionAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstitutionAttributes} obj Optional instance to populate.
   * @return {module:model/InstitutionAttributes} The populated <code>InstitutionAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InstitutionAttributes();
      if (data.hasOwnProperty('is_uni'))
        obj.isUni = ApiClient.convertToType(data['is_uni'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Boolean} isUni
 */
InstitutionAttributes.prototype.isUni = undefined;

