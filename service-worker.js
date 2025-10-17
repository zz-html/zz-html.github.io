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
    "revision": "1f46b0c651916ed68f0bc77cdcc8a445"
  },
  {
    "url": "assets/css/0.styles.0bfbf8ef.css",
    "revision": "48aef109ffdfb620c44d91f032bf2010"
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
    "url": "assets/img/zSpaceTest.a73776f6.png",
    "revision": "a73776f61a4da8ddfc0f2e9666739ef6"
  },
  {
    "url": "assets/js/1.f9db1175.js",
    "revision": "52f6f0ad2bcefa56aeba44c8187e75c0"
  },
  {
    "url": "assets/js/10.29e0f23a.js",
    "revision": "80176fef6d3309add24807bc7fd08d71"
  },
  {
    "url": "assets/js/11.dea4523b.js",
    "revision": "42d951755087728722bdb8116d085b21"
  },
  {
    "url": "assets/js/15.4f5fcceb.js",
    "revision": "5d38ef656eb442e54d1eff4a471c6ba6"
  },
  {
    "url": "assets/js/16.5addf709.js",
    "revision": "cfd020bd3bfa742de328900fc12c8637"
  },
  {
    "url": "assets/js/17.a172555a.js",
    "revision": "ae8a237f439f4d429cbbb2cf4d08ce16"
  },
  {
    "url": "assets/js/18.eb6b8073.js",
    "revision": "c98e07200d28573f219aa614f6549816"
  },
  {
    "url": "assets/js/19.3f294e2b.js",
    "revision": "838c68b80762284d0af394fc5b42ee57"
  },
  {
    "url": "assets/js/2.6cd960e6.js",
    "revision": "857d1823c0fc005e68743104abc1d624"
  },
  {
    "url": "assets/js/20.c5bb6271.js",
    "revision": "fbd8f2947316f31869e7ac3f0a641d29"
  },
  {
    "url": "assets/js/21.8671e248.js",
    "revision": "9cd536f50f7ac18484b17ecc3d88ffd9"
  },
  {
    "url": "assets/js/22.5f6fd8fd.js",
    "revision": "b71780440238d0c2b7a47463a2ac456f"
  },
  {
    "url": "assets/js/23.526f223f.js",
    "revision": "c4a515560f4b195517d982d3fb8f4d07"
  },
  {
    "url": "assets/js/24.e71707a5.js",
    "revision": "7418feb906dbc31ce25bf0131bc458fc"
  },
  {
    "url": "assets/js/25.56231f38.js",
    "revision": "367ffd5b5308fc5fccfe17d861a1847c"
  },
  {
    "url": "assets/js/26.004c5e05.js",
    "revision": "d59182e5cc6dc9bda73ecbcb44aeb478"
  },
  {
    "url": "assets/js/27.160b0132.js",
    "revision": "3982dd7c9325596d24891314ecbd3abb"
  },
  {
    "url": "assets/js/28.3532465a.js",
    "revision": "1a5a1f97b4a6f83395fbcc9f33d373be"
  },
  {
    "url": "assets/js/29.5be2d926.js",
    "revision": "b37b94967a47213fb684c93b0480f45c"
  },
  {
    "url": "assets/js/3.5d7e5040.js",
    "revision": "f450900ec44260b2fa2e91a24e5fde0b"
  },
  {
    "url": "assets/js/30.f3776c0e.js",
    "revision": "12629398ee1f1b3d070dd3529f6034a2"
  },
  {
    "url": "assets/js/31.ffc940fa.js",
    "revision": "e262c5c8bf6e8a16af83169d8d7e8a72"
  },
  {
    "url": "assets/js/32.f872e75c.js",
    "revision": "f09353f21983ac91012e5592991aecf7"
  },
  {
    "url": "assets/js/33.e4122c59.js",
    "revision": "e01623741187bea9cde9033fac287224"
  },
  {
    "url": "assets/js/34.6b5dc291.js",
    "revision": "8f7d8c84ad1f85096ab8607a3bc556f9"
  },
  {
    "url": "assets/js/35.02d662ee.js",
    "revision": "5b71e569d6a3fcf8c3c9431959aa22c1"
  },
  {
    "url": "assets/js/36.4198f7f5.js",
    "revision": "bd9d9b796320b16e5d6845326bbc4e48"
  },
  {
    "url": "assets/js/37.04de367d.js",
    "revision": "a1bb9665f02c58ddcd805f1d45bf4cd9"
  },
  {
    "url": "assets/js/38.21f0883b.js",
    "revision": "8bead0fde3d5c1cf117795321a2e6684"
  },
  {
    "url": "assets/js/39.c8987644.js",
    "revision": "a0147364b7caa6dd1b459b1e39f38050"
  },
  {
    "url": "assets/js/4.b1b8a078.js",
    "revision": "991bc2620b8544c88bc94ac325e7a530"
  },
  {
    "url": "assets/js/40.d4e51f40.js",
    "revision": "5277db0097a0569a05cb6ca71b1a5800"
  },
  {
    "url": "assets/js/41.b3782548.js",
    "revision": "391dd6044a3b9c30246bc81d27ae81e2"
  },
  {
    "url": "assets/js/42.ca4fb730.js",
    "revision": "9f30f6844d5318573ff650d4b11f5adf"
  },
  {
    "url": "assets/js/43.3353f13e.js",
    "revision": "dd8ba70c651871482a09f0db97106bf3"
  },
  {
    "url": "assets/js/44.f26a7215.js",
    "revision": "8da7cf026ba78daf5902787374ed1f05"
  },
  {
    "url": "assets/js/45.9c685093.js",
    "revision": "fa522a75f60a3f8a11a645ba4c90ac79"
  },
  {
    "url": "assets/js/46.3f67630c.js",
    "revision": "82ff6f0049d4c3f71f33c1150a3fe5e1"
  },
  {
    "url": "assets/js/47.8cf340a1.js",
    "revision": "feedc9a4ef589a37d7d45d026fb23eec"
  },
  {
    "url": "assets/js/48.7428399a.js",
    "revision": "1365de7bc919d57d6620ae983fad83c8"
  },
  {
    "url": "assets/js/49.404b995b.js",
    "revision": "8770ecf2961bd6d2e1a05ce73417f7bd"
  },
  {
    "url": "assets/js/5.ba483640.js",
    "revision": "22396f6a6a671623fd5216dee75f0682"
  },
  {
    "url": "assets/js/50.5cd89238.js",
    "revision": "0aaf6c5ca9374fc1fc5ce75be4fc670c"
  },
  {
    "url": "assets/js/51.9497735e.js",
    "revision": "89923d94f0ad261506a89919faff72e1"
  },
  {
    "url": "assets/js/52.c5fac987.js",
    "revision": "bcdf3d47064f62d1fea6e34c26570395"
  },
  {
    "url": "assets/js/53.baa41307.js",
    "revision": "df95109f310cc6a960923361f676a49f"
  },
  {
    "url": "assets/js/54.321492a4.js",
    "revision": "6942f0357bdeaf9f170d1d2b9a89ff6c"
  },
  {
    "url": "assets/js/55.9df060be.js",
    "revision": "4e1641fd81d33c25ac0c223ccb181262"
  },
  {
    "url": "assets/js/56.9db3e1f1.js",
    "revision": "c472a45aa768ca7f963d323ebf5d991a"
  },
  {
    "url": "assets/js/57.20947180.js",
    "revision": "7f82d2be2e5421ecc53437cc31a58774"
  },
  {
    "url": "assets/js/58.aef2acae.js",
    "revision": "4a28813ea4a3d28e1561f58d6de275aa"
  },
  {
    "url": "assets/js/59.7de25f90.js",
    "revision": "c27a01570807c5d0182b9665cc2fb8f6"
  },
  {
    "url": "assets/js/6.1096a3ef.js",
    "revision": "f879fd6d3300bcc493de0a294d0ab591"
  },
  {
    "url": "assets/js/60.d7d9baf0.js",
    "revision": "fbe495b61741f4110f5c185dd0735f78"
  },
  {
    "url": "assets/js/61.796a4f29.js",
    "revision": "16c33f3475a02241498e84500062415e"
  },
  {
    "url": "assets/js/62.581e3bed.js",
    "revision": "ca526f3191b4077622f46a098d88ebe3"
  },
  {
    "url": "assets/js/63.0ec793c5.js",
    "revision": "e6d434609f4ebcc1c9095055da091f51"
  },
  {
    "url": "assets/js/64.ea2442ca.js",
    "revision": "25ead508c8481b31f58f2df7479aeb58"
  },
  {
    "url": "assets/js/65.803eb54a.js",
    "revision": "bda1278c9635c8d26c55b60b0821698f"
  },
  {
    "url": "assets/js/66.a6fb78bf.js",
    "revision": "a8db268df7c7c0404738084dd7c29ffb"
  },
  {
    "url": "assets/js/67.f64df0f3.js",
    "revision": "e02863aa8079dc3bb1e664d49c9d26f4"
  },
  {
    "url": "assets/js/68.e17835a8.js",
    "revision": "9efafcabbabb4dd10224845c4331e55e"
  },
  {
    "url": "assets/js/69.075748c9.js",
    "revision": "b3481190bfdba781555ae65f6fb70876"
  },
  {
    "url": "assets/js/7.b2472608.js",
    "revision": "9fc6b08ebb2f7a92a5bfa7c97ad55b16"
  },
  {
    "url": "assets/js/70.a961505d.js",
    "revision": "8ba8a9636529457263e9362b8c279854"
  },
  {
    "url": "assets/js/71.f39a58de.js",
    "revision": "b6bf7b1709a1ef763177639b4a43a027"
  },
  {
    "url": "assets/js/72.25803729.js",
    "revision": "3c05a31387461c95965dabbd08630cf3"
  },
  {
    "url": "assets/js/73.24da781b.js",
    "revision": "a90f95759cda00f8c0b96146d10e2fb6"
  },
  {
    "url": "assets/js/74.dde42995.js",
    "revision": "2c3c0dda216d35fd713705746c6e1bb3"
  },
  {
    "url": "assets/js/75.1df87939.js",
    "revision": "a11599c322706fbfe6211d7ce1f6d3cf"
  },
  {
    "url": "assets/js/76.24731dd0.js",
    "revision": "81cba2f9525d905b852a40ff1c0ac9f7"
  },
  {
    "url": "assets/js/77.6a23d14a.js",
    "revision": "273dba97960801565529576365da07ac"
  },
  {
    "url": "assets/js/8.e8cf3228.js",
    "revision": "d4d54e3c6796d898f9324f29cec8974e"
  },
  {
    "url": "assets/js/9.3199442b.js",
    "revision": "1b3ba4d92bb364e3e7fa693b3fe2cae6"
  },
  {
    "url": "assets/js/app.d6d57817.js",
    "revision": "531c0a89bdfe11ff8546e8f696abfcb3"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.ec221b99.js",
    "revision": "b7f8c8fed86967a90795eed333df9c4c"
  },
  {
    "url": "assets/js/vendors~flowchart.6dbb867c.js",
    "revision": "9a6f68b310d164d7ba555e3146c54848"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "802eaff8482fa352b8c62948867e8d55"
  },
  {
    "url": "categories/C/index.html",
    "revision": "60634d22f95275969eef5afc51564743"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "e7c14f4b14f6fb1295e9d2466a4f1b6f"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "c6c0cf5e0798fabeeda0f78421ba6451"
  },
  {
    "url": "categories/index.html",
    "revision": "1729aedcd9aa5d724a7382a79d5e3171"
  },
  {
    "url": "categories/java/index.html",
    "revision": "13ffe1193c15aabaf0465db0ed177f7a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5b716a2442a0ff914268a629eae6e691"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "4127b50fd21780468b6cf1137525b986"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "a135f59fb6a440fc4d7e018aa6db9ca8"
  },
  {
    "url": "categories/python/index.html",
    "revision": "d1a055f245d2258c88b4549f3e354eec"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "bb0bbe9434f4bf2ee0a1c21b1b06e061"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "566217150af973486ec7a47611fea5cf"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "2a0c238f26930d52a39be04179fb168c"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "3f111e28665ae1474bbf945f4dbed690"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "b031040653993f8d0abb45cabe32ede5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a0bc2c234de9d986afe10ff1118a09e0"
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
    "revision": "fcf71182ea0d3896068e28d93585bbb7"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "07575dc0430efd9d9776a3884997782b"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "8e52a9ec8d83a6db40648367f1f95269"
  },
  {
    "url": "tags/C/index.html",
    "revision": "ccddc5e7eb080b405a7d5ed40ee75dc2"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "5d2995068f2188987ea00c1d071aa666"
  },
  {
    "url": "tags/dev/index.html",
    "revision": "4183e004f851e1c667e2d28c7bdc7cd3"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "353a7c6334e635340a258e080e3601e3"
  },
  {
    "url": "tags/figma/index.html",
    "revision": "35f9cb0923534760a6ed84c4e7df818c"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "526d448fc309fb143d5cfc53e732cb13"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "cb7e45af862619e1382ccb983dc966d0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f51aa958e4f379608364f8d45e04cdba"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "0932804e57ab6b05a2beb4ebeac5068e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e9342af6a37a71b9a6a01e69c2bc4493"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "3d885c0f2121c4d8625900c367da3b70"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "40279cfd2c63d5a0d7597a22b1b2884b"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "b8bfadd1d41d8cf86d7e9eb19818de5b"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "0caa980e6ac4b329bf68a1624c2eb226"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "b6969d42edaef3d673ff9f34ea5bf843"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "351331fafdce84144561d2611a5361ba"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "197ba121ac188c0a32b205e91018515d"
  },
  {
    "url": "tags/python/index.html",
    "revision": "36da7d06bbd591e54ac6d26b6c850d1f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8b81708aaea97d9f4601763dff98a991"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "3bc6e2d150a11a1321ee43dcd4b4f769"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "992908cd5afaf1578e9e1658df76526d"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "3ac4ed358157ec894f5778f6bee997c9"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "1c9d339468806e498bd263472165e6a7"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "e44fec9c5da506a99eb48c38e92dd7bd"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e1231ff724fcb59b7931ec2a355db258"
  },
  {
    "url": "tags/web/index.html",
    "revision": "8ccf8fb8c912b4200975dcf6e5c0a884"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "642418e6e31197555260396aca8f94d1"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "a2cee4ceeff917631d74d883063bc8d0"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "b9b468765f67f5152b5881125dcb66a6"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "a74209a379b13248cdc96488932063db"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "23366299324518cc7cd88b98b08df2ee"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8383fd375626e548ef2742d6e21c4c57"
  },
  {
    "url": "timeline/index.html",
    "revision": "6b90947e56193b6d89725cc758784c6c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "e3ddadc934f26df1a31cf9632078d490"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "f7200fe1377be98ee92f81e9b802cfd5"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "0a98ee0daec517492132f26709217ca7"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "5dc786ea2ed504e39894b737d99b12fa"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "55638b794fb821c735790c26a10b549b"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "87c1ff1c10c27171b37531d93ffd4770"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "ac7569ce60463ba6b1d09c7dd79903a0"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "924491e90614f35936d6d3ae6f1544aa"
  },
  {
    "url": "技术文章/c/VsCode.html",
    "revision": "73fc379fb36db0d54e8f6d7ef069bf49"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "242bc7e9a2f17d8106cc8679097e7eca"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "d53ca6c8a71b14728547f3c4f5f15210"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "69c02965f4b967089970caccc308eb57"
  },
  {
    "url": "技术文章/dev/shadowsocks.html",
    "revision": "6b529c5395f536d06a25e08b86b08416"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5254ebb8f5e59bb0dc68da9707594520"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "73df901676f4cf376358232379e91335"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "f8380826f0794f9cec546ec3e70022b5"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "b66882abb1783ba7643599331b39b534"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "70af0a26d376b417baae2261902c1d86"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "0495aa4fe4aa69344b86665912878022"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "0894c4be86616b187cfeabe99932a4df"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "a30a620455a529e002eac03a1cad7b78"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "6f9e76e98639a3e6970a67f0ebcebd61"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "94eb5b30b8415040c9bce8e3a14c52e1"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "15bc2ad2badecd35cfa5726aec2fc908"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "26d1c432ee81832aaae4fd4bec27d9a3"
  },
  {
    "url": "技术文章/vue/figma.html",
    "revision": "ac11ab1093cb82bed8c60b1e530ff41c"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "27a381ea036f69f8a82af75c9b7d1641"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "01781562565d7c023717efd13163a70b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3e408677048c9eac46c9988c41e7db04"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "d1ef63d1eb6909956577a29947c83144"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "7c3457a2ba0f119b6008f8d4673bc667"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "4cc6924100f67e6bd0d25d0b96027ef6"
  },
  {
    "url": "综合分享/deepseek.html",
    "revision": "a13b70d5688f5864bee47f449eae6c61"
  },
  {
    "url": "综合分享/life.html",
    "revision": "ba48ef126d12b63b4e66aa8ab3b2f778"
  },
  {
    "url": "综合分享/openai-api.html",
    "revision": "b67372388dbfe482db09ff1eecbaadd9"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "3e3113214aea9f1129283bdbe21d7d76"
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
