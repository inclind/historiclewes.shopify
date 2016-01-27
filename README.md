**Gruntfile.js is missing shopify API key to keep them out of code**

Create a **keys.json** file in the root dir and use the API key and pw from https://historic-lewes.myshopify.com/admin/apps/private/16949412

##keys.json

```
{
  "api_key": "",
  "password": ""
}
```

**To push code to shopify**

```grunt shopify:upload```

for list of commands, see https://github.com/wilr/grunt-shopify