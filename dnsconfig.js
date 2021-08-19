// ---- config ----
var ips        = require('./ips.json');
var noreg      = NewRegistrar('none', 'NONE');
var cloudflare = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');
// ---- end config ----

// ---- options ----
var cf_proxy_on = { cloudflare_proxy: 'on' };
var cf_proxy_off = { cloudflare_proxy: 'off' };
var cf_proxy_default_on = { cloudflare_proxy_default: 'on' };
var cf_proxy_default_off = { cloudflare_proxy_default: 'off' };
// ---- end options ----

require_glob('./domains/');

