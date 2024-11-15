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
    "revision": "d67e9e5fa341c5ef91ad68ef9b085c79"
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
    "url": "assets/img/attack.d9086075.png",
    "revision": "d9086075faeb51af83dc12d2ccb9474b"
  },
  {
    "url": "assets/img/ce.c7a66254.png",
    "revision": "c7a66254963c7b390734dd61a6e904f5"
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
    "url": "assets/img/dll.d42b3810.png",
    "revision": "d42b38106cb8f5b026ca48fd190815fd"
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
    "url": "assets/img/native.0d75c93c.png",
    "revision": "0d75c93c2acd4c553bae9ad56a058314"
  },
  {
    "url": "assets/img/od.eaea06c2.png",
    "revision": "eaea06c24ee5c8035baa4f153772f913"
  },
  {
    "url": "assets/img/od2.a1b64f20.png",
    "revision": "a1b64f202ea1317b651b0ccc6a02ee25"
  },
  {
    "url": "assets/img/od3.02db5279.png",
    "revision": "02db5279f933b79ac492ee77d69dcc98"
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
    "url": "assets/js/10.720866b0.js",
    "revision": "0e16d9bbc7ea4e48e6411d583fe45da8"
  },
  {
    "url": "assets/js/11.cc3c5f8e.js",
    "revision": "13b8598705ce408068949b9d43560180"
  },
  {
    "url": "assets/js/12.dab04852.js",
    "revision": "fd8c85f75a3ba5fb6c6302d0ed482cf9"
  },
  {
    "url": "assets/js/13.b18551f4.js",
    "revision": "3056551e4b172b3ccd4e81b5bdcb67d0"
  },
  {
    "url": "assets/js/14.45f116dd.js",
    "revision": "da827ad22d7101322652c27899a533ad"
  },
  {
    "url": "assets/js/15.e191d495.js",
    "revision": "27b0c03ca9509ae6c2d679a11a54a308"
  },
  {
    "url": "assets/js/16.6e3e4a1d.js",
    "revision": "e5de29bd62569b99a8a202ece8d73922"
  },
  {
    "url": "assets/js/17.4574b5a2.js",
    "revision": "69fca47498f70fe54c5e143b3a6001e7"
  },
  {
    "url": "assets/js/18.0216fa4f.js",
    "revision": "4d1a561f32913f03f9300908d37634aa"
  },
  {
    "url": "assets/js/19.d68c62a4.js",
    "revision": "a01384bffecebc24bd9ba6b2fa8d6ab5"
  },
  {
    "url": "assets/js/20.6a10e043.js",
    "revision": "f0c2e88a7a6436e6389e7493936ff643"
  },
  {
    "url": "assets/js/21.aaabf85a.js",
    "revision": "9041595682161da08321fb3d798cfc77"
  },
  {
    "url": "assets/js/22.508e67f6.js",
    "revision": "78d4fc288ddca025e427754bd14588f2"
  },
  {
    "url": "assets/js/23.88876438.js",
    "revision": "0ba21744588bf8ed14332f2b508cfda9"
  },
  {
    "url": "assets/js/24.edba8479.js",
    "revision": "d3d072d3c9ae6155facfa4fe9a16db0e"
  },
  {
    "url": "assets/js/25.ae11ab7e.js",
    "revision": "6275746dd1aaf13f008ea8e7b7784c85"
  },
  {
    "url": "assets/js/26.26b008cb.js",
    "revision": "7d57b6bb5cc59c3f528da93771902fe9"
  },
  {
    "url": "assets/js/27.790e41c2.js",
    "revision": "ca92e47bb58eda4a3cfcf014f5e2c230"
  },
  {
    "url": "assets/js/28.44fd6cf6.js",
    "revision": "c5a99b82685ccfa3a32f67193c8df47a"
  },
  {
    "url": "assets/js/29.44c8c873.js",
    "revision": "c8b4879d01b2a25c0db1137eef3bb472"
  },
  {
    "url": "assets/js/30.383fb09d.js",
    "revision": "816a352559f429f4079fbce40a461a39"
  },
  {
    "url": "assets/js/31.de4cee3f.js",
    "revision": "a18f68ef3d8ad66756026ea499967346"
  },
  {
    "url": "assets/js/32.c565c83e.js",
    "revision": "c772a11e6ba5f9efad4bd6359c5b139c"
  },
  {
    "url": "assets/js/33.7652300b.js",
    "revision": "b4f1ecc6b306fb15404fe3bcfa5e0082"
  },
  {
    "url": "assets/js/34.abd063e1.js",
    "revision": "64ecab4e294e88bebc2121c6ce8303bb"
  },
  {
    "url": "assets/js/35.2298241e.js",
    "revision": "3494558226a88923369fc32b308d0d21"
  },
  {
    "url": "assets/js/36.a3ac68cf.js",
    "revision": "28131a891e5d458f5a9d06ac9dccb3c6"
  },
  {
    "url": "assets/js/37.8a84a3d4.js",
    "revision": "256e3561175d07abfae396eab8b66b63"
  },
  {
    "url": "assets/js/38.92da8634.js",
    "revision": "534e51cfd91e4fb17d0171961a3cefbd"
  },
  {
    "url": "assets/js/39.7b248492.js",
    "revision": "8809d03f491346eaa66fd24b36168374"
  },
  {
    "url": "assets/js/4.35e120c2.js",
    "revision": "2550a338d4808f1cca5aea31a3c737b9"
  },
  {
    "url": "assets/js/5.bb1ff54a.js",
    "revision": "1be84d9922bc613f5449543d20e35ff5"
  },
  {
    "url": "assets/js/6.080f636a.js",
    "revision": "dad9cd74a660563009786bf3170b05f8"
  },
  {
    "url": "assets/js/7.9426755c.js",
    "revision": "a7c82dbb73df36714a05a55db0a7fda4"
  },
  {
    "url": "assets/js/8.d31c889c.js",
    "revision": "3bf213050c74e4de969e1f6291d19a9d"
  },
  {
    "url": "assets/js/9.a6fc8324.js",
    "revision": "9c1b87edbbd8e3fa9269e2fed02e99cc"
  },
  {
    "url": "assets/js/app.610f96fe.js",
    "revision": "1e544f6f3c10a96f6cbbc3caf57111d7"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f9bdf3c9.js",
    "revision": "af899f86d254f3adb2d3ade66c8037fd"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "3ab6297e9c30c9ec9a3229e6b31c5121"
  },
  {
    "url": "categories/C/index.html",
    "revision": "424451f6d3d1ded5d64e34a8a5b3559e"
  },
  {
    "url": "categories/index.html",
    "revision": "7f39f9378ef2fb1ecc6a7ef19cfd8cc8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7c900aaf02356bd95c4905eeaf71d012"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c313076068839ce36e22e0c0caf91ddd"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "eb946df1dd2f4e12b4b521524faa2f77"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "21af7d903778933df3a241674ffdc967"
  },
  {
    "url": "categories/python/index.html",
    "revision": "4332a6c2386d3e7cb4774a62b0b73d19"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a4c12117f24bc6c2ef70fe80d7eab185"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "b359d162ec5016874db7a3d1be8b50c1"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "161eee7821188512bce840eb8326fa4e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7ed22418e86d282d5974daf764c92891"
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
    "revision": "b122574eba5f150c4091215f2a1d5d53"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "44535694ad2776ef431dce6dba35d919"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "8466d3fed36f4a2533f39cd8b6dd5212"
  },
  {
    "url": "tags/C/index.html",
    "revision": "5e3800fec64c1c6451deb18a30a365ff"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a8bb3431db2f69e7258343aa18535ec5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ebf01a2ee706dc0b8b8ecd9a71fe6e62"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "402035dad5b0e7d9a0160cdbe896fc4b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "88ebe989731ef3c4fe76d9303b9d965c"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "813f14c15a962fb695242066fd6a99fb"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "5f2e0ab3134011ae4e22a7a4bc550bcd"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "33ffd9f146df679727aa12d465a2b22c"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "20b62eeda0ae71e1fdc253ad30682828"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "f16e84750d336d467c10d1660edc6eed"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "2e16be496a596a4645e173b20003a95f"
  },
  {
    "url": "tags/python/index.html",
    "revision": "35fa3218d11029d542736b218657e123"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "614631f2a2dc94199158251236e2f963"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "6ed2c67f36a4162cd414f70716ec212e"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "e6801119de8c3b3076a06df939f58a28"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "2ee2660cb5a549caf44ee47bf16f378e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ec06d488581e30ec7509e93169d0a64b"
  },
  {
    "url": "tags/web/index.html",
    "revision": "ff46380eddbf85cc974535e7071db7d7"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "d8228baf3f77b4e3daf20e3c8dc30ed4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "fe3104ec3b34dca5699d6c48f7ff2657"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "aa8edbb4e696a0230ab777859ea90884"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b53e3b55f90a40301b49368749fb1dbf"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "5bd523e17e79a0318e4f5c5fa68e26a5"
  },
  {
    "url": "timeline/index.html",
    "revision": "64cd7eb85ebca5847cec002191769114"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "eca6f1b03cd827d1642c0ed354d870b8"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "f3eff9c30cf98e6b3500918309f0fb35"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "b13903f3d14458f3692642060b75ff29"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "1578067a36d7ff658f1d47f66897cf90"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "53a675ce956ba8fee8802cbb0d4fdc75"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "68c2a42b6a6cbdfad9a0536fd1ad3fc8"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "c1306355a75bf91484621b81f80a0421"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "678b296bb718f586a3c941a6f2fe575c"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "c39ab27890b2c3eb75d7a50d4d2cd6cb"
  },
  {
    "url": "技术文章/index.html",
    "revision": "11168e7c45bbfc1c93919ac52c3cc662"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a8533fdbfb36fc11618d7403e30d9edd"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "8c06a8d3cbf177040f68b69b2e9faf48"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "bb935f9a3d19f6e48bcbc0d6a603757e"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "cb46e65d849225028972e74219f95a8c"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "91f018daa6a9a9745708c0aae6513c56"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "35be20d24cd444f110286f5376c4f8ff"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "28ec2001e9fdcb26035996c5bf0ae855"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "cd8327111db22fc585008d0956ba378e"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "2fcbf9a4acf9f50b58bfc990d44de78f"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "29ad20ac72d158286434ae4d4ec1e59a"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "d42536bfd4bf913023ebe85fb2f57875"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "43ba797db1a92aa78c9d834f4b3a0707"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4cd70cae8641473eb85c84a39064dd57"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "7e4b3a314fd695b12b74b510b9b15a1d"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "a85b991516ff7c6ecfb4739bb6a70f86"
  },
  {
    "url": "生活分享/life.html",
    "revision": "40c5c0ac80b06fcfd7cc0391476844cf"
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
