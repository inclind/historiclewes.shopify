**Gruntfile.js is missing shopify API key to keep them out of code**

Create a **keys.json** file in the root dir and use the API key and pw from https://historic-lewes.myshopify.com/admin/apps/private/16949412

**keys.json** is included in the **.gitignore** and should not be committed.

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

#Changes

**settings_data.json** now conains a custom preset that should be used to update theme settings vars

**custom.scss.liquid** contains custom css for the theme

**entypo.\*** files are the new icons added from http://framework.thememountain.com *an arrow similar to the spec for 'return to' link was added in new version. The css to make this work is in the custom css file listed above. I only added the css for the one arrow needed.