D('hayden.moe', noreg, DnsProvider(cloudflare),
  A('@', ips['vercel']),
  
  MX('@', 10, 'mx01.mail.icloud.com.'),
  MX('@', 10, 'mx02.mail.icloud.com.'),
  TXT('@', 'v=spf1 include:icloud.com ~all'),
  TXT('@', 'apple-domain=xZRvL6gLtIuJmYqG')
  CNAME('sig1._domainkey', 'sig1.dkim.hayden.moe.at.icloudmailadmin.com.')
);
