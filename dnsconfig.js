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

D('hbjy.io', noreg, DnsProvider(cloudflare),
  cf_proxy_default_off,

  A('@', ips['vercel']),

  A('unifi', ips['home'], cf_proxy_on),
  A('plex', ips['home'], cf_proxy_on),

  A('znc', ips['do-host']),
  A('rpm', ips['do-host']),

  A('monitor', ips['kube-lb']),

  A('cdg-dat-postgres01.scw', ips['postgres01']),

  TXT('@', 'keybase-site-verification=oGR6lPFIq4xje-3OMIr0UNvaF5Di5oSJzePC2_61kho')
);

