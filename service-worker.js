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
    "revision": "99631a01c667e9618c2875b5d6bd658d"
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
    "url": "assets/js/1.288c0ca6.js",
    "revision": "235f14af27f33d405704fecb1267617a"
  },
  {
    "url": "assets/js/10.4d878b75.js",
    "revision": "24967355a70cd0e2b847b0c6035e0006"
  },
  {
    "url": "assets/js/11.9865670c.js",
    "revision": "b24453e4d6c3b83056152660e38b7905"
  },
  {
    "url": "assets/js/12.70d23d8b.js",
    "revision": "4f234a420b939f22aa0a62a41b06d26c"
  },
  {
    "url": "assets/js/13.ee825438.js",
    "revision": "3e3a51f5f11278f3ac85045d4bd648fa"
  },
  {
    "url": "assets/js/14.4f1f72d8.js",
    "revision": "809be4142f97df26cd5e891c1950e93f"
  },
  {
    "url": "assets/js/15.976bafd4.js",
    "revision": "49ee61d4b38e79ed134c92f8d8c7e23d"
  },
  {
    "url": "assets/js/16.a849f8da.js",
    "revision": "22dbe55a208dae67aa3f35cba0a6a536"
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
    "url": "assets/js/20.bc52edb2.js",
    "revision": "0cf4e7eb74ed4275aec67cb6b1500ee4"
  },
  {
    "url": "assets/js/21.463afae1.js",
    "revision": "d8419a4ac11cb4f4d95413dfbfc8cd44"
  },
  {
    "url": "assets/js/22.1b7f2d18.js",
    "revision": "a73a709d0b54413ad8fb4c624b3276af"
  },
  {
    "url": "assets/js/23.5f792c40.js",
    "revision": "6ac0b11d43fbbdc1e2bd8ac518c765de"
  },
  {
    "url": "assets/js/24.4db4ac4b.js",
    "revision": "50680b9c59421c14b5b0581e5f70f93c"
  },
  {
    "url": "assets/js/25.95fd5f50.js",
    "revision": "108cc3469c1473492673d9094cf7e4bd"
  },
  {
    "url": "assets/js/26.b9c04f76.js",
    "revision": "9c214efbd18cdd2247245bc42d8a1fcf"
  },
  {
    "url": "assets/js/27.72ec4850.js",
    "revision": "4a191d002fb6db70d18c4b03134929a5"
  },
  {
    "url": "assets/js/28.891ba89f.js",
    "revision": "480c0c453b899e310bb2b2f6b61e1b23"
  },
  {
    "url": "assets/js/29.fb29fcbc.js",
    "revision": "14b7ac75290d3bc457665eed49732edd"
  },
  {
    "url": "assets/js/30.f18dbe95.js",
    "revision": "41a59106b8f9f3f8f0dbc986ada5f456"
  },
  {
    "url": "assets/js/31.918f1f00.js",
    "revision": "7233b6f825ef23ad53461cee8b9a9c80"
  },
  {
    "url": "assets/js/32.e3cc1028.js",
    "revision": "be14465bf75c146cce54224726118661"
  },
  {
    "url": "assets/js/33.3e94476f.js",
    "revision": "bfab6da67a954d2cf2204fd48a44683f"
  },
  {
    "url": "assets/js/34.17fe3908.js",
    "revision": "95202e06e86073f59e19ef38c18c9cfd"
  },
  {
    "url": "assets/js/35.a039c252.js",
    "revision": "3c65a6059e6ed9a7a377bc586c36157a"
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
    "url": "assets/js/app.226398bb.js",
    "revision": "2ab1b467c3122718d129bd30c5bf4227"
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
    "revision": "3222f795fd17b3f8b8916bd2e1a50dae"
  },
  {
    "url": "categories/index.html",
    "revision": "c2a6123b12faa3618a4468c4f4985051"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8cc69e9f9cdb85cea253551ba7097437"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d88e1ff9f01168c626a1fab883905125"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a208f3711d2f27e203a2ae51b12d8121"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "56aa6dd8b02479ec9c3ba33f7e9f9541"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "df46a8be9edfaa913438a8d172c00083"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "7de81aa66a781d66bb0f19812121e4eb"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "19b3fc41be74c6b1ad26feca4164658e"
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
    "revision": "3f16bb80f920d8965869b0abb4f3b470"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "654a47fe7d63cca78c0b2e9ed92871ae"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "f72a2087e10e3c4e79b377635804f3f8"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "612714f11a2494b13027566efe847e8a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4f452fa7dc97a1ea5fe1be758f9b536a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d8909336fe0db3425493d58cf2f77240"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "2e6ac0ce541ae27866d63c46ec5e0ad0"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "83806da399215f0d752dcdd46e2541b5"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "494786d4248e2b3256282b12041e26b2"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "d0350d9c77db2f7a83053e1b3c6ffb54"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "2605f7a9357c4197201a352a74b51741"
  },
  {
    "url": "tags/python/index.html",
    "revision": "055fc25a14286643a53f5362bc0d3bb8"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3fa4efbfbd14b3f0d3685df09fd8ba63"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "cb94ec1f521f900b728c4ba027a7bce3"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "29651b708f25d8835eb427dd97267e4b"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "0b7327d762694c7e2879a7551cd1348c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e162ed11c629dd8dd5c05941bb3ad28b"
  },
  {
    "url": "tags/web/index.html",
    "revision": "0c5cc3964c6b1830c1ef42b33e968f91"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "550abf40578d0eaf20163b01a8b803e7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a6a6c37eafea5357324b75eb3e405a79"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4071353c6f77211f0c8c994d673d286e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "57828c5e3e5a594a59126149cb92d23c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "416a6c88a1b992f14c3f6e85bbe1bde8"
  },
  {
    "url": "timeline/index.html",
    "revision": "b36be994a7fb1973e7127c4b6e6bf8ff"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "728103c9f7b2371fb9efcb2e0294e879"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f12bdb96af0a7748d3d95550f95ec07e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "aa6d282e2bf20f115c8fb7aeea401bde"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f16ffffd9b1e243772e7eab5f83b99cc"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "e61bade9843386e8b5860c149af77998"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "19d77b753b9fdc874be30a01c41f3337"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "e0f128dbac3fa4173b8dfdeafb1d4765"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "c107d493b59037135c9f3241a1024b3c"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "a9772934d8073101585d21796fd399cb"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "81499ec21b86a7e8c0423fe6733dd9f4"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "20a672d639ed61fb0eacdff5f593baa6"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "5fd1966eca0fca27d5c877832da726ce"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "993f66dc5e5a3cf662004ddf5340cf2d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "08c29cb32082f2e496968ac69bf51474"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "a041938bb7bb3253dbe99d0e6a4b5622"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "1e814156302062318b419ccaf4a6c694"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "fc7ddbfd5cacad851e3495d6596dbbfc"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "18fb0d53c8ff519c8f275f4c5ca45153"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "a97e1ae4721184263e5f69477311f6bb"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "21e8f60be2108fb1e73a3e7218948dd2"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "96c41e1909e9e6ce90cf35ec626c5b10"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9c4c07fafbd7fae87e1060269c6c6899"
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
