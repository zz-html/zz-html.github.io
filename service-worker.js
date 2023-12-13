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
    "revision": "c54c37ace163670767ac48d8a65fc60f"
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
    "url": "assets/js/10.eb254f23.js",
    "revision": "8c7e49fb91dc8a796a20ab8483571034"
  },
  {
    "url": "assets/js/11.69b4efec.js",
    "revision": "2bdb0ae1ecfe2d64afceb213537f10a9"
  },
  {
    "url": "assets/js/12.b9a6cc1f.js",
    "revision": "1b7a49a6141b7e39ec9678ab9a4a7b7c"
  },
  {
    "url": "assets/js/13.7e0b6abb.js",
    "revision": "7bbb992c55a5774e568ce16e90016cce"
  },
  {
    "url": "assets/js/14.854c3a74.js",
    "revision": "b66245e4b18d723abbfb7f6a835e1fb8"
  },
  {
    "url": "assets/js/15.5d038c01.js",
    "revision": "3f244cf8c0e09b4970c8b02dd9dad0b2"
  },
  {
    "url": "assets/js/16.299ea8fe.js",
    "revision": "be92bd786da5d4053002c4c205600000"
  },
  {
    "url": "assets/js/17.9f7b6160.js",
    "revision": "c523814d659ebabbdc3c145c3eea02bb"
  },
  {
    "url": "assets/js/18.16bc34ef.js",
    "revision": "8c54128cadbf0bd1dda010ff5bca05f1"
  },
  {
    "url": "assets/js/19.4e0519e3.js",
    "revision": "27f7418fcb5ae620e0896deeda794815"
  },
  {
    "url": "assets/js/20.5c0bb2d0.js",
    "revision": "1f03e5822eb7b95d953f3a9352765c53"
  },
  {
    "url": "assets/js/21.a9dc672c.js",
    "revision": "307cfd09c2f1633c513e789be82b7e57"
  },
  {
    "url": "assets/js/22.8a8dcbaa.js",
    "revision": "7fd2e8fccfc9dc73155fb9ad444fb5b5"
  },
  {
    "url": "assets/js/23.a2fe5ba9.js",
    "revision": "aea58cec9b5bdec880e3f3e523148c99"
  },
  {
    "url": "assets/js/24.4afdc013.js",
    "revision": "5683e5e5f5ced43c85151bfe3361bfc2"
  },
  {
    "url": "assets/js/25.9624e62e.js",
    "revision": "df6bd2cfabac3b7aa0ab3e211f370546"
  },
  {
    "url": "assets/js/26.d56ef7c6.js",
    "revision": "3199932733fe32f3cc552b5a64a9c462"
  },
  {
    "url": "assets/js/27.27e0c5f0.js",
    "revision": "e98e7da9e17ca2702b834fc963e9b3a5"
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
    "url": "assets/js/app.ecdd6da8.js",
    "revision": "4d89aedc43a020dc4903810c4c6114ee"
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
    "revision": "4f50abe47ba052e334779ef7594be9e5"
  },
  {
    "url": "categories/index.html",
    "revision": "72cb0f66e6045e3289d8c1ef46bed191"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2f21373b4849e06698d3cc9c7cdccebb"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "00bd045ae0c72daf94c86652ece56a9d"
  },
  {
    "url": "categories/python/index.html",
    "revision": "c252da83c9241c3712191560b217f420"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "26a288d9af6b61ac618ea1ff5d77fce2"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "028e411e75b571b83432c5688d4bd1a4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d9939826de01c45d4937a513c478896b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "72093c449efaa86b69ee856632dcb31d"
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
    "revision": "18990dfe4dfb90009a13194436c24df7"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d1aefdee713bad5a0e21482d9aca18c9"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "55efbda475f7786180d27212bf6371c9"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b9d62376ae0cf2ebbd6a9bd1f2a5e020"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f45229ae66d03a1446bf7e742c493cf6"
  },
  {
    "url": "tags/js/index.html",
    "revision": "12f3ee383c4481fef0e30bd4a0911924"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "3940d6dbbfec7e999fb732bd189c172c"
  },
  {
    "url": "tags/python/index.html",
    "revision": "1893fe173dce26e65b8c01ba8c935b95"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a00a44ab05031d2d3a75a6cf9e70d380"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7e11680f8aa5454c60798eda2a264b1d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6b7241884abf99a36fb70e2d60acd16e"
  },
  {
    "url": "tags/web/index.html",
    "revision": "c8a8f8cb87a99747539bd9533f991d77"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "52b9e8b358275d52c8f897dc023d01ed"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8aa0b78c1445d33463f9cc1e732bbd7d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1ad33a8f9fedb839a717cb2e8c19f351"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "dd0881c06a27ac3d876453478b477ae4"
  },
  {
    "url": "timeline/index.html",
    "revision": "8965b64f72b4ed6e9fe7e911bb4c8f6f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "68aea701a472510c3f5c027ccf229ae3"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5526b428e42d88c2a5105e3793999680"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5c84e2469027008cbac7948f5d57afd9"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "bd82151f1ba2bb3232d74e74143217f3"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "a40ac20c89245fb001b46b6a0a17cf30"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "91873004e45f0cfbaeace9e04b570eb5"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f9c0445e713ff1daae69ac1b716eab30"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "cb9fe6607c7763f14d7300b28db0b3a7"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "993c1645f6f9f30c5caf813e77dd5dd1"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "fb034bfea9d90d38a4d7dee07bb4cd1a"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "b493a5440bb52c307b78b21e7bd63909"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "87ce04cc4bd491dfcd9bf14bd581defa"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "7cebb9b216c515bf422be285d90c42a0"
  },
  {
    "url": "生活分享/life.html",
    "revision": "22c61dcf0bfba26800bbe15d4b8fdedb"
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
