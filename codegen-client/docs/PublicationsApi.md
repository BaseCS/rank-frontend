# BaseCaSeApiDraft.PublicationsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publicationsCountGet**](PublicationsApi.md#publicationsCountGet) | **GET** /publications/count | Get a count of publications
[**publicationsFilterGet**](PublicationsApi.md#publicationsFilterGet) | **GET** /publications/filter | Get a filtered list of publications
[**publicationsGet**](PublicationsApi.md#publicationsGet) | **GET** /publications | Get a list of publications
[**publicationsIdGet**](PublicationsApi.md#publicationsIdGet) | **GET** /publications/{id} | Get a specific publication
[**publicationsIdInstitutionsGet**](PublicationsApi.md#publicationsIdInstitutionsGet) | **GET** /publications/{id}/institutions | Get a list of institutions affiliated with this publication
[**publicationsIdPeopleGet**](PublicationsApi.md#publicationsIdPeopleGet) | **GET** /publications/{id}/people | Get a list of people who contributed to this publication

<a name="publicationsCountGet"></a>
# **publicationsCountGet**
> InlineResponse2007 publicationsCountGet(opts)

Get a count of publications

Returns a numeric count of publications with pagination. Also accepts optional filters. All filter options can be omitted.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationsApi();
let opts = { 
  '_number': 100, // Number | Number of results per page. Range [10, 500] inclusive. Default value is used if omitted.
  'page': 0, // Number | Number of pages to skip. Used together with number for pagination. Default value is used if omitted.
  'filter': new BaseCaSeApiDraft.Filter() // Filter | JSON object containing filter options. All properties are optional.
};
apiInstance.publicationsCountGet(opts, (error, data, response) => {
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
 **filter** | [**Filter**](.md)| JSON object containing filter options. All properties are optional. | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publicationsFilterGet"></a>
# **publicationsFilterGet**
> InlineResponse2006 publicationsFilterGet(opts)

Get a filtered list of publications

Returns a paginated list of publications with optional filters. All filter options can be omitted. Empty list returned if no publications match filter options.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationsApi();
let opts = { 
  '_number': 100, // Number | Number of results per page. Range [10, 500] inclusive. Default value is used if omitted.
  'page': 0, // Number | Number of pages to skip. Used together with number for pagination. Default value is used if omitted.
  'filter': new BaseCaSeApiDraft.Filter() // Filter | JSON object containing filter options. All properties are optional.
};
apiInstance.publicationsFilterGet(opts, (error, data, response) => {
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
 **filter** | [**Filter**](.md)| JSON object containing filter options. All properties are optional. | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publicationsGet"></a>
# **publicationsGet**
> InlineResponse2006 publicationsGet(opts)

Get a list of publications

Returns a list of publications with pagination.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationsApi();
let opts = { 
  '_number': 100, // Number | Number of results per page. Range [10, 500] inclusive. Default value is used if omitted.
  'page': 0 // Number | Number of pages to skip. Used together with number for pagination. Default value is used if omitted.
};
apiInstance.publicationsGet(opts, (error, data, response) => {
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

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publicationsIdGet"></a>
# **publicationsIdGet**
> InlineResponse2008 publicationsIdGet(id)

Get a specific publication

Returns a single publication that matches the provided identifier.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationsApi();
let id = new BaseCaSeApiDraft.Id1(); // Id1 | Publication's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.publicationsIdGet(id, (error, data, response) => {
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
 **id** | [**Id1**](.md)| Publication&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publicationsIdInstitutionsGet"></a>
# **publicationsIdInstitutionsGet**
> InlineResponse2009 publicationsIdInstitutionsGet(id)

Get a list of institutions affiliated with this publication

Returns a list of institutions affiliated with the contributors of this publication. Empty list returned if no affiliations found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationsApi();
let id = new BaseCaSeApiDraft.Id1(); // Id1 | Publication's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.publicationsIdInstitutionsGet(id, (error, data, response) => {
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
 **id** | [**Id1**](.md)| Publication&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publicationsIdPeopleGet"></a>
# **publicationsIdPeopleGet**
> InlineResponse2005 publicationsIdPeopleGet(id)

Get a list of people who contributed to this publication

Returns a list of people who contributed to this publication. Empty list returned if no contributors found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationsApi();
let id = new BaseCaSeApiDraft.Id1(); // Id1 | Publication's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.publicationsIdPeopleGet(id, (error, data, response) => {
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
 **id** | [**Id1**](.md)| Publication&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

