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
    "revision": "ec8bb3a23877359844b6f568bbe849cb"
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
    "url": "assets/js/15.c90a8d05.js",
    "revision": "bcd431dacfe532162184621cf67548e1"
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
    "url": "assets/js/18.e2ca3261.js",
    "revision": "d891b0f714fe798d1fdb3bc54f41f03c"
  },
  {
    "url": "assets/js/19.13b99f4e.js",
    "revision": "6c7aa3c9a2923063bb7fc1e5e52888b4"
  },
  {
    "url": "assets/js/20.bc52edb2.js",
    "revision": "0cf4e7eb74ed4275aec67cb6b1500ee4"
  },
  {
    "url": "assets/js/21.08da026d.js",
    "revision": "f3a7eb6f0bf633f9e4bf0b612cc5484a"
  },
  {
    "url": "assets/js/22.3763c7e2.js",
    "revision": "322e6a49a20bf18868172fd98cd9325f"
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
    "url": "assets/js/app.1db733bd.js",
    "revision": "0474377a0cbd2df20ce1b3a34695b938"
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
    "revision": "ed640f05c5fcbdf6892bbe77c2b856b3"
  },
  {
    "url": "categories/index.html",
    "revision": "52584cf3b43c03e28c04cb75fad77286"
  },
  {
    "url": "categories/java/index.html",
    "revision": "37ccf8614867c901129e0a221d29be09"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bb73f0feca1c71d6cb2c9159fd1bed8e"
  },
  {
    "url": "categories/python/index.html",
    "revision": "6a5e25f65495b70bc84fb976ac5ddd15"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bc72aa6dd78a25d22cf4fd5a0838baba"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "d2d4311d8df4ff63d4f21dd49998ec95"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "db1fc39af65b42994bebfc66da5f131a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "0509ed2ccce9d947b14ea22a3c1b53da"
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
    "revision": "b3db5524fb1e94568e76ed55292ff6c9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8b032fc14036ce7bf50ceecfc0858a2d"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "51a7dacd9a5790dbf9589a9faa3e82fd"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "6b37855dfdfe020180d91bc50755ea2b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0a61210410ac57dd4a129b175ce472af"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9e6d289c171edbdf3601ae925690fbb5"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "dac7d25013febb2fbaeb48b2782826f9"
  },
  {
    "url": "tags/python/index.html",
    "revision": "15d00004fe4fdda26967b44e5441313d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "4e4b4d85abf78069c03d9509659b6b0a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b20d0d1fd3a4c02e90708167798f1942"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6b43f7749af0acd28cd30adcc7bc2da2"
  },
  {
    "url": "tags/web/index.html",
    "revision": "3c3e1633ea705c594bbb621ca2aac342"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "0b8a940b80842e5113453c51b111685c"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d69ef7058c77abb50bebb8dd2d57a293"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0bd8ad46b94a11b0b279bcc68adc81c7"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "3492d9f5aa26d6a2d29ce01eb9e91ced"
  },
  {
    "url": "timeline/index.html",
    "revision": "a130f79eecdd5922bf691d45fa56217e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "26dc2091d7db565f5cb307339b5f5f0b"
  },
  {
    "url": "技术文章/index.html",
    "revision": "0bfe0187aaf3caa62f1fbcbc1445ca86"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "35c01a508440a2d9f74b151e12efa451"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "bcd748e0b1485b4a503a65f934489266"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "e9d2aca40d7a84afebdf1c1370ef2fac"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "1f70b9a695e281d0134bb01eca4342b0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f205a751e1b4241934eded72d9bd0c7f"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "ee2e3caf3a9ed0606195d1cd6b7dd5be"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "08e9f315d937c785340b78576427b3ec"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "d6e6f1c0ab10b03a7dbe048b423b7bbd"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "3262e10ecdfe7e3ff2d6365601c5bb83"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "ca852d4f8da995e2f674487ed087cdc1"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "ff29e894ace58a2bdcd973e3324a406e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d2c020040814cb07eb85aad4a7f9c8b0"
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
