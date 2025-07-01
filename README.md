This app is a **NextJS** app with **NextAuth** library configured to have basic **SSO** authentication with **Auth0**.
## Getting Started

The node version used for the development : 

```bash
nvm use lts/iron
```

First, install the packages:

```bash
yarn
```

Then, run the app : 

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Behavior

There are 3 accessible pages.

1) [http://localhost:3000/](http://localhost:3000/) : The root of the app, which is public and doesn't require an user to be authenticated
2) [http://localhost:3000/protected](http://localhost:3000/protected) : The first secured layer, which requires an authentication (Auth0 SSO with OIDC in this case)
3) [http://localhost:3000/protected/admin](http://localhost:3000/protected/admin) : The last layer, which requires authentication and the role 'admin' in the user claims retrieved from the Identity Provider

