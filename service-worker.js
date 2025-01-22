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
    "revision": "d8ca4d01a81852904578e68627b5f7af"
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
    "url": "assets/js/12.3c763ff9.js",
    "revision": "02f8a588c2621be9540c494c7bf7d4a2"
  },
  {
    "url": "assets/js/13.4cfbe7b5.js",
    "revision": "a7df255613f57377fee9d581a210d88e"
  },
  {
    "url": "assets/js/14.355f51c9.js",
    "revision": "a632d70f8393f10515eda05f51a8eb34"
  },
  {
    "url": "assets/js/15.d745b6b4.js",
    "revision": "c91ab3f30871b9e4219bebe6f68b1420"
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
    "url": "assets/js/18.0efbef09.js",
    "revision": "c65bf982a9f555155e096f1e74fb0d5d"
  },
  {
    "url": "assets/js/19.44ac6f53.js",
    "revision": "e7e5a3f4edf47d10ffafc9134b432c43"
  },
  {
    "url": "assets/js/20.410135f8.js",
    "revision": "8176c88189a1e0b0b235bfe954221297"
  },
  {
    "url": "assets/js/21.d9a7f5d4.js",
    "revision": "0ea153ed55b22238e7d84a42d024dc05"
  },
  {
    "url": "assets/js/22.312d3c1c.js",
    "revision": "5333082f8c06f50424f08c3ed4b85c68"
  },
  {
    "url": "assets/js/23.a2a2528b.js",
    "revision": "5b771b6669ff454a1b14be6faaebfd41"
  },
  {
    "url": "assets/js/24.af4bccae.js",
    "revision": "2fc19e9b64988e80c0a7eb497b9860b8"
  },
  {
    "url": "assets/js/25.a9337b65.js",
    "revision": "cbb337e29e125b9db50716987e506cbf"
  },
  {
    "url": "assets/js/26.1db62988.js",
    "revision": "1c64fb137c461fd5712e84064680c9dd"
  },
  {
    "url": "assets/js/27.0e04b8ef.js",
    "revision": "596f43196b4b7ce703d638bf9ec9ac41"
  },
  {
    "url": "assets/js/28.8996c466.js",
    "revision": "d5206bae160f2d0d5bd8d613b861ab2d"
  },
  {
    "url": "assets/js/29.f60ea736.js",
    "revision": "b17321c672be495d8905a6f2d9d233b0"
  },
  {
    "url": "assets/js/30.04c41d12.js",
    "revision": "a191054e2c3a78c77dae4767ea728ba7"
  },
  {
    "url": "assets/js/31.1ec5a940.js",
    "revision": "06ca0e6b6b2d4f00fd01d1f50a2fdf04"
  },
  {
    "url": "assets/js/32.c5daedbd.js",
    "revision": "83129317941528f0311d42c43f35a652"
  },
  {
    "url": "assets/js/33.2847e86d.js",
    "revision": "549ec4d85067879e6ca1c7ceef743da5"
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
    "url": "assets/js/36.cf2daf57.js",
    "revision": "a9066a68c653ff7a63a327bb7df77229"
  },
  {
    "url": "assets/js/37.8111b42f.js",
    "revision": "51901b78b736c06647a2e90e6ec35977"
  },
  {
    "url": "assets/js/38.2153abcf.js",
    "revision": "a3e7b554252a11fc92e8cd099a56a463"
  },
  {
    "url": "assets/js/39.4744c485.js",
    "revision": "4e155c5c94f8f54e8bfee68abe7358f8"
  },
  {
    "url": "assets/js/4.4d6cf723.js",
    "revision": "197824d5a3654df3e5748ab2477f1d03"
  },
  {
    "url": "assets/js/40.70f5315f.js",
    "revision": "e9d5658bf96195e72b6e9bb448d16d80"
  },
  {
    "url": "assets/js/41.abfa2618.js",
    "revision": "526e4cbdc782214181ab9e0214793ee9"
  },
  {
    "url": "assets/js/42.a4e3807c.js",
    "revision": "7e2e8f1f4265a861ea5562eb3d731490"
  },
  {
    "url": "assets/js/43.9d1dc0fa.js",
    "revision": "465b0ee21d23036cf0b4580beb87cae0"
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
    "url": "assets/js/8.c3ed3e08.js",
    "revision": "ba2d0e6e3953e01cb4e9bdce24b2854b"
  },
  {
    "url": "assets/js/9.b4969a9b.js",
    "revision": "e238b47df2b867de8b6f6e890c0ba0f3"
  },
  {
    "url": "assets/js/app.58081295.js",
    "revision": "44ecaa968ffcef58cc713f9e68b8e7a9"
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
    "revision": "8b38646aafa9de35088d7d8acebf55ea"
  },
  {
    "url": "categories/C/index.html",
    "revision": "a774577b135cff7df00a94d225f53501"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "82eec37bc1599e03c0feb8bbe8bea6ea"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "78eb62de6e4c7ded23839f3f5881a29c"
  },
  {
    "url": "categories/index.html",
    "revision": "67a859655c187f8e1f63d2e85f087483"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b3b28550b3a13e1207e54cbce7315567"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0153cf7b1ae7b6d74ddcbae8234de5e6"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "3e4244a2eefeff9a0f0ecfcf37762907"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "b305bfef71452d73b9ada97ca9c3215c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a72fb2c48debe5a5425d5581e25487ff"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "342e752f3bee494607f12fb7918bdaa1"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "9968413fb6017ffdd530a27a4ba371e6"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "c942270156a5b8421e89fe59c4f5a5e7"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "0cd371e540ce1fd835892b7f80b5412e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "14f6d24c09cbfbaa1d278435339990bc"
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
    "revision": "a080af67c560093e8fc00418241330ad"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c597fefef65bc92b9b3e56e2f7b00b1f"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "4b4b9b60279abe9a6c3c9873d90a9ece"
  },
  {
    "url": "tags/C/index.html",
    "revision": "e76164accb9e73ffdbdf22e5f287d24a"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "ff0cbdc04efe60874ed913c235a2c368"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "01dc31b6fcc876ecdf70aeea6f0b779b"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "d61947e0de23a36fc68f89cd705e55af"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4316850665d823fc42562a5aad3543c1"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e532278f1e8263167611c34c4eea626c"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "ccf93c24e6a4775de0c0d37feaab3f3a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "baea0a430b152b952fceb29347b990f6"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "7b5c05813d570b412d890e7242feacf6"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "da10f696b0ba75632c847ada73345ede"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "7e3c42523560d99125d5cfee23af5610"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "1d15c8b55d83866aabb42d6088d0a864"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "1198595ec9908ebbd73cb9fbef6ae70e"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "771c2638039572efc8cce2e7057e0ce2"
  },
  {
    "url": "tags/python/index.html",
    "revision": "2bcc81720cd98fec7d94302a7144b5e2"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a1db4efcddf90df0b5968c65303faadd"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9db3221e27199e8a5e5330dba27d800c"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "c001d1938cb1f2004a7f1a5b9e686129"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "67913f896f6d84c3d09a517eec18ab16"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "dcc83bb1eff153eb2b776cb817e7e4a2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c27250418473ccbef51bb6bd1f282fed"
  },
  {
    "url": "tags/web/index.html",
    "revision": "17f48159433f1d4b90819505fee4cd8d"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "483f4c4f91bcde59b68eef6f4880b84f"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "179e40d23d7e397463db1090a390ef7e"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "02b4c3b76129ade7fad7a7943d5f01e2"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "676d29f0791883f2d8a3756c1205a5e8"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "76cb1676af99cf7fa53d87393feeb611"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4a577ac3f68e1502e4fb3c146b282716"
  },
  {
    "url": "timeline/index.html",
    "revision": "72500b8569222162c875782e9c3e83e2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "e6d52f162f80515a781ab7da4d979e12"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "c7f9fd134f90fb5c14b07c25c898c6f1"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "2a6b2ef0103fed60497cdc5b5db4c714"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "13589815cf34ecc57d28ba5f213ba24c"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "a529a89cb7e9a715ee8389f345611101"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "6f17c643c627ce2349dfc3e50e3e55fd"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "9ad5f297e50387d57eaf962b0c23e16d"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "b4c38905165a1230b7465929358fb831"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "204855081484455e539336174f785bb4"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "438ff5c9c5b7e66fa6c19e34458115c9"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "7af8de7352d243c57cf6b0e367adef31"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d631fdbf487064bb009ecfecf5dc7ee0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "cf3ec94c8c5a3ca280dde83855589769"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "51585bf087a6946e55fc02df62c9ce77"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "02874431dc690bbcad3f53c66b75ef7c"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "6cf53a4296ef6f2428ac58b95f7a33aa"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "7ae520206bdb0948d092cf3c826b2d94"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "03a55f8915de0b8cf307758e05c903b8"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "97eae3862d85430562e6e75b40176121"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "fd3dd6851377afbeb92d5a81a2ceed29"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "7e075bbdef110c2f3041a54b85fb5317"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "15d24a01169df2fedfe41905e338e6b8"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "02f9812a71b1a72f638f003e652fa22e"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "9d698b5d45b8aa5a1802be27caf2c318"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "b384bb2f98272add44ec995ed74c8665"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "c34823ac35a5ce365c526f248ca3af67"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "d0e4303b3b517e0e9aadc412ec75ca6f"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "48ce6b748f1276d509ea6d49aec94427"
  },
  {
    "url": "综合分享/life.html",
    "revision": "6e9c93885af615beee51568f89473651"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "3b0faa47d20181a18293c8b7b335a731"
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
