export default defineAppConfig({
  title: 'Join in Win4',
  email: 'sink.cool@miantiao.me',
  github: 'https://www.instagram.com/win4rummy/',
  twitter: 'https://www.instagram.com/win4rummy/',
  telegram: 'https://t.me/win4_official',
  mastodon: 'https://download.paws888.info',
  blog: 'https://www.facebook.com/profile.php?id=61580966040628',
  description: 'Play and win real cash with Win4 together! Enjoy a wide range of games and unlock exciting rewards along the way.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
