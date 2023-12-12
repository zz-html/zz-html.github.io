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
    "revision": "ca024e7866cae8dbfd0a4776e14284fe"
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
    "url": "assets/js/10.0a70e769.js",
    "revision": "90703951fa297c2b952232bb3ac0f892"
  },
  {
    "url": "assets/js/11.e5c3d137.js",
    "revision": "d1f48dce8e72a1b693edf1018e61c97f"
  },
  {
    "url": "assets/js/12.bcc9ae76.js",
    "revision": "fe8047796cfa9519edc8e59f87c6c991"
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
    "url": "assets/js/15.c90a8d05.js",
    "revision": "bcd431dacfe532162184621cf67548e1"
  },
  {
    "url": "assets/js/16.74f64009.js",
    "revision": "ea934dc4e7d20edd4c0ecf4e6a7c303f"
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
    "url": "assets/js/19.13b99f4e.js",
    "revision": "6c7aa3c9a2923063bb7fc1e5e52888b4"
  },
  {
    "url": "assets/js/20.bc52edb2.js",
    "revision": "0cf4e7eb74ed4275aec67cb6b1500ee4"
  },
  {
    "url": "assets/js/21.08da026d.js",
    "revision": "f3a7eb6f0bf633f9e4bf0b612cc5484a"
  },
  {
    "url": "assets/js/22.59c6ec7e.js",
    "revision": "3b67d35e5d9d25a0cedef43c8b0889b3"
  },
  {
    "url": "assets/js/23.a2fe5ba9.js",
    "revision": "aea58cec9b5bdec880e3f3e523148c99"
  },
  {
    "url": "assets/js/24.1c012098.js",
    "revision": "2fc3a9bf98725dc2e93d9b9d4dd94f9d"
  },
  {
    "url": "assets/js/25.66e7fa6d.js",
    "revision": "6aa39cab5d6fc16c0f819767dd6fa5f4"
  },
  {
    "url": "assets/js/26.80f858ce.js",
    "revision": "03c804091f10cc65a6937b2111f0684e"
  },
  {
    "url": "assets/js/27.2e5d2ac4.js",
    "revision": "18493aeb2327ae25be14ad5bfc0da0dc"
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
    "url": "assets/js/app.0d78bdab.js",
    "revision": "04a391e4a4c6fb636a35f0fb1df94f7a"
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
    "revision": "e4db1ceb1e4f72c76949502c0092a5be"
  },
  {
    "url": "categories/index.html",
    "revision": "ff759d07c54a5971802eb7b1699df9df"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1b3d513f1f8f07d3d1665bc2ca723490"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "afc4d13d35235f8e5cf6d2fca2a05d49"
  },
  {
    "url": "categories/python/index.html",
    "revision": "cad1b24c988a4878e4049d926a41c664"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2e656d93c71c2bceb4b469518a0725ed"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "f0cd564263913b306c969459bdd853d9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "eebb5f2de4457b3e397b12ab42b8eabd"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "564cad48ecf7a3e34f8a92e436c22c90"
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
    "revision": "6e3da29bbef0d4ce0ca11478ef1cfd45"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2d7110f15c0c2e4ec34d4f2bccfd0362"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "113743c37ef4322e11b73065582a9b19"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a850565511be0bd345f06a8c18a2188a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "862869ff031513dc2255a8f959869b85"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5146c4ed0e7258bd9c9f5bb47caa1b20"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "a17b4993b59abf592a60ab1492d4cd15"
  },
  {
    "url": "tags/python/index.html",
    "revision": "8b45f86dbe3c520f01d61d3fd308d9c5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2b00c005421175d50a7ae18ba91f303e"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "013a6d57148371c51a25de94f227c9ff"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "23b93a9a47bd860bd05c45daa02c4453"
  },
  {
    "url": "tags/web/index.html",
    "revision": "adc7779838cd0577d78c7e9bb249080c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "fc6f94525959429322e8ad7d35475fde"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6d1d96475754e970f66a0543a8e608dc"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "471184b61bb073bfde99b86eade8a4f9"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c147f3d2e93d7abfe72fccac084854b4"
  },
  {
    "url": "timeline/index.html",
    "revision": "aca2e52de8b5a1cd32b864e112102f92"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "6e085372ee2a8cedf73086bd1d5e7c70"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d483375be2e61ae2a5259a2ff95f86db"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "26031b06607af1ccb4c8850cb0841bbd"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "e70769f070d46a4ae76e423c3a267277"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "1a4e8a675f23bf6ae63837b311949026"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "e133415a61631ed482d6a2d92ad6ca4d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d02eefb6755130bf10fac7aff0220b9f"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "66291e74fffd8d28dfec1e162e10b87a"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "2497d51d230d57ff2cbe7ae4e4c0238d"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "4d6fc2049f33bd3c523795f867501982"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "9a5338e3d1e14627e6e8f5a7036dd058"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "d9de058ca3a1cdfcdbb43e66790c3b19"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "7ec9c8715dac486b2b93782d979527fc"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5acb9d3f5e85fd2230d94cbbffb1c521"
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
