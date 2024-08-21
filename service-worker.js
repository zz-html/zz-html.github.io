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
    "revision": "3876f6f7915998d42a040c2ca3a0f6a3"
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
    "url": "assets/img/ce.e6969269.png",
    "revision": "e69692693223e643919a3803cf510632"
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
    "url": "assets/img/od.b7f6be49.png",
    "revision": "b7f6be49ea4725fabc1260bfece2dfbd"
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
    "url": "assets/js/10.2e4b415d.js",
    "revision": "e44ca58077b919ddf8adb9bcf280461f"
  },
  {
    "url": "assets/js/11.39f436ad.js",
    "revision": "adc769e67e44ab814e2cdccca3944aea"
  },
  {
    "url": "assets/js/12.6f41e3e9.js",
    "revision": "1407f563c1c0c72a0d616b5e5c28cd7a"
  },
  {
    "url": "assets/js/13.0cbeb396.js",
    "revision": "d5c8e2825e251c561ce1137558ba06b6"
  },
  {
    "url": "assets/js/14.2c73e838.js",
    "revision": "7661273d95a3573148c854850ee7da69"
  },
  {
    "url": "assets/js/15.8116a5ef.js",
    "revision": "68690992fd2f8e447e7429c1f5c6a4f4"
  },
  {
    "url": "assets/js/16.bcfbd116.js",
    "revision": "7378edd3329c9994a8ee508c4a3392d1"
  },
  {
    "url": "assets/js/17.137a229f.js",
    "revision": "69b5c6779f10a7163261c2641ded9d9f"
  },
  {
    "url": "assets/js/18.9d839d3e.js",
    "revision": "ecb4bd330f9eed038d4990b8bbd25bea"
  },
  {
    "url": "assets/js/19.25a59630.js",
    "revision": "552040a37d9a4a3dd2f6d5f8f36fbf1f"
  },
  {
    "url": "assets/js/20.c50115a9.js",
    "revision": "f7b24cad436d72918456856607736374"
  },
  {
    "url": "assets/js/21.965d8722.js",
    "revision": "eac299c007a5f02658909351c74da9f6"
  },
  {
    "url": "assets/js/22.38d62c56.js",
    "revision": "0a4e823f9223ac588e9623484beb6ed9"
  },
  {
    "url": "assets/js/23.193fe64b.js",
    "revision": "96b8cde48697ae5e8e03a322eb62ed6b"
  },
  {
    "url": "assets/js/24.6bf24d2a.js",
    "revision": "054f79cd560b5996f05a242600cb2d47"
  },
  {
    "url": "assets/js/25.1718a4f5.js",
    "revision": "7afdeb78b499ba28eb172b97e351e9dc"
  },
  {
    "url": "assets/js/26.6afc0c75.js",
    "revision": "2a0e6ac7ab1ad75df222ae45e57e4b43"
  },
  {
    "url": "assets/js/27.5a24719d.js",
    "revision": "90160233bba9680280a35ed032bddb57"
  },
  {
    "url": "assets/js/28.d771f1c7.js",
    "revision": "6966fc9a2e99e2621f4543f4c51f0b5e"
  },
  {
    "url": "assets/js/29.321909d5.js",
    "revision": "62e78c22fad9f94d3fead88671431221"
  },
  {
    "url": "assets/js/30.baafa07e.js",
    "revision": "0cbbc545ffe79ef9d8fdb0ef8786bd4f"
  },
  {
    "url": "assets/js/31.ad3cd696.js",
    "revision": "89c2464aa00e9b359102a0aa64d232df"
  },
  {
    "url": "assets/js/32.924581f4.js",
    "revision": "7c3c92294c66f57b952299a43df08f2d"
  },
  {
    "url": "assets/js/33.d369201a.js",
    "revision": "86124c6a0e7f1254ed95010acbc746b2"
  },
  {
    "url": "assets/js/34.807f3ac4.js",
    "revision": "d4aa2cffdccdfd6951a59be845dfcb6a"
  },
  {
    "url": "assets/js/35.c90c1779.js",
    "revision": "eb6378c7bc941db3cdf69c7979677dff"
  },
  {
    "url": "assets/js/36.54629e15.js",
    "revision": "796062da05c70aec0d8060c0225044c5"
  },
  {
    "url": "assets/js/4.c30c5608.js",
    "revision": "45bca9437dc6988e350460cb177cef55"
  },
  {
    "url": "assets/js/5.7602aad0.js",
    "revision": "16a8f352ca403da956142bb6aa39a3ae"
  },
  {
    "url": "assets/js/6.23ab0a8f.js",
    "revision": "bf57423200b63eda88674ba6373d63c4"
  },
  {
    "url": "assets/js/7.8f566098.js",
    "revision": "58cdb57385705cd4b85bffcb663e5b2f"
  },
  {
    "url": "assets/js/8.08c03a87.js",
    "revision": "4533de821a0b2d38d07df73bcb67860a"
  },
  {
    "url": "assets/js/9.02b5d5a9.js",
    "revision": "39307ad366ac80a7c0740405e9c2dcb3"
  },
  {
    "url": "assets/js/app.6937e735.js",
    "revision": "5718a2bab4a3d78805fee68e9956f529"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c30a8dab.js",
    "revision": "c58f61b4b50aa04617107c3ad431329a"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "9043413d59f3a6fec033d50ab30bb168"
  },
  {
    "url": "categories/C/index.html",
    "revision": "6847e419a18d252464ffb0e5273abb61"
  },
  {
    "url": "categories/index.html",
    "revision": "4d49933bd5eb2d440876ae94791a3736"
  },
  {
    "url": "categories/java/index.html",
    "revision": "231c57ddf1df40a25b14c1c93af17164"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7bd0f712445d5f708aa0e80aede3faba"
  },
  {
    "url": "categories/python/index.html",
    "revision": "cda3200c22a26114de989e3ade6bf239"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "102bd15613861d9f90b407bae2e355ad"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "579d90170efb80431ee0d189aa8a0d4d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "444892df0742fbc866d8c9c8a0841368"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4e89a89710ba8bab820852537a19bff4"
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
    "revision": "db75b68b1b80f264251ae3e4a0d260f7"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "66ee3aabfc685e7c5d8a158e924eff41"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "cf4af3533ecb779072df3f7449d61e83"
  },
  {
    "url": "tags/C/index.html",
    "revision": "cd5ad755577f15919eaa6e6ec90a153e"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b49326f0b9bf61dc54a27125c041f23c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8edb6440ec5ae8c31db272caf978e6d2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b7327c759dd6415fc2a33e8d2d6c2559"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "3fd9aef7d71b389b38f92f9784fb01f3"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "238aa5676801eebcaee0f47895e90650"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "1226797f2038509103e08fd3ab516cb1"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "010cd23ed84eba785dc1580d374b96b5"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "2baccb346429617be7addcff4475543b"
  },
  {
    "url": "tags/python/index.html",
    "revision": "e54719351d5bc029a4b477dd39537d98"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "afce8a3463bc4f363dd2188eee39972c"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b3b441b77c3d07d466f1c4f9e4556b3b"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "25baed8d6dd07e818369b06a917d82c3"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "9850decfd021fc4be8a17ac38cf13598"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0ce7d75ed220fc9d629eb7a55fe9d949"
  },
  {
    "url": "tags/web/index.html",
    "revision": "bae3aa4498ab017ee7fc4da099c412da"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "265a850ee39732ce19b35fc095456617"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2b099c3e31e38e23250f8017c4d40223"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "03c578a1082c3b11b60276d5ff735e07"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e0b9f4a6153137b29bef02259954de10"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "3f35329bfeb961705cbfdd46849ab51b"
  },
  {
    "url": "timeline/index.html",
    "revision": "e1f957a0d248547410f1abfe0d2b8d5f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "3a3682e735b7320fd6174582c0f9b05b"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "30f4f51a459fcb873df92f3cb6df86a0"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "37f8882e59bbb7100f59e7b2dd21ea36"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "8cd697c0a968053fcdb436e3e5a89cf1"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "8ac864e576cfdb65a44e7993bf2350c4"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "bcf9325789796cd7a39d33b4bb348707"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "a26c1a4f084a420b5fbb5a4d1245e3f2"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "569bde8c256666294be656c7503ae6c7"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f0ff04c91ac6155d1ab54afcb10f05f2"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0da76291c26c78c4ef1959ee8ab585a3"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "056f674d44a1f3b3f367b22d3115feb4"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "7c18374b210e0fe8251b1bc9f2a0d922"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "c6bedeb57a9560ca43563a9c692842f2"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "8608b4af5991ba78bd7d568a5b922fc9"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "37cc3a81e668bfc87a3b76f8b94cd19c"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "c318166356b8c5c45ab1825939626724"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "4c11a386564d9baa9c08f27395fec635"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "838f54dd165d49cf8f5a44dee7cd69d4"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "af95adace0700d36e78d8f54e0c894d2"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "3189e49d5b52ad1281bd1bf91411f169"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "bb512cbdda90b8731ba8120b7f478b81"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "1c5c3ff4101a53d7ebd110fbb1803b52"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b3c690e90f97b0d4818479f17fcd72a3"
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
