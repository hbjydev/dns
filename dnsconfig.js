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

D('hbjy.dev', noreg, DnsProvider(cloudflare),
  cf_proxy_default_off,

  A('@', ips['vercel']),
  CNAME('www', 'hbjy.dev.'),

  CNAME('_domainconnect', 'connect.domains.google.com.'),
  CNAME('openpgpkey', 'wkd.keys.openpgp.org.'),
  CNAME('s3', 's3.hbjy.dev.s3.fr-par.scw.cloud.', cf_proxy_on),
  CNAME('scripts', 'hbjydev.github.io.'),

  TXT('_scaleway-challenge', '59ef7059-fccf-4ff3-8230-60dbac852afc'),
  TXT('@', 'keybase-site-verification=Wr2DT9CD4z8RQ2sLSVjdLtezue-d8BVio7VsRi52RUQ'),

  // ---- email config ----
  MX('@', 1, 'aspmx.l.google.com.'),
  MX('@', 5, 'alt1.aspmx.l.google.com.'),
  MX('@', 5, 'alt2.aspmx.l.google.com.'),
  MX('@', 10, 'alt3.aspmx.l.google.com.'),
  MX('@', 10, 'alt4.aspmx.l.google.com.')
  // ---- end email config ----
);

