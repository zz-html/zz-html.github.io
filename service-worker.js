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
    "revision": "435801a10d54f753ae69e3b3d06b0656"
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
    "url": "assets/img/client-config.5d0f0e2a.jpg",
    "revision": "5d0f0e2ab84bceb961f8d8253848ec38"
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
    "url": "assets/js/10.023255a2.js",
    "revision": "7a7ab49e46f748f43a50a97d6d7f3ea6"
  },
  {
    "url": "assets/js/11.8dbe9d70.js",
    "revision": "a69dab3ffafcc29a355222fec875e3ab"
  },
  {
    "url": "assets/js/12.3f02fa77.js",
    "revision": "9176a366b1e50cc6522bb7da7acb16a9"
  },
  {
    "url": "assets/js/13.31a3244a.js",
    "revision": "4c67d6a83786c36afbc3f5e65695a80d"
  },
  {
    "url": "assets/js/14.e827b6f3.js",
    "revision": "51acb0d73387c4eb78df4a8ebe6b912b"
  },
  {
    "url": "assets/js/15.7ed6cab1.js",
    "revision": "043e29f9ae9ecfb8757967a126652620"
  },
  {
    "url": "assets/js/16.ed46fe11.js",
    "revision": "a9b6537c1fd13698737f9c145ae89ce5"
  },
  {
    "url": "assets/js/17.7ac45a4d.js",
    "revision": "d1b943d09c6470924c5d95ee75814d3e"
  },
  {
    "url": "assets/js/18.69768138.js",
    "revision": "4c7de017143549764447b4846489031a"
  },
  {
    "url": "assets/js/19.c658a77e.js",
    "revision": "c38fb9edd6bbbdfecaac473d0e97f731"
  },
  {
    "url": "assets/js/20.43254506.js",
    "revision": "9418e329f94541cca2057275a9fcc065"
  },
  {
    "url": "assets/js/21.d8610b8a.js",
    "revision": "8eb512d422ec0032a2e5851d0e8852d8"
  },
  {
    "url": "assets/js/22.c3bab5b1.js",
    "revision": "5ea93a9b49b7874ea66ffcd4faf27c8c"
  },
  {
    "url": "assets/js/23.e331d113.js",
    "revision": "2c160d881fd9afd08b349776f96fa7a5"
  },
  {
    "url": "assets/js/24.9a028fab.js",
    "revision": "14c80a0575b1bffc0e2b33d51cb7c082"
  },
  {
    "url": "assets/js/25.dd165544.js",
    "revision": "4564212e22fe66c9ad1acfbb90b68be5"
  },
  {
    "url": "assets/js/26.e71cd4c1.js",
    "revision": "7a9d51c9a6e4adb1cb5d3c333a02b6b7"
  },
  {
    "url": "assets/js/27.8cb227ac.js",
    "revision": "a71a006fa6107b40013c93f05fea6a71"
  },
  {
    "url": "assets/js/28.6f5afdb5.js",
    "revision": "7ccb551ca6adf12435d90690cc8b10c8"
  },
  {
    "url": "assets/js/29.6a1da312.js",
    "revision": "57312c95b7cb789a640d6fa3600faded"
  },
  {
    "url": "assets/js/30.7a8e9c89.js",
    "revision": "c6591671dee0f4ced62640266634ae30"
  },
  {
    "url": "assets/js/31.df2b9afb.js",
    "revision": "5e7867843d0618fb130e66e297d45b30"
  },
  {
    "url": "assets/js/32.57165fa8.js",
    "revision": "6edbc0c303cab832756fa011d996fba5"
  },
  {
    "url": "assets/js/33.c64c1b48.js",
    "revision": "1773402a9286fc39446099107a3b547d"
  },
  {
    "url": "assets/js/34.84bf20c6.js",
    "revision": "45c17a021948a0c935b35c9866e41934"
  },
  {
    "url": "assets/js/35.b5d18590.js",
    "revision": "4078926ff5e883296119cf6d26248600"
  },
  {
    "url": "assets/js/36.81eb70d3.js",
    "revision": "bb16d0ee2af350414bfb0e2949ce4e54"
  },
  {
    "url": "assets/js/37.f85fa88b.js",
    "revision": "7f3e64145c217526f973d01e1c2ffcad"
  },
  {
    "url": "assets/js/38.9c2df8bc.js",
    "revision": "c7d9e78bb2f1f921cd6a3249a26e39a0"
  },
  {
    "url": "assets/js/39.2dfe3b82.js",
    "revision": "fd7209758c2a1fe54222f7efb83e4f4d"
  },
  {
    "url": "assets/js/4.672f373d.js",
    "revision": "29c10328d83c3f4f92f2307cdf2f791e"
  },
  {
    "url": "assets/js/40.51c559ce.js",
    "revision": "34fd1d11b62366e16a724a730d12e51e"
  },
  {
    "url": "assets/js/41.d0e88654.js",
    "revision": "2f22295b3727ca5c5f8c3ec7f60f5b2b"
  },
  {
    "url": "assets/js/42.8a1ab54a.js",
    "revision": "c500c62dea32c184dc064151ea3d70b9"
  },
  {
    "url": "assets/js/43.b7ee6873.js",
    "revision": "93bbd7082e8df217b5a6322f736103b8"
  },
  {
    "url": "assets/js/44.571444c1.js",
    "revision": "2ba39d632edb07a1a54e6cc433f0c26a"
  },
  {
    "url": "assets/js/45.239c200a.js",
    "revision": "95e3f493a9b5dbb3fc873854ca6c45dc"
  },
  {
    "url": "assets/js/5.233ab73a.js",
    "revision": "9491805080f33578b349ca580c294042"
  },
  {
    "url": "assets/js/6.c47edcc3.js",
    "revision": "68c7deced27d75744159b6274e3abf8c"
  },
  {
    "url": "assets/js/7.89f7f980.js",
    "revision": "45a0e79752ae3004ceda0a8b6821f653"
  },
  {
    "url": "assets/js/8.3d6ca160.js",
    "revision": "ff4cb41053ec9ca95db7b9205ca6d54e"
  },
  {
    "url": "assets/js/9.5d5a8caf.js",
    "revision": "8103ef91def71e4ca0e6d9c4e5e5654b"
  },
  {
    "url": "assets/js/app.96992e2b.js",
    "revision": "cdf72f916eca27878057de8199729ecc"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.2482acc2.js",
    "revision": "d41764e733cb283177f9e43fec5e7fac"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "74b92f422786a613a03e126d9e1b3f84"
  },
  {
    "url": "categories/C/index.html",
    "revision": "26436ca808a5d24b970aeb65abd630d0"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "87add59d888b0b83f23703d34722ea66"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "a07b9c86dba21868ba8c74715276431c"
  },
  {
    "url": "categories/index.html",
    "revision": "8631f0ac2352e7221a307591ea685936"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7d0c8377d6b075cabb3624408bb0895c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "ab680560b2e4ef085cd5c6d259339d9e"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "111bc749078de4721badff4c8fd2a53d"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "0af1d3bbf8c2fee4039c5c44caed344c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "e5025f2dfba9ea4ee3949f8077c1f06c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2136d5ae83cfe893c29b827163c403a7"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "727b1bf2c251e4b6f6ef8bd7869792c2"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "1356b9139e2d5496b9caf1b1777a3544"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "7df234ae9b43bce149c29db7e3c50289"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "81eb9008f3a62028b7fee24da7e471e9"
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
    "revision": "0e5839e8af1f5bd75b81eb38a5a5fa6b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4d12098f6d4756ec793b1bf2874f5624"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "f6f43913c328dceeb86db6131668f88c"
  },
  {
    "url": "tags/C/index.html",
    "revision": "54062a28f84b5b7cfa9c1ca156b18f64"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "e8e71280c5a980108393652e40b634ec"
  },
  {
    "url": "tags/dev/index.html",
    "revision": "b260187cb76c3b947c76fe46af01b51d"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "028ba39a1d58279c69e9b917ff20b3ca"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "0ac7556487de2081d4b3e03c4237caf7"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "904ec86d950b0d5803ba3a55e261905d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6f27786b37184b0369cd75e403c60622"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "0dc911fa80ec89da95d933cca0858d64"
  },
  {
    "url": "tags/js/index.html",
    "revision": "49a8228f0155ac55d68eb4cb51720ed5"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "44d3cf37a0c937201c2d6a67e113ab88"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "16d879793f6a8ddd611c176375d62e0c"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "3543e9ae1d151082e13a180b83585ac6"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "7492a50dc34ab95f220365e03b7a9bba"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "831914a936fdd7e0eed0cb4970d21684"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "ddcd6392a0d6b688f2fb2c9bd805b86b"
  },
  {
    "url": "tags/python/index.html",
    "revision": "cdf7cd79f3bf581dea5555f3916f7da1"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "96c3b4d3d0f58b237341d7b6b2283fa9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b62ed218a97baaff92d3ea6697736151"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "860217d31a10c5cdc1aad39965d7f4e8"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "ef5042d68a76d324e78a616ac6991e84"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "52a9cdd6566cf0c7d184619dfef32d91"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0d75f69a41f79b1bf25a9901280de08a"
  },
  {
    "url": "tags/web/index.html",
    "revision": "2f34d0ff995032f22338381c397abfc9"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "8c23e8b4d1a9fae868423c1ea6f64dee"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "d6b7b2a7c69590004b95c0551871c8fe"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "a87f96c2bed102cdde0ebe21b7384c1f"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "b5451bc0fffbba725849a3985523e10a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "766b65475af491ba150d8d94544a5e1f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1d5216023144cfaef1ab4f66d5fd6601"
  },
  {
    "url": "timeline/index.html",
    "revision": "5cfdec368b0607e38d80845c08cf591f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "780986c4742dee48a928127d319f49ea"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "4df49ce484da51f152123af01bc701fd"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "a5cdd00180da186af2d6bae50dde4b12"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "8b7f4bf11323233af56d1579d23d1aea"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "0246ed7aa263f1dcf03900cae8bf5d8e"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "e50e2229272b8a45ac5ca2eb89cc8788"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "3160efc4f2c572d10e8e0525be8a7ac6"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "ce588b59a5a34b1016c3981a5f1c95d3"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "0d1b898dbf59c98dc9f47e3427f9df70"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "efb26da775f3991e52ec3a583909ba56"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "01db7b47cd946c3b4894f4da6150190d"
  },
  {
    "url": "技术文章/dev/shadowsocks.html",
    "revision": "97c56fb734bca82c23a3610089bb3474"
  },
  {
    "url": "技术文章/index.html",
    "revision": "016cd07964eb0c0b1f78835e4c15af68"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "aa9617b63850e320da6c338937da524f"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "854a19091029e8c15289a5a9cf23d61f"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "1bc4cc93f174cb66c073c9a8949a6fba"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "df8c612a4ea06f77a48ef9ab35bd45b8"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "2146d3a986bc75e4004a98e7432c54ff"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "074bc7193a792f6767bb9bad6e7eae35"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "21a366ef1b63513b9af938431ff5e2b6"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "9f0bb9071aa196cebf0eea62dc95b0a0"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "00b4e7d52e77c585dcf4f2a7d53941d9"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "fd4072d216d994a134378de140dbe517"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "6d9fc39984946ec6b5b52f5dfce47bd5"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "6b476d8ae5ee34c4a750254ae9b3f555"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "8a8be357ffdf2984e6b718579efd8ffe"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "40304298cdc3f8d6ac8fe6cd9d587e9d"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "58e9dee1060702767417633c950467a2"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "3e32a652c7d374a0e93f9e7cdc9af080"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "258f4be926024956f85531b746970620"
  },
  {
    "url": "综合分享/life.html",
    "revision": "d4c455ec1c07e633cca5a5750fec1ad3"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "40d7ce33346e79aca211a15f82da2340"
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
