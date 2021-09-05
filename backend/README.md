This is the Drupal backend part. You need to have a running Drupal 8 instance, where you can install the release_notes module.
Before testing out the React App, you need to setup the CORS policy in /public/sites/default/default.services.yml

Depending on the port that the react app is running, e.g. 3000, the default services file should have the following config under the parameters key:
  cors.config:
    enabled: true
    # Specify allowed headers, like 'x-allowed-header'.
    allowedHeaders: ['x-csrf-token','authorization','content-type','accept','origin','x-requested-with', 'access-control-allow-origin']
    # Specify allowed request methods, specify ['*'] to allow all possible ones.
    allowedMethods: ['*']
    # Configure requests allowed from specific origins.
    allowedOrigins: ['http://localhost:3000']
    # Sets the Access-Control-Expose-Headers header.
    exposedHeaders: false
    # Sets the Access-Control-Max-Age header.
    maxAge: false
    # Sets the Access-Control-Allow-Credentials header.
    supportsCredentials: false
