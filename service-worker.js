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
    "revision": "db7cb18b8195755c107d6990e4ab4760"
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
    "url": "assets/img/dll.d42b3810.png",
    "revision": "d42b38106cb8f5b026ca48fd190815fd"
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
    "url": "assets/img/native.0d75c93c.png",
    "revision": "0d75c93c2acd4c553bae9ad56a058314"
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
    "url": "assets/js/10.720866b0.js",
    "revision": "0e16d9bbc7ea4e48e6411d583fe45da8"
  },
  {
    "url": "assets/js/11.6f9586be.js",
    "revision": "8030a05c5761785a73f74a5033ee250c"
  },
  {
    "url": "assets/js/12.dab04852.js",
    "revision": "fd8c85f75a3ba5fb6c6302d0ed482cf9"
  },
  {
    "url": "assets/js/13.b18551f4.js",
    "revision": "3056551e4b172b3ccd4e81b5bdcb67d0"
  },
  {
    "url": "assets/js/14.45f116dd.js",
    "revision": "da827ad22d7101322652c27899a533ad"
  },
  {
    "url": "assets/js/15.e191d495.js",
    "revision": "27b0c03ca9509ae6c2d679a11a54a308"
  },
  {
    "url": "assets/js/16.3bab0ab6.js",
    "revision": "fe5ec4fde58a544780ee8988878b2f76"
  },
  {
    "url": "assets/js/17.4574b5a2.js",
    "revision": "69fca47498f70fe54c5e143b3a6001e7"
  },
  {
    "url": "assets/js/18.0216fa4f.js",
    "revision": "4d1a561f32913f03f9300908d37634aa"
  },
  {
    "url": "assets/js/19.177b2866.js",
    "revision": "7e4ea10d15aa68bd4c3071e316334793"
  },
  {
    "url": "assets/js/20.5b9e74c8.js",
    "revision": "82ac8367de81875659791bcbb59edb02"
  },
  {
    "url": "assets/js/21.aaabf85a.js",
    "revision": "9041595682161da08321fb3d798cfc77"
  },
  {
    "url": "assets/js/22.508e67f6.js",
    "revision": "78d4fc288ddca025e427754bd14588f2"
  },
  {
    "url": "assets/js/23.92962d66.js",
    "revision": "558f92af631a8da8a3a61127fb885e03"
  },
  {
    "url": "assets/js/24.e3739135.js",
    "revision": "0c8b120355e14ba3dcbbae4778364027"
  },
  {
    "url": "assets/js/25.16fca4b0.js",
    "revision": "2ee37b370eb4d99db723b6fa16e6423f"
  },
  {
    "url": "assets/js/26.28db2c97.js",
    "revision": "582eb3c4e01cc305ab1a3446aba93dd9"
  },
  {
    "url": "assets/js/27.ca7da213.js",
    "revision": "0b76ef80706fe31a479894500defd7fa"
  },
  {
    "url": "assets/js/28.d8d1cf3e.js",
    "revision": "d775883dfe5a7611f396fb8700508c34"
  },
  {
    "url": "assets/js/29.36b6cca2.js",
    "revision": "5158cb6c9fe30f997e4a760414d9dafa"
  },
  {
    "url": "assets/js/30.1fede876.js",
    "revision": "2e10041384b8bc27dcc0d0a81636ca5b"
  },
  {
    "url": "assets/js/31.6e9df676.js",
    "revision": "a7b32d777702dfa89730c8aa88deb752"
  },
  {
    "url": "assets/js/32.7ceeb1d1.js",
    "revision": "514fbcb618df50e899984495730031bf"
  },
  {
    "url": "assets/js/33.87d17ef5.js",
    "revision": "0d2e857115c69aa4a388a6627f57f387"
  },
  {
    "url": "assets/js/34.abd063e1.js",
    "revision": "64ecab4e294e88bebc2121c6ce8303bb"
  },
  {
    "url": "assets/js/35.f073292d.js",
    "revision": "0867dcb072db28e1b31b732c26cd0a7e"
  },
  {
    "url": "assets/js/36.a3ac68cf.js",
    "revision": "28131a891e5d458f5a9d06ac9dccb3c6"
  },
  {
    "url": "assets/js/37.8a84a3d4.js",
    "revision": "256e3561175d07abfae396eab8b66b63"
  },
  {
    "url": "assets/js/38.3dfffdb9.js",
    "revision": "042db43d448afc169491670d7db9beeb"
  },
  {
    "url": "assets/js/39.54f1f5c4.js",
    "revision": "f50bb16bc364416a9d31f76f1ddeae66"
  },
  {
    "url": "assets/js/4.35e120c2.js",
    "revision": "2550a338d4808f1cca5aea31a3c737b9"
  },
  {
    "url": "assets/js/5.bb1ff54a.js",
    "revision": "1be84d9922bc613f5449543d20e35ff5"
  },
  {
    "url": "assets/js/6.080f636a.js",
    "revision": "dad9cd74a660563009786bf3170b05f8"
  },
  {
    "url": "assets/js/7.9426755c.js",
    "revision": "a7c82dbb73df36714a05a55db0a7fda4"
  },
  {
    "url": "assets/js/8.d31c889c.js",
    "revision": "3bf213050c74e4de969e1f6291d19a9d"
  },
  {
    "url": "assets/js/9.a6fc8324.js",
    "revision": "9c1b87edbbd8e3fa9269e2fed02e99cc"
  },
  {
    "url": "assets/js/app.4f14821d.js",
    "revision": "f2e7cf0d85bacaaf52f352cd32c5b01a"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f9bdf3c9.js",
    "revision": "af899f86d254f3adb2d3ade66c8037fd"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "e91202034d9bf858a600da13ddca96bf"
  },
  {
    "url": "categories/C/index.html",
    "revision": "6948c011a93693159cb703aca6b90f2e"
  },
  {
    "url": "categories/index.html",
    "revision": "88fecfdb152712c1838701ffbbd2447c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9f070707a8d9f9956e8b32a8803502ef"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7e138730fc99213ec695b8b28a0ee04b"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "832c22477a35974df69dae8e570df311"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "647a2bc1882956d48988bea34b254b69"
  },
  {
    "url": "categories/python/index.html",
    "revision": "03bbfecac7e9100338505e89bc3798af"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4ab7e7f597bfd0292662de3a80d3d688"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "3ec814fcfd0e36e023bbc32635eb8628"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d9f1629a4b701d57f913fc16158e3600"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "366a32fbc46a1676fb2e026c6878c60f"
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
    "revision": "72c36afbac30dc465c27aec33f479773"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "891d36ea4dd3b4823ce834f8c1dea834"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "701a31c3d09c395a73168271b74fcb3b"
  },
  {
    "url": "tags/C/index.html",
    "revision": "3f9299f179630b39d668ba7be2fcd7c1"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9b1f9b298bbac46c2da6b2519e4a4a4b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ee6705e2c949134b10617ddc6af6ee19"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "0d754f54d672f419a4b06b2519e2a55b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "93784a3f74117ccdc2d62bc216e2fed8"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "ff3a00609b1b4fbfc362d2a29148d459"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "3a110ea3af7e0721ee25ce6dc3620370"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "4599043e4845004c6b2b5d7f2b904bdc"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "449484273bd0a5b099c01c0851454f7f"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "3e2f1c550ee71bd3e90de8b73ab8873c"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "c9866b5f8ca95720b24f21520c6e7d56"
  },
  {
    "url": "tags/python/index.html",
    "revision": "d146078f46679e89d16c5d2ab679822a"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "aa6b51ecda6a35bfbedf28a679f7bc27"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "1f72a50ec66c95710a363e0d65c724a0"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "e13c9372abadd9e5665199d06f6ff05d"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "490b22c92b6e01abc37ed086080f847d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "268bae8ab1567b7f12e643a2eaa75c01"
  },
  {
    "url": "tags/web/index.html",
    "revision": "76ed2a5cc6f50a04c47fa36d385f1900"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "2a6532fbf7ffcda9385c58ab389fc1be"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a5a4d301ce5706f1cfb62ec2db60941b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4d4c851a7df852df37bd301ea92b98b3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7d5299a44585b5e3effa7a179e3f3ce7"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "78a473a257d22acab3cf3a4396b255ac"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d8074647b869e3784bf41f6eeeeaf34"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "654acd9f721582bf5498f18055a7afca"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "8fe94b7330cd7dcd18d03c5abb20130a"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "4e1a455897e233865ba10e8302c89fb2"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "24e934cce591a2df0f7c7acaa07694ea"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "79819a3732716f724a3ace6523b59941"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "9d18258b01e856dd243130289cd1b0af"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "37dab24b96423c3292562ea18e419d57"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "b841a8c9e2647469096701abb3fce569"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "e8fe0c0c50d930f79301ee6bbc2e1493"
  },
  {
    "url": "技术文章/index.html",
    "revision": "48d672fedc6a0eca037d8bb7d6071a5f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a7d97d796ee4e7fc5d483c04b1599edc"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "71155a4a327d6bd5ae0f8dcdbe7ab9e4"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "a283b16e038ecc2b4dc8ba13818d6b97"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "cfe52cf02ff2919d6085c45534076d90"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "382eb0b0f7e16df2e1dd78ae305e21f2"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "1ca10152fd80127ffc9000e2a7ec08e9"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "7bd6cc4af8d547662cd30e62ea7e2298"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "c3bd7e72ab529a46376e57aa1a992e8b"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "36e2c320170b7c7ecf0e1595be97167d"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "0df98f0033890c8a2b34fd41f63ff269"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "fa4b5831f9ec1f8a5afc0049f8467afc"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "20dfb5f7083c6b9108ac5adb3c50a238"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d28bc676a025a10d2f8c7dd8b0c1548b"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "8aaf875c9a56cc9a4335a604eb320f0a"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "145990cd58819f6d697d2ae420aa2661"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4df3a9c2cb4c3191f444bac1e2218fca"
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
