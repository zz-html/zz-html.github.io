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
    "revision": "cc6df911679a03f2ab6e7d632bf1332e"
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
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/rtp.aff959a0.png",
    "revision": "aff959a0ca0bde247071cc1ab9080113"
  },
  {
    "url": "assets/js/1.d06d4e52.js",
    "revision": "3e021cc44ec5f35c334cd5211e276768"
  },
  {
    "url": "assets/js/10.495feb6c.js",
    "revision": "9087eb1a90d47b32b1b526faeff2da9f"
  },
  {
    "url": "assets/js/11.7e868ce2.js",
    "revision": "244d20b7b3d21bc389d84a217ceac1cb"
  },
  {
    "url": "assets/js/12.744acd84.js",
    "revision": "5c31e8c043c47d910d4f2c58c67be736"
  },
  {
    "url": "assets/js/13.1c3c7869.js",
    "revision": "69ab86eec09f5687396bf418c3efeebe"
  },
  {
    "url": "assets/js/14.1972905f.js",
    "revision": "db7e021fe9ae01002990aa30c762f5f5"
  },
  {
    "url": "assets/js/15.435ff09d.js",
    "revision": "f660c682c7b2d09d34006093a10ad60e"
  },
  {
    "url": "assets/js/16.031d2b81.js",
    "revision": "0fea671793dc1e609ae0fa6d2d9cbec9"
  },
  {
    "url": "assets/js/17.d7e9873f.js",
    "revision": "75fa5a81e50cf521caee25b2b575a91c"
  },
  {
    "url": "assets/js/18.a3250a48.js",
    "revision": "3697b329a6aef20d524e04ce35c97ae5"
  },
  {
    "url": "assets/js/19.22ed8637.js",
    "revision": "41145964997920f8df812b8ace10aac9"
  },
  {
    "url": "assets/js/4.543e768b.js",
    "revision": "aabd1a38749192a68a01f829f1d60546"
  },
  {
    "url": "assets/js/5.c3e4b482.js",
    "revision": "ab8cad2d9e8ac3745e8cdb86115ca8a2"
  },
  {
    "url": "assets/js/6.e93493a4.js",
    "revision": "08bea4efc4eaea7dba44c28f058795d1"
  },
  {
    "url": "assets/js/7.d6441cc4.js",
    "revision": "bcea7d4752ce5e5ce1937f2a4eb753b1"
  },
  {
    "url": "assets/js/8.015185ba.js",
    "revision": "97ff32dd244e94dcd991d5e1b3aa71d7"
  },
  {
    "url": "assets/js/9.1f427cdd.js",
    "revision": "8d4f91ba2ed0c45a56274762702670d6"
  },
  {
    "url": "assets/js/app.2ae4f520.js",
    "revision": "542781ce3c9276412f4fadaef3d8a53f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.a67a7b3e.js",
    "revision": "14b98d41232a26a063a6a51115951c6c"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "09dd03684df9ad54c5720119a403cfcb"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9f222f92667af6782a28f3e9566610d1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a25b458516562260cf770c52f315b57c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3836e93f4c8f14e0513377434270a75e"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "d566e3c72e82ba70482882ab1550986d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "09419364226a3ded6b44888351ae59c8"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "17017dda5d4112e82fca9d357558a39d"
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
    "revision": "b14ad88956c5a9e973a4f0e776e462a5"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f1ce317c749c65576acda33a1edfab3e"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1f550bb7412ff9962d624f9a07e0b57c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b9202b52dc8f44d5cd087790c4c795c3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "be98f0c086968203d84581f985dda3b5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "ab6b343cbee5cf7a2e3d65bad36efe77"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "de73a94f0ebb67a9e5d667e385ce7ca1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "feef18bc72717b1928970b6f9b445984"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "444280e539086de69d0cace38604e4bc"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "755d7e65760e0594a96b6cf0383bcf29"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f59c954fc7a5fc3672205631b3a35745"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8e2ed792beb1fd8697112d2a50193d49"
  },
  {
    "url": "timeline/index.html",
    "revision": "17f9dc89cd26d241138e9b3ec85551df"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "98a5b29b68793e695bf69a0148907f74"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2ef667467e0f26e06a96c45273944629"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "11896783bf3c2336f5ffc7f0234f8e0c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "06bc2e4f5e2c664e60d47989bbef2956"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "eae99d42538736dd72b5c1eb4a6d3316"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1ae3b4cb7a391bf6253d9e97ed4e3b27"
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
