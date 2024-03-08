/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bc944e2bb8bc536a0695a46166fa22cf"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/decode.54ff7330.png",
    "revision": "54ff7330888c9b311f87ed230bb4c219"
  },
  {
    "url": "assets/img/decode2.0c8981ca.png",
    "revision": "0c8981caaa1b4a2c7af04e2881513f33"
  },
  {
    "url": "assets/img/decode3.4428e6af.png",
    "revision": "4428e6afa277e2a5f3403446ce215fea"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/ice.1bff3a20.jpg",
    "revision": "1bff3a206140dc5814989a2836d6af2d"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/peer.c25562db.png",
    "revision": "c25562db9b8305ed6ff3d116e08cb730"
  },
  {
    "url": "assets/img/rtp-nalu.0580ab74.png",
    "revision": "0580ab74e703d2a01227351bd75c3ede"
  },
  {
    "url": "assets/img/rtp.aff959a0.png",
    "revision": "aff959a0ca0bde247071cc1ab9080113"
  },
  {
    "url": "assets/img/sdl.d3190a50.png",
    "revision": "d3190a509caed9df07bf686a732ec688"
  },
  {
    "url": "assets/img/sdl2.01345459.png",
    "revision": "0134545912b69073389e6a2624780026"
  },
  {
    "url": "assets/img/signal.dbedc6e4.jpg",
    "revision": "dbedc6e41355d15ea24a4927d1a24857"
  },
  {
    "url": "assets/img/signal2.4eb4cd7a.jpg",
    "revision": "4eb4cd7aae084edddd8b719b4283bdbe"
  },
  {
    "url": "assets/js/1.288c0ca6.js",
    "revision": "235f14af27f33d405704fecb1267617a"
  },
  {
    "url": "assets/js/10.966675ea.js",
    "revision": "49aa70a49dff145822cce6d016da64d3"
  },
  {
    "url": "assets/js/11.ab6065e1.js",
    "revision": "95ef76e5a54cf9fad5a3481d466c4a48"
  },
  {
    "url": "assets/js/12.8c0ad0d6.js",
    "revision": "c54bf1afa7c3df476d401ecfef53b8e9"
  },
  {
    "url": "assets/js/13.ee825438.js",
    "revision": "3e3a51f5f11278f3ac85045d4bd648fa"
  },
  {
    "url": "assets/js/14.0feffcad.js",
    "revision": "ba338ff95c83ab37b33707ccdf65a8fe"
  },
  {
    "url": "assets/js/15.c90a8d05.js",
    "revision": "bcd431dacfe532162184621cf67548e1"
  },
  {
    "url": "assets/js/16.e0ab3167.js",
    "revision": "0aecb5ddbddd31913a84810ff36cfc35"
  },
  {
    "url": "assets/js/17.304e7b18.js",
    "revision": "d97d0cd45f602daf509987ab74ca1778"
  },
  {
    "url": "assets/js/18.779e9ff4.js",
    "revision": "1e325e93928a72a913ea991ae0f1571d"
  },
  {
    "url": "assets/js/19.ec477283.js",
    "revision": "db712629b5245c66a8fb685efc74a67f"
  },
  {
    "url": "assets/js/20.bc52edb2.js",
    "revision": "0cf4e7eb74ed4275aec67cb6b1500ee4"
  },
  {
    "url": "assets/js/21.08da026d.js",
    "revision": "f3a7eb6f0bf633f9e4bf0b612cc5484a"
  },
  {
    "url": "assets/js/22.3763c7e2.js",
    "revision": "322e6a49a20bf18868172fd98cd9325f"
  },
  {
    "url": "assets/js/23.9323bd37.js",
    "revision": "35480a4b4336ba5838286805bbc93410"
  },
  {
    "url": "assets/js/24.34ab13e2.js",
    "revision": "b0d7cf312af8e257f75ee6ce3e40dd2b"
  },
  {
    "url": "assets/js/25.8fc49907.js",
    "revision": "7083e939de462dd0a030e3d10673a278"
  },
  {
    "url": "assets/js/26.17acb984.js",
    "revision": "e6960e66e815ab3b13f513078a1d869d"
  },
  {
    "url": "assets/js/27.c20453b4.js",
    "revision": "1e91c7ed03bc2e9f3719d5afb90770a6"
  },
  {
    "url": "assets/js/28.04c044a1.js",
    "revision": "aeb0c3851121c3b127acebb6a889c7e7"
  },
  {
    "url": "assets/js/29.55881929.js",
    "revision": "17f02ffa87b9b0a1d4415647fdab89a8"
  },
  {
    "url": "assets/js/30.d0ab5012.js",
    "revision": "9f32883f93c58094fbae4803a7f9ac39"
  },
  {
    "url": "assets/js/31.bb640d29.js",
    "revision": "d8dbe5d23608b051f6950b25dbea65bb"
  },
  {
    "url": "assets/js/4.006c63d4.js",
    "revision": "a3df4b1a2191f6f00a9ccd5b014186bd"
  },
  {
    "url": "assets/js/5.eca25d26.js",
    "revision": "39804ac6ca81398d249404766a337ca2"
  },
  {
    "url": "assets/js/6.bd783111.js",
    "revision": "31762214e70edf9eec9c3f3c8a679836"
  },
  {
    "url": "assets/js/7.de17d2ac.js",
    "revision": "3398bdf4a979fb5d6d02f08697afd8c3"
  },
  {
    "url": "assets/js/8.93658f34.js",
    "revision": "bfafeabf4a0a14c0033f69dfefc3f82c"
  },
  {
    "url": "assets/js/9.4bd9e436.js",
    "revision": "1fcaae7037ba9f1cab8fbc917b0738a1"
  },
  {
    "url": "assets/js/app.e9091204.js",
    "revision": "596c059ae8e93e2ed63a46212e2d4d2d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c7c3b8bd.js",
    "revision": "7ad411b872920ae7747182990c053254"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "f024c3fe69e5cd3e7d5a85976ce7449d"
  },
  {
    "url": "categories/index.html",
    "revision": "651c9c4e00fc400b71c0045ee0fba175"
  },
  {
    "url": "categories/java/index.html",
    "revision": "41c68f7d8dcf1e13d686f309720cb378"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5ed764c672af57b4c231b7217721c845"
  },
  {
    "url": "categories/python/index.html",
    "revision": "349ed2fad06a26b56b2f9c5dc7e872de"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "06da0d7cc134834fd3494c8f7df4ca49"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "6e6b8d113a1b72585325f1ecfeeac452"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "7e550a5226551f5559d146f55e40b892"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "23d396926778ff338dfca5780ea55012"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "746c798dd1544ac6a7251291b1abed9d"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "0cc43758654b6606a09730c202b57383"
  },
  {
    "url": "index.html",
    "revision": "e31d558b164ce33db5db4cb3d9bb0f7a"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5e9fc7fcaa9fdd48f3b383181e7c96e4"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "ff90fc1e339a742ff96ca520d31363fa"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5b7f2e3e12f69606cd4490f749506e57"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "aa94ce0e217dc80155adce95731fc689"
  },
  {
    "url": "tags/js/index.html",
    "revision": "0770b73415c679f5828c234087817145"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "a59ea786f92f8442548524c3bc86886d"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "a75b4a8f4c29e9f2eda42163723d6fa6"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "fbf9827843f11bda2f622d4bd61ef49c"
  },
  {
    "url": "tags/python/index.html",
    "revision": "9ca053e1b5cea645dde5310ec96885b7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "c28455588f4a51df149220dc4030a3f2"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "fba4536bd063b5a903ce37c40d46d6dd"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "0be0d5f33c53ef7839824c1e18f7c3dc"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "21053c6b2b78276e53dc3672600c6ac2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "07048a31db8ceaece92e49e6667abaf1"
  },
  {
    "url": "tags/web/index.html",
    "revision": "24674b7c24d6a774bda42ae2ad319628"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f34dfc297ca4f16595b9348c8c5e4c95"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9a1f39bf084b1a9335d8743ee3c37940"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "72f48920540f3746ff31b3eea2a4f334"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "32e07f02e4c2fbfacff73532680b0f4d"
  },
  {
    "url": "timeline/index.html",
    "revision": "e7a69b8b70143f191869055fd1fc6ca2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "0bb21a4319a006206ddbe482e46107c0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d2caece920876d38b20868f10d470c63"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "341d87146daeec22ba11b720503f2c92"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "75bd99b3d01e7ffd77d09b4e3b2c03d2"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "d01949c1feb6707b3779d388e80d6d96"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "f796e9b631497cab2972dbe5091e87dc"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "848d30e73a02fb7e31dc1db22adb0201"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "97a8ebd37c7477214a21012d8a5de07a"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "a494fb311fb939d45c0100d783916281"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2bfd13c04bc9dfd4b4d682db937c419f"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "10bc89ef20d8b8c338e6a15c65f8f48a"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "fa3b851d4988a7c04bdaadb7af92437a"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "3b8502554491759b0242698b6b25559d"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "1de6dc148e07b04e602f5b2e3cf2d68c"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "8f083d98d6618993fe8542383a689786"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "044ef193ce18513aa1433b9f2fe1d982"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "ea1b674c27d6378b15bc3b802cde5b0b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "23ed3b09aa465dae2ce4a1743488f911"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
