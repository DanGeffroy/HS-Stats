/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'ng2-pagination' : 'vendor/ng2-pagination/dist',
  'ng2-charts': 'vendor/ng2-charts',
    'chartjs': 'vendor/chart.js/dist/Chart.bundle.min.js',
    'color-name': 'vendor/color-name/index.js',
    'color-convert': 'vendor/color-convert/index.js',
    'chartjs-color': 'vendor/chartjs-color/dist/color.js',
    'chartjs-color-string': 'vendor/chartjs-color-string/color-string.js',
};

/** User packages configuration. */
const packages: any = {
  'ng2-pagination' : { main: 'ng2-pagination.js' ,
 defaultExtension: 'js'},

 'ng2-charts': { defaultExtension: 'js', main: 'ng2-charts.js' },
  'chartjs': { defaultExtension: 'js', format: 'cjs' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
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
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

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
System.config({ map, packages });
