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
    "revision": "4ed5d67c5d4560eae0c448a5b9851073"
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
    "url": "assets/js/1.36d113f8.js",
    "revision": "c4b322ffd869d675ca659f1d60dbfbf0"
  },
  {
    "url": "assets/js/10.023255a2.js",
    "revision": "7a7ab49e46f748f43a50a97d6d7f3ea6"
  },
  {
    "url": "assets/js/11.a3047f66.js",
    "revision": "c4bba18baf0bf296b82e42628eef37f6"
  },
  {
    "url": "assets/js/12.1f89437a.js",
    "revision": "b6037d8755b3e5ca97a6045c5f2d0927"
  },
  {
    "url": "assets/js/13.1ef44be5.js",
    "revision": "16899a5f569313f62bc8bcd0bc1ee70d"
  },
  {
    "url": "assets/js/14.e827b6f3.js",
    "revision": "51acb0d73387c4eb78df4a8ebe6b912b"
  },
  {
    "url": "assets/js/15.c821f204.js",
    "revision": "5e836cc6a070d4b78ecc7e4869e668d0"
  },
  {
    "url": "assets/js/16.89d306e3.js",
    "revision": "387da099daa7c6cd7a83929775227da2"
  },
  {
    "url": "assets/js/17.98f28325.js",
    "revision": "6970ea4999e12d862190c2f9207707fd"
  },
  {
    "url": "assets/js/18.57c04459.js",
    "revision": "102e24b080e1db45ca75f820cfdb21ca"
  },
  {
    "url": "assets/js/19.f003d252.js",
    "revision": "06bb72c234e6fd40aa76d43fa041f9b8"
  },
  {
    "url": "assets/js/20.24a21f7c.js",
    "revision": "46db26b36c080cf86858a6fde0625813"
  },
  {
    "url": "assets/js/21.9757a909.js",
    "revision": "f3e3f219b7974f33d5cd4fa1c2d6787b"
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
    "url": "assets/js/24.bcdc168d.js",
    "revision": "20d1b0bea19488350b842766346f9cbd"
  },
  {
    "url": "assets/js/25.dd165544.js",
    "revision": "4564212e22fe66c9ad1acfbb90b68be5"
  },
  {
    "url": "assets/js/26.0587da6f.js",
    "revision": "8fa970a1dc28d404244ad03defe497b3"
  },
  {
    "url": "assets/js/27.2907b126.js",
    "revision": "fdb5caa8e106e72c4d67d99b88f99b3a"
  },
  {
    "url": "assets/js/28.9105fa44.js",
    "revision": "f59cd53d8fb1fc5dfd7bee791ccbb136"
  },
  {
    "url": "assets/js/29.31922db7.js",
    "revision": "4f528aa7b82d63c07fc50a746e0db09e"
  },
  {
    "url": "assets/js/30.7a8e9c89.js",
    "revision": "c6591671dee0f4ced62640266634ae30"
  },
  {
    "url": "assets/js/31.d04f3eaa.js",
    "revision": "17b7c22206095e5c2d10c7adebe1f148"
  },
  {
    "url": "assets/js/32.66f9c412.js",
    "revision": "fee9540e981c38634e8daf2921036cea"
  },
  {
    "url": "assets/js/33.c64c1b48.js",
    "revision": "1773402a9286fc39446099107a3b547d"
  },
  {
    "url": "assets/js/34.1c43390d.js",
    "revision": "cbc1d8f55e1265ab2f43c6c7c15599d0"
  },
  {
    "url": "assets/js/35.10ccdf7f.js",
    "revision": "2731fc84f37811c40d2bf0735c696856"
  },
  {
    "url": "assets/js/36.b8a26cee.js",
    "revision": "c39b37074829d047837de83c9bb6b8a4"
  },
  {
    "url": "assets/js/37.4b3534ed.js",
    "revision": "d0c481a3f9cc32f11a7372b89bb70a89"
  },
  {
    "url": "assets/js/38.a49b8b1b.js",
    "revision": "c5a3744438cbbb8a92e44ea229c80c23"
  },
  {
    "url": "assets/js/39.ea83bcb6.js",
    "revision": "219c7baab08d64127af1a1f1cbd785d8"
  },
  {
    "url": "assets/js/4.ad5a889a.js",
    "revision": "29c10328d83c3f4f92f2307cdf2f791e"
  },
  {
    "url": "assets/js/40.d6a7dd1d.js",
    "revision": "09d844d33a2e679898b228382241ae29"
  },
  {
    "url": "assets/js/41.428f888e.js",
    "revision": "2b21cb5739fe94e3a7da120fc1e18f39"
  },
  {
    "url": "assets/js/42.7fbc6bdb.js",
    "revision": "ea4e41dba89d6c185b03ea11d4a8815f"
  },
  {
    "url": "assets/js/43.6993cfd0.js",
    "revision": "2511b21d5400c2554e87ab592ad26296"
  },
  {
    "url": "assets/js/44.c36811c1.js",
    "revision": "5615faca1b98fbfe65ca7af189c731ee"
  },
  {
    "url": "assets/js/45.22d21d3e.js",
    "revision": "e454ff1974506e6d7d5a9ea524e42949"
  },
  {
    "url": "assets/js/46.6db9d370.js",
    "revision": "2ae636926a22ca806cfdf60a80354680"
  },
  {
    "url": "assets/js/5.73257d44.js",
    "revision": "9491805080f33578b349ca580c294042"
  },
  {
    "url": "assets/js/6.5b568391.js",
    "revision": "68c7deced27d75744159b6274e3abf8c"
  },
  {
    "url": "assets/js/7.89f7f980.js",
    "revision": "45a0e79752ae3004ceda0a8b6821f653"
  },
  {
    "url": "assets/js/8.c8cc31ad.js",
    "revision": "4199f48e11fc4f628a02687adb084a01"
  },
  {
    "url": "assets/js/9.5d5a8caf.js",
    "revision": "8103ef91def71e4ca0e6d9c4e5e5654b"
  },
  {
    "url": "assets/js/app.32915bbc.js",
    "revision": "c01d7cad3d71d19770c8b609a900759e"
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
    "revision": "8713253f2875dd5812a5727a4458c775"
  },
  {
    "url": "categories/C/index.html",
    "revision": "b720a015b0c81e07af7d748284fbb8cd"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "60654d2f90a35f2cebf074e59a2ad741"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "783ef642a9afad8ad2fb63ea0d795d12"
  },
  {
    "url": "categories/index.html",
    "revision": "c89f39aa7e008ffc36c0022aeef73189"
  },
  {
    "url": "categories/java/index.html",
    "revision": "23af32701f4bf7778312fc02dd8045d2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "96987641d040ebcf2a74343a6f9fe95b"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "bbd9594ef43c2b3df79e140ca709d05e"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "edc6cc5319c201ab31ec53b8d9473060"
  },
  {
    "url": "categories/python/index.html",
    "revision": "fccdbfd818a6382ccb97e0bad7707995"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f42bac08f2d2c8a85b31974f55da7499"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "efffbbde104416036a134377a07bf205"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "f0d6869827781dc7c45d324754daeef7"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "b4d91dcbe3dd5fce6dbba176e96d27a9"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "65682e88a6f92ae87eb488d6760237eb"
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
    "revision": "1256325acabfac480cd13f98db446369"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "cf59571f3589146c99d2ba263b8aeb3a"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "5d61f6339b5035cd1a4a6495f18c5b6c"
  },
  {
    "url": "tags/C/index.html",
    "revision": "e998f2bcac6fd6aad5d38cfb6e5b8040"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "a37063b691cdba74b00b3324aeba05da"
  },
  {
    "url": "tags/dev/index.html",
    "revision": "a5d0a43598bc23a5d22f464c453311ab"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "458249ab64ee81d31ed5d3472bb689c3"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "1942e7d75dcf6b27b23172482a5b57e9"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "24b6cab0bfe81b44ae02b19aeb1fa874"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a0910c81996aca56e0eaf2b12136ecf6"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "b8dba0696c4d3a745fa7f3fc44021d56"
  },
  {
    "url": "tags/js/index.html",
    "revision": "fd332f6773fbd8f22e2165b7af3afdee"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "d57b625e212beb9707d7ee97b513dd21"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "b5aa211ab9edfc2f4048e004d11c79ab"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "ca5bf74fac8574074ca8ebbc92a5baf4"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "8f9f840677d657490b47d9cf9e8cc4ae"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "fdb18a44ba59b7a405400f1a2adc4289"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "f2bf74b90766fc344733953e37e57b02"
  },
  {
    "url": "tags/python/index.html",
    "revision": "e18c09299e5438ce20cfae21b071074b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3ead2d94f49f8aa30b11b3916806bf4d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "69af58ec8eb7f63941a82589d0b6e3cb"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "e6f5055a294561fa22e67ea16e88a292"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "71e3a5a68bcb97893e47291b5e80344f"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "fba472cf3ecc7025db51b3a953e993d2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "98f64984732ab659ab1e86af3cc5e823"
  },
  {
    "url": "tags/web/index.html",
    "revision": "f27986940ab5e15a5cf0b44165597327"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "46473de8821a00fb066e694bbc10e1d8"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "0ef5fe927367b238b2bc4a1234d05840"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "58472b8d7eb8cdb0e194ec7d6a3c73d1"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "14652c94fa7f3cfd87d87cba3336dcc7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c0640757b09dc0bdf4dc3fee2e4b7459"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "53af56a15165575aa84369b4bdef8a9c"
  },
  {
    "url": "timeline/index.html",
    "revision": "5959952948fadb168bdde18c3e60e04d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "286f2891c4ec6f0637b86657c118748e"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "b5bb7199fe7b31410ec2f4ef36bc9efd"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "77a31cf7304edf0252569ccc62b8fb6c"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "e1fe0672b0132927cb65e3eba1976c9f"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "9a7566d9dd38255f6d1837df38230cca"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "69c3c6434f8db7c77174146ea0ce6985"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "639429e3658e01166edf07553c9e4717"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "39459a0962f5a7a215af19d4ff4606a9"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "69d61ecc1cfaa2179079336b3a3ec145"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "64cd92f622e66b4677db03662d97b714"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "9c232f905ad21dc57df177234cf441b9"
  },
  {
    "url": "技术文章/dev/shadowsocks.html",
    "revision": "9721e6a48e48c691c017d615bacc35a4"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7fb5e40eae9537d3fc22c092cbcf6af2"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f4bfe1d56d17f1c8185bc2127905ea4b"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "7424096b5930f41b886c67d36be244a5"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "15fc307fa1a829a8c8bb7d904490f26f"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "856d8e0780125523bf605204059663ba"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "3f3f2d49ea43085145dc367625f9e43a"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "20c5903d2410b40c975648807a524227"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "7272a19f48ca07dbdeced6b42a89fb36"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "f1c1b8c5922186829cab468982fae991"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "4db95a86e35db316b9f90e4dcd34e793"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "bcbbd9334893fa136dfbb77b65702c60"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "1ab665857593f57ce3379048b724af26"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "25922b983bee4b47c961c29489b92721"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "2d581e2fd3fc0e15a72712480316b762"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9d4e80679f83d262b1a6b0f40e148f3b"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "b464c74792ba7c1efd9c9f6224350f74"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "2e00e1c9eb83be3e30f907f87b7c4bf1"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "d41137610b0c8a1e7bde88b9ffc114c2"
  },
  {
    "url": "综合分享/deepseek.html",
    "revision": "9a040761f832668903201de5da4afef6"
  },
  {
    "url": "综合分享/life.html",
    "revision": "3d6f4db780ce343ec488b1c54589ec09"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "e78f0d1ad213b935c9ed4f70632c172e"
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
