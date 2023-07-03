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
    "revision": "e8d486c74923cafa6e838a2d06229a7f"
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
    "url": "assets/js/1.c1bfffe5.js",
    "revision": "f88db81f1490c1bf9cb1954ef5a22916"
  },
  {
    "url": "assets/js/10.b890d519.js",
    "revision": "b761326158cca5b44bc684488ee5a107"
  },
  {
    "url": "assets/js/11.674d7726.js",
    "revision": "bbadf8dfe5ec8b1e7fbafecb5148eb76"
  },
  {
    "url": "assets/js/12.b822d897.js",
    "revision": "d9e6366a04c99a5e1fd5cef95668332f"
  },
  {
    "url": "assets/js/13.51866222.js",
    "revision": "b1bdf2b3bd850d3982033dc0fbb9ad31"
  },
  {
    "url": "assets/js/14.f2eb85f1.js",
    "revision": "9b972f261f029ad073a22161255e7a20"
  },
  {
    "url": "assets/js/15.5a1e03ad.js",
    "revision": "ac634d89fbe0eb47522df3bcb5fd936a"
  },
  {
    "url": "assets/js/16.2a7a1019.js",
    "revision": "b872b8fc414cbfe24c56befdee1835f8"
  },
  {
    "url": "assets/js/17.c31626d7.js",
    "revision": "eff535b325107d408abfbf2ee005327c"
  },
  {
    "url": "assets/js/18.d87e236d.js",
    "revision": "45fb83da831493cf07a6810728bd2cbc"
  },
  {
    "url": "assets/js/19.c0d5017f.js",
    "revision": "2bb00ba3ef20d8b984b72bd29d274a49"
  },
  {
    "url": "assets/js/20.a2f54d8c.js",
    "revision": "b73a3035f37d1f64b3e90cf283ee4f46"
  },
  {
    "url": "assets/js/21.a46bd1fe.js",
    "revision": "078382292cca6b5432eccef4c3e732e4"
  },
  {
    "url": "assets/js/4.894aa8d3.js",
    "revision": "8e2ba13bc02a73b705dc682dd1938a57"
  },
  {
    "url": "assets/js/5.e66dc3c3.js",
    "revision": "9d8b10b991b06cf81dbd599b8cface14"
  },
  {
    "url": "assets/js/6.4239f2b9.js",
    "revision": "82f6f86617880b80de306e447e0a56d8"
  },
  {
    "url": "assets/js/7.3fbc1b8e.js",
    "revision": "ab33b7e62b66b1074fb45eda4c7f1feb"
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
    "url": "assets/js/app.274c7942.js",
    "revision": "34ab1b9e7773fa160bc0e469374426a8"
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
    "revision": "121526a35012f92798a293bfaddfcbf8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e571a5034fec7613f205c5f76bede3e7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c029656611e3be2e4cefe011e9ec01e5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a5ce05ff8d5fa759184808f3fa75d14d"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "b3aaacb0ffdee3f624aef603f5a8b3fd"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8dc2b62cdd1dffcd41508a286ead612c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "434d70a52ad6656bed822dc7ef43b356"
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
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "1cc115b1fd413098992925e4bf12a619"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a07682a7991d9f6c6dd526df0c959416"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5f2030909f304221c1ce64fd53172d06"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "911bbe021fc7661232649ad50f01d8f6"
  },
  {
    "url": "tags/js/index.html",
    "revision": "59f85c92b62d620905be354e483d0482"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "5ce122efc755b061c77791e1d91259a5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f72d898e29a4e6f9051d54739be066ad"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "aff6f9966d00fc739e964ba9c93ca54d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b6c839d14d58aef7f3120e4fccedfe2c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9e682f66ea2eb2717348fec8139da37e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c255ec8615bcdb7659acbe65fa93e195"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "16c6417c9a53c294610547831efc722a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "bcf367db777e9f5ffd2d0e43cb5c09c8"
  },
  {
    "url": "timeline/index.html",
    "revision": "d8017be3faab6901b9b646864bb762ce"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4ced6d6489d454a394f9527718d50326"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a01ee5356059028a2b5ecd1923c53752"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a10ffc4f9ed204c94185d9221c3aa4e7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "aceab15ced66751ab259dbcdfb3d699a"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "e084a9a21dc1bb5d2ebaf5f0b31ebd58"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "e3eb32e649afb4d164eaa0f95025696a"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "4d69e41fafc9af4c334824cc42891b4d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4974518f6e64cd343f9a6f9deef51cde"
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
