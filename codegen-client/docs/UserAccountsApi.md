# BaseCaSeApiDraft.UserAccountsApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountCreatePost**](UserAccountsApi.md#accountCreatePost) | **POST** /account/create | Create a user account
[**accountLoginPost**](UserAccountsApi.md#accountLoginPost) | **POST** /account/login | Log into a user account
[**accountLogoutPost**](UserAccountsApi.md#accountLogoutPost) | **POST** /account/logout | Log out of a user account
[**accountUsernameGet**](UserAccountsApi.md#accountUsernameGet) | **GET** /account/{username} | Check user account information

<a name="accountCreatePost"></a>
# **accountCreatePost**
> accountCreatePost()

Create a user account

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.UserAccountsApi();
apiInstance.accountCreatePost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountLoginPost"></a>
# **accountLoginPost**
> accountLoginPost()

Log into a user account

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.UserAccountsApi();
apiInstance.accountLoginPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountLogoutPost"></a>
# **accountLogoutPost**
> accountLogoutPost()

Log out of a user account

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.UserAccountsApi();
apiInstance.accountLogoutPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="accountUsernameGet"></a>
# **accountUsernameGet**
> accountUsernameGet(username)

Check user account information

### Example
```javascript
import {BaseCaSeApiDraft} from 'base_ca_se_api_draft';

let apiInstance = new BaseCaSeApiDraft.UserAccountsApi();
let username = "username_example"; // String | 

apiInstance.accountUsernameGet(username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

