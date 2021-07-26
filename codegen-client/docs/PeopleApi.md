# BaseCaSeApiDraft.PeopleApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**peopleGet**](PeopleApi.md#peopleGet) | **GET** /people | Get a list of people
[**peopleIdAffiliationGet**](PeopleApi.md#peopleIdAffiliationGet) | **GET** /people/{id}/affiliation | Get a person&#x27;s institutional affiliation
[**peopleIdCollaboratorsGet**](PeopleApi.md#peopleIdCollaboratorsGet) | **GET** /people/{id}/collaborators | Get a list of this person&#x27;s collaborators
[**peopleIdCoworkersGet**](PeopleApi.md#peopleIdCoworkersGet) | **GET** /people/{id}/coworkers | Get a list of this person&#x27;s coworkers
[**peopleIdGet**](PeopleApi.md#peopleIdGet) | **GET** /people/{id} | Get a specific person
[**peopleIdPublicationsGet**](PeopleApi.md#peopleIdPublicationsGet) | **GET** /people/{id}/publications | Get a list of publications from this person

<a name="peopleGet"></a>
# **peopleGet**
> InlineResponse20010 peopleGet(opts)

Get a list of people

Returns a list of people with pagination.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PeopleApi();
let opts = { 
  '_number': 100, // Number | Number of results per page. Range [10, 500] inclusive. Default value is used if omitted.
  'page': 0 // Number | Number of pages to skip. Used together with number for pagination. Default value is used if omitted.
};
apiInstance.peopleGet(opts, (error, data, response) => {
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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="peopleIdAffiliationGet"></a>
# **peopleIdAffiliationGet**
> InlineResponse2001 peopleIdAffiliationGet(id)

Get a person&#x27;s institutional affiliation

Returns the current institution this person is affiliated with. Empty object returned if no affiliation found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PeopleApi();
let id = new BaseCaSeApiDraft.Id2(); // Id2 | Person's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.peopleIdAffiliationGet(id, (error, data, response) => {
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
 **id** | [**Id2**](.md)| Person&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="peopleIdCollaboratorsGet"></a>
# **peopleIdCollaboratorsGet**
> InlineResponse2005 peopleIdCollaboratorsGet(id)

Get a list of this person&#x27;s collaborators

Returns a list of people who&#x27;ve contributed to the same publications this person has. Empty list returned if no collaborators found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PeopleApi();
let id = new BaseCaSeApiDraft.Id2(); // Id2 | Person's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.peopleIdCollaboratorsGet(id, (error, data, response) => {
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
 **id** | [**Id2**](.md)| Person&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="peopleIdCoworkersGet"></a>
# **peopleIdCoworkersGet**
> InlineResponse2005 peopleIdCoworkersGet(id)

Get a list of this person&#x27;s coworkers

Returns a list of people who&#x27;ve contributed to the same publications this person has. Empty list returned if no collaborators found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PeopleApi();
let id = new BaseCaSeApiDraft.Id2(); // Id2 | Person's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.peopleIdCoworkersGet(id, (error, data, response) => {
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
 **id** | [**Id2**](.md)| Person&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="peopleIdGet"></a>
# **peopleIdGet**
> InlineResponse20011 peopleIdGet(id)

Get a specific person

Returns a single person who matches the provided identifier.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PeopleApi();
let id = new BaseCaSeApiDraft.Id2(); // Id2 | Person's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.peopleIdGet(id, (error, data, response) => {
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
 **id** | [**Id2**](.md)| Person&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="peopleIdPublicationsGet"></a>
# **peopleIdPublicationsGet**
> InlineResponse2002 peopleIdPublicationsGet(id)

Get a list of publications from this person

Returns a list of publications this person has contributed to. Empty list returned if no publications found.

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.PeopleApi();
let id = new BaseCaSeApiDraft.Id2(); // Id2 | Person's string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency.

apiInstance.peopleIdPublicationsGet(id, (error, data, response) => {
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
 **id** | [**Id2**](.md)| Person&#x27;s string name or integer ID. Integer ID not guaranteed to remain the same after database rebuild, use string name for consistency. | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

