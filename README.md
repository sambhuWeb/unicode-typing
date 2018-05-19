# Unicode Typing
Returns the mapped unicode key based.

##Command

"compile": "babel --source-maps -d lib/ src/"

npm run compile: Bable will scan all files in the src directory, transpile your ES6 code to ES5, and store the result in the lib directory

The --source-map flag is added to generte source maps which help you with debugging code

"prepublish": "npm run compile"
This tells NPM to compile our code before it is published to the repository.


prepublish: is a special script that is executed automatically when you publish a package to the NPM repository. In this script we define all the steps that have to be executed before we can publish our package. In our case, this is simple:


######Source:
https://www.wouterbulten.nl/blog/tech/publishing-es6-package-to-npm/

https://www.npmjs.com/package/es2015-packages-best-practices-t
