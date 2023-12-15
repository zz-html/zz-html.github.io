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
    "revision": "d565500d1d7f6f52e4cc7d450be41e1e"
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
    "url": "assets/js/1.c3e2e87d.js",
    "revision": "5ae6fbc10754afc622a1c78d59260560"
  },
  {
    "url": "assets/js/10.68d865ed.js",
    "revision": "324b5005edd0611eb56b7f09f971751d"
  },
  {
    "url": "assets/js/11.e5c3d137.js",
    "revision": "d1f48dce8e72a1b693edf1018e61c97f"
  },
  {
    "url": "assets/js/12.bcc9ae76.js",
    "revision": "fe8047796cfa9519edc8e59f87c6c991"
  },
  {
    "url": "assets/js/13.7e0b6abb.js",
    "revision": "7bbb992c55a5774e568ce16e90016cce"
  },
  {
    "url": "assets/js/14.854c3a74.js",
    "revision": "b66245e4b18d723abbfb7f6a835e1fb8"
  },
  {
    "url": "assets/js/15.9c192660.js",
    "revision": "7ec8bc48894a35b9679d8fd6e9413003"
  },
  {
    "url": "assets/js/16.1309ace5.js",
    "revision": "dffca796169953a22143a4feb4928f76"
  },
  {
    "url": "assets/js/17.304e7b18.js",
    "revision": "d97d0cd45f602daf509987ab74ca1778"
  },
  {
    "url": "assets/js/18.779e9ff4.js",
    "revision": "1e325e93928a72a913ea991ae0f1571d"
  },
  {
    "url": "assets/js/19.ec477283.js",
    "revision": "db712629b5245c66a8fb685efc74a67f"
  },
  {
    "url": "assets/js/20.aa7990df.js",
    "revision": "6cc503795285a10701bac4b3bc8d3ac9"
  },
  {
    "url": "assets/js/21.94d16d22.js",
    "revision": "4512fd57e12b77da4a74a0273c9a11ff"
  },
  {
    "url": "assets/js/22.44e2a172.js",
    "revision": "b165f66a3dac170e111705c5d88dc36b"
  },
  {
    "url": "assets/js/23.a2fe5ba9.js",
    "revision": "aea58cec9b5bdec880e3f3e523148c99"
  },
  {
    "url": "assets/js/24.1c012098.js",
    "revision": "2fc3a9bf98725dc2e93d9b9d4dd94f9d"
  },
  {
    "url": "assets/js/25.9624e62e.js",
    "revision": "df6bd2cfabac3b7aa0ab3e211f370546"
  },
  {
    "url": "assets/js/26.6232f716.js",
    "revision": "0550a6751d20c4ba9ede5ef8d90d2537"
  },
  {
    "url": "assets/js/27.2e5d2ac4.js",
    "revision": "18493aeb2327ae25be14ad5bfc0da0dc"
  },
  {
    "url": "assets/js/4.006c63d4.js",
    "revision": "a3df4b1a2191f6f00a9ccd5b014186bd"
  },
  {
    "url": "assets/js/5.eca25d26.js",
    "revision": "39804ac6ca81398d249404766a337ca2"
  },
  {
    "url": "assets/js/6.bd783111.js",
    "revision": "31762214e70edf9eec9c3f3c8a679836"
  },
  {
    "url": "assets/js/7.de17d2ac.js",
    "revision": "3398bdf4a979fb5d6d02f08697afd8c3"
  },
  {
    "url": "assets/js/8.93658f34.js",
    "revision": "bfafeabf4a0a14c0033f69dfefc3f82c"
  },
  {
    "url": "assets/js/9.4bd9e436.js",
    "revision": "1fcaae7037ba9f1cab8fbc917b0738a1"
  },
  {
    "url": "assets/js/app.39d3c267.js",
    "revision": "acdfd5eb31cceb15abf213dbe85a4fa3"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c7c3b8bd.js",
    "revision": "7ad411b872920ae7747182990c053254"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "b65abcce30dcce58279f3308eaae35c2"
  },
  {
    "url": "categories/index.html",
    "revision": "a80730fedef4bce9ab55781c6b7b173f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "91c7acf56a1d0b7db42337687f330bf6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4a1b7ff45b3f9d86a73f5a576681ad28"
  },
  {
    "url": "categories/python/index.html",
    "revision": "e4a1913c8cc932eb12e20c42b4c8c4e1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "89621cf60499c021ed3cc8acdb67e218"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "d42c4d39aa7eaed42f6bb1ddb46bd534"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ea1101450a10e50abcbc29caeb1d11fd"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ac56de339daae12cf672702dfbaf7e23"
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
    "revision": "52627541992591b8d2c17230995ac4a5"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "038ffdfecadb1c13c1d9b21a8d78b926"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "00bf4047ddf309c248004cc715c40258"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "3259c6503298022911e7d6b6525c3d5a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "18c1c1bf4b7b08e86d4538e97724253a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1190bc45c9b3fe1cf72639661fdd6d2e"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "f91dfe7100fddc0ff5621e379dbeb420"
  },
  {
    "url": "tags/python/index.html",
    "revision": "51b0f304e18a6a20c9c06c474cea12d5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8bbb00021546ceb71abe1bc8f66d6130"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "924d63390f5ad1c0e18c435dc78eff77"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1e89c3e02cf1a7cb538272627407d6b0"
  },
  {
    "url": "tags/web/index.html",
    "revision": "6b9768ac287054f9221b207e9d9f5b50"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "09ea83819c6716af2005d10e1c829860"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2fae7b5a9492eae61eaf39a27b4b3b92"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1674ab71bdfe8b59e9cb89fb539a3449"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "929671374ecaeedf097b8d5d99774d70"
  },
  {
    "url": "timeline/index.html",
    "revision": "0ef584d7aa9f5b2c2c0adc5936d006d2"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "f9b85f0f82b67460e74b1ac03062bf53"
  },
  {
    "url": "技术文章/index.html",
    "revision": "eb568fa0829c9537557c91ea85687c30"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5d112241840f37bc99fc70481f300644"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "158085fed86161c67ecf04e5d1ee5124"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "d11b593ea798e57a38112d5a6c2737d0"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "32fb9f78b3f04abb65d3987bc49d5981"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8affef02252dbd554c81b725ba7e2297"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "4345a960666104e125a0c307f8aa7368"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "87f0e7c8edce87c6d7d5425b0f3ef866"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "bf6f61934554030ed4ce412f5b02a1dc"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "805302e6350a80cea64e1c2eae4cbba7"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "1e334deb618d989fc717056217fd6153"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "1f7d9723109dc4db47369947095ec04c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a95f099c53039efd876e10a286f706c4"
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
