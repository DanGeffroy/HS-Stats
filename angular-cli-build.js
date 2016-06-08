/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'ng2-pagination/dist/*.+(js|js.map)',
      'color-name/**/*.+(js|js.map)',
      'color-convert/**/*.+(js|js.map)',
      'chart.js/dist/Chart.bundle.min.js',
      'chartjs-color/dist/color.js',
      'chartjs-color-string/color-string.js',
      'ng2-charts/**/*.+(js|js.map)'
    ]
  });
};
