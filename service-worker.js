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
    "revision": "1aa00e6c24afa9a91968d4ce4b1522f1"
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
    "url": "assets/js/12.ab98c234.js",
    "revision": "4561079df118932dd05cbadc01ad76be"
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
    "url": "assets/js/15.599e05c5.js",
    "revision": "1aa18e7c627fc0dcd5fb635a60aa426f"
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
    "url": "assets/js/18.9cac0f35.js",
    "revision": "8677b1784b41e9d73b89c4f63afc4863"
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
    "url": "assets/js/25.5f4875fd.js",
    "revision": "0ed7d1fdbe56dc73ba5a19e1d80846fe"
  },
  {
    "url": "assets/js/26.9b4730e8.js",
    "revision": "8316b29074aea065a59ff5fac900bc1f"
  },
  {
    "url": "assets/js/27.3d8ab6a9.js",
    "revision": "e445b33c07bba6b3ac40d9fc09f5f8ee"
  },
  {
    "url": "assets/js/28.b7e607fa.js",
    "revision": "7a68170d22aadc83cdf426066375e466"
  },
  {
    "url": "assets/js/29.6da444ca.js",
    "revision": "09a32cc5e065f525b126ccd13a20bb55"
  },
  {
    "url": "assets/js/30.d15dfc90.js",
    "revision": "e7f47610a43a80a10de103e1c9f1e1b4"
  },
  {
    "url": "assets/js/31.57ef0b5c.js",
    "revision": "ffa6fe8b9f1ccde10dc5baeca7d6311d"
  },
  {
    "url": "assets/js/32.b165eeee.js",
    "revision": "b03d7a5771f4cd0469664ec8a5f4b84e"
  },
  {
    "url": "assets/js/33.be072307.js",
    "revision": "296ee42fb40a6ffc89388eb10a914835"
  },
  {
    "url": "assets/js/34.172800ae.js",
    "revision": "c147584583d9281b6345cd8b2c3c1516"
  },
  {
    "url": "assets/js/35.38d822d0.js",
    "revision": "f15458404a21ca8a33f7f63082f2995f"
  },
  {
    "url": "assets/js/36.cd106baf.js",
    "revision": "51dbb91122f3a827df11bb6ee7897f16"
  },
  {
    "url": "assets/js/37.22d51b51.js",
    "revision": "74b91b298ef82c7445d879086b88d806"
  },
  {
    "url": "assets/js/38.24979f40.js",
    "revision": "5d327ab72240ee17bbf68cfe3d060cf0"
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
    "url": "assets/js/40.6da87276.js",
    "revision": "6babe7b6af655380531ddf216438dc21"
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
    "url": "assets/js/app.458a7df5.js",
    "revision": "54e1a14f6c45ef79b76d29331d844fc4"
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
    "revision": "e2fd164c07cd2acdb8f9433a53b6466a"
  },
  {
    "url": "categories/C/index.html",
    "revision": "d78f63fbc693820e001d408bfd68d68a"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "3350ef29db160e61fbf84bdda9858964"
  },
  {
    "url": "categories/index.html",
    "revision": "3b3938597cd2bfe1d6c3c0c0d2b91139"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0b05fb3821bcb69ecc3a7ab66e7b40e6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e3c9e085123eaf5463cdd11a514ce6cc"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "7ba52bd157e420a845b45d5f0a339a06"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "e27f0937bc8081980254e10401779ec8"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a1be2bc8b4d37da7aff426dc1de7c758"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4fb1f8fb052208dd7bfd4cbc36e1894d"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "c755db3f3f866fc796700c1cd5e5f8c9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d1d1aa65959b7c0fe96b2a70f69c6068"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a7ff15559732f88c7adb42992282e27f"
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
    "revision": "b2b27d03da2a3bd54e3fb68027127159"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0d5977774e8685972848cfca524618fe"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "c460d6ea4d450cbec6fe9f39a92c800f"
  },
  {
    "url": "tags/C/index.html",
    "revision": "128717416daa97b2030510c52b914008"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "1bab88925131d971d36e8a4fdfb7964c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f1d02e513f48453e895c2c6ce7a6cbcd"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "63f49f0531d01eab0f34661d159f5c8e"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "656aaf9e30ff8184ada780d7a9138482"
  },
  {
    "url": "tags/js/index.html",
    "revision": "33a085a84fab1a6c6be66b2b5ffc5dd3"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "85019111542b88e49c4af1caad2d7e60"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "1549e41fb629f7a36cbe1a8f04514daa"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "ed922b704c02f66486f20be3ef4dd040"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "24dc99540680860697b8360b31ad4bf6"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "dae84ab5ee41c39d1c792391ad5aa795"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "f585c45ce9dcaa76e0d0e987d2fddde8"
  },
  {
    "url": "tags/python/index.html",
    "revision": "df18b530b5e85df591cc0acac0f58e32"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "15c2d04e5647b7bd8c570b90222cb9c4"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e71f3659fcfc08f14146e23d698f6c36"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "798de1c1dd8ae4ec389f6d87f524b058"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "106b2336d59c21f379c40cd33a62ce7c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fb932eebd614a2d034b2fe938946f5f4"
  },
  {
    "url": "tags/web/index.html",
    "revision": "c7b5be469919ab7ced8b8d25eaae6e44"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "da3daa9771159e0fe6818abe5528088f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "02858ce510dba69e03fc8cbae77ce64b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e342b44ab1e2089dd82269f274dfa3b3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "94ae343c52d6d73a2321b9b0c7a8f868"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1f76f87ec95a1046c7c994ef506292b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "0dc189e103dfc84253f5cb6466094c3a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "da65b9fe5d2a2d48025b4e03a515cc03"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "199ce876fff6bb2886ae840535595b48"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "0623823c7184d90a1d8d4fffb47bddf5"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "2b326fa48d8bb5f9cc3c91358fc4ddbc"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "79d10b06585b0d9008751dd0dbe8b3af"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "1a4884c428ac0e8587496049f70cbc24"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "2836f7ad5f7bee7fcf2328de0bb64f97"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "d11463ea0f628c4a4143840b060a4888"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "533e26788c7aa12906932f3db8e3e747"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "80edf0145a8c4b38a1c4f60703e657dd"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d1b9e4511c53a2d75768760aaef6ca41"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b75db70e8547b7c6455bffbadde71ae3"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a0d96248ab3a17a3bfa2f41f17b9185f"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "5ecc4f885cd6d95a5458e5e225c62564"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "b8af153bbc10bcaa3b5ebe323a8b28f4"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "876d01645f9329bbc20301c3448516bf"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "b3d50aa9ef2da3cb4992911f05e28f92"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "6771125f93add3ab44db09f3e8ed88d1"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "95a680e627a07b1994b7821464ff8169"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "397fcb7d6b684953eb9ae16c4e141b78"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "98c756fddadaa20820671c8424a4aee2"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "f0573d55a5a0f1b47e943ecae46d7d42"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "4de4fdab097e2825853b9e97bcc30544"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f0d83daa097e38a664e0f1f82b48d582"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "8ab1fd83b5e23780f6fc9840fbc33874"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "250a6f4f3f37649be15da7a8aafe3efb"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6099c308222b7cea3877e70e72ffbd70"
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
