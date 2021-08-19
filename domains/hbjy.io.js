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

