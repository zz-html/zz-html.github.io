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
    "revision": "dd457c5794dd3b87da37de1ff7f0aef5"
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
    "url": "assets/js/11.32ecc242.js",
    "revision": "6b3451d66526bae83eee92447d3d1fde"
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
    "url": "assets/js/15.c90a8d05.js",
    "revision": "bcd431dacfe532162184621cf67548e1"
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
    "url": "assets/js/21.94d16d22.js",
    "revision": "4512fd57e12b77da4a74a0273c9a11ff"
  },
  {
    "url": "assets/js/22.efadb99b.js",
    "revision": "fd13bf6d9fe59453fb3502d1c4d2c358"
  },
  {
    "url": "assets/js/23.64310b01.js",
    "revision": "8495f95557482070a5e9d2963816d126"
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
    "url": "assets/js/32.aaba7d2b.js",
    "revision": "b05fa515ebf84af686a4c6d4a316e4f1"
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
    "url": "assets/js/app.6e4864f4.js",
    "revision": "501cdfb74576b814c2df175472e49f31"
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
    "revision": "86b0491d6b0162693c009d3cbdb3ff4d"
  },
  {
    "url": "categories/index.html",
    "revision": "80dc858c9cdbcd1e55d0829a00a19a74"
  },
  {
    "url": "categories/java/index.html",
    "revision": "65fc9b130ad7c3c31808ca867d341d33"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8321175832c067d00e819c5b9433bb9d"
  },
  {
    "url": "categories/python/index.html",
    "revision": "1bc46558c6d89832a191808c7a342e33"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "846915b2ec38e8846dc6a17942660102"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "b0de1ce20895ca1adf82fb092184b244"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "edf50b1edb70502146c8ba95a245a0ee"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e93de3f310fea0bdfd17481befae0546"
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
    "revision": "144bb1911bb177e28dfad3d2155faaa9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "9650c01efcda099952c9094705ab367a"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "bddd0c2cfa0a152ea65aeec640686078"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "e6f346a7dd5bc712acfc8b2bd7ef617a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ae08c915595c556b436718284fa40e66"
  },
  {
    "url": "tags/js/index.html",
    "revision": "462cd0538a1cfb20b762b1fe60ec430d"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "0547d2d00895414632fc1618bf1cf4b6"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "0273f53ea0e4e312db94f9df4ac8ac5c"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "3a5ce1319b07370d985b68fdee4fcae1"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "094c2afaff98d4d26d2e6bc3104b5f51"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "6619570784b7b6333cc6ee2a0041fc20"
  },
  {
    "url": "tags/python/index.html",
    "revision": "aacf4dc65acc8f81a49365733ec2012f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b6070325a62a96858c52a29a80870f61"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5be8e607e7fbcd6c7143d1af572a5296"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "fcdc7c58d4459e4f928b4c5f1a9dc053"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "3545a9424a5f15c8dedad26bfb186483"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "02984c16c2d57e7375cf278f99728945"
  },
  {
    "url": "tags/web/index.html",
    "revision": "34a7d60258b09da76978213e696e109b"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "d043eefbabc82c9b01c5ab8007eee1e8"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "67522b8c55ab17c299eedd1437938023"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "728bb1290a09997b1282ffdd77d9fa9a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "9ff702e315cacc82b7b2563eb30637de"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8f062a24d32ec220ff5e3e5607d668f2"
  },
  {
    "url": "timeline/index.html",
    "revision": "b9f3d74f245b498188b2966b8147645a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "73c3fb1b2eab7cc83fabbb775c9f38f5"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1bab89bc35547f1d9341b44e9dba0539"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "357fb35a86a5ac171aac66d4ab351fe4"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b3063a66df9ea0a53d5c47449b26dbee"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "bf1852e5e0d447815d5c93c08f7db5c3"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "e8b989540946df737dae8c67b433bbe3"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "6b94fc0edb41962e3971cd307cd6a22d"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "89042b35d12f90d968ffff89ee231405"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "29de6f82b0c7a8bc13fa798a38d420eb"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "67981f58ac8426d4cf55b5ef54616cb0"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "4bd63b14590210f77e2fe44039989413"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "e1ec0b76b62cb7a0647016f8f6b67213"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "709ad0661c7d1d11a03c762dd01b9db8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0a585d5f372ae6e2da4e09b352f14d66"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "1f389db7703cd97ffac862bf1e14f793"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "56a26a7ac196745d9f979356be62cdd2"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "a4a8f4fb41acfb86ae5b94a84a4c5388"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "aa63ff5729d0ab9c37d2d8ff6f21e950"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "d13c470821221753b31f3c0938670ce8"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "07847adcd3f725491f465d368990ca8d"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "a5e0bd0986dd879db77c29916517b89b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3609e122c8b8fef5c20ff69543896b59"
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
