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
    "revision": "660e256efd82761823023d327eaf7bd3"
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
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
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
    "url": "assets/js/1.c3e2e87d.js",
    "revision": "5ae6fbc10754afc622a1c78d59260560"
  },
  {
    "url": "assets/js/10.bef94106.js",
    "revision": "b0f7a2e137dbaddb93d098394ab2bba2"
  },
  {
    "url": "assets/js/11.6733c91d.js",
    "revision": "02ae22745489dce0d58bfe768fef9572"
  },
  {
    "url": "assets/js/12.e6da08a3.js",
    "revision": "b0e65f40e35877feb7461fcdc3f568f3"
  },
  {
    "url": "assets/js/13.f2234bda.js",
    "revision": "d261a4718b5b0c0fcb0c567a986e32ac"
  },
  {
    "url": "assets/js/14.f2eb85f1.js",
    "revision": "9b972f261f029ad073a22161255e7a20"
  },
  {
    "url": "assets/js/15.ad9f73f4.js",
    "revision": "a7f1f5f3760fb6b7ffd1bb5fb0dc4f77"
  },
  {
    "url": "assets/js/16.7f2abbaa.js",
    "revision": "b6e432e874446bfbdeb1ab8f6304bd29"
  },
  {
    "url": "assets/js/17.7de324cd.js",
    "revision": "706cd6abc3c3d95a9bb0203d9cddd049"
  },
  {
    "url": "assets/js/18.d87e236d.js",
    "revision": "45fb83da831493cf07a6810728bd2cbc"
  },
  {
    "url": "assets/js/19.35c47390.js",
    "revision": "cc2b99b9bcf3e4585bf8dee16df67d02"
  },
  {
    "url": "assets/js/20.eb822d80.js",
    "revision": "67da4a395d5793935d1cea537302de53"
  },
  {
    "url": "assets/js/21.e527530c.js",
    "revision": "3163f1a0c82393b0fb8331bd7e376cf6"
  },
  {
    "url": "assets/js/22.ffefd666.js",
    "revision": "148ccd11e36efdc43cb8bbb8d9f743f4"
  },
  {
    "url": "assets/js/23.db646749.js",
    "revision": "b06e485de98d613aeac6ee0ab4bfa74e"
  },
  {
    "url": "assets/js/4.e6b981a4.js",
    "revision": "ad02e4730a60822dd7b4181dda422d7b"
  },
  {
    "url": "assets/js/5.32d03fea.js",
    "revision": "e6e20a9a38093bc25b2232f048379d08"
  },
  {
    "url": "assets/js/6.286d9555.js",
    "revision": "d1bc7a79861171aae8eecf8682608a37"
  },
  {
    "url": "assets/js/7.6ac106ed.js",
    "revision": "963842cbe2adc9afba049e18ee5934ed"
  },
  {
    "url": "assets/js/8.43821803.js",
    "revision": "dad2c5c14295678d470d0833cfacf88d"
  },
  {
    "url": "assets/js/9.03b9f6dd.js",
    "revision": "b2155d25b71254b54097c29ce181d9f8"
  },
  {
    "url": "assets/js/app.638c17e0.js",
    "revision": "3275afea7f17b36a4a2cca5e5767254d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.9e8cab34.js",
    "revision": "8844655d1617221e5a7b2a9d347483c8"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5b3a4ffadfd22e09c326228e3f42533b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "28a3995c5fb193b555f0ef2ef6eda1e5"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bffa4b0f38f9de2b6631cc0565591ad2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a2195d82d3f75d75b4c9bf94b20d8edb"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "70ee26062c5e0707b5b58e3dfdc7bdfb"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ae52c45c26b7ae35df1f1d02d96138dd"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a75d7b8e364ab9e42512a05886b0cf72"
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
    "revision": "618524ea6920fad15960d1e4c8818d3d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "60bc108081a6a846a32b5071d378bccc"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "79c7c6601ea3237b86d3b27690aed90d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "aab044ae36017f38225e87711d6c80cd"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a477c947e55581200b12a472ce59ae2a"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "f1cd1832a36cd2bb56f19f8224fe893c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "07ef43daf35e176272b15056166366b2"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e7d1656592e6240243e04a6e109bc518"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b4bdc75a24e86549205d5ce69e0a4aa4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6e224b1abcdff534e3815517aec41ab5"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "054f1d54e2cd3d33a9fc56e4d4fd447b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5821ad4631928cd2cb0de553eaccc28b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "cbeb0436c50bd71c6a85fc95c2c3f613"
  },
  {
    "url": "timeline/index.html",
    "revision": "3f22f07b85ee172f4de72c4ea5519841"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4b104c2a1f372fe60872edf6688af758"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c317d3e3b2284101090bec412dfef3c0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "55a53a99e9b277d0794fc040ee0d18c5"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8f9258eeff69af952c9a7a77b7a2120e"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "2f5445af93bd975457b948618b66d487"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "6e2840cee6699d59089640518224077e"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "64c8a5dff57fecc32af069a29f5849e5"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "9f4f7187acc8d3c7263e20cbaccdcab3"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "c2553e623e4aa6f888a969b1db3504a2"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b0823432d4199d269786f51462f43346"
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
