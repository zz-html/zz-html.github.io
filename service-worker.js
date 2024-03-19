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
    "revision": "1acfcb7bdc5b8bd21b4e324d5dbe7938"
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
    "url": "assets/js/10.c4caaba7.js",
    "revision": "748eef359822ea834d50fc061feb8078"
  },
  {
    "url": "assets/js/11.26bf6a85.js",
    "revision": "a88d6b0dc41f1cb543251a749bcc869e"
  },
  {
    "url": "assets/js/12.1a1cabf7.js",
    "revision": "2d7f46493199521549ef229501e49559"
  },
  {
    "url": "assets/js/13.ee825438.js",
    "revision": "3e3a51f5f11278f3ac85045d4bd648fa"
  },
  {
    "url": "assets/js/14.a7909dd7.js",
    "revision": "85c3c06194a0aaaf720b3d6015e18e40"
  },
  {
    "url": "assets/js/15.976bafd4.js",
    "revision": "49ee61d4b38e79ed134c92f8d8c7e23d"
  },
  {
    "url": "assets/js/16.9ea0b10a.js",
    "revision": "45c246962f81a8dca237689c332e566b"
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
    "url": "assets/js/21.790212a8.js",
    "revision": "ed4f6c955a2f1fdbfafbc25315717dbc"
  },
  {
    "url": "assets/js/22.3763c7e2.js",
    "revision": "322e6a49a20bf18868172fd98cd9325f"
  },
  {
    "url": "assets/js/23.e96be25f.js",
    "revision": "64a0ab16dcfda73f3df38a8b422de16f"
  },
  {
    "url": "assets/js/24.1caaec66.js",
    "revision": "ec36aec583fe77e2b35319d146bd95b8"
  },
  {
    "url": "assets/js/25.b99f72d7.js",
    "revision": "3b148749c366bfbe3f55889aa088fa30"
  },
  {
    "url": "assets/js/26.9a1afed4.js",
    "revision": "d817b7ec4eb215e0bcfcffb9059832d3"
  },
  {
    "url": "assets/js/27.8c352751.js",
    "revision": "669dedc616a6edaa3aeb3e2042df2f60"
  },
  {
    "url": "assets/js/28.1b104ea0.js",
    "revision": "27474b1223ebfd444a8a8e85124c7d0f"
  },
  {
    "url": "assets/js/29.fd4172b9.js",
    "revision": "5c4c82b20ba4aa1ba8f430721ccf515c"
  },
  {
    "url": "assets/js/30.fb66d324.js",
    "revision": "aaac5c4dbd9d1deb18c664d1faea2060"
  },
  {
    "url": "assets/js/31.57c47001.js",
    "revision": "7b558ecae6c4ed6a6635d478b1201a7f"
  },
  {
    "url": "assets/js/32.60f57145.js",
    "revision": "0465299a4db0bc0d1b848244a5e7b02f"
  },
  {
    "url": "assets/js/33.fe5584c3.js",
    "revision": "a2d1a6016b23f80910b665532323e7ee"
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
    "url": "assets/js/app.06b79a6f.js",
    "revision": "3369de16fc39c32615287a43313548cd"
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
    "revision": "1d04cb0e673dcc5f81f8fecab5ba998c"
  },
  {
    "url": "categories/index.html",
    "revision": "7859cc5de1d5320bd17cb738cc9f668a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "fc5439c41f7bb3b47d8883fa9d152fe9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "14dec829bcb85fb7a4416632dc90599a"
  },
  {
    "url": "categories/python/index.html",
    "revision": "39d3483e51708c4724b96b438d427015"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "52b7dc71184be788955ad53b0f9244cb"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "7248bf024ceb65cfee46a607f5f8e326"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "87d5e843ae4c5039c0da709e05b890f0"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "060fe33958b5fed429c5e5a9744e2d13"
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
    "revision": "ee9b2f5393fe00f4b0a5e287807f3e24"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d60c294abe8f016a3f7145364d17371d"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "abdb90712986e54db38f3781e9004ae0"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "19e1b9ccc2cca5f0721dcd5d31dd0141"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0dbbf15b7ba033f0f8ef75464d9b9f2e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "972af000b6097b0b4fe1c1b976eee90e"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "d27592b8773f581d8d552c4e73b25588"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "fb1af9f856e034766f589f9cce752dff"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "6b794dc134788aee6390d46df3b5829e"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "7866a9d51e8e40ca74e66d2673b7770b"
  },
  {
    "url": "tags/python/index.html",
    "revision": "859ae185a85f4fe122e8cf09eb6a48fc"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3581b362d809500e54fd3e668f86ab89"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "685c91943032039df1acd66628a0ee09"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "beb479f100d02cb1d8b8ce4c6318722a"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "e2307be22962f6b0da74f870b27e7d66"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "efad11f84698c35fcfc8120ed503d1a1"
  },
  {
    "url": "tags/web/index.html",
    "revision": "3ad639a39b38ad8e5b3a9c424c430914"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "ea578696d1783bd025061d238de309bb"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d4877216f86bc49d84a611c01c02f144"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d913bbfd55ffdf6ec94d11bda0fed253"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5d03532391407bb32ef89028db059292"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1f8920c2d9821e9d6986abfaf3a54670"
  },
  {
    "url": "timeline/index.html",
    "revision": "b9c05bc3557923bbc65cac584cebecbf"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "7d56c92ac2811794c686e72cf0745e4e"
  },
  {
    "url": "技术文章/index.html",
    "revision": "61125a222bc0250efa6569f882eef627"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0eb64a9b4d980e1d1ef17d47602b8b52"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d5ad5dc7a6dda4d5b618ef9e9268412a"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "4189e647afd4a7ea0cb0b4a3a3502cd1"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "4582b1b24eac112715d8f6f566e59955"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "e0f35d4e45f6eea4979a10fa083458cb"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "b4e02f0a4f17bbf7b2fb78e427e749d4"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "8a4312782b01ef83226e049b0f8abff8"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "9c4be16462cc15678e8e3b3818aeb9d9"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "b54d6ec116adbbb8013a7e8838529cd0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "037b7d6196838de829db96e7f4f5008b"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "50f819971be5fb64ece05748e3cedd49"
  },
  {
    "url": "技术文章/流媒体/FFmpeg.html",
    "revision": "2db70c8c53c9748af67a442da43f4115"
  },
  {
    "url": "技术文章/流媒体/OpenCV.html",
    "revision": "3451929a9599962eb3ac0d0fa5c41a4c"
  },
  {
    "url": "技术文章/流媒体/OpenGL.html",
    "revision": "58f11cd0c182dd04566c3a663f1dc7e5"
  },
  {
    "url": "技术文章/流媒体/SDL.html",
    "revision": "cd453f1e7e3315c5aa88089593ec73f0"
  },
  {
    "url": "技术文章/流媒体/Webrtc.html",
    "revision": "bfd4d045bc7c84833fdaef87ac656598"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "1da3a7c833bb7f0c97e9a577d5958424"
  },
  {
    "url": "生活分享/life.html",
    "revision": "35a040f89db3b54079eaf7d7c1173557"
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
