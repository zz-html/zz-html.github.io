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
    "revision": "f4100071965d5f721c201e7cde9605a9"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
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
    "url": "assets/img/Chat.61ed37f1.png",
    "revision": "61ed37f19fdad688cbc8c5d2dd9a7423"
  },
  {
    "url": "assets/img/client-config.5d0f0e2a.jpg",
    "revision": "5d0f0e2ab84bceb961f8d8253848ec38"
  },
  {
    "url": "assets/img/Continue.21a104bc.png",
    "revision": "21a104bcdb39d6b8cca6e2ce0bb234b8"
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
    "url": "assets/img/deepseek.488fbfa5.png",
    "revision": "488fbfa52d7dc1a4650496b3206cebe0"
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
    "url": "assets/img/install-1.f0d3538f.png",
    "revision": "f0d3538fe1954e1339071810fd4e4342"
  },
  {
    "url": "assets/img/install-2.bf1baadf.png",
    "revision": "bf1baadf823c0414a1131464e8f34c15"
  },
  {
    "url": "assets/img/install-3.3529d74b.png",
    "revision": "3529d74b27a9ffaa5f8937006a32fff8"
  },
  {
    "url": "assets/img/install-4.cb2ec80a.png",
    "revision": "cb2ec80a04218e89d05a235f73e97422"
  },
  {
    "url": "assets/img/install-5.f5b9a852.png",
    "revision": "f5b9a852e3bbc8669693a1135143c2cf"
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
    "url": "assets/img/Ollama.e0c33ad7.png",
    "revision": "e0c33ad7f2a71b43ad1aec4e63774e70"
  },
  {
    "url": "assets/img/PageAssist.b00bbf12.png",
    "revision": "b00bbf1229ff4d231fd944c09486d5ad"
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
    "url": "assets/img/zSpace.a32d7142.jpg",
    "revision": "a32d71426cb80f67c0f0772d9da8118f"
  },
  {
    "url": "assets/js/1.72860de1.js",
    "revision": "c4b322ffd869d675ca659f1d60dbfbf0"
  },
  {
    "url": "assets/js/10.30a6d730.js",
    "revision": "b0683eb1de198a934d9899c812ae2505"
  },
  {
    "url": "assets/js/11.c981b0a0.js",
    "revision": "e70530e1bff64082031499a6addda34a"
  },
  {
    "url": "assets/js/12.cc3823c0.js",
    "revision": "3cf96e1129c5117763c7e8637032f339"
  },
  {
    "url": "assets/js/13.b3744926.js",
    "revision": "a5336fac6cfe920cac72828f501fe5bf"
  },
  {
    "url": "assets/js/14.578ff239.js",
    "revision": "e433f8ca1e02821069bd62b2479b1e07"
  },
  {
    "url": "assets/js/15.d945b47f.js",
    "revision": "737c1b2692b18e1c0d245d654b3e28da"
  },
  {
    "url": "assets/js/16.05dc0a31.js",
    "revision": "ab05911dacc4f97fa3daa225af445667"
  },
  {
    "url": "assets/js/17.e5ecfe7e.js",
    "revision": "e935cb125ffdcd75d6ac7b6241e8995a"
  },
  {
    "url": "assets/js/18.af2cfe11.js",
    "revision": "7f33f8f7d9af24c406e662655bc492b9"
  },
  {
    "url": "assets/js/19.d40c4fb3.js",
    "revision": "d950737d21a2c0b00e432f6bf51c907e"
  },
  {
    "url": "assets/js/20.d24bfb18.js",
    "revision": "085597a8a2d369b4253e02fb9ab3f734"
  },
  {
    "url": "assets/js/21.2b99849f.js",
    "revision": "37110c3f4c395b3934d925ddd588564c"
  },
  {
    "url": "assets/js/22.5c977635.js",
    "revision": "13412ba5ac0841b12e7a44e1cc5402a7"
  },
  {
    "url": "assets/js/23.2d8a4670.js",
    "revision": "0468abfa5cdb073c96a2eeee5615b729"
  },
  {
    "url": "assets/js/24.e09f95ed.js",
    "revision": "8685a0b0e0791cab579c6982eb1c5e31"
  },
  {
    "url": "assets/js/25.7af1b4f8.js",
    "revision": "50edae0148186c72c93408c2fcf24c84"
  },
  {
    "url": "assets/js/26.21d8922a.js",
    "revision": "b44bd5965b851447814276451f69b78e"
  },
  {
    "url": "assets/js/27.a7e5c786.js",
    "revision": "58def0a4f70c27d51701629bac776bc0"
  },
  {
    "url": "assets/js/28.a747e9d2.js",
    "revision": "bceb66f99cfe31c904854df0f88ce4bd"
  },
  {
    "url": "assets/js/29.edfbdb95.js",
    "revision": "39270216e06d9ef628eb2b1f731c3714"
  },
  {
    "url": "assets/js/30.7cf219f2.js",
    "revision": "174ff2ddb55dc7a659fad11513002a49"
  },
  {
    "url": "assets/js/31.32fda969.js",
    "revision": "0fc603b5b531249dfb72e7e7bfb6aa6e"
  },
  {
    "url": "assets/js/32.b67d2de6.js",
    "revision": "3e6b70c6fc95d16b5444033975017d9c"
  },
  {
    "url": "assets/js/33.c0866e96.js",
    "revision": "5b664b030370e1e3bb8f58fb35db2ec6"
  },
  {
    "url": "assets/js/34.de0222bd.js",
    "revision": "9976b06c416129b7b12549baf8c59990"
  },
  {
    "url": "assets/js/35.308263c8.js",
    "revision": "983dd57a22e0b27d7907fb5c76de5c24"
  },
  {
    "url": "assets/js/36.6bfef31d.js",
    "revision": "5f0bb70db3d346739304387806756b1a"
  },
  {
    "url": "assets/js/37.baecf63b.js",
    "revision": "bfff40d8991e80d7dc4b01e540c5d8a5"
  },
  {
    "url": "assets/js/38.20e4256a.js",
    "revision": "3c5882801a34c608d5ea380cc08d9a28"
  },
  {
    "url": "assets/js/39.e9aa005c.js",
    "revision": "8cc03daa1af4191f691f4c76346676de"
  },
  {
    "url": "assets/js/4.d512d2ed.js",
    "revision": "01366d58c06f80ec287e43819a9077bc"
  },
  {
    "url": "assets/js/40.96da569d.js",
    "revision": "1546d52731f59d8b8d125f8e057273c7"
  },
  {
    "url": "assets/js/41.4913a6d0.js",
    "revision": "8fdff8399c5af5be75b0aeffd89ac029"
  },
  {
    "url": "assets/js/42.937db672.js",
    "revision": "e5df54d2f6543d0d2c583fd62a161684"
  },
  {
    "url": "assets/js/43.7c950fc4.js",
    "revision": "fbaafd900393a775cd81f5ac44760262"
  },
  {
    "url": "assets/js/44.d8585603.js",
    "revision": "a7dc69e6bfc2c43f00ae211e3b961c0c"
  },
  {
    "url": "assets/js/45.ce0fb278.js",
    "revision": "f4902287268affa5cc863ec092629193"
  },
  {
    "url": "assets/js/46.7db1f254.js",
    "revision": "c8b24406ba322903ba1a64fbb0a295ca"
  },
  {
    "url": "assets/js/47.3c4beb35.js",
    "revision": "041281eabb85b69b7000cc1ae01886d2"
  },
  {
    "url": "assets/js/48.c9721fd6.js",
    "revision": "d05275656fb6e6487a462cacbfd799f5"
  },
  {
    "url": "assets/js/49.fdc2a726.js",
    "revision": "666526fc6bb494762068f7fcb536278b"
  },
  {
    "url": "assets/js/5.5f9bbc72.js",
    "revision": "51911831059b697945737dc03d8932bb"
  },
  {
    "url": "assets/js/6.978a1802.js",
    "revision": "9c294e573fb94562d48eeca28b3a1a8b"
  },
  {
    "url": "assets/js/7.4de75861.js",
    "revision": "ba3e3828a69b9727b1a32ce62b444efe"
  },
  {
    "url": "assets/js/8.e9837c7c.js",
    "revision": "670ba7fde236a64b0a10d0903f9f60e1"
  },
  {
    "url": "assets/js/9.3b613c40.js",
    "revision": "71ad159596192000cdaa882383496092"
  },
  {
    "url": "assets/js/app.77fafe07.js",
    "revision": "ccb86319370623c82b895760d1c35c51"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.79fa0a5d.js",
    "revision": "b38fe63d5872e1c5031d3a25dad3d7fa"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "87df43312c2d6f9796e8c96a18aae997"
  },
  {
    "url": "categories/C/index.html",
    "revision": "267f3001153605171fdc74773e733b32"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "a09e7533d0b4337e7c7739773fc201ea"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "12dc3b6360f06c2f0f0b73dedcfa705c"
  },
  {
    "url": "categories/index.html",
    "revision": "a40b3a4dc28c3e179977108d556377bf"
  },
  {
    "url": "categories/java/index.html",
    "revision": "33fbf645ece47aba5cd884cc6e5c81d8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "df0321509e3a7a375079217420d5cf40"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "6e8bdc2a384d182e9e7f7f0ffef4e2bc"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "c2bacba0fcda3a3010b69e79e0b408db"
  },
  {
    "url": "categories/python/index.html",
    "revision": "204c38c7856340baf4ba090484cd8c17"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "de569dd71b18d401bf030367d6541bf9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6bfa0e1e755080db48501316391e44fc"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "6044dd5ff88e51dc3b622a3c8333fd55"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "948cb86bc5b796098ad85fa74b363ba7"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "00be0602788ded98d694dc6ecb836bc6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5527b850378607090fc754fa0cf95b3b"
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
    "revision": "0a40c6e976edce0ee1cf1f9ebfffd87e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7bec88b95c563abe42d367c414a2a3b8"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "895dfce5cc5428831a9d57cfb80d734e"
  },
  {
    "url": "tags/C/index.html",
    "revision": "22d42c90d9592e10177a73182f51b63d"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "979cabb93bacc1b18f422a44b794324b"
  },
  {
    "url": "tags/dev/index.html",
    "revision": "363623b77cbbb9e0e42cefcb2b1f91d7"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "5c83e8bcb1217d7e4116cae4da2b4f9c"
  },
  {
    "url": "tags/figma/index.html",
    "revision": "e8fc1cb4520dbff8cba58df1847eab58"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "088c981b1594fd077af8085e7ed9ce29"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "68d03079e5357487eabdf33879f04007"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "46f5b39c8213c13dca411b55fbc03409"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "17c095279ec71dd0a170a15090c20ba5"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7db5ed37944a6f3944220acec4dbca2f"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "ce75eeaf4e9681bb714b4a65a9abca91"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "4eea2d2933c4f8cc4cb1578661198e04"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "187770801f76a5cd016f4ac210b02b65"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "cfa16efc9c94c00acf1bb50d79843bbf"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "596538fc93ece63e13228537c59ee587"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "10eb7a51f37ee98f354a537a4c6de8c8"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "cdffc9337f781a1a36ba2e9d860f8ac7"
  },
  {
    "url": "tags/python/index.html",
    "revision": "442cb0c9fde1dfb8ba89a53c4055793f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5d7c8eab071f87cace576938c2139499"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "378d01ebdd4a9f44b325c98a43e8ab20"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "11b5d39aa58a72af47c39c4c1fab63e5"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "bc6082687254fbd7df0eddce02be381d"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "5cf02b24a840d6b1fb1b847d4ae4d31e"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "5230090b46e372797fcaedf0164529d3"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "96462e807b1b70cc95497a342ae210de"
  },
  {
    "url": "tags/web/index.html",
    "revision": "22d874f26b4ec93cbea5f6b964bfd591"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "29d9f1fa8081fbc7cd70205b03b84edc"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "6d45993b8efc55736272d715e84a781f"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "625b587a279391d51c6e32942659df77"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "b3e09d0ff4d2953708e1a684c89b2d98"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7d533fbc2345984c47c0d0e39519142f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b99007dad84497088541e2a9f2302918"
  },
  {
    "url": "timeline/index.html",
    "revision": "20fed018902df6646ff949f4f2dfc57f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "e3cb9b538526656e8f7ee441ef5b0fac"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "3b49ee31fb64784b567a20d121d1b633"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "18fc53bcea2da9ad7dfe9a3e6078bfba"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "d232553b57f6e41609150a71a2fc44d3"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "bf331a9d81b776a32f5a72962b299496"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "12f7e5a6dc0e122226e93354f1f0b49e"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "6deb020b9b683a49ec33c7807323400a"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "74c6a2602fbeb4f7f7a67fadadc3affa"
  },
  {
    "url": "技术文章/c/VsCode.html",
    "revision": "82efe19b214b54ed560e19507bb2a79d"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "1304e3624014bbf3602d4367f0bfb3be"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "e070e3acba91bc30ca2cbeafeb0503e5"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "28ae8b7f64ed737fb5e6e510bbb772a8"
  },
  {
    "url": "技术文章/dev/shadowsocks.html",
    "revision": "b51cc6a4af417b7267ba212c7df61ecc"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2dbc167072a33c3a38e867e073c51390"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "76ef8ea0f0b24296bef8524b05836d82"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "2375c8033c90c4fbd08b49d4e8b0d16a"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "5e08f1f92733014428c43920bcd6a2aa"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "54120d6e3ea832f533a692c6e24ef81a"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "f4318bba5a0d91b02fe086ea4b01a082"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "dbdbc543d403d289b30fda176f001f91"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "e8f7f1108c7377d9f46348a1c356f7b3"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "585464c290cc5c4f1bad27d074e4ea06"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "66768f2b374df22b008b83ff34d2a8b8"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "cee6d14ab28828c02b88e180f7617066"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "b25beae74fe296995787e15c959b5421"
  },
  {
    "url": "技术文章/vue/figma.html",
    "revision": "c203b601e08041351f41781a6d19a0b2"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "8a5200922c37c61c997d2ff76bc451e3"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "92678d56b2f6ee80532a61db4911050b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f39391ef9dae9dad30952962ab2b96ea"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "4957122aea5c2d95bf6cd841c9f2837f"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "ed2f1e6e160429b69c8e3d9cd0b8682d"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "a08c284cfeaac3b36a8769a9cd0d96d8"
  },
  {
    "url": "综合分享/deepseek.html",
    "revision": "5eff1375ae4cb5310bbc76559519cef4"
  },
  {
    "url": "综合分享/life.html",
    "revision": "7060a599e43a25c8320182efabafd5af"
  },
  {
    "url": "综合分享/openai-api.html",
    "revision": "8e04429ab53e3402c399e6d7321132e3"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "889e05d36939b05850832a3954bd2a67"
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
