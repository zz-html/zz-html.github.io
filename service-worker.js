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
    "revision": "3520d71a9eff4f2179c93bb74c87a057"
  },
  {
    "url": "assets/css/0.styles.2133776a.css",
    "revision": "3e781199fa8c88bfa2ac4e21e10759f3"
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
    "url": "assets/img/link.c073a835.png",
    "revision": "c073a83585841ef8962af73b860661b3"
  },
  {
    "url": "assets/img/mcp-server.6f323817.png",
    "revision": "6f3238170eaf7ce8447c1fc936e9d1be"
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
    "url": "assets/js/1.b3063e4a.js",
    "revision": "d686e607821b4c5902695a77961c82e2"
  },
  {
    "url": "assets/js/10.37eadf81.js",
    "revision": "7bea60a0c9b27cf8d225dd2c2bd9a154"
  },
  {
    "url": "assets/js/11.2b58e2b2.js",
    "revision": "928147d6db6232e9383760b2dbe5f117"
  },
  {
    "url": "assets/js/15.e0e50b83.js",
    "revision": "c2962611fb397b520c9d0fa3d4bfc2e3"
  },
  {
    "url": "assets/js/16.9120927e.js",
    "revision": "50be11c29c9d6ef1ed4e7bbb16e07168"
  },
  {
    "url": "assets/js/17.d0e9e2b4.js",
    "revision": "1573222cca77e8c192b9a4eab7a09517"
  },
  {
    "url": "assets/js/18.203dd970.js",
    "revision": "dbe77adac8549fe746a32f6b594860c7"
  },
  {
    "url": "assets/js/19.58604142.js",
    "revision": "adb0dc752d16b3cd38fc69de95de4c75"
  },
  {
    "url": "assets/js/2.99d6f380.js",
    "revision": "4c40edb87d9d8280070f793362a89db5"
  },
  {
    "url": "assets/js/20.6976d908.js",
    "revision": "4f273c44d09601dc7b83d910bc757e5c"
  },
  {
    "url": "assets/js/21.4ebc6a6a.js",
    "revision": "6e4ee2959adfb579bd4aa889265e3a15"
  },
  {
    "url": "assets/js/22.a2fe90a8.js",
    "revision": "2be954319d4f09be0e4237218be8fc86"
  },
  {
    "url": "assets/js/23.4b98f073.js",
    "revision": "6e13787489ab77957da5b7b0f0e89659"
  },
  {
    "url": "assets/js/24.d61a0ce5.js",
    "revision": "9e381418b0f5dec47ec3dc5b610ae805"
  },
  {
    "url": "assets/js/25.fffc79c8.js",
    "revision": "83defe7f6e4aff14104cd71a3d319ad8"
  },
  {
    "url": "assets/js/26.49c2b988.js",
    "revision": "8e8d82ac1b2eaf2f6b95bab28f87c302"
  },
  {
    "url": "assets/js/27.4ff29c5b.js",
    "revision": "47cbe690d6fb0cd80422cd59085b61c5"
  },
  {
    "url": "assets/js/28.b483054c.js",
    "revision": "4d673f71e959d463bc3e9bf8b23cafa1"
  },
  {
    "url": "assets/js/29.c68de0de.js",
    "revision": "eea702b043a3a9b8e7981275c556ba93"
  },
  {
    "url": "assets/js/3.921e1c33.js",
    "revision": "16a97f7c6a5561fb97cfb5639a8be1f8"
  },
  {
    "url": "assets/js/30.6e3e8085.js",
    "revision": "4ccd0ced767441ec047923b3ed686715"
  },
  {
    "url": "assets/js/31.0430fc60.js",
    "revision": "d2517b449d078457e442ab43cac00333"
  },
  {
    "url": "assets/js/32.2f79a4d9.js",
    "revision": "12f34d53308cee4a20090b62c554d139"
  },
  {
    "url": "assets/js/33.3b093a76.js",
    "revision": "9337c842a8b8900b06da36c20cdff91e"
  },
  {
    "url": "assets/js/34.bd69074c.js",
    "revision": "6e243e2c4f38501a4704042292aa1f95"
  },
  {
    "url": "assets/js/35.da798022.js",
    "revision": "34a88870d8fc34103cb092308e226f4e"
  },
  {
    "url": "assets/js/36.41bb7a19.js",
    "revision": "1bcff9d1753f8bac94c0d7348f9a68ae"
  },
  {
    "url": "assets/js/37.d5f07500.js",
    "revision": "3a2171bb7f1903f246c604a77da0300b"
  },
  {
    "url": "assets/js/38.054a9d6d.js",
    "revision": "014eab0b7bee9846f6e7b886be8d3f1c"
  },
  {
    "url": "assets/js/39.01c2b97a.js",
    "revision": "d2a634458dfcab80f03612b8ea6260c6"
  },
  {
    "url": "assets/js/4.a0b0a14c.js",
    "revision": "efcbc9d1c3de805d1a284cb979940102"
  },
  {
    "url": "assets/js/40.9f3fb8f2.js",
    "revision": "12405468e43ab8181804c9c897c2fe26"
  },
  {
    "url": "assets/js/41.c44dc222.js",
    "revision": "bf229f6bed498a2eee86b87755292346"
  },
  {
    "url": "assets/js/42.cff2f640.js",
    "revision": "619ccff4b0ed68ae1279c68c4a7f1ed0"
  },
  {
    "url": "assets/js/43.44601c87.js",
    "revision": "2b600c35c745e2650e404848f712653c"
  },
  {
    "url": "assets/js/44.7fc1f8fc.js",
    "revision": "79cf4aefea8a3a2c1dc4247529d2eb71"
  },
  {
    "url": "assets/js/45.8461900c.js",
    "revision": "7ec48f58566c7473a5fdd80283ebe55e"
  },
  {
    "url": "assets/js/46.b2c80b05.js",
    "revision": "92e86ae737beef2c124ffc2c03f09720"
  },
  {
    "url": "assets/js/47.56cecf03.js",
    "revision": "dd026c1ca239be5a28a13d14eecd71f5"
  },
  {
    "url": "assets/js/48.87256c87.js",
    "revision": "b1c322cd09f67eea8d388b13a19fd1a8"
  },
  {
    "url": "assets/js/49.16aa68cf.js",
    "revision": "035867d2722b842418cd4bfd660db62b"
  },
  {
    "url": "assets/js/5.e5a4abdc.js",
    "revision": "c36dc6efed16da61ca577427f99f83d9"
  },
  {
    "url": "assets/js/50.a09c1d4c.js",
    "revision": "40a63a0a13275ea85f65a8de1b03d1f2"
  },
  {
    "url": "assets/js/51.a79baa77.js",
    "revision": "8c498440c9e1f48caa03db0151a8afa2"
  },
  {
    "url": "assets/js/52.b6c27440.js",
    "revision": "f9a9c6304ee92ad8331c89f9340fc5a5"
  },
  {
    "url": "assets/js/53.8dd3804e.js",
    "revision": "d354b21c9cef6074544db7a6adbb9416"
  },
  {
    "url": "assets/js/54.952f8208.js",
    "revision": "b36938767120f7aeb2ac4080299d2b9f"
  },
  {
    "url": "assets/js/55.2689fd01.js",
    "revision": "78f34bb9f83b24ae326f99597294eab2"
  },
  {
    "url": "assets/js/56.985308a1.js",
    "revision": "d1e417c825fef6361ac8d7e2b479a41b"
  },
  {
    "url": "assets/js/57.a2097b67.js",
    "revision": "564193399c29fdc3143efc8adcbc1fea"
  },
  {
    "url": "assets/js/58.862a3008.js",
    "revision": "74c69b4bd80f83ddd7db8bfaa45c2521"
  },
  {
    "url": "assets/js/59.3a688a3d.js",
    "revision": "22926371ece5534a4973a72967e850fb"
  },
  {
    "url": "assets/js/6.0ce2bc99.js",
    "revision": "35a4243a514d7096745de7e82b8456aa"
  },
  {
    "url": "assets/js/60.f9d8949b.js",
    "revision": "cc19182625b499b9cfb4f0f86df3e6e8"
  },
  {
    "url": "assets/js/61.105fedb3.js",
    "revision": "12eb2e9a57a34bb3662b845d16e75cd4"
  },
  {
    "url": "assets/js/62.59556e08.js",
    "revision": "042cf0de9cda8cf464e1c324739910aa"
  },
  {
    "url": "assets/js/63.5d07bf45.js",
    "revision": "ecbe81f6b9b8f8de48b968da0be4c4d4"
  },
  {
    "url": "assets/js/64.c6f3de9a.js",
    "revision": "fb956bea855fc13142f7d247b147e55c"
  },
  {
    "url": "assets/js/65.efb8e29b.js",
    "revision": "d5d066faa4808e6144ef28267c180106"
  },
  {
    "url": "assets/js/66.e2b62cc4.js",
    "revision": "4dba3ea3baec968967fc9b0c0d83c46b"
  },
  {
    "url": "assets/js/67.af82b12f.js",
    "revision": "994c1947b8fda657cd6e98058b9cb730"
  },
  {
    "url": "assets/js/68.59ad7a27.js",
    "revision": "2b56c019778498d09b55765ed9c4bdda"
  },
  {
    "url": "assets/js/69.4596d153.js",
    "revision": "d1169c5d0001c8de8ece001d701a2af5"
  },
  {
    "url": "assets/js/7.dacd278d.js",
    "revision": "2055f305de18228dc068060fa32913ad"
  },
  {
    "url": "assets/js/70.6992ae82.js",
    "revision": "ed6b2d22d3d230a55a10682615bd3cb3"
  },
  {
    "url": "assets/js/71.48ee8e36.js",
    "revision": "7f2f819f34e933cbeb797487af47c046"
  },
  {
    "url": "assets/js/72.411b41fd.js",
    "revision": "0620a5c545a62b8e194593bfdd24af16"
  },
  {
    "url": "assets/js/73.709abc63.js",
    "revision": "235856b03c5a37acefa9a581777543aa"
  },
  {
    "url": "assets/js/74.0d8ba098.js",
    "revision": "9a7d6dfa13cb87b1dc215e0cd795e145"
  },
  {
    "url": "assets/js/75.8323a9b4.js",
    "revision": "aeb076905ca4950a26eeb5cdeda3ba4d"
  },
  {
    "url": "assets/js/76.090fa176.js",
    "revision": "b8ceed8c9ed38ed79c05b52da2fcc7b9"
  },
  {
    "url": "assets/js/77.a6607566.js",
    "revision": "3e3c9887c377ce7c1f1fe7eb6e075f3d"
  },
  {
    "url": "assets/js/78.8338ca0d.js",
    "revision": "c1ddced11ce4d004adbab631b32fb89b"
  },
  {
    "url": "assets/js/79.79245501.js",
    "revision": "1940d31ec836c48a0f6bda2865cbe88f"
  },
  {
    "url": "assets/js/8.30a120cb.js",
    "revision": "8aae6153cb9b27c369a97f637d31e3ac"
  },
  {
    "url": "assets/js/9.3254176f.js",
    "revision": "a91cacb62d27010184173aec2f1ee492"
  },
  {
    "url": "assets/js/app.b0f40806.js",
    "revision": "38b19c6f123088caa5ff603c31325b79"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.4195d6f9.js",
    "revision": "ca62f03b854447c170e6794dd4fc7de2"
  },
  {
    "url": "assets/js/vendors~flowchart.66729e3d.js",
    "revision": "5ba90d66c9fac5030955fc1a877b13e1"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "70c759d5440a4560808dd7a268fbd131"
  },
  {
    "url": "categories/C/index.html",
    "revision": "f148a664366def4be5994437a3709db9"
  },
  {
    "url": "categories/claude-code/index.html",
    "revision": "f0652d24950584759f9a0f605779b6a3"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "820fa1965e644216ad93cc47d840c83d"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "7e439a2f5096d381595072b124c22ed4"
  },
  {
    "url": "categories/index.html",
    "revision": "981785818801ec7d5a0099e5d0627675"
  },
  {
    "url": "categories/java/index.html",
    "revision": "799d15a81b17999257e7d27443cdac43"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f91d1e4f323b09aa40fd04d5d5d0702a"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "2e83c675390cb005adec77dfe8e8eb24"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "0478072143e99dd7d51a6797da525abe"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b2c8a84e500cec2c3b4141248695e26a"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "601689a678d4694f21780313111a5bcf"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "17a007b2581d388764baf1419f70c543"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "246c3761de574592288373508fdded58"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "5a9c6e63824e2896e576de718b82ccbb"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "d219db2169ba42b27d23a2b443ae1566"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c5fd7d7c65aec2a8177bf074e0795f62"
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
    "revision": "d2e143fe2eb7376c0b06025688044c85"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b8e014609d2e6875a4caa38103834e11"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "6a3b2be2c3bc08690fc31280fe319737"
  },
  {
    "url": "tags/C/index.html",
    "revision": "5df925f72c43d46c0b0749b2e5177780"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "736c81369bf309060c3e86127b5482d9"
  },
  {
    "url": "tags/dev/index.html",
    "revision": "08e69d5f9b508e57c740e0029d209601"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "64f5e4d8aa451f2a6e58f66512f33c9a"
  },
  {
    "url": "tags/figma/index.html",
    "revision": "bed8b2859ac3158fef2a5961d1773859"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "d539e23f6c305a291de26fed3cc8691d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "3340c0f2f8844517f7f60a6512cacf8e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a28cbaf7169999e0f15534a35d8a26ec"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "3692e352eec9eca56d0962eeaa47efab"
  },
  {
    "url": "tags/js/index.html",
    "revision": "0bd6aa5e2e72d8d12ef637fef1ba2506"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "c35c1acd35cbb18d05944b6478e340d3"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "e748bf5893dd7f09bbfcd1af63ee71da"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "064cc9515ef0aa35e3ceb863ef61f2a8"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "29247bcb917aa50df3d5c82b22e2c903"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "8345cef3d1daf1fd769b9e97e6fe5fe9"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "f2466f8ea13aab76f6814e07876f3589"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "170e1960fbf4fc87309b1c035203bff6"
  },
  {
    "url": "tags/python/index.html",
    "revision": "47f37e28ee983091a43eacbcdbd7cf09"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "76c536db985d26d78146b04fe3216221"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "23375c3a82a062263a2b5bb92a4e0e72"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "3578feace552053fc8e5ca7c05bbf6c4"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "8e7e7f4b6d8d26bf6ccb436d255f3ab7"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "550d0a30432d680553b61a5f2d4fdc54"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "2b2714971d9e9d65e97deb11eeaebe27"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fda32fd0a1566d54aa554c668634d293"
  },
  {
    "url": "tags/web/index.html",
    "revision": "b9b52726aa4f71dd20d84bc468097512"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "724bf07d029413489de0540e1db661a4"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "0a1f080a1d901c83d4e92cb3ba438924"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "bd54216291949424156f06e510173f24"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "73dcc6cd29087c7c6d1ace7ed674b5cb"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "cc0d36b6167eb184d7848eb3aefc4cf7"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1375a946f75b8b8c2bb2c534776afb51"
  },
  {
    "url": "timeline/index.html",
    "revision": "35be0affa6c66e3f88fc7b40f8721e6a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "bc29cf8ea3ec7a5b4f350956e9f82cd4"
  },
  {
    "url": "技术文章/AI/claude-code.html",
    "revision": "c9eb119901f8b4ee10adf02bfe79b330"
  },
  {
    "url": "技术文章/AI/deepseek.html",
    "revision": "17452b2396e6d5142ff9f77b086f5287"
  },
  {
    "url": "技术文章/AI/figma-to-code.html",
    "revision": "d67be9917ae14e7ba3e08622fd26c7fa"
  },
  {
    "url": "技术文章/AI/openai-api.html",
    "revision": "f94e2ac127e8285ed909cb4af9eba3cc"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "375b3905008c6c699668f1dcd7863a8a"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "bc46db9523ab01ea46a41872ecbde733"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "a13fbac232edbb1b55afa0e091b4344b"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "9adfd52d8b810893b628d31ababf0ff2"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "8a9b385c8d8b90569b0fb5a302c2b09f"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "83cb8bd806db6ff2cfe057c91d1edefe"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "728e4c0f138ff508b718fe3114652876"
  },
  {
    "url": "技术文章/c/VsCode.html",
    "revision": "e92bcd9d506d1a809380804a9933b0d2"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "ca191b75bc1189db3dc2c336a4d61ba8"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "22a82bc0a28b56d96a4be986bc5a069d"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "76bc5a8021cd63d2ec3822435dd942d2"
  },
  {
    "url": "技术文章/dev/shadowsocks.html",
    "revision": "230ee7ef40776cd4f2a06e21d3542b61"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4a0972ecf4e719e9a9a4215b7ad69a99"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "6bb7cfe4472cb258576c35d13e4d2d40"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "b58546f3d5f88694992733e4a28a1121"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "91585d3c507dc3ae5bb8f12f367effc8"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "99b5b1164b6f654e515cd08e409a7f68"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "44281ca2bb8ec680a60a719dc4723077"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "c1710c37369100628173f660d471cb3c"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "7967230b393be3ff93389de8cb73ddc2"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "e5fd0eab9605c3b7cbe5a5af6a48c434"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "ebce170189416639828125b4a7bc4be6"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "fefee5f9b2e5f84f163105dbf3459324"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "d2b32000b2314a228d189dc0281f4780"
  },
  {
    "url": "技术文章/vue/figma.html",
    "revision": "11a3aa2f48d9e506d61c361a3b08e749"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "a31f9af52f86cdfc19007a61b622ffcb"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "7a0fffe70f86fbc9050b3cc334e7799d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0e2d74eb19c06a8ba32aee97f8714a47"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "8509859bf098b49d782236d89f161e40"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "3dea90b7cce632e7dad9ced0f63e5369"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "c230da60cededb9857501cdbddfe6709"
  },
  {
    "url": "综合分享/life.html",
    "revision": "f846540e4cbbed32ee6cf8ba82eb4721"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "4c5846922e5a65a5e3aa667991114115"
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
