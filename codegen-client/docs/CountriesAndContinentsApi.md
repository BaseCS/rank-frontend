# BaseCaSeApiDraft.CountriesAndContinentsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**continentsGet**](CountriesAndContinentsApi.md#continentsGet) | **GET** /continents | Get a list of continents
[**continentsIdCountriesGet**](CountriesAndContinentsApi.md#continentsIdCountriesGet) | **GET** /continents/{id}/countries | Get a list of countries in this continent
[**continentsIdGet**](CountriesAndContinentsApi.md#continentsIdGet) | **GET** /continents/{id} | Get a specific continent
[**continentsIdInstitutionsGet**](CountriesAndContinentsApi.md#continentsIdInstitutionsGet) | **GET** /continents/{id}/institutions | Get a list of institutions in this continent
[**countriesGet**](CountriesAndContinentsApi.md#countriesGet) | **GET** /countries | Get a list of countries
[**countriesIdGet**](CountriesAndContinentsApi.md#countriesIdGet) | **GET** /countries/{id} | Get a specific country
[**countriesIdInstitutionsGet**](CountriesAndContinentsApi.md#countriesIdInstitutionsGet) | **GET** /countries/{id}/institutions | Get a list of institutions in this country

<a name="continentsGet"></a>
# **continentsGet**
> InlineResponse20016 continentsGet(opts)

Get a list of continents

Returns a list of continents with pagination.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.CountriesAndContinentsApi();
let opts = { 
  '_number': 100, // Number | Number of results per page. Range [10, 500] inclusive. Default value is used if omitted.
  'page': 0 // Number | Number of pages to skip. Used together with number for pagination. Default value is used if omitted.
};
apiInstance.continentsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **Number**| Number of results per page. Range [10, 500] inclusive. Default value is used if omitted. | [optional] [default to 100]
 **page** | **Number**| Number of pages to skip. Used together with number for pagination. Default value is used if omitted. | [optional] [default to 0]

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="continentsIdCountriesGet"></a>
# **continentsIdCountriesGet**
> InlineResponse20018 continentsIdCountriesGet(id)

Get a list of countries in this continent

Returns a list of countries that are located in this continent.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.CountriesAndContinentsApi();
let id = new BaseCaSeApiDraft.Id5(); // Id5 | Continent's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.continentsIdCountriesGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Id5**](.md)| Continent&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="continentsIdGet"></a>
# **continentsIdGet**
> InlineResponse20017 continentsIdGet(id)

Get a specific continent

Returns a single continent that matches the provided identifier.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.CountriesAndContinentsApi();
let id = new BaseCaSeApiDraft.Id5(); // Id5 | Continent's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.continentsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Id5**](.md)| Continent&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="continentsIdInstitutionsGet"></a>
# **continentsIdInstitutionsGet**
> InlineResponse2009 continentsIdInstitutionsGet(id)

Get a list of institutions in this continent

Returns a list of institutions located in this continent. Empty list returned if no institutions found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.CountriesAndContinentsApi();
let id = new BaseCaSeApiDraft.Id5(); // Id5 | Continent's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.continentsIdInstitutionsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Id5**](.md)| Continent&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="countriesGet"></a>
# **countriesGet**
> InlineResponse20014 countriesGet(opts)

Get a list of countries

Returns a list of countries with pagination.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.CountriesAndContinentsApi();
let opts = { 
  '_number': 100, // Number | Number of results per page. Range [10, 500] inclusive. Default value is used if omitted.
  'page': 0 // Number | Number of pages to skip. Used together with number for pagination. Default value is used if omitted.
};
apiInstance.countriesGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_number** | **Number**| Number of results per page. Range [10, 500] inclusive. Default value is used if omitted. | [optional] [default to 100]
 **page** | **Number**| Number of pages to skip. Used together with number for pagination. Default value is used if omitted. | [optional] [default to 0]

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="countriesIdGet"></a>
# **countriesIdGet**
> InlineResponse20015 countriesIdGet(id)

Get a specific country

Returns a single country that matches the provided identifier.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.CountriesAndContinentsApi();
let id = new BaseCaSeApiDraft.Id4(); // Id4 | Country's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.countriesIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Id4**](.md)| Country&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="countriesIdInstitutionsGet"></a>
# **countriesIdInstitutionsGet**
> InlineResponse2009 countriesIdInstitutionsGet(id)

Get a list of institutions in this country

Returns a list of institutions located in this country. Empty list returned if no institutions found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.CountriesAndContinentsApi();
let id = new BaseCaSeApiDraft.Id4(); // Id4 | Country's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.countriesIdInstitutionsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Id4**](.md)| Country&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

