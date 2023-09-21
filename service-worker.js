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
    "revision": "84704110e9861ee43dcf2c4d7d38c34b"
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
    "url": "assets/js/1.c3e2e87d.js",
    "revision": "5ae6fbc10754afc622a1c78d59260560"
  },
  {
    "url": "assets/js/10.ed25f8ce.js",
    "revision": "9fbaac14e0331aaf93fdc311baa35911"
  },
  {
    "url": "assets/js/11.7f35a97a.js",
    "revision": "3ffbcb641aceeddbb246ef9d90aac684"
  },
  {
    "url": "assets/js/12.afd8921f.js",
    "revision": "2e98c590f1245439219e01d6f31df5cc"
  },
  {
    "url": "assets/js/13.5452c253.js",
    "revision": "25dc61389e32bc885521a098807bba4c"
  },
  {
    "url": "assets/js/14.232d5d10.js",
    "revision": "a1dff52c02261dda91b18756d1502e67"
  },
  {
    "url": "assets/js/15.9c192660.js",
    "revision": "7ec8bc48894a35b9679d8fd6e9413003"
  },
  {
    "url": "assets/js/16.a89d0700.js",
    "revision": "2618c5a2c57c53032e413fa6f7d194fb"
  },
  {
    "url": "assets/js/17.304e7b18.js",
    "revision": "d97d0cd45f602daf509987ab74ca1778"
  },
  {
    "url": "assets/js/18.e2ca3261.js",
    "revision": "d891b0f714fe798d1fdb3bc54f41f03c"
  },
  {
    "url": "assets/js/19.3e37c612.js",
    "revision": "ec3cd6e8b2b8341d66db064e880a2137"
  },
  {
    "url": "assets/js/20.4fd32031.js",
    "revision": "b36b4cb577e2525df5ac303cd425ac00"
  },
  {
    "url": "assets/js/21.2147d3f7.js",
    "revision": "83750e2b0b259b75fe50e407241d89b5"
  },
  {
    "url": "assets/js/22.70992553.js",
    "revision": "958e69c64b346dcb189a1bf0eb64e6c5"
  },
  {
    "url": "assets/js/23.2b416854.js",
    "revision": "1d8832c5db38ede8dc1e69b9bba72ce6"
  },
  {
    "url": "assets/js/24.bec2a6a8.js",
    "revision": "6c409991ee1af59d471bdb39bfe33b4c"
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
    "url": "assets/js/app.7f425f77.js",
    "revision": "a66e42468f40719c5a038863a26545f1"
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
    "url": "categories/index.html",
    "revision": "fbd9167820a515b6b4d319a3aa68f092"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e67e8896b1befddad5a3d9e1f53d6bf4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e323fa979055c6d0e4893bb6391b50ae"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ec5bc485f7d54e64f3b72e8f7d39321d"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "8bdcfcaf986db30780d8563fa96d9249"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "08e2ce3df08ac248685f70501155a1e9"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "6dc02ffd3ebbdcf9dab7e008f3a28d35"
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
    "revision": "3e7ca04752b6c29ea751f9299385d4f3"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d5607c81f489f2fa3896a0b00a77ec81"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "465476934dbb1aee78ee14a0aaea58a3"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ec962243f9df71869a07e65405e31449"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e06d8e9b1f4061e293f4892aa0237370"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "164eef7f0eb7ab330a8596cc15004846"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "85cbb83217573b82d1231bdcf3942806"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e2d9c91995a50759d9b6576ab771ad6a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8df1d661aeca1f0bba27452af9713ed7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "190913fc12298dc4da066aa5e085bc0f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "0f965ad659556b647e8d20752975fa4a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "fa02115e3b92c6dab8ee44e52f712082"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "6d84729332cfb9c1af8ad79d12226041"
  },
  {
    "url": "timeline/index.html",
    "revision": "d23f43ac2211c2a7ab8601aa42d840d1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2b75808029c1ba884469de4605cb799e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a2cba0005f1ea2d87d75376acdd17002"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "7c89358da32bd533c7b7ef3fa6725f76"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "55c39c22beb28d37a05e864a477cce95"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "7c02b07bc0d084743cedbd3d8810c944"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "3bb57fbbde2fbdfc2204e2b5f335141e"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "91c950e2a18df1aab527d69fe1a05063"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "8d2f923d5ec23168ab8f2cb21c4682f9"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "b4306f83d0b1d343b8fce314c80abe8f"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "5ea8fad6d76f89d094323927baf86df2"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fe5f1d5d1d55b75b1943b05587fd137e"
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
