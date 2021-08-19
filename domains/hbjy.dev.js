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

  A('cdg-dat-postgres01.scw', ips['postgres01']),
  A('cdg-k8s-cluster01.scw', ips['kube-lb']),

  // ---- email config ----
  MX('@', 1, 'aspmx.l.google.com.'),
  MX('@', 5, 'alt1.aspmx.l.google.com.'),
  MX('@', 5, 'alt2.aspmx.l.google.com.'),
  MX('@', 10, 'alt3.aspmx.l.google.com.'),
  MX('@', 10, 'alt4.aspmx.l.google.com.')
  // ---- end email config ----
);

