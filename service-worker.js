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
    "revision": "fadb282b769b595e95dfef918416d64c"
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
    "url": "assets/img/attack.d9086075.png",
    "revision": "d9086075faeb51af83dc12d2ccb9474b"
  },
  {
    "url": "assets/img/ce.c7a66254.png",
    "revision": "c7a66254963c7b390734dd61a6e904f5"
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
    "url": "assets/img/dll.d42b3810.png",
    "revision": "d42b38106cb8f5b026ca48fd190815fd"
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
    "url": "assets/img/native.0d75c93c.png",
    "revision": "0d75c93c2acd4c553bae9ad56a058314"
  },
  {
    "url": "assets/img/od.eaea06c2.png",
    "revision": "eaea06c24ee5c8035baa4f153772f913"
  },
  {
    "url": "assets/img/od2.a1b64f20.png",
    "revision": "a1b64f202ea1317b651b0ccc6a02ee25"
  },
  {
    "url": "assets/img/od3.02db5279.png",
    "revision": "02db5279f933b79ac492ee77d69dcc98"
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
    "url": "assets/js/10.720866b0.js",
    "revision": "0e16d9bbc7ea4e48e6411d583fe45da8"
  },
  {
    "url": "assets/js/11.6190c1c6.js",
    "revision": "a6ed1f0497fb7f0070e9a81cb3a5b52b"
  },
  {
    "url": "assets/js/12.54b565fb.js",
    "revision": "b4f2c1a5612b024ed2801950c4de1f03"
  },
  {
    "url": "assets/js/13.8f534985.js",
    "revision": "2e24d1e99da06573deb209f9aecf4d02"
  },
  {
    "url": "assets/js/14.45f116dd.js",
    "revision": "da827ad22d7101322652c27899a533ad"
  },
  {
    "url": "assets/js/15.599e05c5.js",
    "revision": "1aa18e7c627fc0dcd5fb635a60aa426f"
  },
  {
    "url": "assets/js/16.6e3e4a1d.js",
    "revision": "e5de29bd62569b99a8a202ece8d73922"
  },
  {
    "url": "assets/js/17.cd2e4a04.js",
    "revision": "8c40977a2c0c0ed87093c434496d607e"
  },
  {
    "url": "assets/js/18.cfaaa4c2.js",
    "revision": "bbc8f6c636932ddae754dfb2f5765513"
  },
  {
    "url": "assets/js/19.177b2866.js",
    "revision": "7e4ea10d15aa68bd4c3071e316334793"
  },
  {
    "url": "assets/js/20.5b9e74c8.js",
    "revision": "82ac8367de81875659791bcbb59edb02"
  },
  {
    "url": "assets/js/21.aaabf85a.js",
    "revision": "9041595682161da08321fb3d798cfc77"
  },
  {
    "url": "assets/js/22.f85afefb.js",
    "revision": "40ba7f0c5f56387e327c5ab28cb8678c"
  },
  {
    "url": "assets/js/23.3b56e148.js",
    "revision": "f5e000a7ad1b4639d524b2f8a8eb32ab"
  },
  {
    "url": "assets/js/24.b4cb7907.js",
    "revision": "02d0ad870dbff2c65aae3787b79df20b"
  },
  {
    "url": "assets/js/25.853cce0d.js",
    "revision": "b6b487e28f0de1c4062d9a9c669c08d1"
  },
  {
    "url": "assets/js/26.781c1b31.js",
    "revision": "3bb1164bf7a2076669f501bd9d6dbb84"
  },
  {
    "url": "assets/js/27.792eff25.js",
    "revision": "339a069cf2c2281adf63f85630ec22d1"
  },
  {
    "url": "assets/js/28.4f396649.js",
    "revision": "e70225c194e252fb7db1c0f7216e21b1"
  },
  {
    "url": "assets/js/29.8d899d9e.js",
    "revision": "cbe5ea963506640eb251babba52dbc43"
  },
  {
    "url": "assets/js/30.d15dfc90.js",
    "revision": "e7f47610a43a80a10de103e1c9f1e1b4"
  },
  {
    "url": "assets/js/31.57ef0b5c.js",
    "revision": "ffa6fe8b9f1ccde10dc5baeca7d6311d"
  },
  {
    "url": "assets/js/32.b165eeee.js",
    "revision": "b03d7a5771f4cd0469664ec8a5f4b84e"
  },
  {
    "url": "assets/js/33.be072307.js",
    "revision": "296ee42fb40a6ffc89388eb10a914835"
  },
  {
    "url": "assets/js/34.172800ae.js",
    "revision": "c147584583d9281b6345cd8b2c3c1516"
  },
  {
    "url": "assets/js/35.379a181e.js",
    "revision": "5591bbc65e512d81738ac79c23f5aa39"
  },
  {
    "url": "assets/js/36.dda26165.js",
    "revision": "826cf9e9b968d9ab7cbaff2d600cd6c8"
  },
  {
    "url": "assets/js/37.402c6ebe.js",
    "revision": "364f491e059406688663214e74d64859"
  },
  {
    "url": "assets/js/38.6b4dc8f5.js",
    "revision": "f7a68eeeb1a27badd64be730b2315908"
  },
  {
    "url": "assets/js/39.6dcf0a04.js",
    "revision": "3f0ec53291a73ceb0457b0178284f45a"
  },
  {
    "url": "assets/js/4.35e120c2.js",
    "revision": "2550a338d4808f1cca5aea31a3c737b9"
  },
  {
    "url": "assets/js/40.6da87276.js",
    "revision": "6babe7b6af655380531ddf216438dc21"
  },
  {
    "url": "assets/js/5.bb1ff54a.js",
    "revision": "1be84d9922bc613f5449543d20e35ff5"
  },
  {
    "url": "assets/js/6.080f636a.js",
    "revision": "dad9cd74a660563009786bf3170b05f8"
  },
  {
    "url": "assets/js/7.9426755c.js",
    "revision": "a7c82dbb73df36714a05a55db0a7fda4"
  },
  {
    "url": "assets/js/8.88b80d70.js",
    "revision": "766b6150a9d5a9adb5b918e88e2e6304"
  },
  {
    "url": "assets/js/9.a6fc8324.js",
    "revision": "9c1b87edbbd8e3fa9269e2fed02e99cc"
  },
  {
    "url": "assets/js/app.0b9d680d.js",
    "revision": "5518f9a880bb3b95015659dfbe2a6328"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f9bdf3c9.js",
    "revision": "af899f86d254f3adb2d3ade66c8037fd"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "19315fd045bb74e67c5a916f005b77fd"
  },
  {
    "url": "categories/C/index.html",
    "revision": "d6887f5ae63ced3409a190f308f49da2"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "608710a3fff7284869261e92647b9b7c"
  },
  {
    "url": "categories/index.html",
    "revision": "3b65017f02b3e7c813cc860ecd3a9e7d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "814d77e98e78c8d66ed59c181d6cf973"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "30ce12e74103ef1a072aeeac67418aba"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "3ebf461fc4d176ad3f85dee33bddba7a"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "503c13a86ecfeb1a1ca5acb14fb96769"
  },
  {
    "url": "categories/python/index.html",
    "revision": "c76ae8c4eb29e68362ff3b40b4a70c3b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5c06a91d884250e10f9b21ddc08a6f5e"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "5e3ead20c6b96740b40351c83a30fe71"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "4671774f581a4a5c2b5c03119028124b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "76a2a6c498b38e3f973e0936e69a78fe"
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
    "revision": "7c59f2c0373f5427ef360909d1b76c08"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a981853fb5eaca2c78724a0c47a7d15d"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "761c6ec677a7b16dd0717f97f7cc66c7"
  },
  {
    "url": "tags/C/index.html",
    "revision": "cfb6fe026f2826216084799387fb420a"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "3f3d49465c7d07541ab8b13fc2bb0741"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ddb790a7d23f07ce3e85800c75ab174c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "dcf8f2c4be1ea0f269daf89c9fdfc00d"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "5dbd73dbc32fd525747d6be5cdfae9b2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7265750436b87e8f043cc8346406511f"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "af5d3c166fbdec11314885b8b1787b3f"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "c63e2fe7242973df2535d7db3b7a40be"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "3ecd2c3c30ba3e3002407a6d82a1a077"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "f8a7386d924431d580b0f9f27c954558"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "9e6fa63877ef32e6bb6edc5fcf118558"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "52cb5efe106f981449e7748fb2cfd729"
  },
  {
    "url": "tags/python/index.html",
    "revision": "b2f34c41e98d96109a5adbbcd2b2665b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "565d4f57e497597304eaf10bd0dbbe1b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "fa114f725d441163f1dcb7404fad278b"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "4ecc276e6c3c45daa3df96aa1c2bc6c8"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "069439da334ada0255ef5cb1ba160fa2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "017b5893555253cb1fc35b7a7f7d43e8"
  },
  {
    "url": "tags/web/index.html",
    "revision": "58acdbc41b11397ad929a1138f677864"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "809a3f2418db224e2418fbfdcca444c9"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "fb674bd6332a4181193539b7d4822f00"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "0942274defe47c2e492988d4f2c21e9e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "a25d199037ef63cd75ddb8ddd15cbfb2"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "354b6c1778d3826c07b06c492d8f8b44"
  },
  {
    "url": "timeline/index.html",
    "revision": "d5e0c34acabb33235cef64f4cedfb0b0"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "94e7202753d4276b39c71dea3de752d3"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "d6e7ca9818611cc7ad07cb58175cf77d"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "0f29035b1cd3d357e286a2b2c2abe7cc"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "f316763800897f6441f48053eb86c439"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "b35e1b7e4ee1c5f2d70ff2a8439ce444"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "6cb2dec54002e5b239df8f25cee2302d"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "4ad52b8553671a5868e1779f902f8f50"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "86dec572a83fb033cb9c15154a7a775c"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "aa3695042e14e4bda02eecac4c64f1ee"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "eb5d55ffdd3d9ca23087d9af81ec5f65"
  },
  {
    "url": "技术文章/index.html",
    "revision": "66d031f7d33181366b7fe45e0f23ee53"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d9e799ef8674fecb1953a5d4fd4eed19"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "dd274d811f77a6c28441fce9710e69bb"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "d1a4da2cd0ea035c792cd4e779d24246"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "f9d8313e9ae78d89d46eb8cdc0435f4f"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "98593093a05c27c0931d72b4c684c75f"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "973fe86de553684f49893b64ba05d52a"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "84e66bfd89d743e277a3472ec2cca33e"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "2df37df00228b7fd3fd39294376bb39f"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "ed88b123b7cd99b759e7a2c75bcc3081"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "ece7f519fd286584aa7abd6d64ab8b7d"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "d14ac7be00a5a76f0727e6f91fe88da3"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "b8b7e06a96e779e2ecb351bc3d014693"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "908831e07469fd7af2b429ca3d33584f"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "a95b6669015f297ec67aef02165db18c"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "5c9cf97dafeddf0f81deaab001fd29a7"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f038df4cd5a3a21ec8dc30590d99da4b"
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
