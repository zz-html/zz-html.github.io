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
    "revision": "eb06a5364372a88087ce90a38b23656b"
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
    "url": "assets/js/10.0eb3aa84.js",
    "revision": "187553ee6c02fbc259f1e16b9bda5586"
  },
  {
    "url": "assets/js/11.038a598a.js",
    "revision": "9fec22fc92e712be4ac527dc4bb926c6"
  },
  {
    "url": "assets/js/12.64105df1.js",
    "revision": "616614e7aa0c026cd130c2adde1b7ee4"
  },
  {
    "url": "assets/js/13.5452c253.js",
    "revision": "25dc61389e32bc885521a098807bba4c"
  },
  {
    "url": "assets/js/14.4f3984f5.js",
    "revision": "3cab2110d98e62bc5e3b5649215d9384"
  },
  {
    "url": "assets/js/15.c90a8d05.js",
    "revision": "bcd431dacfe532162184621cf67548e1"
  },
  {
    "url": "assets/js/16.e7106bfc.js",
    "revision": "67a98ec8c1aae6d0caf841298ae5f1b3"
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
    "url": "assets/js/22.8d4391e7.js",
    "revision": "ddceb5777f641f2df664a7ad6e4e7926"
  },
  {
    "url": "assets/js/23.a1fb4449.js",
    "revision": "8a8274c97d291c0abdac659a19a40738"
  },
  {
    "url": "assets/js/24.f9bb9d91.js",
    "revision": "9ff9cccf5a963c7b2e46159edea10c45"
  },
  {
    "url": "assets/js/25.0583bf94.js",
    "revision": "ce3a72960c0183a20fce97730de53b7e"
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
    "url": "assets/js/app.62d95d0b.js",
    "revision": "404572e41d6d5541ccaa2851b99f36ba"
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
    "revision": "d6a19f923cc9184c1f53c9212d58db29"
  },
  {
    "url": "categories/index.html",
    "revision": "f6b9c421e2385997b6164e9395ef480e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "de1c32153d6ed5ef3ded1928a47b2c3a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0da34b5dc896a9c080929f3b80b39d17"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4788da9f6cc5b9c8cb667ee3d98d2ec9"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "97434c5c337411ba976071fe7632a92b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "24a105f1cb2c35539f030c12305d3ba9"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "8968e31849bb4c6bb73518049028b814"
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
    "revision": "2d7e0a59211187878726a36094e7ba83"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b00059922f00c2bf2a40130d9ddb7fd0"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "f7e6c7f9de0a29813da9ac1c5df42c2f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "fed9ae2b835fc2f222cf5979ab95d1d0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3ec96ddaca9bcd1a326a04504766c7d5"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c805c6e9bc50bf954191c0707a51bb9b"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "397e8f105c763658e195631e5a347c73"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "95531c731c52a305c36835bea885056a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "cdec1c0204911d33b316658a0a563f9a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c136a55a1ced497dea1ea2051b53df5d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "07a3151e93793f8d134b65c54573a760"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c22733a340b0673ce7f7a746ec02e032"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e6b41f13a5f524cf0a006513ed02d563"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "fde66996591b5ad7c840f8b7fac6c615"
  },
  {
    "url": "timeline/index.html",
    "revision": "5b9c405b0b64083280984f61be51a0a0"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "b5152b08dfcfed9da66882fe9a6469d9"
  },
  {
    "url": "技术文章/index.html",
    "revision": "6ad24c43a6bbdf4db45d6e7c8cc73e0d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "3b996a7642976acedb50a883ac4ebd70"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "8ad4fad9ef33dd23be4115405729ea06"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "bb22c7a561158879a8b6ba0018e90ca3"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "d0417485bd826537399b8e1354658f14"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "224efe65ec33092b191368b1e6333cc2"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "36e6f760cc57c3d545a0c43a389b26cb"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "158cef7198fbdf9eaa3b9cf0daa403f5"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "2e04fd6f3f3c81b2be19c6c15a02d0d1"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "418db0279a79f9d0a1fb931ad680289a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b23317105e87ea9572aaba4b1beb5447"
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
