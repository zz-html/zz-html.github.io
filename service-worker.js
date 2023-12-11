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
    "revision": "f49956df48e300ccb1d6edb22c447adf"
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
    "url": "assets/js/10.2dfd7379.js",
    "revision": "5b473adb3644b3a70adbce28d9edee0e"
  },
  {
    "url": "assets/js/11.69b4efec.js",
    "revision": "2bdb0ae1ecfe2d64afceb213537f10a9"
  },
  {
    "url": "assets/js/12.824a14b5.js",
    "revision": "b2f5903669cb651a5c4189b5a7e49f6d"
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
    "url": "assets/js/15.c90a8d05.js",
    "revision": "bcd431dacfe532162184621cf67548e1"
  },
  {
    "url": "assets/js/16.016d4206.js",
    "revision": "8bddb27b7498ad0f0ffcef19d4e6d413"
  },
  {
    "url": "assets/js/17.2322a976.js",
    "revision": "2703e1c53eb318c68ff18d416f93fb51"
  },
  {
    "url": "assets/js/18.eabd2f94.js",
    "revision": "50c43c7e514744306b300b2d2224d3ae"
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
    "url": "assets/js/21.94d16d22.js",
    "revision": "4512fd57e12b77da4a74a0273c9a11ff"
  },
  {
    "url": "assets/js/22.39ec28c0.js",
    "revision": "28f1d5a739897f8a4feee838c1318429"
  },
  {
    "url": "assets/js/23.ea5ad787.js",
    "revision": "61a01a5351fdc3a1d92cc04e0338d1c7"
  },
  {
    "url": "assets/js/24.1c012098.js",
    "revision": "2fc3a9bf98725dc2e93d9b9d4dd94f9d"
  },
  {
    "url": "assets/js/25.0e219e4c.js",
    "revision": "d677348d5ca0c156e64209ae5db77ddf"
  },
  {
    "url": "assets/js/26.2e435d7a.js",
    "revision": "7a38784ac06029c78087c38576f2c1a9"
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
    "url": "assets/js/app.9444b779.js",
    "revision": "9d19148a5faa7e4f11220961c17d6bda"
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
    "revision": "853abcc94e1851249aad6239ea2be3b4"
  },
  {
    "url": "categories/index.html",
    "revision": "5f5aa0cd0d8f28438b332d44bc54e7ca"
  },
  {
    "url": "categories/java/index.html",
    "revision": "152a0743bf15882e7c95fa8550dfe12d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "ed84502e1d1b89fcf37163122b8898ae"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3c55c59863b9e792e2930085b206811e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4aad3c74173e5b8e986e284459d39f25"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "0974f54688ca55b281e1447ca7dddecb"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "be69ce641fb6b392d63dee515944efca"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e187fde69fcce6c930d95f3578fa66b8"
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
    "revision": "0f6905c6f267ef722bda0dcc21c44455"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "cbf73370ffe07a995c751ff061f68015"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "0fe2d12fa95ad6ceeed679921b79942c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f6d195789bfa7fbacd6bcea37d2ec55b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "6bdfb60d933ca776652b69afc1897588"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f2f52de9b43f8fbb3803035022e69d59"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "77778fc1b2180d6d20cb3bc25c231344"
  },
  {
    "url": "tags/python/index.html",
    "revision": "5161c8a17356295c73f8c87178fec51f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "128a3a1dc76b8f93d5decc366ca4e944"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "71a0e9099f4d956f72cd43f1861ced8b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "02b92a67dc2318d697c0dc45837a26dc"
  },
  {
    "url": "tags/web/index.html",
    "revision": "9531b07b2d59f6a8d65e71f42b3b0b1e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2b5040e3885e55a403470def67bd55ab"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "fd9c603ad808868016344959e69c06db"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "28951792d29b125d88159d467fd4f5e0"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "81b8c12fbbcf7f78f7e53ecc1fef04c5"
  },
  {
    "url": "timeline/index.html",
    "revision": "99767d2ce32d23352d34fd2dee720030"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "eb72752868d537be82ad2cdcd8101323"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1f0f4203611be1bac3e18ec3e47fe77e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "ce2d1842795d6c33d20208f997230feb"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f54090a06c87f316b57330a610740f3e"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "4317090e83de9ec89540f1e266aee645"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "f2d15c90e32164cbc1a6541216fab8c4"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "bb39e179f99ed54558c7aa458104bd50"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "6597f609a50c05d3ffe9e90e661b031e"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "ffb1cc514034d7571ae1179f4d471d6d"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "3b22cef114b0a1bd36d4620a4b18cab1"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "323f48bbcb438e399edd56384fe20937"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "3bc8a5cd9e7419abd0faf03a4f4d5d01"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "d08afa02fb5afa5714032026bb6b1fed"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4e000c71ac91a6b71e0751ffa1cb4fc4"
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
