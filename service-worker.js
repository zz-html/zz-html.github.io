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
    "revision": "7ce13806722ea9553d14e7831a130125"
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
    "url": "assets/js/10.ac013b81.js",
    "revision": "c4e9b6e0ebba4202b7c03692c9f1a863"
  },
  {
    "url": "assets/js/11.a3389783.js",
    "revision": "26d7829c57bc330969601bd0abb7be85"
  },
  {
    "url": "assets/js/12.fef5bfea.js",
    "revision": "d423c75ba046b4df8128a002b9f917f7"
  },
  {
    "url": "assets/js/13.ee825438.js",
    "revision": "3e3a51f5f11278f3ac85045d4bd648fa"
  },
  {
    "url": "assets/js/14.f2540291.js",
    "revision": "b4b7e5abb87c2a766a079a6509f4fa70"
  },
  {
    "url": "assets/js/15.c90a8d05.js",
    "revision": "bcd431dacfe532162184621cf67548e1"
  },
  {
    "url": "assets/js/16.a0f66fc8.js",
    "revision": "6009cbabf8be86bbc6687e37af4e1f26"
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
    "url": "assets/js/21.08da026d.js",
    "revision": "f3a7eb6f0bf633f9e4bf0b612cc5484a"
  },
  {
    "url": "assets/js/22.efadb99b.js",
    "revision": "fd13bf6d9fe59453fb3502d1c4d2c358"
  },
  {
    "url": "assets/js/23.ac88845d.js",
    "revision": "0a8cfe3cadccedf6b2976d18be776ebb"
  },
  {
    "url": "assets/js/24.fbf07fed.js",
    "revision": "3a86747ddb5c87b14fd369bd18393a5a"
  },
  {
    "url": "assets/js/25.28913681.js",
    "revision": "57457a06d61719a186d41b3a57987ef3"
  },
  {
    "url": "assets/js/26.9ea2cd2c.js",
    "revision": "4bce2a146f0821c973c42ab6e34416b3"
  },
  {
    "url": "assets/js/27.1d5c1cfe.js",
    "revision": "574ebb9144955f6f90061e9c69d1f5a9"
  },
  {
    "url": "assets/js/28.acf35971.js",
    "revision": "22ac5131ef880adceb3481a15bb01c71"
  },
  {
    "url": "assets/js/29.dedcc405.js",
    "revision": "7a5df3fa668e301e9f1b6fc9db3dc555"
  },
  {
    "url": "assets/js/30.14a48a71.js",
    "revision": "6c20c283c038e8b04bae30ebb223dd3f"
  },
  {
    "url": "assets/js/31.362879aa.js",
    "revision": "c7d0ede5092749fdb6cf4c6a35300d97"
  },
  {
    "url": "assets/js/32.1fb795df.js",
    "revision": "73ac92fc4ccb195e53afa30b27353096"
  },
  {
    "url": "assets/js/33.e4498336.js",
    "revision": "00718d23341c8129f484c2bee781805c"
  },
  {
    "url": "assets/js/34.dcfab778.js",
    "revision": "c7f5c295cc3e80788e98e190681c0563"
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
    "url": "assets/js/app.5a9922ae.js",
    "revision": "70f9c6aa1e56891779ae93090ad80a78"
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
    "revision": "04ddf2deb1fee70a1f9e1ab8ffdb50b7"
  },
  {
    "url": "categories/index.html",
    "revision": "a73ba0ebed70e3c48823c38f2775b2e3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "62a513073e41988af12e702a12e5a77a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8e9b25f651be472229172f32bc688776"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a8ee86d985a62ad72dd15f2eef2b69fb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4d40a640b45e458b9d55f89197833de2"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "ff8c26c62cc43cd8b2d4e01b6c27e135"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1be68911314f201b429acf3091772c05"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a7a8e0ef3f1c0dc4863659613755e0ff"
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
    "revision": "2900b67c77a9be99a78f7c5bc102978c"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "649f67c4de571069864f205114c61218"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "c1950defc799a0a9ccd4d1dd429225dc"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "20cabeae87471b08f122dcd131bca54a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0f9f62f92ccff1f254a56386f4a48c06"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c921de90de1b8b3da7d97280d732d413"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "c727272f6241fab11db807e04501fb19"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "d79ce1568c4d8af204722343a683de8e"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "98ba1d35c67991b35a3eeaaacf686b08"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "dabd750e0bdcc2ca46941ada582bebb5"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "309ba39365ed3bce9164df354278b6ca"
  },
  {
    "url": "tags/python/index.html",
    "revision": "578c00a9a65be1c1e6f5631e688eb6d0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "01110c61ca1f080da692a9fadc033fbd"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4df459ab49c841e8cd435dc62759e963"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "cc61a169d4e25a1870b7a6e7d19942a8"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "cca69789053f4c05f2b0af687cad3a6e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e4904904c1ba75c489745f61ca1ba51e"
  },
  {
    "url": "tags/web/index.html",
    "revision": "3ec025276a87a2b57b3158d7da980596"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "c2e0315afb86c36b6c6973d1219e2ac2"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b79ee839e3c2c9fe809ac95ab6d181be"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "485cd6adf96d7fb9e08a58bbcec4811f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f2ddae3453459349aa5f84e0fe03ae91"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1512fd9e0f3d3e6dab9b3b9527bda2bb"
  },
  {
    "url": "timeline/index.html",
    "revision": "0ac2280c9baffce8afdbf1790ac1ea71"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "710be05c31eb12769b956094f83ae9be"
  },
  {
    "url": "技术文章/index.html",
    "revision": "389f63946098b2acde23b7d66047a18a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bbe0f822eb307b9f5c839cfd483f4751"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "3b454340590e84bcf3bc642737813758"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "7027e1c718b9532845bfa0f87cd1231f"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "4676f26b3ecce9c6901f8ab2bc743793"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "27c4ec9c6db0fced2acc63973c1f337f"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "feab5ed631baab3cf89f96db99e85c58"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "8bbd746a0d551231d483efee79e62bae"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "9687370ef651ae8588eb4db6f4af2e1f"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "0e25499dd63f5b8fff9b7316be8970a6"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "8ca8bfd3a7f89be08b873c8b23d89dc9"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5790c9cac6f8a38ae09c5067f192f8f4"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "1c8bdd280a75e59f23fbeb71aee5b1af"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "917ded6e5864bd2dccb4bb294876ce50"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "2e403ce81d313af1df2b059f095c3387"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "aac97e97e5f37adbd4086582c9955c60"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "1edd6759a8d0eb98ac21e60017e3640d"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "99ef3773e244529973aa343636382817"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "4ae048c8335ce62c2c13e41eaeaf8fe2"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2f88ece2a2dfd510d043f6b8f9fe9b57"
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
