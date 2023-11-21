const mix = require('laravel-mix');


// At the top of you webpack.mix.js file
const domain = 'neoassunti2023.test'; // <= EDIT THIS
const homedir = require('os').homedir();

// The mix script:
mix.browserSync({
      proxy: 'https://' + domain,
      host: domain,
      open: 'external',
      notify: false,
      https: {
        key: homedir + '/.config/valet/Certificates/' + domain + '.key',
        cert: homedir + '/.config/valet/Certificates/' + domain + '.crt',
      },
      files: [
        'public/js/**/*.js',
        'public/css/**/*.css',
        'resources/views/**/*.antlers.html',
        'resources/views/**/**/*.antlers.html'
    ]
  })



/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/site.js', 'public/js')

mix.postCss('resources/css/tailwind.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-preset-env')({stage: 0})
])

if (mix.inProduction()) {
   mix.version();
}








/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-nested'),
//     require('postcss-preset-env')({stage: 0})
// ])
