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
import {ApiClient} from "../ApiClient";
import {Error} from '../model/Error';
import {Id4} from '../model/Id4';
import {Id5} from '../model/Id5';
import {InlineResponse20014} from '../model/InlineResponse20014';
import {InlineResponse20015} from '../model/InlineResponse20015';
import {InlineResponse20016} from '../model/InlineResponse20016';
import {InlineResponse20017} from '../model/InlineResponse20017';
import {InlineResponse20018} from '../model/InlineResponse20018';
import {InlineResponse2009} from '../model/InlineResponse2009';

/**
* CountriesAndContinents service.
* @module api/CountriesAndContinentsApi
* @version 0.1.0
*/
export class CountriesAndContinentsApi {

    /**
    * Constructs a new CountriesAndContinentsApi. 
    * @alias module:api/CountriesAndContinentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the continentsGet operation.
     * @callback moduleapi/CountriesAndContinentsApi~continentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20016{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of continents
     * Returns a list of continents with pagination.
     * @param {Object} opts Optional parameters
     * @param {Number} opts._number Number of results per page. Range [10, 500] inclusive. Default value is used if omitted. (default to <.>)
     * @param {Number} opts.page Number of pages to skip. Used together with number for pagination. Default value is used if omitted. (default to <.>)
     * @param {module:api/CountriesAndContinentsApi~continentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    continentsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'number': opts['_number'],'page': opts['page']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20016;

      return this.apiClient.callApi(
        '/continents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the continentsIdCountriesGet operation.
     * @callback moduleapi/CountriesAndContinentsApi~continentsIdCountriesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20018{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of countries in this continent
     * Returns a list of countries that are located in this continent.
     * @param {module:model/Id5} id Continent&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.
     * @param {module:api/CountriesAndContinentsApi~continentsIdCountriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    continentsIdCountriesGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling continentsIdCountriesGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20018;

      return this.apiClient.callApi(
        '/continents/{id}/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the continentsIdGet operation.
     * @callback moduleapi/CountriesAndContinentsApi~continentsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific continent
     * Returns a single continent that matches the provided identifier.
     * @param {module:model/Id5} id Continent&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.
     * @param {module:api/CountriesAndContinentsApi~continentsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    continentsIdGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling continentsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20017;

      return this.apiClient.callApi(
        '/continents/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the continentsIdInstitutionsGet operation.
     * @callback moduleapi/CountriesAndContinentsApi~continentsIdInstitutionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of institutions in this continent
     * Returns a list of institutions located in this continent. Empty list returned if no institutions found.
     * @param {module:model/Id5} id Continent&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.
     * @param {module:api/CountriesAndContinentsApi~continentsIdInstitutionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    continentsIdInstitutionsGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling continentsIdInstitutionsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/continents/{id}/institutions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the countriesGet operation.
     * @callback moduleapi/CountriesAndContinentsApi~countriesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of countries
     * Returns a list of countries with pagination.
     * @param {Object} opts Optional parameters
     * @param {Number} opts._number Number of results per page. Range [10, 500] inclusive. Default value is used if omitted. (default to <.>)
     * @param {Number} opts.page Number of pages to skip. Used together with number for pagination. Default value is used if omitted. (default to <.>)
     * @param {module:api/CountriesAndContinentsApi~countriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    countriesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'number': opts['_number'],'page': opts['page']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the countriesIdGet operation.
     * @callback moduleapi/CountriesAndContinentsApi~countriesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20015{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific country
     * Returns a single country that matches the provided identifier.
     * @param {module:model/Id4} id Country&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.
     * @param {module:api/CountriesAndContinentsApi~countriesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    countriesIdGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling countriesIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20015;

      return this.apiClient.callApi(
        '/countries/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the countriesIdInstitutionsGet operation.
     * @callback moduleapi/CountriesAndContinentsApi~countriesIdInstitutionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of institutions in this country
     * Returns a list of institutions located in this country. Empty list returned if no institutions found.
     * @param {module:model/Id4} id Country&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.
     * @param {module:api/CountriesAndContinentsApi~countriesIdInstitutionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    countriesIdInstitutionsGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling countriesIdInstitutionsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/countries/{id}/institutions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}