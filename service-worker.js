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
    "revision": "b658b065ec9bd0540e426ff932af85ab"
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
    "url": "assets/js/10.7ba896d3.js",
    "revision": "e2eab5fbbdba9e571be50a1fdc878b21"
  },
  {
    "url": "assets/js/11.e72f5849.js",
    "revision": "e70b5183e23fe3247a8ed34a50141551"
  },
  {
    "url": "assets/js/12.b62c0ac0.js",
    "revision": "72f0d6d586c67c77a4d2a8b81e904ee4"
  },
  {
    "url": "assets/js/13.6883ac86.js",
    "revision": "60d715b157dbeb411f180220688f3942"
  },
  {
    "url": "assets/js/14.f2f3dad1.js",
    "revision": "ca550ce283bb5c9c32f4485fb8a01abc"
  },
  {
    "url": "assets/js/15.8c919d4f.js",
    "revision": "28ad46094eeff79d0a4ff3aec8c678ad"
  },
  {
    "url": "assets/js/16.322ff085.js",
    "revision": "f55581b2535171105f44214bf57e9640"
  },
  {
    "url": "assets/js/17.d243d824.js",
    "revision": "5539d65b89946b69c2b7b3e9b7ee3b7b"
  },
  {
    "url": "assets/js/18.69abaa21.js",
    "revision": "43756f90b2c29809962554ea38f39a40"
  },
  {
    "url": "assets/js/19.a5068dc7.js",
    "revision": "9ccc80864820839672558e93d75dd88e"
  },
  {
    "url": "assets/js/20.bd80d618.js",
    "revision": "25f0caaca2e2d96725196071a6936799"
  },
  {
    "url": "assets/js/21.e8607cca.js",
    "revision": "a1922fe840a1c0c021cecaa57c017eae"
  },
  {
    "url": "assets/js/22.208658ed.js",
    "revision": "a5108dc8036893d95eb2455959791648"
  },
  {
    "url": "assets/js/23.a8739594.js",
    "revision": "96c079c25eafd425630e54bf5e3edfa7"
  },
  {
    "url": "assets/js/24.d79eecee.js",
    "revision": "1232a7bf05acc3bc29b3a9cbf182b984"
  },
  {
    "url": "assets/js/25.7eb9a363.js",
    "revision": "125fc0d09232cec3e49e7feeaec997f3"
  },
  {
    "url": "assets/js/26.a00f2f48.js",
    "revision": "ff20f0241a7f891e44febbf6f5c88b4b"
  },
  {
    "url": "assets/js/27.5a24719d.js",
    "revision": "90160233bba9680280a35ed032bddb57"
  },
  {
    "url": "assets/js/28.d7ca18d6.js",
    "revision": "22726c49c877921c74d9e1b933be3d64"
  },
  {
    "url": "assets/js/29.0dc63438.js",
    "revision": "435e20e62c6be5a0fcbfacb2346b7b54"
  },
  {
    "url": "assets/js/30.7cb72f46.js",
    "revision": "706fa4275f559a0a076eed0beff3eeeb"
  },
  {
    "url": "assets/js/31.f009da7a.js",
    "revision": "238ac3a49cfc2afc4410c68a9ce3adbc"
  },
  {
    "url": "assets/js/32.83cab70f.js",
    "revision": "405fe81a2b916ee6af83c1a4ba0785cb"
  },
  {
    "url": "assets/js/33.ed202997.js",
    "revision": "efb010e35f86d6327bdcd888afbcf687"
  },
  {
    "url": "assets/js/34.2f8aa940.js",
    "revision": "715a9190713317d6aa02871c52139668"
  },
  {
    "url": "assets/js/35.ba12c56d.js",
    "revision": "d864042d53fc04398f3e51accc3d51a7"
  },
  {
    "url": "assets/js/36.0e3fbf6f.js",
    "revision": "563a94d08fd21f7f8162488cb4b9b206"
  },
  {
    "url": "assets/js/4.5f490044.js",
    "revision": "8ee1753028f1ece320e2d3b68d9b0cae"
  },
  {
    "url": "assets/js/5.3b2b447e.js",
    "revision": "a7fe20fd913bf318b10bba70ba1d76b7"
  },
  {
    "url": "assets/js/6.bbf0bf19.js",
    "revision": "0690de06479aeff60e000ba48f1078de"
  },
  {
    "url": "assets/js/7.9077ea1c.js",
    "revision": "3330a8f123e77efe2b402fde07fb0ae6"
  },
  {
    "url": "assets/js/8.213af2d2.js",
    "revision": "e2f575f829e241772e5619337b54d16a"
  },
  {
    "url": "assets/js/9.1b648da0.js",
    "revision": "022d3aacf0efba12e4175edf0968f9fd"
  },
  {
    "url": "assets/js/app.f44d5c45.js",
    "revision": "002cb6c12f0136dcbbb8dc678e464f4f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.97604a12.js",
    "revision": "307b48bc8a74b826e0f224205548f191"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "520dcce1f16a474ed554c12272fb14a9"
  },
  {
    "url": "categories/C/index.html",
    "revision": "1e396cbab60af64d09edff81e19925da"
  },
  {
    "url": "categories/index.html",
    "revision": "a84690e4400b80d0cbb903e9a6a91eae"
  },
  {
    "url": "categories/java/index.html",
    "revision": "98e34e22529e76a537e5ea2874a320f6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4899542647d8ec486b53be47b9e7bcbb"
  },
  {
    "url": "categories/python/index.html",
    "revision": "00968cc65ce37a5bc34053f12f714b3e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "790bb880e64dc50e0602ec3eaac8fddf"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "6597f1f28777bae967180cb6fa23a58e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0713d670ed31b9f609d35b67434e91b7"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ae45eae19a9446fe994feed2fcb28c5d"
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
    "revision": "26f52a45ac03756404e203954caec5de"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d8f1e8c399acee7c6f675a00fb93b6f2"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "ec4a1dac800becc1c470c385d18ac837"
  },
  {
    "url": "tags/C/index.html",
    "revision": "fe5c21ea9a6e8cd8f8eef35fc782d80b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4792dd88eff515e56dc636272d3eb145"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1e96cab89b3c86596f1c30b48900ba0d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5a937e0e5a87d3b74eaa6a5d0b3e926d"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "758501613d15e3840802432a27a430bc"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "720e7601eff0949e978780c661ef8461"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "0e3fd91c6db013b85d05e7a8c0e8ef14"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "c028c004629cde4a2ed93f83954ea856"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "650d6be14dae1a239bcea4af09847917"
  },
  {
    "url": "tags/python/index.html",
    "revision": "16bdf47c9f5ca6c8c1aba0195a468841"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "ccbbc0068dd0440f6604dbb3cc9331e9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e1c40137bcf2755b98ce49660cebe8d9"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "b907124279a2fc725e87f7f84e4d82fd"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "b94f96ad035ab1ab845c06c3bd2a8c2d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "de1fba447f8f8489a2122331d1d8c949"
  },
  {
    "url": "tags/web/index.html",
    "revision": "9df5646c0fbd9cadb8c0168e70da896a"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "269c33994658ee17294dc67884501c21"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f67c803b520fc722e4ce96809afe7bb5"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c3bcc4830e0323891c1a5a44f31a4e33"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "226f547338d77c94fac70bbdb2a4539a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "81134703d9898a0400ba6ff1d04bf0ff"
  },
  {
    "url": "timeline/index.html",
    "revision": "0f026c8833798e79dda017c146cddc05"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "9e51f268c5ee34fb70251d620140c88b"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "6cb1db8e6fbf4e988d17d4276302f3ca"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "a833ffc5976238f471c004df887eb70a"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "3623c625dd9df13db7bc3dcb7c909ce8"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "9629ede45359a27285f68fa5cad927ba"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "5fcb9919724992ca952eed4783992daf"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "88310f7aae9c27bb15314f6d5042f2d2"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "bafc1146704c20f4daebb864dbee5c76"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f420ca418588bc40ca68353e94489f20"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2cc8f7128b0a67d37f43f591ea712ab8"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f4250a879df5315033fc60cca363b6e7"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "fdb1b963faf76be307dfb109b3e3f9c9"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "ec513f3ab7b87d6726cc6f1f5c870db6"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "9e9b6d0996b66661e50e22db51cef919"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "0c2e1fc7cefdb76b4b04f5fb894b5a14"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "bc8f8ae11c193b9170ecedf8e0568084"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "f34a8c26dcabe6a78d5591c3b621990f"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "b4f983107eb8fa82ec11685be8583310"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "0fbb878a2a10c2e3ac524a6f25673834"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "40ff34bea8b7b1e857eabc496ca8d3d9"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a48c8f55f900536bd42daabb51a8cb94"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "b3a5c308317b4ffc634bc5a6191a740e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7852622bdf2de906cace2335c8e4f96b"
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
