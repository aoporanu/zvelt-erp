const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
  .combine([
    'resources/css/bootstrap.min.css', 
    'resources/css/atlantis.min.css', 
    'resources/css/fonts.min.css', 
    'resources/css/info-box.css',
    'https://cdn.datatables.net/autofill/2.3.5/css/autoFill.dataTables.min.css',
    'https://cdn.datatables.net/buttons/1.6.5/css/buttons.dataTables.min.css'
  ], 'resources/css/app.css')
  .scripts([
  'resources/js/core/bootstrap.min.js',
  'https://code.jquery.com/ui/1.12.1/jquery-ui.js',
  'resources/js/plugin/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',
  'resources/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js',
  'resources/js/plugin/chart.js/chart.min.js',
  'resources/js/plugin/jquery.sparkline/jquery.sparkline.min.js',
  'resources/js/plugin/chart-circle/circles.min.js',
  'https://editor.datatables.net/extensions/Editor/js/dataTables.editor.min.js',
  'https://cdn.datatables.net/autofill/2.3.5/js/dataTables.autoFill.min.js',
  'https://cdn.datatables.net/buttons/1.6.5/js/dataTables.buttons.min.js',
  'https://cdn.datatables.net/buttons/1.6.5/js/buttons.colVis.min.js',
  'https://cdn.datatables.net/buttons/1.6.5/js/buttons.html5.min.js',
  'https://cdn.datatables.net/buttons/1.6.2/js/dataTables.buttons.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js',
  'resources/js/plugin/bootstrap-notify/bootstrap-notify.min.js',
  'resources/js/atlantis.min.js',
  'resources/js/setting-demo.js'
  ], 'resources/js/app.js')
  .postCss('resources/css/app.css', 'public/css', [
    //
  ]).options({
    processCssUrls: false
  })
