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
    "revision": "2e4269dcb95f168f8dbabb4aa8065d74"
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
    "url": "assets/js/10.d1cf90f3.js",
    "revision": "eef51ccf7ab27a771eff56b393f20be8"
  },
  {
    "url": "assets/js/11.e94818f6.js",
    "revision": "7fb20b11ac3ac2b9598a579fe0992438"
  },
  {
    "url": "assets/js/12.460ca013.js",
    "revision": "8f77c4eff9a3e46b3d12f2e21f2b7f9f"
  },
  {
    "url": "assets/js/13.5452c253.js",
    "revision": "25dc61389e32bc885521a098807bba4c"
  },
  {
    "url": "assets/js/14.232d5d10.js",
    "revision": "a1dff52c02261dda91b18756d1502e67"
  },
  {
    "url": "assets/js/15.9c192660.js",
    "revision": "7ec8bc48894a35b9679d8fd6e9413003"
  },
  {
    "url": "assets/js/16.a74d22e5.js",
    "revision": "6f3614686c467c0ed2076c64d3240098"
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
    "url": "assets/js/19.3e37c612.js",
    "revision": "ec3cd6e8b2b8341d66db064e880a2137"
  },
  {
    "url": "assets/js/20.1716077b.js",
    "revision": "1dc113ec99ec4a3bdd41a98a8b9c9ff8"
  },
  {
    "url": "assets/js/21.55c6e433.js",
    "revision": "a83bacfe8adb10ca9cec37bb61a71165"
  },
  {
    "url": "assets/js/22.70992553.js",
    "revision": "958e69c64b346dcb189a1bf0eb64e6c5"
  },
  {
    "url": "assets/js/23.216d56f4.js",
    "revision": "222dfe9f6954fd2c375f4969473f0226"
  },
  {
    "url": "assets/js/24.293f2eba.js",
    "revision": "fe66e083213ea05750a09709a71ecd23"
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
    "url": "assets/js/app.637dc973.js",
    "revision": "7d578ce0eb33ca41e4523088ac2d0293"
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
    "url": "categories/index.html",
    "revision": "811cc2c94a46f19e1d99a1c6f09da60f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "fa802e3eaa554ffd24bb9af816252c43"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "26c10db97c646d115e0af05e9239fc09"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "96c631a9f7726147fd94e1ce36bf814d"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "b098fcd79c877ed55cbc334d30c986cf"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "255b24763aacf5f3d356517aec01cde6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "722b859c44a491d1d459be69ad3e1dc6"
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
    "revision": "fd1da308afcce39482698aee3dd3d140"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "1180ead19cc1d460982c0d20fba75f72"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ee305e3e37976db9764a7974720ded36"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "531673504de8ed1320cd18957b45d7a7"
  },
  {
    "url": "tags/js/index.html",
    "revision": "072c313992241aa8e09a041417b5692f"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "141a5b5de44cccd3c3840737484d2c97"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2d9d0d9ac689e4811c9df33fb65692ec"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "29d2aae94e4550b96d2813c862eabcaf"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f85cecd7cce2f4fad889aafa93ba651e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d5f708037e5bcdfcef27dad3c804e4cd"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a4edf0d3b3acdd7fdeb719f6a26ae369"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "33bd171e5832a99b851cfc1d9bfd7e43"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "3ecd895c212471ec082099fb47eaa282"
  },
  {
    "url": "timeline/index.html",
    "revision": "c749e287d59b4b126d6d7f6472f4126e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "29ef7c9b9c5fa6ad82abeb7b65de20b8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "ec85ecbf9feed5769ea44e15938e1894"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "682c609d662d1b763c5bd3f4ef7c6345"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d21d11f53bdbc6f48181fb610e48c221"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "aaef46dc7b9e613cfb712070614ed6eb"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "278b605f1452cbf332df32f046e2c3a1"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "0dbbbc508ef8bc1f6f0b612133afd89b"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "128f4b450f6d560631b295e737dd03c7"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "ecf75ba9d8d97b9898da3b3193fb942b"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "b7032ee556ea288760c582fbb1468f6e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "beb80f72acbe189c744a36c0df9510d0"
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
