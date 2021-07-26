# BaseCaSeApiDraft.InstitutionsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**institutionsGet**](InstitutionsApi.md#institutionsGet) | **GET** /institutions | Get a list of institutions
[**institutionsIdGet**](InstitutionsApi.md#institutionsIdGet) | **GET** /institutions/{id} | Get a specific institution
[**institutionsIdPeopleGet**](InstitutionsApi.md#institutionsIdPeopleGet) | **GET** /institutions/{id}/people | Get a list of people affiliated with this institution
[**institutionsIdPublicationsCountGet**](InstitutionsApi.md#institutionsIdPublicationsCountGet) | **GET** /institutions/{id}/publications/count | Get a count of publications from this institution
[**institutionsIdPublicationsFilterGet**](InstitutionsApi.md#institutionsIdPublicationsFilterGet) | **GET** /institutions/{id}/publications/filter | Get a filtered list of publications from this institution
[**institutionsIdPublicationsGet**](InstitutionsApi.md#institutionsIdPublicationsGet) | **GET** /institutions/{id}/publications | Get a list of publications from this institution
[**institutionsIdSourcesGet**](InstitutionsApi.md#institutionsIdSourcesGet) | **GET** /institutions/{id}/sources | Get a list of sources/collections this institution has published in

<a name="institutionsGet"></a>
# **institutionsGet**
> InlineResponse200 institutionsGet(opts)

Get a list of institutions

Returns a list of institutions with pagination.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.InstitutionsApi();
let opts = { 
  '_number': 100, // Number | Number of results per page. Range [10, 500] inclusive. Default value is used if omitted.
  'page': 0 // Number | Number of pages to skip. Used together with number for pagination. Default value is used if omitted.
};
apiInstance.institutionsGet(opts, (error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="institutionsIdGet"></a>
# **institutionsIdGet**
> InlineResponse2001 institutionsIdGet(id)

Get a specific institution

Returns a single institution that matches the provided identifier.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.InstitutionsApi();
let id = new BaseCaSeApiDraft.Id(); // Id | Organization's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.institutionsIdGet(id, (error, data, response) => {
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
 **id** | [**Id**](.md)| Organization&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="institutionsIdPeopleGet"></a>
# **institutionsIdPeopleGet**
> InlineResponse2005 institutionsIdPeopleGet(id)

Get a list of people affiliated with this institution

Returns a list of people whose affiliations match this institution&#x27;s identifier. Empty list returned if no affiliations found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.InstitutionsApi();
let id = new BaseCaSeApiDraft.Id(); // Id | Organization's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.institutionsIdPeopleGet(id, (error, data, response) => {
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
 **id** | [**Id**](.md)| Organization&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="institutionsIdPublicationsCountGet"></a>
# **institutionsIdPublicationsCountGet**
> InlineResponse2003 institutionsIdPublicationsCountGet(id, opts)

Get a count of publications from this institution

Returns a numeric count of publications from this institution. Also accepts optional filters. All filter properties can be omitted.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.InstitutionsApi();
let id = new BaseCaSeApiDraft.Id(); // Id | Organization's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.
let opts = { 
  'filter': new BaseCaSeApiDraft.Filter() // Filter | JSON object containing filter options. All properties are optional.
};
apiInstance.institutionsIdPublicationsCountGet(id, opts, (error, data, response) => {
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
 **id** | [**Id**](.md)| Organization&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 
 **filter** | [**Filter**](.md)| JSON object containing filter options. All properties are optional. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="institutionsIdPublicationsFilterGet"></a>
# **institutionsIdPublicationsFilterGet**
> InlineResponse2002 institutionsIdPublicationsFilterGet(id, opts)

Get a filtered list of publications from this institution

Returns a list of publications that originated from this institution with optional filters. All filter properties can be omitted. Empty list returned if no publications found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.InstitutionsApi();
let id = new BaseCaSeApiDraft.Id(); // Id | Organization's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.
let opts = { 
  'filter': new BaseCaSeApiDraft.Filter() // Filter | JSON object containing filter options. All properties are optional.
};
apiInstance.institutionsIdPublicationsFilterGet(id, opts, (error, data, response) => {
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
 **id** | [**Id**](.md)| Organization&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 
 **filter** | [**Filter**](.md)| JSON object containing filter options. All properties are optional. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="institutionsIdPublicationsGet"></a>
# **institutionsIdPublicationsGet**
> InlineResponse2002 institutionsIdPublicationsGet(id)

Get a list of publications from this institution

Returns a list of publications that originated from this institution. Empty list returned if no publications found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.InstitutionsApi();
let id = new BaseCaSeApiDraft.Id(); // Id | Organization's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.institutionsIdPublicationsGet(id, (error, data, response) => {
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
 **id** | [**Id**](.md)| Organization&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="institutionsIdSourcesGet"></a>
# **institutionsIdSourcesGet**
> InlineResponse2004 institutionsIdSourcesGet(id)

Get a list of sources/collections this institution has published in

Returns a list of sources/collections that contain publications originating from this institution. Empty list returned if no sources and/or collections found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.InstitutionsApi();
let id = new BaseCaSeApiDraft.Id(); // Id | Organization's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.institutionsIdSourcesGet(id, (error, data, response) => {
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
 **id** | [**Id**](.md)| Organization&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

