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
    "revision": "d11b3a5222d3e7faf72c3658105f612f"
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
    "url": "assets/js/10.9f8ba757.js",
    "revision": "03066b401d405e23e625f6bd3ee6998f"
  },
  {
    "url": "assets/js/11.1abc584d.js",
    "revision": "2960b52a74f64c60bada3198df2f56ac"
  },
  {
    "url": "assets/js/12.6f277751.js",
    "revision": "b23e66c8133e981cc0eb16943160c551"
  },
  {
    "url": "assets/js/13.7e0b6abb.js",
    "revision": "7bbb992c55a5774e568ce16e90016cce"
  },
  {
    "url": "assets/js/14.6ab48b88.js",
    "revision": "c13f23492b70325f188d6fd9ba4a6063"
  },
  {
    "url": "assets/js/15.23eda820.js",
    "revision": "48301e735ffcd863383198d81553f244"
  },
  {
    "url": "assets/js/16.c8fec3fe.js",
    "revision": "2186bb3f516fc46e53a4063fc889d779"
  },
  {
    "url": "assets/js/17.9f7b6160.js",
    "revision": "c523814d659ebabbdc3c145c3eea02bb"
  },
  {
    "url": "assets/js/18.e6ad976c.js",
    "revision": "d66aef318493fddef8f369c1c7254aa8"
  },
  {
    "url": "assets/js/19.c8e2aa27.js",
    "revision": "7cf1e95693c92e8f24fc7e7560defbe9"
  },
  {
    "url": "assets/js/20.5c0bb2d0.js",
    "revision": "1f03e5822eb7b95d953f3a9352765c53"
  },
  {
    "url": "assets/js/21.91e0f409.js",
    "revision": "c6ae374eb7474ca1040c51c31a223a7c"
  },
  {
    "url": "assets/js/22.db83e3af.js",
    "revision": "828b3f4bcd89f153a195dab38a66b577"
  },
  {
    "url": "assets/js/23.0faa4772.js",
    "revision": "32c7434a1995c0cb5c00d899aa9e8f2e"
  },
  {
    "url": "assets/js/24.34ab13e2.js",
    "revision": "b0d7cf312af8e257f75ee6ce3e40dd2b"
  },
  {
    "url": "assets/js/25.b007fbef.js",
    "revision": "d04f636578b42bdfaafa87e25c96a90b"
  },
  {
    "url": "assets/js/26.737aa12c.js",
    "revision": "6728160bc8abcb2855219d71792ff3c6"
  },
  {
    "url": "assets/js/27.8ab9e557.js",
    "revision": "1713d44184a1b1387a75a96408d19f07"
  },
  {
    "url": "assets/js/28.5f25c387.js",
    "revision": "ad27b4d26767d8d497b372d1d5e03ea4"
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
    "url": "assets/js/app.ccc74465.js",
    "revision": "12cb32939c8f1ef234e1d78586f76b84"
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
    "revision": "52316c1c4d4bbcd16285f1f19230aec2"
  },
  {
    "url": "categories/index.html",
    "revision": "bf0633241b261f20a2413b604fec727f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4933b4a72211de7b4ad716982b95efaa"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "fce7435412ab01443a5b2cec8c51db5a"
  },
  {
    "url": "categories/python/index.html",
    "revision": "40a8466be9c3d72e287a37a4439ebf53"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a1ac3f1ea6d971a1a550e030ea535c8c"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "facdadabb67b4a7e0206640ad5aef78f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "91211f6f1c116aab6f233a12c3332cae"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "bf20bad31325a45e7d7a621df1d284e0"
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
    "revision": "aadac6a8881e7d46db803a55083cc3b3"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "db58e19ab37a992b377479dc6ab528e0"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "df51cecf89078680843d37297028ac96"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "bc3961025395f61df4f892262095c6d4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "170cd1cecf70366dac40953e4960fb97"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d4d66112cf69824d2117c3b41f61a01b"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "cdc5e1ad55c081c9a2790e81c435eb77"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "07cac2b3c8887fd5d453286f057377b2"
  },
  {
    "url": "tags/python/index.html",
    "revision": "8e05efbe7854978bd96d9440bfd9dde0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f9fdffa35f4c0c040a084d1d5836b266"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b03144279ae72838f226930ab7217d34"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0415809ccb91dd3a838ff25107f96ecf"
  },
  {
    "url": "tags/web/index.html",
    "revision": "b748ddd650ffc136255e43b43d5d93a1"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2983b5f01a9a2d8b19fbbdb6d589b3b0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "7f5576205a5948d72c48a61542a3f9aa"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "82578135d4df38992cc5c7e07aa1793f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4286bb0c0f47272c4f7e80f1cae43b48"
  },
  {
    "url": "timeline/index.html",
    "revision": "d26c608e31ae189dba9e3c3f1ac08147"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "db56b650b4ea1ceb8a2f876fda052628"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5f4b2b24ddb3394784dbb04d1f405fba"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b65c5413f296763e5425c4d8221fa9bb"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "5ef97922ca18b52b1553500c5f804981"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "8787da5bbd9933c3f941c5610dac4b48"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "27ec0268195cf9401514476122dd99cf"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "64aa9cb033756015479ebf36485c3b2f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "201281c297161d4286f878c7b4af2dfc"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "0d67ed26dd32647cfb0c2dc53b93c77a"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "fb5f92f7c30529906f16f5be42f833b3"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "33545458778e020549ef896884b6d2a5"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "56dd3e32e219ea6518792c675dc57882"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "1fd92fb97ea46f396570b3c7588a35e9"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "fd9bb93bbe94029ca8b1fa600b5e8cae"
  },
  {
    "url": "生活分享/life.html",
    "revision": "753d4661ab08fd34057c138347df50ed"
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
