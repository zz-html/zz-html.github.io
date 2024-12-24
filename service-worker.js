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
    "revision": "98f106f50d97e062652b846c9adfffed"
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
    "url": "assets/js/13.2c6e39f1.js",
    "revision": "44e6e131d45f76ad318cfc42edeee761"
  },
  {
    "url": "assets/js/14.45f116dd.js",
    "revision": "da827ad22d7101322652c27899a533ad"
  },
  {
    "url": "assets/js/15.bef00459.js",
    "revision": "082a9257f610f63f50959c1c32f3afec"
  },
  {
    "url": "assets/js/16.3bab0ab6.js",
    "revision": "fe5ec4fde58a544780ee8988878b2f76"
  },
  {
    "url": "assets/js/17.cd2e4a04.js",
    "revision": "8c40977a2c0c0ed87093c434496d607e"
  },
  {
    "url": "assets/js/18.46782982.js",
    "revision": "f8a4c88093f315397a74a4e4b03e5560"
  },
  {
    "url": "assets/js/19.177b2866.js",
    "revision": "7e4ea10d15aa68bd4c3071e316334793"
  },
  {
    "url": "assets/js/20.8cc4b6a7.js",
    "revision": "71270214e6c9f13bb2f1cd2b783286eb"
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
    "url": "assets/js/23.88876438.js",
    "revision": "0ba21744588bf8ed14332f2b508cfda9"
  },
  {
    "url": "assets/js/24.edba8479.js",
    "revision": "d3d072d3c9ae6155facfa4fe9a16db0e"
  },
  {
    "url": "assets/js/25.853cce0d.js",
    "revision": "b6b487e28f0de1c4062d9a9c669c08d1"
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
    "url": "assets/js/28.152bc3bd.js",
    "revision": "9a3df71763448bad814f0c5ee6de8d79"
  },
  {
    "url": "assets/js/29.304ba229.js",
    "revision": "86c419f1037f88bf94888f767b7ffe9c"
  },
  {
    "url": "assets/js/30.85f2703f.js",
    "revision": "577176ec68d273a490903b72c0d9ea99"
  },
  {
    "url": "assets/js/31.eb702846.js",
    "revision": "30ac4e7aa6df9f4a9cc883e5182ec7a2"
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
    "url": "assets/js/41.ec91805b.js",
    "revision": "0cca71719e4fe9c19f9d6ebae8bc0834"
  },
  {
    "url": "assets/js/42.ff4ab3f8.js",
    "revision": "9b837adab395a7860ba7fff35b77845e"
  },
  {
    "url": "assets/js/43.03937551.js",
    "revision": "e0dfa82224e5133f01495f15f9660e86"
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
    "url": "assets/js/app.d9fcbdc4.js",
    "revision": "c851b93d78199fd90a1a886a662bed09"
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
    "revision": "ee191bc8f7732bfe945d3acbad733e58"
  },
  {
    "url": "categories/C/index.html",
    "revision": "89b8e4ee05b8b285f7f8b547cbfd5f86"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "876c90d7efa20b8f3e65bd55f21c0b6a"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "47609f4be1d9c0cc5861d219e1160efd"
  },
  {
    "url": "categories/index.html",
    "revision": "bef158a2b6322b0d98243e5dde6191b9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "511fcca85f61d1f5fafefbd2960ce697"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8ff556e34f7c2951b824b254ad8e882c"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "7c10ac0a05968067fafc45f049250d75"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "8e91adddc896fe3ffee67b1d39b7f75c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "5603773aef9e834d5f79fab7410e78eb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "711acde6518965530c0a1c737bbb8360"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "def28a52a4de688a55398d2ab1860a0d"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "75386e7b5932208186fb2b071c50ccf4"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "ad9cc92df5065460e4840d36cd69000a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3e310a54bf37b3ae912320e128345e96"
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
    "revision": "c7edc8a73d2a2e6821eadd8e00487d3e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "912dd96c55f64201c066d9bb4af59662"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "7a2878fdb2d76147eab8a4b370af7bac"
  },
  {
    "url": "tags/C/index.html",
    "revision": "ffff78b51965b7187db8e3c7e60d62b1"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "0c2a9694499bb8173711a25679efc377"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "ae18fb3c35256d5dc35b7a861fc1332b"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "6d3edf2bb0e494f422750d082c14e1db"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a4cd9e6c9b69503c3108f08b39019a56"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8db65f503742faf50f360c9e2dacdc66"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "e44c8c7cbdfd1911fa68611e6dddeda9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "44c8cea5d6ad74939efebdb48c0ec467"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "05e61abbdf8d9d2d4d0369dabfd4c5df"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "0d2fad67578ca418bae85adfbafdde83"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "f06bc37fc97c098379b54b09f063b1c3"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "5605dbbd805c1d6c60a417f2d4a0dbf8"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "333c85d1f83602e5bce403c44143ea20"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "c4fb1fd2594e619ae722a728974cc5ad"
  },
  {
    "url": "tags/python/index.html",
    "revision": "0cce409f8c240d53b333128f26653d71"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8dee048538775fd0b0aa077d9b9b7cfd"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a6231fe1f11b6356c3143b5eeae06d12"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "24646959c35332315085cdde732a86f1"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "886437751b8f78007dfb7b00c20dba87"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "dd7abcaec9359f9dd7257dc7486ba8c4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "69a578bb604e32ab2e6b79c3bdcf477a"
  },
  {
    "url": "tags/web/index.html",
    "revision": "3984411f5e2752a1bf07a88fd0db0e68"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "2ab064e2b977e684301cc32da3adb676"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "06a2da76b5d0e6e6657bb6430ec373df"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "f5302d1230d3d19d4b86cee1dc6f7126"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "021e0e1254ed1c4d9e5582973e272cd2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "52ba345052f4da6a8003c307983f8612"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c37cf161d9f6670380d11fad86836855"
  },
  {
    "url": "timeline/index.html",
    "revision": "f5c8959f70b48ab91f2f0d761677edb3"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "6986e3fc85f0a7ccd22c9e56a84e9b97"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "60b8fba12d6d5dd85bd2a37e26661898"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "4cd45eb4e0fed507db01f3249bc595f0"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "d052ae70cc7ac0666a705a56add60226"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "fa84e6b8a4b4880cfb8e1b3326858e2b"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "a18f4e50a470e7aac4d8a640f87dddfa"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "764c2fbc8fc16eece07ff287badee948"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "a957ed0fb310701672ee23950524fb7e"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "ea9b68070c7091537a010d90f0fd5482"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "5553b903292b05050a6bf772fc88442c"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "03689a3cd8e03d868d23434763e11df8"
  },
  {
    "url": "技术文章/index.html",
    "revision": "bb0f7998a1d9042caa6b7cde405d1b9e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "3147afa006851520df79918bbf95f2e5"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "6716e6974ec04afb726979095de5eaeb"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "c51d01be440bd73875a7e0b8458fa004"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "197736cd326198244db60c0d80f825d0"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "d5ba749faa5e27a6ac48c91037b7dd3c"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "b3621d881014adf993e432e711c5c70a"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "70ffda83f0f0eb2c0e82203057a01b8b"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "8a513acf53afc721befd2ddd65712edb"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "0a4077ba2e477d7637f934d42f419280"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "f4184c864130f6a8037bf5e95e2acc5e"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "17a560d4acaa6945f0a5726e4035fa05"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "ae6f551d89eb584795df003b4ab1a526"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "be2498e28f45767baad4306ee07c2285"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "dcf392ed0e1e930e11d85c1b32f52e1f"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "6354287517fad78664b7fd0df5177f73"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "326e6925ac57bd12c70eed9745d5090b"
  },
  {
    "url": "综合分享/life.html",
    "revision": "d6b94b8314db29f1a4d4a6cafbc0117e"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "34327d6e2e5c1bdf7c52d411611a75fc"
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
