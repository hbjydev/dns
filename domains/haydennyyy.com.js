D('haydennyyy.com', noreg, DnsProvider(cloudflare),
  cf_proxy_default_off,

  CNAME('_domainconnect', 'connect.domains.google.com.'),

  MX('@', 1, 'aspmx.l.google.com.'),
  MX('@', 5, 'alt1.aspmx.l.google.com.'),
  MX('@', 5, 'alt2.aspmx.l.google.com.'),
  MX('@', 10, 'alt3.aspmx.l.google.com.'),
  MX('@', 10, 'alt4.aspmx.l.google.com.')
);
