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
import {PublicationAttributes} from './PublicationAttributes';

/**
 * The Publication model module.
 * @module model/Publication
 * @version 0.1.0
 */
export class Publication {
  /**
   * Constructs a new <code>Publication</code>.
   * @alias module:model/Publication
   * @class
   * @param attributes {module:model/PublicationAttributes} 
   * @param id {Number} 
   * @param name {String} 
   */
  constructor(attributes, id, name) {
    this.attributes = attributes;
    this.id = id;
    this.name = name;
  }

  /**
   * Constructs a <code>Publication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Publication} obj Optional instance to populate.
   * @return {module:model/Publication} The populated <code>Publication</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Publication();
      if (data.hasOwnProperty('attributes'))
        obj.attributes = PublicationAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/PublicationAttributes} attributes
 */
Publication.prototype.attributes = undefined;

/**
 * @member {Number} id
 */
Publication.prototype.id = undefined;

/**
 * @member {String} name
 */
Publication.prototype.name = undefined;

