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
    "revision": "c997b5af7c4b8534e604cf13d07a2e41"
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
    "url": "assets/js/10.28ed9372.js",
    "revision": "62043b6881a635cd5896f12f3c0947f6"
  },
  {
    "url": "assets/js/11.f6476185.js",
    "revision": "8fd1e7418177d71c416aa7d83b2c63ea"
  },
  {
    "url": "assets/js/12.942e8e8a.js",
    "revision": "b5648e6fc5becbaaa1691a8483a7c5bc"
  },
  {
    "url": "assets/js/13.a3f3af83.js",
    "revision": "b9d20d02e7f440103ccbaaff5246e0fa"
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
    "url": "assets/js/16.2f80cf44.js",
    "revision": "6de1031d066a2dd003e6036817d5f23c"
  },
  {
    "url": "assets/js/17.99a48a55.js",
    "revision": "a575d733387addfcf999ae310a462476"
  },
  {
    "url": "assets/js/18.9d839d3e.js",
    "revision": "ecb4bd330f9eed038d4990b8bbd25bea"
  },
  {
    "url": "assets/js/19.25a59630.js",
    "revision": "552040a37d9a4a3dd2f6d5f8f36fbf1f"
  },
  {
    "url": "assets/js/20.c50115a9.js",
    "revision": "f7b24cad436d72918456856607736374"
  },
  {
    "url": "assets/js/21.22f4571f.js",
    "revision": "8d84f136566ae5dd01b02f80fd4048d7"
  },
  {
    "url": "assets/js/22.031d1299.js",
    "revision": "fbe612eed3a8ef84bf1cdeea494bd2ea"
  },
  {
    "url": "assets/js/23.99598f8d.js",
    "revision": "d7c7b9c43c71a2a26e4d5564d76b3419"
  },
  {
    "url": "assets/js/24.64690535.js",
    "revision": "a860d0511b61fac7c9d1de4ae8e7bbb4"
  },
  {
    "url": "assets/js/25.cbd58f28.js",
    "revision": "904a4fcb50ceaa9fef6915b71c6d505d"
  },
  {
    "url": "assets/js/26.00aa93ae.js",
    "revision": "bdf8e3b421579e6751a0fc9b7dbe9584"
  },
  {
    "url": "assets/js/27.3a937397.js",
    "revision": "e70c5c2823bc4fdd710fbedcf6761bbe"
  },
  {
    "url": "assets/js/28.ef6f6381.js",
    "revision": "3a303caa2e0599f36f222805947f0d47"
  },
  {
    "url": "assets/js/29.5901e938.js",
    "revision": "aa1a621885c550dd66dd822f92bce473"
  },
  {
    "url": "assets/js/30.b6ab7ecc.js",
    "revision": "6c3122ee2d0660c4c06241ac481fdb99"
  },
  {
    "url": "assets/js/31.f0655e59.js",
    "revision": "0308abe2a28dfe90881b8327ffb2580e"
  },
  {
    "url": "assets/js/32.4f4c5d87.js",
    "revision": "2511d1ce842cc8b1e621f3674b29390b"
  },
  {
    "url": "assets/js/33.9a459d44.js",
    "revision": "efe0840bee976f2d9d9e8a924994549c"
  },
  {
    "url": "assets/js/34.08087982.js",
    "revision": "9a193c15a5dbb31a84416c38cb1ecf20"
  },
  {
    "url": "assets/js/35.b2c39bef.js",
    "revision": "60d731f93c99ad39b58fa02d68464a09"
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
    "url": "assets/js/app.94d18f7c.js",
    "revision": "932e45aa34507d4315988d0a322f34e2"
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
    "revision": "2eb4e10bf07634b144a57050dbec8e0f"
  },
  {
    "url": "categories/C/index.html",
    "revision": "1997442c72d1b872d8769be978033adb"
  },
  {
    "url": "categories/index.html",
    "revision": "934f40ea7d5b9b1b726f0658aa63df88"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0f0a84cd0f468546b20084cd8c97a1d0"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f50961e3960e0de46b5bebe3b32b4b1b"
  },
  {
    "url": "categories/python/index.html",
    "revision": "afb5ab161326189667070bd39fa541fc"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3490d7944dcec6008fc9438b8eebac44"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "bba63c733d8b17f89a44a391d5d2971c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "61388f486d30f4c8c4a662b15d75d140"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "2ac1fc63e56e685c9115ce474e1668a4"
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
    "revision": "1dcae84a574eb9687dac66182ec21f65"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e31d6eb8c985612566932a05c406e86d"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "a90d2b2296fcc31fa60a42f7c60bfcff"
  },
  {
    "url": "tags/C/index.html",
    "revision": "4468a3ce5196d24941efa1264adf08b4"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "98fd32841aa5e73d3326379fbc1ed893"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "fe4ec2d6424636af3ad41465c5a07e22"
  },
  {
    "url": "tags/js/index.html",
    "revision": "73b33875c820f64df266731ed56189a8"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "937a02f4142871a994933c6b552c2129"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "94dc12c5b620d990b820fd873abd0818"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "82626bf1835ca7618676c0fe379578ce"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "44b197e6bb18c100b2f6aca466b3c046"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "01ff688888490e0c6014a595a3cb9ac8"
  },
  {
    "url": "tags/python/index.html",
    "revision": "391fa68023df71fb2f36d95c924df41a"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "913685ace671a564a3d6c8463ede34fd"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a003d86acd2d278d001b03330724cbe5"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "5d4c72d8e51a84e22146ebcd2008511f"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "40afa34b20bd429649994849bb75c3c5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7f01918d08b604df40c7cc131c06bd8a"
  },
  {
    "url": "tags/web/index.html",
    "revision": "9dfbce6aacbee03c0b5e77b58e0a988b"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "6add615313758b828cd206c905538394"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b27c1ae39d4e14b267a06de2fedf34ff"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "63f7d71fb7b5df3391a09ebe2957d0c7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d1c222b20ad5ee057f603ff29c431cc1"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "5fc657d0f1cd903856edab8b36ca6692"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd315bd0f2174fceaf3c230a94d7f1d6"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "d6b0e95409d6c6a9a64502c2d492bccd"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f0c82329d6d6b622647c91a4444615b4"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f6b2b2b9a34357d3f48f8458b46ac3ec"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "411c45dfbd8f6af1d654b9b03e5bf747"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "23d595f4c085e6ea3eac7f583a1b5f49"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "1cf9ce345fc9b7b9cc4bad652d21f981"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "05b1b7e33f1c0882ab4bb40c15dfb3cf"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "42ec8990b39b15b84b8988ad249b3945"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "47e026131244e1df0353ef04949d0acd"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "0977c43e94ba9df961331da505686092"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "d7f9a0aadbb1cbc531a60286dd109818"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "3cd51286306fa85ed59d8df8edd3c5ca"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "86210a13251ef31e0b7d780148c11b14"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "16e735698597d0df17a356997c344913"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "98b985a09e71fff25d55a2120e169022"
  },
  {
    "url": "技术文章/流媒体/AppAttack.html",
    "revision": "e0e816c23f3bb41a93840628c9a24cc6"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "dd06b09cc4797229aa7c722adfde05d4"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "570662548b1d583bf766e4597275b92b"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "deb0fd9316faf77acddad296697c2de4"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "aa3f9f33cfc5029d1a3819c3e4ecb51b"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "1aa5ea9642c39824a9071aef23b1cc52"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "5bb9b112c3da6b251c02566c3e46e862"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b5c608125b0e2618cd52e939b6e19a67"
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
