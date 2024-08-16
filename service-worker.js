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
    "revision": "6c1813b35c7de603238b984a6c64e2b7"
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
    "url": "assets/img/ce.e6969269.png",
    "revision": "e69692693223e643919a3803cf510632"
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
    "url": "assets/img/od.b7f6be49.png",
    "revision": "b7f6be49ea4725fabc1260bfece2dfbd"
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
    "url": "assets/js/10.c289d8c1.js",
    "revision": "659eeaa36cb2d01633ac7ecc61528cb0"
  },
  {
    "url": "assets/js/11.ed078162.js",
    "revision": "9a60d8808d21f32623454ccdd0dc4d1b"
  },
  {
    "url": "assets/js/12.e39c91a5.js",
    "revision": "5bd39984cbb13f97bd8f90a7ef5e5b9b"
  },
  {
    "url": "assets/js/13.da8c0f29.js",
    "revision": "c35f486f30682c33a18ca075441421df"
  },
  {
    "url": "assets/js/14.2c73e838.js",
    "revision": "7661273d95a3573148c854850ee7da69"
  },
  {
    "url": "assets/js/15.8116a5ef.js",
    "revision": "68690992fd2f8e447e7429c1f5c6a4f4"
  },
  {
    "url": "assets/js/16.8af3e3c6.js",
    "revision": "9a5cec8cc327d1ff5628b3128b1acc1a"
  },
  {
    "url": "assets/js/17.cd03376d.js",
    "revision": "c4baf5cef8cc4153ae98be5e8a60e1e5"
  },
  {
    "url": "assets/js/18.9d839d3e.js",
    "revision": "ecb4bd330f9eed038d4990b8bbd25bea"
  },
  {
    "url": "assets/js/19.c7fe1bd8.js",
    "revision": "0d6e16ac4897b6221e349a9ab5aab9de"
  },
  {
    "url": "assets/js/20.42578ce7.js",
    "revision": "7c717b10cbe7d38301223406cb4b1b45"
  },
  {
    "url": "assets/js/21.22f4571f.js",
    "revision": "8d84f136566ae5dd01b02f80fd4048d7"
  },
  {
    "url": "assets/js/22.00f3819f.js",
    "revision": "1bf81a728cff7b9488605ea8b3961bc4"
  },
  {
    "url": "assets/js/23.1135fc23.js",
    "revision": "1d8832c5db38ede8dc1e69b9bba72ce6"
  },
  {
    "url": "assets/js/24.9198b527.js",
    "revision": "445b210b806601fceaa27dfc8cd51e00"
  },
  {
    "url": "assets/js/25.7eb9a363.js",
    "revision": "125fc0d09232cec3e49e7feeaec997f3"
  },
  {
    "url": "assets/js/26.07cd9488.js",
    "revision": "4ec8fed7f7e3988d3f0ca9a06578f9b2"
  },
  {
    "url": "assets/js/27.5a24719d.js",
    "revision": "90160233bba9680280a35ed032bddb57"
  },
  {
    "url": "assets/js/28.573786b2.js",
    "revision": "b86965db1ed7ab80c0bb7337f51096b7"
  },
  {
    "url": "assets/js/29.474ae330.js",
    "revision": "ada413ed67c518a0c08f2eab31c6bfa7"
  },
  {
    "url": "assets/js/30.baafa07e.js",
    "revision": "0cbbc545ffe79ef9d8fdb0ef8786bd4f"
  },
  {
    "url": "assets/js/31.ad3cd696.js",
    "revision": "89c2464aa00e9b359102a0aa64d232df"
  },
  {
    "url": "assets/js/32.fac25541.js",
    "revision": "cd30156f5bb5e2d52308bb30c17e3af8"
  },
  {
    "url": "assets/js/33.16b88b78.js",
    "revision": "db33735c8fe56c8c12e13d75bb15441f"
  },
  {
    "url": "assets/js/34.06a53093.js",
    "revision": "e66d6f96b294a84ea27227093cae99eb"
  },
  {
    "url": "assets/js/35.eb55a77f.js",
    "revision": "22b5baa59c4621455771bc4b1d7b6410"
  },
  {
    "url": "assets/js/36.54629e15.js",
    "revision": "796062da05c70aec0d8060c0225044c5"
  },
  {
    "url": "assets/js/4.c30c5608.js",
    "revision": "45bca9437dc6988e350460cb177cef55"
  },
  {
    "url": "assets/js/5.7602aad0.js",
    "revision": "16a8f352ca403da956142bb6aa39a3ae"
  },
  {
    "url": "assets/js/6.23ab0a8f.js",
    "revision": "bf57423200b63eda88674ba6373d63c4"
  },
  {
    "url": "assets/js/7.8f566098.js",
    "revision": "58cdb57385705cd4b85bffcb663e5b2f"
  },
  {
    "url": "assets/js/8.08c03a87.js",
    "revision": "4533de821a0b2d38d07df73bcb67860a"
  },
  {
    "url": "assets/js/9.02b5d5a9.js",
    "revision": "39307ad366ac80a7c0740405e9c2dcb3"
  },
  {
    "url": "assets/js/app.6e70b05e.js",
    "revision": "7d00351c90cb02a205c07c19a4438f31"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c30a8dab.js",
    "revision": "c58f61b4b50aa04617107c3ad431329a"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "e20195f1deae76796ecd7c1878d111cf"
  },
  {
    "url": "categories/C/index.html",
    "revision": "bdacdc47af9481adf292db391c764beb"
  },
  {
    "url": "categories/index.html",
    "revision": "b63dd50b058beaeade4da654147a80fa"
  },
  {
    "url": "categories/java/index.html",
    "revision": "cf9fd88b752446c202b0b492d88b0db6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "741d75e01897402286da1b1460dec31d"
  },
  {
    "url": "categories/python/index.html",
    "revision": "6303b13c6db5edb330b73a6182c3601f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "465c825db4f55e7064a42a72db6fcc89"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "36336242077d95e7782deec49992cbac"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "dc22d0031a527fdf2934f4f38ef98e3b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "be2539355ecd5f3e935be0035f970a04"
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
    "revision": "1259280a545082c0b06520198e3a697d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c97df5e884961ae9f97184520f16a16e"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "47e8d66ba147caaf12d05811ad4b9b82"
  },
  {
    "url": "tags/C/index.html",
    "revision": "62260fa71220b82a9f7e5b7ea55d2852"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "8e5ad64d17ea73c79cf47f9fd1c93066"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c79510be62a8145e6295fd3450fc5a92"
  },
  {
    "url": "tags/js/index.html",
    "revision": "bfe4d633b96a16806e1e471c6e886d30"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "3ba4622aca59b7cacc1ab01fe63b092b"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "8cdf70a330be457121ce56df4a71e92f"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "d941b7920ae9f17bfb63e017da80f942"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "206d305d1538e622d790e3280165af7d"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "75ac17fb045d45483b9964b6729180b0"
  },
  {
    "url": "tags/python/index.html",
    "revision": "7adafff259a4d18590aef3e9263035b5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9d08e8073db0a50f3a32de27566d8fd8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "de9d7a65e64bd1dbec9aa07ef39f2584"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "ac57c1ad5e17d7b2ccc8479e4a5a2b8e"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "216b03ec7aeae39a39861379a8e07412"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d2e799fb99c86ed7e0e8c25dafa89708"
  },
  {
    "url": "tags/web/index.html",
    "revision": "5e1e027a773aff2c15ffc40e6ce0675a"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "b98f94eb8534b0b4f69e93fb4e0e23d4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2bf6539509a2116d38208d7555bd15b3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d2c4f99a6eb02a18b166f9b75c0bec99"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6b28ac9f283228c83114e12b1d5758fc"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f0cea7f9ba401b6f72cdc8f097f72a76"
  },
  {
    "url": "timeline/index.html",
    "revision": "b443d2c4fea51674e45cebb166968ba3"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "5c72d92d56eaef7a63f57c4027885d46"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "e89e09888b3a53e807c4e26226061195"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "5442f857d6010910f24afd07c97fa37f"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "e31e1e77271d8f51fefc48f37c38bbfc"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "8ce4b1e0ddc21a5cf270b64831e2f6ef"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "9674f04a061c4fd72e708efa3906de9f"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "a320cb046ce73fc71ce0e84b7ab726b4"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "dd09d703b882bdd947d83152e10ac653"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2b2d821b85f66d29714f05f1de7bdaab"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2887e4e6be7e4f19e959f5d18a40e652"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "8ecc22a7b98c970925e99167576fbd82"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "36a8c218451ba14aba3f420dc253927c"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "42412e2e97d73e786f7dda2ce0ed4d67"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "083b0ea33c0ab738ea5b0e1361ded8e8"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "3c8364bf47f7b6577be29fa664c01fdd"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "e0736352e20a8acfe30559156bf87a27"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "d3d2c5acad60025c61469eddebe24918"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "30a75dcbb4356b42057ef61bdd6db723"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "b41b1d5315b89f957eaef87e11843e18"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "ea1c6053a7ddd623a2fd4d1d863cc3be"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "79ee51b6ff7dc2346754797fd3c570bd"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "90925dc6e19d110de505c1faefab34ff"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4cb8c0a64b12d879573ff4a949fac16b"
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
