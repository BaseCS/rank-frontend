# BaseCaSeApiDraft.PublicationSourcesAndCollectionsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sourcesGet**](PublicationSourcesAndCollectionsApi.md#sourcesGet) | **GET** /sources | Get a list of sources/collections
[**sourcesIdGet**](PublicationSourcesAndCollectionsApi.md#sourcesIdGet) | **GET** /sources/{id} | Get a specific source/collection
[**sourcesIdInstitutionsGet**](PublicationSourcesAndCollectionsApi.md#sourcesIdInstitutionsGet) | **GET** /sources/{id}/institutions | Get a list of institutions in this source/collection
[**sourcesIdPeopleGet**](PublicationSourcesAndCollectionsApi.md#sourcesIdPeopleGet) | **GET** /sources/{id}/people | Get a list of people in this source/collection
[**sourcesIdPublicationsGet**](PublicationSourcesAndCollectionsApi.md#sourcesIdPublicationsGet) | **GET** /sources/{id}/publications | Get a list of publications in this source/collection

<a name="sourcesGet"></a>
# **sourcesGet**
> InlineResponse20012 sourcesGet(opts)

Get a list of sources/collections

Returns a list of sources/collections with pagination.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationSourcesAndCollectionsApi();
let opts = { 
  '_number': 100, // Number | Number of results per page. Range [10, 500] inclusive. Default value is used if omitted.
  'page': 0 // Number | Number of pages to skip. Used together with number for pagination. Default value is used if omitted.
};
apiInstance.sourcesGet(opts, (error, data, response) => {
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

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sourcesIdGet"></a>
# **sourcesIdGet**
> InlineResponse20013 sourcesIdGet(id)

Get a specific source/collection

Returns a single source/collection that matches the provided identifier.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationSourcesAndCollectionsApi();
let id = new BaseCaSeApiDraft.Id3(); // Id3 | Source/collection's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.sourcesIdGet(id, (error, data, response) => {
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
 **id** | [**Id3**](.md)| Source/collection&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sourcesIdInstitutionsGet"></a>
# **sourcesIdInstitutionsGet**
> InlineResponse2009 sourcesIdInstitutionsGet(id)

Get a list of institutions in this source/collection

Returns a list of institutions that have published in this source/collection. Empty list returned if no institutions found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationSourcesAndCollectionsApi();
let id = new BaseCaSeApiDraft.Id3(); // Id3 | Source/collection's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.sourcesIdInstitutionsGet(id, (error, data, response) => {
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
 **id** | [**Id3**](.md)| Source/collection&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sourcesIdPeopleGet"></a>
# **sourcesIdPeopleGet**
> InlineResponse2005 sourcesIdPeopleGet(id)

Get a list of people in this source/collection

Returns a list of people who have published in this source/collection. Empty list returned if no contributors found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationSourcesAndCollectionsApi();
let id = new BaseCaSeApiDraft.Id3(); // Id3 | Source/collection's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.sourcesIdPeopleGet(id, (error, data, response) => {
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
 **id** | [**Id3**](.md)| Source/collection&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sourcesIdPublicationsGet"></a>
# **sourcesIdPublicationsGet**
> InlineResponse2002 sourcesIdPublicationsGet(id)

Get a list of publications in this source/collection

Returns a list of publications that have been included in this source/collection. Empty list returned if no publications found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PublicationSourcesAndCollectionsApi();
let id = new BaseCaSeApiDraft.Id3(); // Id3 | Source/collection's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.sourcesIdPublicationsGet(id, (error, data, response) => {
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
 **id** | [**Id3**](.md)| Source/collection&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

