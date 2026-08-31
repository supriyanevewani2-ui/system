
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/system/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/system"
  },
  {
    "renderMode": 1,
    "route": "/system/services"
  },
  {
    "renderMode": 1,
    "route": "/system/services/*"
  },
  {
    "renderMode": 1,
    "route": "/system/courses"
  },
  {
    "renderMode": 1,
    "route": "/system/about"
  },
  {
    "renderMode": 1,
    "route": "/system/contact"
  },
  {
    "renderMode": 1,
    "route": "/system/coursess"
  },
  {
    "renderMode": 1,
    "route": "/system/servicess"
  },
  {
    "renderMode": 1,
    "route": "/system/contactus"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 34439, hash: 'cc4a84112cb70c7fdc8b2d289b70b1b0c177727dc07f16cd420b5372f12c1a48', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1218, hash: '85ec0931b870948023dcde345bc63892afe3961e42072c921c2bf480deb93e81', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HUST3OA4.css': {size: 350553, hash: 'vGXfDZCaMOw', text: () => import('./assets-chunks/styles-HUST3OA4_css.mjs').then(m => m.default)}
  },
};
