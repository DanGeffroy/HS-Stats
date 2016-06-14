/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'ng2-pagination': 'vendor/ng2-pagination/dist',
    'ng2-charts': 'vendor/ng2-charts',
    'chartjs': 'vendor/chart.js/dist/Chart.bundle.min.js',
    'color-name': 'vendor/color-name/index.js',
    'color-convert': 'vendor/color-convert/index.js',
    'chartjs-color': 'vendor/chartjs-color/dist/color.js',
    'chartjs-color-string': 'vendor/chartjs-color-string/color-string.js',
    "materialize": "vendor/materialize-css",
    "angular2-materialize": "vendor/angular2-materialize",
    "jquery": "vendor/jquery"
};
/** User packages configuration. */
var packages = {
    'ng2-pagination': { main: 'ng2-pagination.js',
        defaultExtension: 'js' },
    'ng2-charts': { defaultExtension: 'js', main: 'ng2-charts.js' },
    'chartjs': { defaultExtension: 'js', format: 'cjs' },
    'materialize': {
        "format": "global",
        "main": "dist/js/materialize",
        "defaultExtension": "js"
    },
    'angular2-materialize': {
        "main": "dist/index",
        "defaultExtension": "js"
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/card',
    'app/stats',
    'app/card-finder',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map