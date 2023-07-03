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
    "revision": "bc03ab3e054c9f6bf41e9a159755905c"
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
    "url": "assets/js/1.c1bfffe5.js",
    "revision": "f88db81f1490c1bf9cb1954ef5a22916"
  },
  {
    "url": "assets/js/10.92cf44ff.js",
    "revision": "d036a5cf598e33d50e4e61b1b01c5518"
  },
  {
    "url": "assets/js/11.29e0983c.js",
    "revision": "32d10c599b92e789199517cfc589355f"
  },
  {
    "url": "assets/js/12.f4c808d3.js",
    "revision": "c30ca0e61b57f176ada5391825e1becc"
  },
  {
    "url": "assets/js/13.be86d7b4.js",
    "revision": "e187fc144a589d16ae69be3fd9869d07"
  },
  {
    "url": "assets/js/14.53228155.js",
    "revision": "af99d9c53d79af584ed38c9af4818956"
  },
  {
    "url": "assets/js/15.aaf8c856.js",
    "revision": "569b224a99f19c23b34f066d50e1c7a7"
  },
  {
    "url": "assets/js/16.d0997f16.js",
    "revision": "94641eb747c3af774a72c9098b727443"
  },
  {
    "url": "assets/js/17.30470cba.js",
    "revision": "6f57b1871d88d563746d2d7623ea600c"
  },
  {
    "url": "assets/js/18.14c7b4d9.js",
    "revision": "24ad6a2b687550adcdadbf4c40086a0f"
  },
  {
    "url": "assets/js/19.57d480e7.js",
    "revision": "298888ae94f48cb77ce0442a1fd8cd86"
  },
  {
    "url": "assets/js/20.d2a3ad11.js",
    "revision": "60763501839affba5b7d82968b99bada"
  },
  {
    "url": "assets/js/4.f89a3d02.js",
    "revision": "28cc383fd9f9d66bc4465b7d14f2e628"
  },
  {
    "url": "assets/js/5.ca350549.js",
    "revision": "5279fdf4cb8ee018122495bfe5466019"
  },
  {
    "url": "assets/js/6.043dc4fa.js",
    "revision": "738dc541356e82374534d1325bfcf301"
  },
  {
    "url": "assets/js/7.e669687e.js",
    "revision": "490096a7a0fade11f86ade7dd90f7869"
  },
  {
    "url": "assets/js/8.b0ba44c0.js",
    "revision": "e967cc1e676164a8c0db0a389f72bf19"
  },
  {
    "url": "assets/js/9.59d7c254.js",
    "revision": "2a48ba3c2d721018681ec99d5e98f56f"
  },
  {
    "url": "assets/js/app.beebdee5.js",
    "revision": "9c2d42b7a069c212d91c9d53d231ce9b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.7d20672e.js",
    "revision": "f913842d2b260b00a62e42dee8729b47"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "cb66738ea87049efeab63e76dcce4203"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9eade0ef7d7614823f79ce30791706bc"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "fbfaa48cc45385cc8d00985099a93dd8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f8438fddf3ff34921171a4ce5b39acaf"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "6f32f367bd4db7e73b570e176ae8df2f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "30d06ecc4e6451a3141ca1e2e5ddd815"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "48cc304629c1c977d00748f465cb651c"
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
    "revision": "1cbe6b9569074314659ff9319210f811"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9eae1b65581928fbd218982135daeeeb"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4bb19a0db4e7d6ff30e615da6f57f0aa"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "bb400c9218451b9b70b5673976fe6923"
  },
  {
    "url": "tags/js/index.html",
    "revision": "98be93df43289bb70a670639311eeb1f"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "ccdee64ab70f18bdf253a0b594540731"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "992aab27d19447ddc881c3ea087d69e7"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7699c7d5c0183a9ebe450ecab488688a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "cef3927633c3f289e610ec69be74134b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8e0fa3a79d9ae6b692e853b733b807e3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d3681643011c7093c5310f3946772ac2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "32984b22ebc2d69e026156257a09badd"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "46081ca10ae5404f4eba518c9600cc4b"
  },
  {
    "url": "timeline/index.html",
    "revision": "a0359005a7011d74377d57ea1c53fcbb"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7b0255b3c257bfcc8aa46d392a2d989c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "48bef4e513343f4cdb6093617fdb76ac"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "99b4c59c326046704a46ac492bfbace3"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "bb4aab9e3c414e02c9b9d3cb55cf29bf"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "7fe6909599eccdbb0640319a168553c3"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "a7f1b8e503f513c457850f4de739979c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9dbfeffb509c01d5a2ea9a20a65c76e5"
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
