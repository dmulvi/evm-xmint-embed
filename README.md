**EVM example of Crossmint embed**

Super basic example to demo using the embed package.

**Getting Started**

Clone the repository

`git clone git@github.com:dmulvi/evm-xmint-embed.git`

Install the dependencies

`yarn install`


Copy the .env file template

`cp .env.example .env`

Add required environment variables

```env
VITE_CROSSMINT_API_KEY=
```
Simply create a project in crossmint developer console and put the project id in place of API_KEY.

**Start the app**

`yarn dev`

You will see a connect button on the page. Clicking this opens a login window to crossmint. If you're already logged into crossmint it will autoload your wallet. If you want to see the entire flow, first go to crossmint.io and logout. Then start over. The user's wallet is saved in the local state. 

Check the `Connect.tsx` file to see how to access the wallet. 