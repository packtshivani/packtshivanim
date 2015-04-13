Package.describe({
  name: 'pactmeteor:testpack',
  version: '0.0.1',
 // Brief, one-line summary of the package.
  summary: 'Demonstration of an Atmosphere Package',
Next, we will add the GitHub URL to the git property:
  // URL to the Git repository...
  git: 'https://github.com/strack/packt-testpack.git',
You will notice that the documentation property references the README.md file, which means that our GitHub documentation will serve a dual purpose. Open README.md and add the following line:
});

Package.onUse(function(api) {
   api.versionsFrom('1.0.3.2');
  api.addFiles('testpack.js', 'client');
  api.addFiles('servertestpack.js', 'server');
  if (api.export){
    api.export('TestPack');
  }
});

Package.onTest(function(api) {
 api.use('tinytest');
  api.use('packtmeteor:testpack');
  api.addFiles('testpack-tests.js');
});
Npm.depends({
    "colors": "0.6.2"
});
