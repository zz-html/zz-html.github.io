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
    "revision": "4bb1e4745fa507808277f6d41a242f0e"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
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
    "url": "assets/img/Chat.61ed37f1.png",
    "revision": "61ed37f19fdad688cbc8c5d2dd9a7423"
  },
  {
    "url": "assets/img/client-config.5d0f0e2a.jpg",
    "revision": "5d0f0e2ab84bceb961f8d8253848ec38"
  },
  {
    "url": "assets/img/Continue.21a104bc.png",
    "revision": "21a104bcdb39d6b8cca6e2ce0bb234b8"
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
    "url": "assets/img/Ollama.e0c33ad7.png",
    "revision": "e0c33ad7f2a71b43ad1aec4e63774e70"
  },
  {
    "url": "assets/img/PageAssist.b00bbf12.png",
    "revision": "b00bbf1229ff4d231fd944c09486d5ad"
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
    "url": "assets/js/10.f1ccb61f.js",
    "revision": "8b1b6a632256ba20733596bd9d27a9e5"
  },
  {
    "url": "assets/js/11.795ad7f3.js",
    "revision": "6a71cb221ef54729cbcf6833a2ac148e"
  },
  {
    "url": "assets/js/12.9645cb5b.js",
    "revision": "9a70a994ec5c538fa50ff98d9808fd1b"
  },
  {
    "url": "assets/js/13.e4ce2567.js",
    "revision": "917621768605c2d930d63d63671a676d"
  },
  {
    "url": "assets/js/14.856cba45.js",
    "revision": "29c9293311509f0b5444389a0eb5b86a"
  },
  {
    "url": "assets/js/15.5b91048a.js",
    "revision": "8247c734028bc05e0ab92c91ab988359"
  },
  {
    "url": "assets/js/16.989043b8.js",
    "revision": "e4a31aed19f10cd8493cfd253b80ea85"
  },
  {
    "url": "assets/js/17.27f69a4c.js",
    "revision": "28f6bb693ca21b89d2b66bddfd9241a9"
  },
  {
    "url": "assets/js/18.4b8e5fd6.js",
    "revision": "1ee4eface85de3127a6f70c05e4875db"
  },
  {
    "url": "assets/js/19.48172f1c.js",
    "revision": "374875053b68ba025760a089b01ce743"
  },
  {
    "url": "assets/js/20.77f8e4b9.js",
    "revision": "6a9f2f845c0ab2a28a7d4f87e149357c"
  },
  {
    "url": "assets/js/21.4b4d7703.js",
    "revision": "b2517047fab35755ab73a3aa361b7ef3"
  },
  {
    "url": "assets/js/22.f5405213.js",
    "revision": "3ba8e63f3915cb8de0ac7fc72ef7d36a"
  },
  {
    "url": "assets/js/23.492783c9.js",
    "revision": "9cecf085161f5d4fc4478fb7f6eb5d6e"
  },
  {
    "url": "assets/js/24.bcdc168d.js",
    "revision": "20d1b0bea19488350b842766346f9cbd"
  },
  {
    "url": "assets/js/25.600d53b7.js",
    "revision": "35ed3c846be8f3a97a7f2318537a3a29"
  },
  {
    "url": "assets/js/26.a0de7f5e.js",
    "revision": "6ff59d6b1b1a0f5dfdb914bc2a121aa6"
  },
  {
    "url": "assets/js/27.dfe33b79.js",
    "revision": "aaabcc111bf90baf2cbab11de8a01d42"
  },
  {
    "url": "assets/js/28.706f9eff.js",
    "revision": "b897ce08e85a802188f1d3caf65bf5de"
  },
  {
    "url": "assets/js/29.6a1da312.js",
    "revision": "57312c95b7cb789a640d6fa3600faded"
  },
  {
    "url": "assets/js/30.2f468e99.js",
    "revision": "71db286a7250f4cf90dc777556028505"
  },
  {
    "url": "assets/js/31.4e253fed.js",
    "revision": "57471e3cd4740f201856af772d9c7cf7"
  },
  {
    "url": "assets/js/32.0439d221.js",
    "revision": "c2d429ae07186c2b2b71abeb4d146441"
  },
  {
    "url": "assets/js/33.3f343e25.js",
    "revision": "914553d4342d8f190edeb4fb5ba79d81"
  },
  {
    "url": "assets/js/34.d5a13e30.js",
    "revision": "f74c46b942902fbf8b460bf38520cc40"
  },
  {
    "url": "assets/js/35.36e35fdb.js",
    "revision": "fe1e9812866bdb709bb72f1ae14d13f4"
  },
  {
    "url": "assets/js/36.a3015d5d.js",
    "revision": "4e5b916f01081e6cb73046fb67f2040e"
  },
  {
    "url": "assets/js/37.0ed71245.js",
    "revision": "5ba28d73fa45786c93da7e636e840063"
  },
  {
    "url": "assets/js/38.7ab6ed89.js",
    "revision": "d5fb1818e68d201d2574924867477b36"
  },
  {
    "url": "assets/js/39.9f2dc1c6.js",
    "revision": "5e48658c32e5ebb535dbcaf1fa24afcc"
  },
  {
    "url": "assets/js/4.e0097cdb.js",
    "revision": "82648b7080663e16d3f7344510d29bcb"
  },
  {
    "url": "assets/js/40.adc3b682.js",
    "revision": "4401176ba62709291be0e3368e4e4762"
  },
  {
    "url": "assets/js/41.2b56b4a2.js",
    "revision": "da15434b93da62754528b202033825b3"
  },
  {
    "url": "assets/js/42.b05e1c6f.js",
    "revision": "0258ebe47d85b76c2fbdf9a25895017a"
  },
  {
    "url": "assets/js/43.a33735bc.js",
    "revision": "dd5e602b323f6cc6ea51b8c246e70920"
  },
  {
    "url": "assets/js/44.41ed2714.js",
    "revision": "a8147a31f0ee0ffcc1032c52dfceed5e"
  },
  {
    "url": "assets/js/45.b9ec9ff3.js",
    "revision": "d2a4b188499ecf2b41d76caf2bc47102"
  },
  {
    "url": "assets/js/46.594562eb.js",
    "revision": "84b0e253ad754eaf5c37ee597578aeff"
  },
  {
    "url": "assets/js/5.143b630f.js",
    "revision": "45d5f08aef2befbb07f8645b62180eb5"
  },
  {
    "url": "assets/js/6.e384553f.js",
    "revision": "90c1dc3aa4321c97e9bf7b23359ce9e4"
  },
  {
    "url": "assets/js/7.e4c65ba6.js",
    "revision": "c6d2ba70811682e47002eb2e8247c5a1"
  },
  {
    "url": "assets/js/8.a8b7073b.js",
    "revision": "3627867a3317e33b053ac9bee04ef93a"
  },
  {
    "url": "assets/js/9.592dfe2c.js",
    "revision": "2c2ab9d871809ee96f9b4b608a3696d9"
  },
  {
    "url": "assets/js/app.656884a6.js",
    "revision": "5776beb0e0d9fed7338b5aa5088bec64"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.50785da0.js",
    "revision": "70ffcb0a592c0838435cd153c1f2ba77"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "f64a57b511bf77991d00376a57254850"
  },
  {
    "url": "categories/C/index.html",
    "revision": "74fabb3ed3b1ef05596d8d975a5778e1"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "1a1ea3df24db61be8a645468391515c3"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "2c4b36960c0297a3d5786cf92db7d33d"
  },
  {
    "url": "categories/index.html",
    "revision": "f8d72636cc6136b4fd19872b98837ed4"
  },
  {
    "url": "categories/java/index.html",
    "revision": "763c2d4016d5e3ca1ffe97d8a5aeecf5"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9cac9cfb7240fefb79b5e57b4dfa875c"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "c9a44958e3e80fc18462750069266631"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "89e3f63da615a0d157f4742358353d17"
  },
  {
    "url": "categories/python/index.html",
    "revision": "e60a43d8c8304c35eb3346e0c4c2358e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "db25cd6f9d6c551dbc9b49adb9c6dfd8"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "ce281438ef01f0846a934b2854c44787"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "aed627cb07ba44602db2ce5d3bf3586f"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "1b0dcbf4361aa929618257821599c70b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "23a89535861e7de6d8e46540dd910030"
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
    "revision": "bbee01b5cb21cd6100304a3c7d36f912"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "167b51d0fac975421bb52712f72896af"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "c85063976a4c3bcbfd2452c4bfbbcb4c"
  },
  {
    "url": "tags/C/index.html",
    "revision": "6a807cc0a62ebb8476db852938358e51"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "46ab8f4596d8e5dd1f37f1480be6d6f5"
  },
  {
    "url": "tags/dev/index.html",
    "revision": "980f91d59c67eb217040c7a311266827"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "0c791c7f45d0bf0405f40e369e7d2cef"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "7e1df484c38cdc4e9d1cc4fc920585d2"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "444f0d68eac3fc6e10b3a7e84f2cd03f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "76ad30435c02fe86e46302236107ecad"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "0411fb76a756f78c681aebcd8fcd50a7"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3903333c107d2bba9a511bdf6c7b5458"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "6f35bff62e37a1f0c74af3deab843cdd"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "10fad9e34f45e7fa6ad173fc1e89b4eb"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "510d3b8af5e71f4606203094e9200d4b"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "ef6ba2b097d925dba16ce884e6dd56af"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "555ae5a58df0da6f07e188d37f6cdb9d"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "c910cc4b4da8a05639b42578e7a265c1"
  },
  {
    "url": "tags/python/index.html",
    "revision": "b4d0a2b44dc879771bbb3475e5aa0558"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1083d9583293792de53f1466d99f825f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "76f132076806bf9968cc5b79ce52ac23"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "e90f33e321ffb81687775a8ce45178d2"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "656c79ce9ab860213f72745000418585"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "d713d724f1a34544cb0ea7db11377246"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4e790cd8795573abdf8497ac5510467f"
  },
  {
    "url": "tags/web/index.html",
    "revision": "bc8fea1d65b632f65c984457a27060ae"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "167b8442b511d339ea230773a7e301c7"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "561140ea648076bf324379f8cc8b405c"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "c6898cdffa38f84a1e1952dc77630d1b"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "faacf1d34d9ac93f3f3d0290b34ce946"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0fc11d7e75200bf7cfb4d2d9bb9c43f9"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "71d067df79bfba6553c52c42bf8c4e89"
  },
  {
    "url": "timeline/index.html",
    "revision": "2cea56ffd35259f692c44e0a66574eba"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "781bdda4b56b39da2693711d13ae9cc6"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "e0a9695f472787b9a09533509a9295b6"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "a65b1a2195742c7828ee0ea2c415bfcb"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "0fd3f0c37e8ca0f48ae87430ee5e52f1"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "01f2619b8c84e2c24a9297ed16b5d015"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "4644f064f1c4828f08da00698b5d66fd"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "a855cf5663006c10c8bf398b12d193b7"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "73b5ffbf5e6d15c40ec8ea13769283f9"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "6533f5e595858836b85d45086ac8e0ad"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "129c896cc63fa4b24111bbdac90fbf60"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "9a928d5895be633d9641bca01a326f9e"
  },
  {
    "url": "技术文章/dev/shadowsocks.html",
    "revision": "a3ae2bae5f54af706940d7b35c41d9ba"
  },
  {
    "url": "技术文章/index.html",
    "revision": "9caccb1907b3dd85a46ce37282a72ff4"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b4dd097cbce5cc6563112fb3e641fdf5"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "a4ce44904509ee6872ad299364cada6e"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "b988fffd35a24260351ae502b6d647d4"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "6bfae1db0d94b724d777ea6d9df973a8"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "e4839a44df5cc7e911c687c4996f7495"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "aa9f5fd3390a50d96a14118e7c30b5f8"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "1ecaa80214576ca2f1222cba8d384ecf"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "370d0184c5b83637e88329132b57e978"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "8446b4a8a2a62583357707863f322e17"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "429a1f7352c296f629560619a501bb81"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "cf208ffcdc81bfc7f61067e6e540901e"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "5a22666b417bf9931b2eb79dae2ede0f"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "b24a1d8ec8f7f35f8968fad5f7a0f51c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1b8d8df6d6fcfcb8f51e42c731d5628f"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "bede11d12e06df74e7e090dde212ecea"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "e9e47b1ab3630a3f91c5193891860d5f"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "0dcc8d28fdb9865cebcc6de317c1badf"
  },
  {
    "url": "综合分享/deepseek.html",
    "revision": "4def398fe860be9855946d0305c43ad6"
  },
  {
    "url": "综合分享/life.html",
    "revision": "363444f6500a79bcedf9ccff576db3f6"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "5e927d4b13a0c5f44905ee6ed255320e"
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
