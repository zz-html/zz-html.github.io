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
    "revision": "02f24b35b92c631967fdcf84a1cb741b"
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
    "url": "assets/js/11.2c9c498e.js",
    "revision": "1d09794eb43b8cf620647f0c931e8d5c"
  },
  {
    "url": "assets/js/12.ab98c234.js",
    "revision": "4561079df118932dd05cbadc01ad76be"
  },
  {
    "url": "assets/js/13.f5dc02f0.js",
    "revision": "2e8366c3baaca99fdce2c94b27020f19"
  },
  {
    "url": "assets/js/14.45f116dd.js",
    "revision": "da827ad22d7101322652c27899a533ad"
  },
  {
    "url": "assets/js/15.bc3b34c9.js",
    "revision": "5e1389af10584857f5ea3112c3b960e1"
  },
  {
    "url": "assets/js/16.c2b7f62e.js",
    "revision": "9b126888771e4263a2c8afce10d0a8c3"
  },
  {
    "url": "assets/js/17.cd2e4a04.js",
    "revision": "8c40977a2c0c0ed87093c434496d607e"
  },
  {
    "url": "assets/js/18.02a66641.js",
    "revision": "9ea52d25b2a600768ec4dcce88312715"
  },
  {
    "url": "assets/js/19.d68c62a4.js",
    "revision": "a01384bffecebc24bd9ba6b2fa8d6ab5"
  },
  {
    "url": "assets/js/20.949f13ee.js",
    "revision": "13786f6feaa05379edb5fd054e6ff42c"
  },
  {
    "url": "assets/js/21.869a070e.js",
    "revision": "51918c094420c4479c083fb9dfa24bf8"
  },
  {
    "url": "assets/js/22.508e67f6.js",
    "revision": "78d4fc288ddca025e427754bd14588f2"
  },
  {
    "url": "assets/js/23.88876438.js",
    "revision": "0ba21744588bf8ed14332f2b508cfda9"
  },
  {
    "url": "assets/js/24.edba8479.js",
    "revision": "d3d072d3c9ae6155facfa4fe9a16db0e"
  },
  {
    "url": "assets/js/25.32f29957.js",
    "revision": "a7ca1011694c6db851f7f5b6931c5baf"
  },
  {
    "url": "assets/js/26.f32e6e21.js",
    "revision": "22e63b0da99eafd7116130723e3bf28a"
  },
  {
    "url": "assets/js/27.050b605a.js",
    "revision": "792fb5702b66dffbb55a20155e3d5c37"
  },
  {
    "url": "assets/js/28.abe91525.js",
    "revision": "43fcbbf2bd52f33330f6a1cd12202b8f"
  },
  {
    "url": "assets/js/29.304ba229.js",
    "revision": "86c419f1037f88bf94888f767b7ffe9c"
  },
  {
    "url": "assets/js/30.1d054d48.js",
    "revision": "ed11d62a4588eeca0432681987658929"
  },
  {
    "url": "assets/js/31.784f6edd.js",
    "revision": "006d515abc5e1b69ad88bf0d5e47ab1b"
  },
  {
    "url": "assets/js/32.02bfc299.js",
    "revision": "3dad67a76fe0bdb28c3dab7341a75d80"
  },
  {
    "url": "assets/js/33.803e7147.js",
    "revision": "8c2c40aa8b4f66c83da74afbc59f60aa"
  },
  {
    "url": "assets/js/34.037738cb.js",
    "revision": "c2e9101a1d1939ab80d4e4b299ccb199"
  },
  {
    "url": "assets/js/35.11a07dd0.js",
    "revision": "c8daa1297ea3f4877c2d2efd07517cf5"
  },
  {
    "url": "assets/js/36.4326f413.js",
    "revision": "59ad1cc08e10892df030414294c6d18b"
  },
  {
    "url": "assets/js/37.b1b3a5ef.js",
    "revision": "9cc6c60cdad77f8baf7f380e69271fb7"
  },
  {
    "url": "assets/js/38.f1a6ec1d.js",
    "revision": "b89beaa9c3f4bc7b5ebb129f683f526c"
  },
  {
    "url": "assets/js/39.fc19f3be.js",
    "revision": "2d6492121ee5eb43ffd39d2c27654456"
  },
  {
    "url": "assets/js/4.35e120c2.js",
    "revision": "2550a338d4808f1cca5aea31a3c737b9"
  },
  {
    "url": "assets/js/40.5672b0eb.js",
    "revision": "fabff794b9ab2244eeb325ad86e48169"
  },
  {
    "url": "assets/js/41.16886414.js",
    "revision": "e0971e380f993725c0c4576ba8955167"
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
    "url": "assets/js/8.70bb7b26.js",
    "revision": "9338e8b2b59ff328a9ea47ba75e179f9"
  },
  {
    "url": "assets/js/9.a6fc8324.js",
    "revision": "9c1b87edbbd8e3fa9269e2fed02e99cc"
  },
  {
    "url": "assets/js/app.6fa4fea4.js",
    "revision": "fdd857d1d68a64463ed24993a3521aff"
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
    "revision": "3dc43e53c2bfb5cd9198c6ba446b7e42"
  },
  {
    "url": "categories/C/index.html",
    "revision": "49c0117fe71748d007b576143a5f55f4"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "122e2cc530dbfc623597ea91a52bada9"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "ab936df4f730568dd26ffe317c9822a0"
  },
  {
    "url": "categories/index.html",
    "revision": "66f005fab882de1a9b1927e9ecbd0364"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a6f5e114c7be99a9dbcfde8b2c5a53c1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f4027797a558d4cf9fd5fe57b1d24961"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "7682065ca8941d2e7136a02221c24b82"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "b20daa12aaa60b28d53058be0a5cbc5d"
  },
  {
    "url": "categories/python/index.html",
    "revision": "f7d4595bb21dd847810ddcd83d1de29e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "98b65db79a2c81e2c55e9ad0c37834ad"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "94811ab0c5ba4ee40f70c301f6d85a33"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1331cf0f6e37ed1468953548ce49c295"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "cce980744355b8b7d10f47e480161241"
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
    "revision": "b217141684c371552ad373fe6ddbb874"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "971b6fa7246ddf328f585ee32f6b6b70"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "229967caf4715defe81cbcb4a0377928"
  },
  {
    "url": "tags/C/index.html",
    "revision": "6016fce50fb9e2fdfc8c889629c3b67d"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "c4452716420d37470f6fa7f4ddc80b50"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "9d1080653d01df4a483d884d38a8f81b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "0bc8b02665c6db8e8997e9f72d78f782"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "436fd4ef3795f919558ffefb98c0d3a1"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "c4ad7f6d4fa97f4b4034d0f965e8f0c9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "06edd16ee475dd139cdf7a5eca79c718"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "ea232ac9b694d3a2c392eed468a0d0df"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "3075c7cec3a5cced333cbd8e08255cff"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "e898c442c33b2a5fe89faeb179a2e0e8"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "7c75c17a08df956f9323d0352c31c679"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "fd7f4d13a0282c59c56fdc8c7eea0823"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "e1d6d147be7fa11c7eba0620a1613b8a"
  },
  {
    "url": "tags/python/index.html",
    "revision": "a879ea845b43d90f1d6c20fd815d00f9"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "6cb18380415749901d66799df4e33f13"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "49320330df330e497018676b4cac5f7a"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "4c7f082f464f322275cd5affa3809f91"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "06c3a9588e8fd934ea9085449ba47941"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "88ed68f101ce900bace01b5567d9a86c"
  },
  {
    "url": "tags/web/index.html",
    "revision": "864919e9f46570d82ce3c1a6b7944baf"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "caa3f3cc9615d3aa188508783b24bc2f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "44d815664192cb55c43598a32699749f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "700c44e1466830f638f3a6758914fe18"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "78460b5f9f77ed848442252a18074251"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "6d3808b49fa5c96f861f0a9774291847"
  },
  {
    "url": "timeline/index.html",
    "revision": "da42d9ad9e8e54bf535128f2f1eb211e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "98c89bc02fce63af7cccccb65edd8d4a"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "3247f1ef7ac94c8a47163e586b536526"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "1c0e7c19b61328af4c6b79deb15fcac5"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "e364a8ba35ef9892c6a5fdf8fd0e6c58"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "d40bf2953c909bce5aec5978b029d71f"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "ae885c98684d9699544a29fc3cbc7bc1"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "7b796a11be09c50a0fd4163127a56926"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "0cf4b9a2ab15127417f6bf92c0d14ab5"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "d881c12861586e6be98f476a80063aea"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "dcaab9308a858c020e9c617c68f2ae71"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "a59280e11e9e91aa4288d9a25b40e1b2"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2049ada910a5321b20fbc1a9827a7697"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b4a506e91ab369e5cbf7806dc5d77333"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "c9ddab72a85472db9f7c5963a818e61b"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "86bbbf5dddd894a0911d1a93674797aa"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "997834d87d0f0be884d70630896a89e4"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "8ba51d7a2da10b6e35e3d63ad4933f49"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "5cfed900c222a19c6375abb874b18d9d"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "c0eec67b44aca7824240fdf43be2d8b5"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "7aee6761fa336545f2139459db137cf9"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "c286e74550d46924401c97a8a796a83a"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "a063939a2f588ca1d0ad8ef53b6f86ed"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "f27470ef4d7d437ffccdcea40c5f9051"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "6db1d8398369ef85ae307a0ef59cad07"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8fdb81dc8507d593cb933c3d9ae84218"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "ac639b99f179f8872079bbfb77ca006b"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "ceafb14b7735038986f1366e92c74924"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6345e81282d0f30a0134a56b930e133b"
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
