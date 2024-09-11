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
    "revision": "7e8db7898490dcfe5d0f444aff02adb2"
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
    "url": "assets/img/attack.d9086075.png",
    "revision": "d9086075faeb51af83dc12d2ccb9474b"
  },
  {
    "url": "assets/img/ce.c7a66254.png",
    "revision": "c7a66254963c7b390734dd61a6e904f5"
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
    "url": "assets/img/od.eaea06c2.png",
    "revision": "eaea06c24ee5c8035baa4f153772f913"
  },
  {
    "url": "assets/img/od2.a1b64f20.png",
    "revision": "a1b64f202ea1317b651b0ccc6a02ee25"
  },
  {
    "url": "assets/img/od3.02db5279.png",
    "revision": "02db5279f933b79ac492ee77d69dcc98"
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
    "url": "assets/js/10.7ba896d3.js",
    "revision": "e2eab5fbbdba9e571be50a1fdc878b21"
  },
  {
    "url": "assets/js/11.ec097b3d.js",
    "revision": "eff2e7e548d8f1d7f99d9d278898baab"
  },
  {
    "url": "assets/js/12.6b0d6f11.js",
    "revision": "894a4965a81595ecf3fe17e148d4eddc"
  },
  {
    "url": "assets/js/13.ec3cb75f.js",
    "revision": "c32288ad1f18a05c4987984b6109298d"
  },
  {
    "url": "assets/js/14.f2f3dad1.js",
    "revision": "ca550ce283bb5c9c32f4485fb8a01abc"
  },
  {
    "url": "assets/js/15.6ff2bb98.js",
    "revision": "e7ba58e69037a38bac9d29305b73ba46"
  },
  {
    "url": "assets/js/16.322ff085.js",
    "revision": "f55581b2535171105f44214bf57e9640"
  },
  {
    "url": "assets/js/17.d243d824.js",
    "revision": "5539d65b89946b69c2b7b3e9b7ee3b7b"
  },
  {
    "url": "assets/js/18.69abaa21.js",
    "revision": "43756f90b2c29809962554ea38f39a40"
  },
  {
    "url": "assets/js/19.a5068dc7.js",
    "revision": "9ccc80864820839672558e93d75dd88e"
  },
  {
    "url": "assets/js/20.79349406.js",
    "revision": "78f1c5e48809bfadab2b3ec5b0083a28"
  },
  {
    "url": "assets/js/21.0e76f109.js",
    "revision": "9ebd9063a861836fb9ae1934ea0b1c22"
  },
  {
    "url": "assets/js/22.ab5cf9c7.js",
    "revision": "a04ec8d3dc05b0cba9347720554765e4"
  },
  {
    "url": "assets/js/23.a8739594.js",
    "revision": "96c079c25eafd425630e54bf5e3edfa7"
  },
  {
    "url": "assets/js/24.56b33c80.js",
    "revision": "980e7b848d0eac626c8f47ad42210b2c"
  },
  {
    "url": "assets/js/25.16cc5f5a.js",
    "revision": "2f5060b112dbf9c966c25df1d916b3df"
  },
  {
    "url": "assets/js/26.a6380b26.js",
    "revision": "b267136586341645fe39ba7fabefd3b5"
  },
  {
    "url": "assets/js/27.5c7a797e.js",
    "revision": "e14f1d5f1307fd6674ad53caa40c0c8a"
  },
  {
    "url": "assets/js/28.f44f5317.js",
    "revision": "e963fc8546dedcd44b01cbd48665bc6d"
  },
  {
    "url": "assets/js/29.4a68aea4.js",
    "revision": "632bf68f311a3e9052d6ca0f647e1523"
  },
  {
    "url": "assets/js/30.044d7fbd.js",
    "revision": "36a2bddc51c14c4edc539db7b8124c99"
  },
  {
    "url": "assets/js/31.e6448a67.js",
    "revision": "347673c5e9d17f75a8156fcac3483661"
  },
  {
    "url": "assets/js/32.df18609c.js",
    "revision": "6e1222aa99f9b148cced6ad84edfbcd7"
  },
  {
    "url": "assets/js/33.07253704.js",
    "revision": "0caf90418cc893ec9fb41c0eb232dbb0"
  },
  {
    "url": "assets/js/34.e3ac80d9.js",
    "revision": "a3aad71d86e97ab57c786bc8f1d90f75"
  },
  {
    "url": "assets/js/35.03fd65cd.js",
    "revision": "eb694e8d6221c215003857684ad8d726"
  },
  {
    "url": "assets/js/36.0a8c63db.js",
    "revision": "1e7cfa9a4a1289407e585b1b523248e2"
  },
  {
    "url": "assets/js/37.2811da80.js",
    "revision": "2fa412f900df9ad8729e7b6541adb91d"
  },
  {
    "url": "assets/js/4.5f490044.js",
    "revision": "8ee1753028f1ece320e2d3b68d9b0cae"
  },
  {
    "url": "assets/js/5.3b2b447e.js",
    "revision": "a7fe20fd913bf318b10bba70ba1d76b7"
  },
  {
    "url": "assets/js/6.bbf0bf19.js",
    "revision": "0690de06479aeff60e000ba48f1078de"
  },
  {
    "url": "assets/js/7.9077ea1c.js",
    "revision": "3330a8f123e77efe2b402fde07fb0ae6"
  },
  {
    "url": "assets/js/8.213af2d2.js",
    "revision": "e2f575f829e241772e5619337b54d16a"
  },
  {
    "url": "assets/js/9.1b648da0.js",
    "revision": "022d3aacf0efba12e4175edf0968f9fd"
  },
  {
    "url": "assets/js/app.54798d5a.js",
    "revision": "b7ce977df204f6d3116d917a70daf9f6"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.97604a12.js",
    "revision": "307b48bc8a74b826e0f224205548f191"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "445f20d282858b89b99ad8acb620b949"
  },
  {
    "url": "categories/C/index.html",
    "revision": "8a291a3bb59f29f1d6fc6d5f4ecd3819"
  },
  {
    "url": "categories/index.html",
    "revision": "114cae870c747ae9ae1ca7deeabdd358"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b261859f5d2b9607c52e61ceb838b9c1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "aca40eedd979342d38739ecc3e658d46"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "2185f5ac86e90c38ebd220c7239c6768"
  },
  {
    "url": "categories/python/index.html",
    "revision": "fe83bf84acc0913adf0816b5d71f0325"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "885c9e5c546c4ae0325ad9f2f675339a"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "45c9788b01da96af521d506ae0f85637"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "7d51c14a40d77ff11605a55c4f53997a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f6b46414d6c8a1b317c77fa8a2691ae8"
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
    "revision": "34111a57773b44c70fa4aa616485a76b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3ac0348bfd08310e2c62e04ca9f0e9e4"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "95c1e7843490a7a97a38c5b531bb58da"
  },
  {
    "url": "tags/C/index.html",
    "revision": "1317b4f097dccd1fd09f8c1244207255"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "56b4d979381f45ffcc1f16c80da0704f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "58325d369734638d548bc9f94f577ef7"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c9f70e3a28226c863d4d7eb85cea2ae9"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "b6613c32d348f3ffe6bb8d397c52bb52"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "f8b411d3c94ce95ce0400df8e2bbda67"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "8e1f00880e3523f9c5ea88432a88067e"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "4c12347b55fbaaffd39d225cad88bc68"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "b3237c9e8be9ceb7b051254de33bbde9"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "09cebbbd439960f57cdc57be913ad5c7"
  },
  {
    "url": "tags/python/index.html",
    "revision": "11f5290f33f180d94a4e8d3b55a3b4ce"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "0574a50fd5d25b7baf79d11e1108a4f2"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c5b178db4cbf6ed561a908a56d579bdb"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "15c2faa296c410433b25b5c59324d3fa"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "618d5abea285c541812e74e8a79bceac"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f0de106c3580b2a627b57ecf8ede3d81"
  },
  {
    "url": "tags/web/index.html",
    "revision": "9ec006b1971bee2bb920007aac21cbdd"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "a8039698cf2447320b84d9441f8c63fa"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f30fba12ea77c327cc63f1a085f049d6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5e3893e1c9ad1a02e509bb4fde000b17"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4fb9bf41c0c58e90498a2d573ecdba8f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "211e04851e05826a696b6f1e142faf0f"
  },
  {
    "url": "timeline/index.html",
    "revision": "461891dcbdfcadcaebeec9d69eb61bf2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "cbac31ab6f0f0e7c6bb6f21a18ff71e2"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "aa4d25ec1a2d26d156ab4c4c8a473d4d"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "69d3735330ad1df3f966b2b5d81b6db8"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "da5ff2ed1c02483637d253f9d967e904"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "cbba9aeb4e59f31c380117b704871218"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "84e5c614e0004ac404c5afc828335741"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "be4a8a8e1fdafcfd47f6e0728fe8ef16"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "5ab1839dad3545de3789f2fe89b77687"
  },
  {
    "url": "技术文章/index.html",
    "revision": "6f04453efce4cea1b2b795d531318927"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c18fad06e1934578ea85e21149247c99"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "3fbda7f8743e166d9ac674fea69119b5"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "5e15d87dea1d8c276d866419cc9e5cc4"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "a9de0e3a7f12397d3a4cca491bf446cb"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "eb12139f29b16349275417738c1e9cbc"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "0157f2f91d3d41f825d4ec0a7d520eb1"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "f898cce4bcf27e6a820844e37add76ca"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "ea1fec38e2c74c1039337f93e682a2c7"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "52c3bda99168c03246bd08e771618274"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "6e9d2fde914801bb16627a6ed09d86a5"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "422b0b7607815972ad2ab86e7cd70f24"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "d71899fae91f08f3f793f13ef56d4dcf"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "13f6136459e4cc176886b220562b7ece"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "2bc33ab2b75f68990dfa478583aab21a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a8679b8c71da3346a9a75ac8c23a6677"
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
