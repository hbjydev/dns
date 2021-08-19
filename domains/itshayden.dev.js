D('itshayden.dev', noreg, DnsProvider(cloudflare),
  cf_proxy_default_off,

  CNAME('_domainconnect', 'connect.domains.google.com.'),

  MX('@', 1, 'aspmx.l.google.com.'),
  MX('@', 5, 'alt1.aspmx.l.google.com.'),
  MX('@', 5, 'alt2.aspmx.l.google.com.'),
  MX('@', 10, 'alt3.aspmx.l.google.com.'),
  MX('@', 10, 'alt4.aspmx.l.google.com.'),

  TXT('mail._domainkey', 'v=DKIM1; h=sha256; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyBfHHg6Q5Y/OrRP1IbSk8mVW8OvnFx0YaD/NdaxWgzcQMfqpQpFiE1AdGN0Nk2AUwpwSwsX3jAHwgUTri2P0Qrp2+XkW+R783kuHlZrU4AosAA1Q+S6yh4lha616fy+eLfP3cE6obZA3AKQodHg+aJBKlGp+2EE4GZ9qIP92E657AwmyZoF28YGG7Urms/XAgiCKcTTl57z5n8'),
  TXT('google._domainkey', 'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApTDk+bG2WHtPQlsdbgnt9rwE3VEQ25ri8bqLCFQjF7UN6uGVrZrObymOxQi1ZvKfqoZluA523xU3/ZaEoX12pBkD72gUn+cyeChVmHyKWSLXi9iMQC0OR9D3mS44wXtnqbY04h7PntgvHVvhxMz6PBpT2j+j23R4CgiEg7S7vnrbv7x/mbsiGihatRUuAaKaRwaOYpQidXsSgjh1bELTK6QzTPlFcExZ3QgbQmUxbvaNT9F7RzJTb+yO9FQEtE5ZDO6WsbtV4m5wdiFAH7d8LC0jmXRHQn6P41lmOb7fVqoCo35+KLMmmJZ/u8ORo6ISSTfXFzgSxg7xEXIZaTpnhQIDAQAB')
);
