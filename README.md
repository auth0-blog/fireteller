# FireTeller
FireTeller is a Firebase app that integrates Auth0 for user authentication. This app was built as a sample application for the blog post which covers how you can build serverless application with the Firebase 3.0 SDK. Check out the blog post [here](https://auth0.com/blog/2016/06/08/firebase-authentication-with-firebase-3.0-and-auth0-integration/) and a live demo of the app [here](https://project-8302152786657556368.firebaseapp.com/)

![FireTeller](https://cdn.auth0.com/blog/new-firebase/fireteller-app.png)

## Running the App

FireTeller uses the Firebase 3.0 SDK. You will need a Firebase and Auth0 account. Sign up for a free [Firebase](https://firebase.google.com) and [Auth0](https://auth0.com/signup) account before continuing.

1. Clone the repo
2. Install the Firebase CLI by running `npm intall firebase-tools -g` (you will need Node and NPM)
3. Navigate to the directory where you cloned the repo
4. Run `firebase init` and follow the on-screen instructions. **DO NOT OVERWRITE THE INDEX.HTML FILE**
5. Open the `app.js` file in the `public` directory and update the variables at the top with your keys
6. Run `firebase serve`
7. Navigate to `localhost:5000` to see your application

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
