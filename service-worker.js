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
    "revision": "044e206eb619d1065b932c922360207f"
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
    "url": "assets/js/11.db7533d5.js",
    "revision": "ba00993ee16de4b593d9210f6e9959f9"
  },
  {
    "url": "assets/js/12.b62c0ac0.js",
    "revision": "72f0d6d586c67c77a4d2a8b81e904ee4"
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
    "url": "assets/js/15.599e05c5.js",
    "revision": "1aa18e7c627fc0dcd5fb635a60aa426f"
  },
  {
    "url": "assets/js/16.fa8e64a3.js",
    "revision": "d7d7281ba37a7dd398e6f9e802bfca1f"
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
    "url": "assets/js/19.d68c62a4.js",
    "revision": "a01384bffecebc24bd9ba6b2fa8d6ab5"
  },
  {
    "url": "assets/js/20.6a10e043.js",
    "revision": "f0c2e88a7a6436e6389e7493936ff643"
  },
  {
    "url": "assets/js/21.668f6068.js",
    "revision": "465795ddbe21ed02da2d1998b6214537"
  },
  {
    "url": "assets/js/22.f8a60368.js",
    "revision": "a107fe6242640fdc9d75fe46bbbeb9bb"
  },
  {
    "url": "assets/js/23.3b56e148.js",
    "revision": "f5e000a7ad1b4639d524b2f8a8eb32ab"
  },
  {
    "url": "assets/js/24.e3739135.js",
    "revision": "0c8b120355e14ba3dcbbae4778364027"
  },
  {
    "url": "assets/js/25.3503bdff.js",
    "revision": "4eaf7cef72213d9c6d620d10f6ede22d"
  },
  {
    "url": "assets/js/26.d6a10f42.js",
    "revision": "a115596664f3d04ae30fa1d4de27e10f"
  },
  {
    "url": "assets/js/27.792eff25.js",
    "revision": "339a069cf2c2281adf63f85630ec22d1"
  },
  {
    "url": "assets/js/28.87e7377a.js",
    "revision": "69b2edaf7ed5e08b0d339e3a932840eb"
  },
  {
    "url": "assets/js/29.8d899d9e.js",
    "revision": "cbe5ea963506640eb251babba52dbc43"
  },
  {
    "url": "assets/js/30.fa8bcfdb.js",
    "revision": "7b233d5139986b6f6f8fe0766a4ac94d"
  },
  {
    "url": "assets/js/31.57ef0b5c.js",
    "revision": "ffa6fe8b9f1ccde10dc5baeca7d6311d"
  },
  {
    "url": "assets/js/32.48284526.js",
    "revision": "2e5374c8353c3a4f6dd7675cb9b462d3"
  },
  {
    "url": "assets/js/33.b4f681d2.js",
    "revision": "3ea285177f7b9d1da4ec094764ab86c7"
  },
  {
    "url": "assets/js/34.09732e63.js",
    "revision": "327e5d17add4000e8480792db78f7724"
  },
  {
    "url": "assets/js/35.ddb8501a.js",
    "revision": "d28d1595b13308f11e51e5ff60bd59f7"
  },
  {
    "url": "assets/js/36.3148f30c.js",
    "revision": "091d539791a64b8780ccae61ceb97af2"
  },
  {
    "url": "assets/js/37.089d9f78.js",
    "revision": "349128f1475ce6d1c17b83607a6bf8cc"
  },
  {
    "url": "assets/js/38.5f801003.js",
    "revision": "d13596f6f93298860cdf070e03b7b027"
  },
  {
    "url": "assets/js/39.25ce1f67.js",
    "revision": "c2e53dc86eab47245a4bd9fba9da3819"
  },
  {
    "url": "assets/js/4.35e120c2.js",
    "revision": "2550a338d4808f1cca5aea31a3c737b9"
  },
  {
    "url": "assets/js/40.7a31bb69.js",
    "revision": "be76fc6d72168a0af913dfcd1b218133"
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
    "url": "assets/js/8.88b80d70.js",
    "revision": "766b6150a9d5a9adb5b918e88e2e6304"
  },
  {
    "url": "assets/js/9.a6fc8324.js",
    "revision": "9c1b87edbbd8e3fa9269e2fed02e99cc"
  },
  {
    "url": "assets/js/app.ae7e7e3c.js",
    "revision": "0c0f2971170f54393c7a3f38f1455294"
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
    "revision": "6d11b78285d7207b8e43339d1cc3b01b"
  },
  {
    "url": "categories/C/index.html",
    "revision": "ee29b6941a632b60e014c29c3e6d86f4"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "0cdeb0da4cd57fb053b685e3559a814a"
  },
  {
    "url": "categories/index.html",
    "revision": "05f36ae9daece010166d30c93d7e061b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c4b98cb414b0f1324c2c4f934b5ced18"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5e8d5a0f9b15f6a1e50039670a240622"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "d90f5e8d4eb853de28ea3f120a228c20"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "8a3a09bec64fd89d06a57f9cea59dd7b"
  },
  {
    "url": "categories/python/index.html",
    "revision": "db6f03afb99a6ebcbf80b735763646db"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "16edd3a257f8be82eb5b3b31dfd19c54"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "e02146c040b298d744380f1f0d35137d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b2dd5140cc9eeec85055853b816fbc5c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "6c6800e048bb12aeb1e8d479c790636e"
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
    "revision": "d7ec18eb64ffeb0ca8c7e68ccbcd570c"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "1bf6d7577c6f7494a4ab9bd94f567c83"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "6843dc8d71e1edcb1007c221f0122996"
  },
  {
    "url": "tags/C/index.html",
    "revision": "37c620859df36935fa44d713999c1816"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "3fc274caa654764269aa698275079947"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1cf1600cffb32281b9f908003c8ce5dd"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ab2d84667edeb7fdefffe57c8879f76f"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "650486b323b8e9d58b4002d873e8b045"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9831aee78502ad26cc536857f92b56b5"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "fc1ebcc642516dd5bdd881932be04455"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "aa446a7222dcb86e8234d2c8f41c315f"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "a6e5593d3b76613e8eb67cac52c9c620"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "f0ca8ffafe056a2b352a4411544e4aab"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "946b4fcae4450b7f26e548d97dd24676"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "8d8dd334dbfc692afe63978dc1439b58"
  },
  {
    "url": "tags/python/index.html",
    "revision": "43c00b4560f3d92993ef25b2f6685b59"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "31bb293fb565ada3920fa3265cc5c642"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ec164c77d9eb5e22e8da1865f92f742b"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "2e23c259e312eaaaf7bd032df87df929"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "a2436512bb8ad5e6a834f081c90efdb8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a300af8f32411f4e43473509156f5dfa"
  },
  {
    "url": "tags/web/index.html",
    "revision": "aa0a9def372624a5bf91e22eb70aa229"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "45ad25c577a681adb6475430b8610659"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "0fc6f46d2e336ef1c6be84f9f78e3194"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8c4ae8d7ec8f5a2fae8669b5d2bf6e9e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "036cb94789d5be38d48876522a8d9ec3"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b7d22fa32650dc3170b52ba3b049c8ad"
  },
  {
    "url": "timeline/index.html",
    "revision": "1020bee67271c097dfb4c6302c4d0466"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "3bd8035530cc876aae5b316cca7e3a2a"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "9b13d8d6dd14ab3641dd6434c3e3332e"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "52f2666a5aec8fc3efeb782a0821cd95"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "446c3a6837abbb90dff18604f90ffb66"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "cceaa386ee8fb7ec7519677f1e33162c"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "14fa23e8f784c51f8ec2e9ecaede6323"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "8b20a5038dfe55a447f31b2e43b30acc"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "880fbb3f275ccc0efd1e62ee38ce4ab1"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "f1e3f9c453f26877c2378a0f7c0594f5"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "3f2cdc36aa964e0791dbb554e216e175"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1fbdb2d6650c9b1d7a973394c7e8b802"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "040787ec210c6be862737be1d64b270b"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "75452508c098ec758a22e0d06f3b3be7"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "06d59744803481a75683abdcd83feb3f"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "f16afc0065fad20f6427cd1f15afa2e5"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "110ecf0bd7bef0cb894450ab3ca6d592"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "90c38e01876a878a372197c429f6227a"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "a05edf2fb3053b9c00185d7e6f1ae35a"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "9c7f9b554356de20ead5ac084760d611"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "d943e7a9bc2c80a6765d1b50ae03687d"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "645534a1cf58a7905f2aea870985c61c"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "e949c0f56d57d01792c5c5854cb806eb"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "c785946e3a04481aa0adccdba156009a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "b2a7222df583b61b45ce804f207f841e"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "7973397dae0ef347936fa45776144425"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "4f76409bfbebdcb084e84519b1537d34"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9846fcd5b0847f1a2c6284ff6d8a6118"
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
