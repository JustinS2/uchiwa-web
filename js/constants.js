var constantModule = angular.module('uchiwa.constants', []);

// Themes
constantModule.value('THEMES', [
  {name: 'uchiwa-default'},
  {name: 'uchiwa-dark'}
]);

// Version
var version = '1.5.0';
constantModule.constant('VERSION', version);
constantModule.value('VERSIONS', {
  uchiwa: version
});
