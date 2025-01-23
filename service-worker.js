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
    "revision": "7bca9fd2db2942fe54f9a5b9b826aa21"
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
    "url": "assets/img/zSpace.a32d7142.jpg",
    "revision": "a32d71426cb80f67c0f0772d9da8118f"
  },
  {
    "url": "assets/js/1.72860de1.js",
    "revision": "c4b322ffd869d675ca659f1d60dbfbf0"
  },
  {
    "url": "assets/js/10.af31ab92.js",
    "revision": "e6628ad040df2124014107f5950a376c"
  },
  {
    "url": "assets/js/11.46ea50a2.js",
    "revision": "d6bbace833348b3091c2e9fbc1d92b4b"
  },
  {
    "url": "assets/js/12.448ea262.js",
    "revision": "e2abb80d9125daade0b1b1de29ea3292"
  },
  {
    "url": "assets/js/13.fadb9277.js",
    "revision": "dcc9bce053990c7b51fe3d63be941a0f"
  },
  {
    "url": "assets/js/14.355f51c9.js",
    "revision": "a632d70f8393f10515eda05f51a8eb34"
  },
  {
    "url": "assets/js/15.5a6d456f.js",
    "revision": "9066217d83550522509e1ccc08fdd717"
  },
  {
    "url": "assets/js/16.ed46fe11.js",
    "revision": "a9b6537c1fd13698737f9c145ae89ce5"
  },
  {
    "url": "assets/js/17.0a573176.js",
    "revision": "3cb7eda08a83da3d52c1aa5fc2a68278"
  },
  {
    "url": "assets/js/18.dc61e8eb.js",
    "revision": "a265c86df84573de52266b524875412f"
  },
  {
    "url": "assets/js/19.44ac6f53.js",
    "revision": "e7e5a3f4edf47d10ffafc9134b432c43"
  },
  {
    "url": "assets/js/20.76f07131.js",
    "revision": "676900b55c9d821711f9ab1bf038aaaf"
  },
  {
    "url": "assets/js/21.9fe53393.js",
    "revision": "956b7f8790952fcaa5cbe5c470a1e3e0"
  },
  {
    "url": "assets/js/22.a494e752.js",
    "revision": "1dea35663249431547c377846df6d950"
  },
  {
    "url": "assets/js/23.f5e15a59.js",
    "revision": "406d5d170bb7dd40f4543e2dd379b1f1"
  },
  {
    "url": "assets/js/24.9bbd9373.js",
    "revision": "c8d625d1f61d1aa2592d82db95341a4f"
  },
  {
    "url": "assets/js/25.ed0f6ae7.js",
    "revision": "a2840bb2eaf67f3bdf0a3c772495d20b"
  },
  {
    "url": "assets/js/26.1db62988.js",
    "revision": "1c64fb137c461fd5712e84064680c9dd"
  },
  {
    "url": "assets/js/27.ce692c59.js",
    "revision": "c931e95d3897f8a5c0a6cfda830efe28"
  },
  {
    "url": "assets/js/28.6f14403f.js",
    "revision": "9fbe4f9d74afaeaec8ee077ddadd1b97"
  },
  {
    "url": "assets/js/29.792ee446.js",
    "revision": "a40c509a05a56710f9b2e11896d6e0b9"
  },
  {
    "url": "assets/js/30.04c41d12.js",
    "revision": "a191054e2c3a78c77dae4767ea728ba7"
  },
  {
    "url": "assets/js/31.5e00fcea.js",
    "revision": "7487c97932fc1dd222faa111755b024f"
  },
  {
    "url": "assets/js/32.af540bce.js",
    "revision": "1b3460d855ec3cccfdade6aebbafbe5a"
  },
  {
    "url": "assets/js/33.3d269d52.js",
    "revision": "4d6e4eec31ccd7317cf102f1f95584f2"
  },
  {
    "url": "assets/js/34.24c742ee.js",
    "revision": "927670ed910aab3ccec41d65ed19a84d"
  },
  {
    "url": "assets/js/35.4e279f30.js",
    "revision": "7465b1de5665857778659698c8a89eab"
  },
  {
    "url": "assets/js/36.5ec7caf6.js",
    "revision": "8c9e6a2b29bc155fc3ac0a5d51a7ad3d"
  },
  {
    "url": "assets/js/37.01644554.js",
    "revision": "bf74d0bcfe7300a17b78657533f56dc7"
  },
  {
    "url": "assets/js/38.84885a3e.js",
    "revision": "cba1cd94e548839b2b6cf537c2c9feb9"
  },
  {
    "url": "assets/js/39.8d35386d.js",
    "revision": "f2ce9a55ba5d3ef5ab22d1460393441f"
  },
  {
    "url": "assets/js/4.4d6cf723.js",
    "revision": "197824d5a3654df3e5748ab2477f1d03"
  },
  {
    "url": "assets/js/40.87bc9e2b.js",
    "revision": "c0e8648a44039546468a0ee4436f8f0c"
  },
  {
    "url": "assets/js/41.32ae626c.js",
    "revision": "7a0a7288eb8da3dbad9297ff93557e95"
  },
  {
    "url": "assets/js/42.12426492.js",
    "revision": "0123be251c1288d8f93ac9fca1cf0a88"
  },
  {
    "url": "assets/js/43.947a547c.js",
    "revision": "0ad597fb2d7a3ce59f6843269bee04ab"
  },
  {
    "url": "assets/js/44.24b1721d.js",
    "revision": "3668574bb3552ce0b60300821803eff4"
  },
  {
    "url": "assets/js/5.b4fd92d0.js",
    "revision": "3dad4a6efc93641f604f6c7946f5e768"
  },
  {
    "url": "assets/js/6.b0f5869b.js",
    "revision": "e809bc504922ee726f932ab434a39a71"
  },
  {
    "url": "assets/js/7.45e0def8.js",
    "revision": "39b769cf6e1909ac21818d11d116f720"
  },
  {
    "url": "assets/js/8.9a8bbaf4.js",
    "revision": "0c53181462b1be653b1212c0c4871409"
  },
  {
    "url": "assets/js/9.b4969a9b.js",
    "revision": "e238b47df2b867de8b6f6e890c0ba0f3"
  },
  {
    "url": "assets/js/app.0ae3e1c6.js",
    "revision": "85bfec5090743550031fe30aa8bf3bca"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.3331802c.js",
    "revision": "784191e06406aba7bd9ca69a6074fbb7"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "7fa949d7148dc0397e4e0420ed248a4e"
  },
  {
    "url": "categories/C/index.html",
    "revision": "6b9233ab01b2fbdf596be567250709c1"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "cdbf9d6f76420f2f5774630bc2b09d2f"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "8a31068011745b54411d979502446dc8"
  },
  {
    "url": "categories/index.html",
    "revision": "bc2029a701817657c60b9054793193c1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "37619e9727914c0d77e6ca023cad1023"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "93d170da012ea25c3a862824428b7385"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "3136ed0d4970a8502d97c4a217a6fbd2"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "03978043aa19f4ec5b5f8128c7567c2b"
  },
  {
    "url": "categories/python/index.html",
    "revision": "46f6497bd959174b601c119ca34ad92b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "553f027dda439ef99146ba875cfe1352"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "186ecc8f12b3cd1c08d7a4b490841f2b"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "796a4f806e9570142a2ce4d49ca10393"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "b4f451544b2da49297761b3f57b2d25c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a62bc0659e6328a1046f8a1704cc043b"
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
    "revision": "89ea9d9ad3fb4773f414c0ac078071ce"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "275c25a25cca3bdeca7ae50ae978754c"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "80252f8d1e0b651502442c9bca4778de"
  },
  {
    "url": "tags/C/index.html",
    "revision": "0b8698315869486e6da98b8657568f1f"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "5ea1471d621a0b2c5f934d8216c5daf4"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "b4223b974d12a14b627eb9ec2d5578bf"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "5ce5c661deeee8c2e29bb00725569aa1"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "547728e8c7cbb2e2e66928b8aa57ca40"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2487a26980a73312420f95dba7235caf"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "0a91ca5a6a4c44a8a402c3ffbcbd5f55"
  },
  {
    "url": "tags/js/index.html",
    "revision": "575254a34fde9c75da93303f8fb2c607"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "57c3b8014ff1d2180f8d22d0c913fc94"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "fc9556ac4eb8949c5ae4d809a5a17e41"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "55ade43716f0ac57472ca5508122084f"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "6aa512d02df41e9d47566f05663aafa6"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "3d84252a8f75297d4577cb56bc052bcc"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "26eac307072e1c873ac4364727846051"
  },
  {
    "url": "tags/python/index.html",
    "revision": "993ed0915ff5d8ffa8ec18291fcd3807"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8004d955c9455690c5f1249059a9e1a2"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "30fbd6cf88237fb9f0df1be9d6e3293f"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "a96011d9d0754087ab10452d234fe3ce"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "91e0a60e52ae7a302d1f639229caf33d"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "02b23dc546a6876762cd91435b9de9d5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a8dbd624138d4dea9592f627306872ce"
  },
  {
    "url": "tags/web/index.html",
    "revision": "03f59282f93a892113f4c10ad2c1017c"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "f2f9444a3520a6ad1ccd48f09e802ebd"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "ac3a21655d7f1ad996a33b74102ddf34"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "ab867c2faf5101edb503856610d29b91"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "e4fc5bd1cbab3909e77c730594bbcec5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "01cc2056f224acb1d0454a8e1424dffd"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "be31e61358bb84ddc86df6258635e307"
  },
  {
    "url": "timeline/index.html",
    "revision": "12515f62bebfe76cb19513831c3478f1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "baa74eda464fcf5e2dcab34a2a0f533f"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "40550daba830f92661bf70bc82b38d2c"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "e9d93f66bf483430386397397e143101"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "dc8f8a324426ab561d3bfefd12d30dc7"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "c98324e092a1296dd9cbd6a412565a17"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "7aef1ccca232e0c57282d95a2d941576"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "252a6bab25c1b08f5e3cea873f1c0548"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "402a038092d5d6f4d148e7ac0e31ca0f"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "73ecbbffe7d467e1ede833d1008796b8"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "57b44b6f0a54bda3463ec39c375d4724"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "cacdff3096c04d6375e0f13bbe74f4de"
  },
  {
    "url": "技术文章/index.html",
    "revision": "358d3ff7859c126084f6f1e2cde7c1f8"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a8761e1147be74b5701ada1e394c7072"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "f38d506ae9ff052be4a2dc06acd687fd"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "6ff803329f70e28a816f9b4c6e3c1ef1"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "802c1f838bb06a93649ad93bab3919cf"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "62c4e395b6ef6a9afadbcc4a60c77faf"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "9e991895a61659df8782f2cf3550113b"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "8e8e5cfe17f66aad9b246dd5c518acc7"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "c57b3b43e5b1f0762b25271a410fed3d"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "d0246fc159c34120cef5c773515015ca"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "bc671fe0a379425d2c868a6b32ef3fba"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "f11627bdfbfc759ce20b7b625e4dcf36"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "80f6819311121e566cf500c217e76b9d"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "3d03beaf50ecaa1469ad36c7c5fb2706"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "37d63009f51fbc7d2899b9fd8e504116"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "c7293d970d4daac37fd4d2ee3df49605"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "e923ff312664de419ade3c8363c587c3"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "4e185d12ca5c15769613eeba79f64fad"
  },
  {
    "url": "综合分享/life.html",
    "revision": "e5add9eda194468632643cd279b754aa"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "4c5f1341f56a6efd4f0d2efdf9e41023"
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
