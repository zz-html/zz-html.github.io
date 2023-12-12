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
    "revision": "c60a99bfdd61ed9c238b80f36ca070a1"
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
    "url": "assets/js/15.c90a8d05.js",
    "revision": "bcd431dacfe532162184621cf67548e1"
  },
  {
    "url": "assets/js/16.74f64009.js",
    "revision": "ea934dc4e7d20edd4c0ecf4e6a7c303f"
  },
  {
    "url": "assets/js/17.2322a976.js",
    "revision": "2703e1c53eb318c68ff18d416f93fb51"
  },
  {
    "url": "assets/js/18.eabd2f94.js",
    "revision": "50c43c7e514744306b300b2d2224d3ae"
  },
  {
    "url": "assets/js/19.ec477283.js",
    "revision": "db712629b5245c66a8fb685efc74a67f"
  },
  {
    "url": "assets/js/20.bc52edb2.js",
    "revision": "0cf4e7eb74ed4275aec67cb6b1500ee4"
  },
  {
    "url": "assets/js/21.94d16d22.js",
    "revision": "4512fd57e12b77da4a74a0273c9a11ff"
  },
  {
    "url": "assets/js/22.d97d0400.js",
    "revision": "ba4df47bb737158c1fd584243becd158"
  },
  {
    "url": "assets/js/23.e1af62b2.js",
    "revision": "4784b06bc26c877b3d70e6d5bcfd5974"
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
    "url": "assets/js/27.4dff1464.js",
    "revision": "5a9277593f567e50c53435b438b4b429"
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
    "url": "assets/js/app.61a7380e.js",
    "revision": "a6b2b57f52520735220584f5488d23d1"
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
    "revision": "967bec292bf0c82c18dff987e364522f"
  },
  {
    "url": "categories/index.html",
    "revision": "82a374a755a477a5df416be82ab1d241"
  },
  {
    "url": "categories/java/index.html",
    "revision": "74a0e08210ebc2a27acf801413ff69ac"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d86b62ebe3fbf71ddcd5e428c401e900"
  },
  {
    "url": "categories/python/index.html",
    "revision": "42c86d4a7f24f3ab8d11be4da2cfcc8e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0de1f5dce70c7750b75957429017da57"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "a7f6a4d61fa49352f2838b62bd636fc0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c7f60d47c6eb7e0809626f8b1a81acc5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "826613e42e8c16c68f26cb6051cc27cc"
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
    "revision": "c2d1c553fb675c1b2129e8b9dd4abb07"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2f8f05ead52c12dfa8cc723e164f02f3"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "7e99ab4549c1004297441ddd924f4ba5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f0a877a1a8058c4469dddf9c3ee737f3"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f88cad35dae20f32f482ea578a8cc61e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "02e3fd6478450515a873b860e8f5e472"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "36c52fdc7dcd5ad3ed7b788571d29055"
  },
  {
    "url": "tags/python/index.html",
    "revision": "5da47dd630d1d5059b142c469ba8cc08"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "c53097e51a734e230856e22d8aba7955"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "0d3b0684215502829b0d9934aa77b7ba"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e2de1ac63155a807596fc1984b7303b5"
  },
  {
    "url": "tags/web/index.html",
    "revision": "7e53a3b206060bb8e5c495eeb714e452"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "341221542162992722b20f8f3aac4585"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "38fec680c8a624c1990bebe6fb58040c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3b60cbba3082680159695861c3205a58"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "14bcf2477307953e737e96af9e9546ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "713d6293aa6d1db16c8566e26d6b2272"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "4111a2c2c4f29434bca13c4284869012"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e13ab92545bbedea9dc758ba1eaca6ea"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bfa91b3a646e81591688cd6321560d92"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "cd9a2ad53b5a899c58223511296bb94b"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "cf2e66e811d3bb7809c11000da54d3c4"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "2de3175890d2e4d40792c9efe8bb1f30"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "08731aa8d0d4717a160de77be2f88660"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "7a1c3c7584d6bfc6a2699f5950be74fb"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "bb55ac9a175de24b6c6c9011e4c55482"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "b1ea698123ca53a5eb0c8b353db0fe12"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "ea141422ad5c1a71909fd6581b4522b7"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "f73d25ec7ecf055ff33acfe1a41506fc"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "4d7234d96a4110d3be6e1357bf9cc491"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f55db7c906a386efe0686a5c181b9b67"
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
