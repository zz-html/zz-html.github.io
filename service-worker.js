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
    "revision": "edffad1b39549796dc400aa8274c7fe0"
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
    "url": "assets/js/10.7ba896d3.js",
    "revision": "e2eab5fbbdba9e571be50a1fdc878b21"
  },
  {
    "url": "assets/js/11.d18340a4.js",
    "revision": "588c4630c42a0844a913e0905a6a4923"
  },
  {
    "url": "assets/js/12.b62c0ac0.js",
    "revision": "72f0d6d586c67c77a4d2a8b81e904ee4"
  },
  {
    "url": "assets/js/13.970a3a37.js",
    "revision": "24e21ea3af3d86a1bf6e76ee4e7a3ffe"
  },
  {
    "url": "assets/js/14.f2f3dad1.js",
    "revision": "ca550ce283bb5c9c32f4485fb8a01abc"
  },
  {
    "url": "assets/js/15.ee9eab00.js",
    "revision": "f9799c271c2f50c33d104c28587665d7"
  },
  {
    "url": "assets/js/16.322ff085.js",
    "revision": "f55581b2535171105f44214bf57e9640"
  },
  {
    "url": "assets/js/17.7c26d2ad.js",
    "revision": "3faf072debddcdbd69fc2a9ca9ff69ba"
  },
  {
    "url": "assets/js/18.69abaa21.js",
    "revision": "43756f90b2c29809962554ea38f39a40"
  },
  {
    "url": "assets/js/19.a5068dc7.js",
    "revision": "9ccc80864820839672558e93d75dd88e"
  },
  {
    "url": "assets/js/20.79349406.js",
    "revision": "78f1c5e48809bfadab2b3ec5b0083a28"
  },
  {
    "url": "assets/js/21.0e76f109.js",
    "revision": "9ebd9063a861836fb9ae1934ea0b1c22"
  },
  {
    "url": "assets/js/22.208658ed.js",
    "revision": "a5108dc8036893d95eb2455959791648"
  },
  {
    "url": "assets/js/23.a8739594.js",
    "revision": "96c079c25eafd425630e54bf5e3edfa7"
  },
  {
    "url": "assets/js/24.da11a526.js",
    "revision": "97bee10cdb97ee159630090d31239cdd"
  },
  {
    "url": "assets/js/25.9329817a.js",
    "revision": "8dedf4c87d401c376e9561a0bde10ebe"
  },
  {
    "url": "assets/js/26.40a5b123.js",
    "revision": "3aa775c14588f4f36af1de586b0c7693"
  },
  {
    "url": "assets/js/27.ca7da213.js",
    "revision": "0b76ef80706fe31a479894500defd7fa"
  },
  {
    "url": "assets/js/28.5fe387f2.js",
    "revision": "4a61fbd2da33b221713b4c8ba346c3ba"
  },
  {
    "url": "assets/js/29.ba5a08de.js",
    "revision": "ce81af11bc45ffb4bff9d3549bac78bc"
  },
  {
    "url": "assets/js/30.57950752.js",
    "revision": "a59023315842d372d528855c49c12ce7"
  },
  {
    "url": "assets/js/31.839dccf1.js",
    "revision": "97ef4c1c78dd0cd53ec9443ef3d5c6b1"
  },
  {
    "url": "assets/js/32.1829234b.js",
    "revision": "83f15c965908cce83a35664565da711c"
  },
  {
    "url": "assets/js/33.3f7f1a1a.js",
    "revision": "9bba08727b8847188ad1a7839692a5a9"
  },
  {
    "url": "assets/js/34.40cfb5f0.js",
    "revision": "73a3b5452524bafa86cb69dfa3531530"
  },
  {
    "url": "assets/js/35.a135e85e.js",
    "revision": "7f91607d153edae48cd517f2a673039d"
  },
  {
    "url": "assets/js/36.76b760fe.js",
    "revision": "b62ada6e33d527f7ca2e6b4770322b9d"
  },
  {
    "url": "assets/js/37.0273e6ec.js",
    "revision": "0ec38eda2e2c0273cb7fb8163072ce11"
  },
  {
    "url": "assets/js/38.984083ef.js",
    "revision": "4189d89da1ab0a985ea4ea8e845570ff"
  },
  {
    "url": "assets/js/4.5f490044.js",
    "revision": "8ee1753028f1ece320e2d3b68d9b0cae"
  },
  {
    "url": "assets/js/5.3b2b447e.js",
    "revision": "a7fe20fd913bf318b10bba70ba1d76b7"
  },
  {
    "url": "assets/js/6.bbf0bf19.js",
    "revision": "0690de06479aeff60e000ba48f1078de"
  },
  {
    "url": "assets/js/7.9077ea1c.js",
    "revision": "3330a8f123e77efe2b402fde07fb0ae6"
  },
  {
    "url": "assets/js/8.213af2d2.js",
    "revision": "e2f575f829e241772e5619337b54d16a"
  },
  {
    "url": "assets/js/9.1b648da0.js",
    "revision": "022d3aacf0efba12e4175edf0968f9fd"
  },
  {
    "url": "assets/js/app.f42660ca.js",
    "revision": "c999bdf2309fb1d4b5ba9e05de15a11e"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.97604a12.js",
    "revision": "307b48bc8a74b826e0f224205548f191"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "4e261125e1f5524ce4d5f3989c002ceb"
  },
  {
    "url": "categories/C/index.html",
    "revision": "92770a2664f44ae2f1d4deb4ebbb6346"
  },
  {
    "url": "categories/index.html",
    "revision": "a299c8440663e4e1219c800e711aca7c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3b65db0e3f841f11d1d726201167f9e7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "be2684d162e9bd5dc6974bd8ed0d193d"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "677ca2de7b6631c2edd14063a9caca34"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "b2b63d417d6d16f1a2d2ab17eaa72973"
  },
  {
    "url": "categories/python/index.html",
    "revision": "d31acd7e11c79ba86854ef7afcb5d8f5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bf34ee2bda2b3eb4288fcd65ac8976c9"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "9b38f4d67ae30a76ae6cae178a76d89b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0c077be86b2986621a9d15a0cb03c63d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "47d78b4a5c05e221bbc247e93d011363"
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
    "revision": "b83bff7a2f3cbb42e876296419e42bc7"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "de14abde7aa1ef320e171dec96eb8066"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "4223ed1f002fa1d7fc83a80dba3351e3"
  },
  {
    "url": "tags/C/index.html",
    "revision": "47ab6315c4314bcb757c5d18fc2a26dc"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c4b5999252ab97c2dab77c98a8c7c73e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2c2ccbeca209b6a32af35fcee0c53fd3"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "3967b836073d96cea840fa6e7001e9ab"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e5f0de3a38c07dc62c21368687b7a7ec"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "aa37a111f4897c0f8a8f6436230a7b07"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "36ce97d529aefd5627814e5b6d8689d7"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "3f68a2f28b0c786e9da6ad043f253b19"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "e15a817bfa35977e0a9e34b2a10b1344"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "faeda12a4c24aa6e7a668c49a9aa88bc"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "c69898e820a89020924ba86ddbb508f3"
  },
  {
    "url": "tags/python/index.html",
    "revision": "30bf6d4dc96843eae7b74e415d28203f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "36fb62597db51e76c45558a6e3c3c6d3"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "45feef545879fd0a942733d096e7a302"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "89682251f1ea43641297b4ddf09fe02a"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "dbe095651b15a1401eef04b8c385a4a5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "41bbae9644629a5610869256ea927ab1"
  },
  {
    "url": "tags/web/index.html",
    "revision": "5b98a307c7dfabeac9ed366c07ee437c"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "f512ae41c3deba4a68835f258e7ce708"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9febab447526da598e593c8294485698"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2b7006cdd42bcc07718d6a8eb8926624"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b027c4f71c17135e5490046bf9988bad"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c5d01cd20f74bcdd836b81e413a05257"
  },
  {
    "url": "timeline/index.html",
    "revision": "7c4aa309d321b1f04c3bc501ca713e6d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "4ab05be1b833b671a5e071bb167cc7ca"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "79f4b07d442ab7a8af39fab342878cdf"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "fea9e44be4f1ac3bf1231139dba0054c"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "fabafe7f225423e37be760c7b11ceeed"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "6333a1b41b0beaf929b4c876b66ab40a"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "ec352faa23be6116e3aa257124fdadac"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "affa59a6c9d9e7b1699cb86cac9d9f2c"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "26964ba4f147200682c1fb4553e56243"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "b99658473010e2283d69d16139ebe43c"
  },
  {
    "url": "技术文章/index.html",
    "revision": "0645ecbb4299c217d032c07f1a11f215"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "ae39744f3d56a13ad4a158210931b714"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0a4ae5fc173a1844c21556d99cd6ffee"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "28c3b4f6720b432da2112653308a60f1"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "07635ec1ec272a217ed6820a3606bed6"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "b56881d3377b4d08c7f827c604bbef74"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "44e2b513752ee192bb1b56bbb18181a7"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "4692bfb5850ee57a20f6ec24c12a541d"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "a3e649ad59ef4af567120d78e05efa8a"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "16344b519c9bab78789dd09ebdd7f47b"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "f8a4a916b13c078636cce0a5c4385118"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "2532817b4e5b28239a83c083d5557b1b"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "c443136183fb1b2c6016e0115e4874aa"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "056f39c8fedc5af7f00db2e6ad9b2649"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "bb9e577fdec4f207b5c5db5560ddb6aa"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f4baa30e0a455cc423f44677978a114f"
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
