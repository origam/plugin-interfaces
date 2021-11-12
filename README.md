Contains basic classes and interfaces for creating Origam plugins.

to install: 

1. Go to GitHub and under your account menu click 

     `Settings` -> `Settings Developer` -> `Personal access tokens` -> `Generate new token` 

   create a GitHub access token with the scope `read:packages`
2. Create .npmrc file at the target project root and put inside: `@origam:registry=https://npm.pkg.github.com` 
3. Login into GitHub repository using your token as the password:  `npm login --scope=@origam --registry=https://npm.pkg.github.com`
3. Add the packege to package.json and run yarn install

for details see the GitHub npm repository help: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry
