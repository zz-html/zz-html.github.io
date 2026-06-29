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
    "revision": "5469d39ca631f4440013bcf723beba9f"
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
    "url": "assets/js/1.bc644302.js",
    "revision": "5b4b6db59085b067748db4e29c375fa4"
  },
  {
    "url": "assets/js/10.aea90504.js",
    "revision": "125fc7bff9d8fb9062213e182a5f2c15"
  },
  {
    "url": "assets/js/11.fcf30aca.js",
    "revision": "f78d9eb0793e1d6d4ca05b5a4e84f925"
  },
  {
    "url": "assets/js/15.e0bae6c4.js",
    "revision": "3735344ed34f57546af0e5d160f2d8eb"
  },
  {
    "url": "assets/js/16.eeb3777d.js",
    "revision": "a0ab99649dc37f4803d3e469cb49b549"
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
    "url": "assets/js/2.9b91346b.js",
    "revision": "f7e51752c99da12919d12061bfb89730"
  },
  {
    "url": "assets/js/20.6976d908.js",
    "revision": "4f273c44d09601dc7b83d910bc757e5c"
  },
  {
    "url": "assets/js/21.4562fe0d.js",
    "revision": "c80d22c675c59132d1e09feeb1c9cbc6"
  },
  {
    "url": "assets/js/22.168cc6d0.js",
    "revision": "765995709ac302dbecfd265ad835fb59"
  },
  {
    "url": "assets/js/23.3051be18.js",
    "revision": "b019febb5b463fb2f7ad9192ee407a4a"
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
    "url": "assets/js/27.70f40223.js",
    "revision": "498646bb2fd90d7587ef73eb5699a7ba"
  },
  {
    "url": "assets/js/28.e0109504.js",
    "revision": "d97754e0fcb6efb5f0ce977b96558418"
  },
  {
    "url": "assets/js/29.795a5798.js",
    "revision": "3c5844652dfd3c22040ffa068670c961"
  },
  {
    "url": "assets/js/3.f3375de5.js",
    "revision": "cc37985c5d20e19414176380bd89e776"
  },
  {
    "url": "assets/js/30.cdd06ae7.js",
    "revision": "eb532747a78ec99f07da99cd2e5110c9"
  },
  {
    "url": "assets/js/31.0430fc60.js",
    "revision": "d2517b449d078457e442ab43cac00333"
  },
  {
    "url": "assets/js/32.d40cbfc6.js",
    "revision": "4bc306ef931bb954fe3ac32ebe10585f"
  },
  {
    "url": "assets/js/33.e010c9bc.js",
    "revision": "deec9f98b959a730a40fd7d56dae0d24"
  },
  {
    "url": "assets/js/34.acd5e5a1.js",
    "revision": "df762631867e4ec9d974800606044e96"
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
    "url": "assets/js/4.476a6716.js",
    "revision": "27c0529bbc5a6006449d1fc479fe54db"
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
    "url": "assets/js/44.6352e6fb.js",
    "revision": "791fb5007844c5264a82734bd0e8ebf9"
  },
  {
    "url": "assets/js/45.9ff7fae7.js",
    "revision": "652905bfc0fa449f674d10aa10308a94"
  },
  {
    "url": "assets/js/46.a3a12ef2.js",
    "revision": "8a1f4b1fef891dadcfc2ded262247102"
  },
  {
    "url": "assets/js/47.58dc56ed.js",
    "revision": "d7fa5dc0281cacfde784e629a2124b2b"
  },
  {
    "url": "assets/js/48.570f95a0.js",
    "revision": "4a6af21f350204115161c8a29a255584"
  },
  {
    "url": "assets/js/49.a1dea7f9.js",
    "revision": "b1e2b9a54457e66e00c4abfdcdd6e0d4"
  },
  {
    "url": "assets/js/5.ed1fa15a.js",
    "revision": "c685e10c86a3fc3f7ec3fd834ab9bc01"
  },
  {
    "url": "assets/js/50.cacc8ff7.js",
    "revision": "bc0e350d13e65f4a102861a995bae24d"
  },
  {
    "url": "assets/js/51.550b04df.js",
    "revision": "1cd6d735468ffa92961adbd2df71e2e9"
  },
  {
    "url": "assets/js/52.adae47d6.js",
    "revision": "b699200be290b4d639d45b6b14c778d4"
  },
  {
    "url": "assets/js/53.5303362e.js",
    "revision": "73e9dd67364b6b682723b224fefea9d3"
  },
  {
    "url": "assets/js/54.9566c666.js",
    "revision": "84ed74a4a3bbd6edc7385cd56cfef590"
  },
  {
    "url": "assets/js/55.3962fcb7.js",
    "revision": "9603f28b9a759aebf9638d310bf15a16"
  },
  {
    "url": "assets/js/56.beedf592.js",
    "revision": "f64954df52d7df1fc0358308cfe6f3d1"
  },
  {
    "url": "assets/js/57.ed3b05d6.js",
    "revision": "3bf396d3b13dd5353214a7bc699ec1fc"
  },
  {
    "url": "assets/js/58.4c6fe162.js",
    "revision": "4a28813ea4a3d28e1561f58d6de275aa"
  },
  {
    "url": "assets/js/59.d93812ea.js",
    "revision": "78d21035687faa386cac227259ce1590"
  },
  {
    "url": "assets/js/6.0c5cf305.js",
    "revision": "0775fadf340784ffab6e56576ed7b708"
  },
  {
    "url": "assets/js/60.eda12b24.js",
    "revision": "1ba68896a10802b811a7a0414be2c70d"
  },
  {
    "url": "assets/js/61.0fd7f1de.js",
    "revision": "10290dce576f3ed3d525fbfd048f0778"
  },
  {
    "url": "assets/js/62.81d3d6a3.js",
    "revision": "3bf7f5837e586b109c8ee8675ca97bc6"
  },
  {
    "url": "assets/js/63.2cac941e.js",
    "revision": "9bb3c23407c240da2a1b0e12054207e1"
  },
  {
    "url": "assets/js/64.a90976d5.js",
    "revision": "4e95812b67652eb6e90c9bfa0926c71b"
  },
  {
    "url": "assets/js/65.43ddc0df.js",
    "revision": "64e3acb28449cbe0c16e1c0a3581d402"
  },
  {
    "url": "assets/js/66.8cf4a510.js",
    "revision": "463ea38e209d47a3701ff25fa248d31e"
  },
  {
    "url": "assets/js/67.10f4e20a.js",
    "revision": "4665de3e83ff7d87bddf3cd78b877470"
  },
  {
    "url": "assets/js/68.34ffdd3b.js",
    "revision": "5e2b808e4bbe772a29324bc794b521b5"
  },
  {
    "url": "assets/js/69.a5d30c69.js",
    "revision": "7ddeaaa939ebd1f2dac66a11cb66dfd9"
  },
  {
    "url": "assets/js/7.b341eab2.js",
    "revision": "b18e03cec3ddc1de984219bf42d4ddee"
  },
  {
    "url": "assets/js/70.9eea19fb.js",
    "revision": "ec16dd83f4e952a311e66afabebfa6d3"
  },
  {
    "url": "assets/js/71.9668a95e.js",
    "revision": "b04bfcf7cb5cb30b10612ee1c82bb48a"
  },
  {
    "url": "assets/js/72.fda2d40d.js",
    "revision": "f7d51aa3b4bc0383bc19a90e36c5c087"
  },
  {
    "url": "assets/js/73.9965e46d.js",
    "revision": "172ca4e6033f6f152eace19970e38711"
  },
  {
    "url": "assets/js/74.2dccf88b.js",
    "revision": "246754840e003bd4b165d453b2aa6055"
  },
  {
    "url": "assets/js/75.a1039d52.js",
    "revision": "e4741fd83da63044efa10914adf02c56"
  },
  {
    "url": "assets/js/76.284edf88.js",
    "revision": "843ffcef21ca13415e3f938cbed281b2"
  },
  {
    "url": "assets/js/77.2a74580b.js",
    "revision": "774e174be59e86fe7bcdaa9b26bc8741"
  },
  {
    "url": "assets/js/78.3e595996.js",
    "revision": "66536bf7909ead7c15e38a25694612d5"
  },
  {
    "url": "assets/js/8.30a120cb.js",
    "revision": "8aae6153cb9b27c369a97f637d31e3ac"
  },
  {
    "url": "assets/js/9.0cc6462a.js",
    "revision": "7f725f6ddb587f5b2dceb6021a7fdf94"
  },
  {
    "url": "assets/js/app.64f2d9a5.js",
    "revision": "6772ddd3aca1cacb5608537ce3d211fe"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.3de44574.js",
    "revision": "ade545d58832b9a095d6f49210ebdf48"
  },
  {
    "url": "assets/js/vendors~flowchart.68ced3bd.js",
    "revision": "a73b2840801f576da4ad00db680ee367"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "da7492f5213b879ad728fec45477d137"
  },
  {
    "url": "categories/C/index.html",
    "revision": "76695f595c73b01ca999befd15ff298b"
  },
  {
    "url": "categories/claude-code/index.html",
    "revision": "7a547aed18d594e152b7ad9c39c0d4e6"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "9211ff28d6f2c51360b1dbceab853d1c"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "a6d8da0a2845163a4bb3f4388d9a6ace"
  },
  {
    "url": "categories/index.html",
    "revision": "c392255cebe8491868c515f207453fc3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7f89390150e631036b6874a57fc4e32e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8dbe10cfe6d9e7a5f1a17bd470dc6fb2"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "634ac5ccabeea94c6f027deb5bd707a6"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "4417196bcf77fd9bf843611399bb0f52"
  },
  {
    "url": "categories/python/index.html",
    "revision": "166e4243ecc601b33467f53c86b2a8f4"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "08d092ad9fe9832ef52febdcc31a05e6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "06b17377b0e2141d5c2a6ffc078b3bf8"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "e7094f2b09a9f2a28a8b504712e83735"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "784c6dfbc4863e9977aeb7e3a1a6d400"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "432385dabd6d8f0cabea6f33cde28718"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7d92b9d529f5109fd3aab8bafb678d6a"
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
    "revision": "e5e4bda62bc0221108377dc744942cc4"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "71e52734dc308fce30c55c3f4437bb3f"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "f3f8031b3ee28bd69bf73203114a4160"
  },
  {
    "url": "tags/C/index.html",
    "revision": "bc7853ecde68d3e05a1849b17e75ba61"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "179143192ec6f9c66fd8514dc2de09b3"
  },
  {
    "url": "tags/dev/index.html",
    "revision": "1eca05ba1285f01b5297ed626a20ecb0"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "00ee63055a9987da3d9b985fd7e657b6"
  },
  {
    "url": "tags/figma/index.html",
    "revision": "6143da02a9cbe8b96a74524dcf44dfcb"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "5846cabf6235739ff6cb24a5c2e0bb45"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b44ac417acc3d74fe53cfae9354567c5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d7d185a5cebfdea22be9a3cdd0778fae"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "e62268007393f7de84f60cb00ccbeb85"
  },
  {
    "url": "tags/js/index.html",
    "revision": "56b595b4bc07e4034973b4c9907b7724"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "d42061543abcfd6f7521cbd21b77b702"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "fda90e22d801d59cc6ddb1c70ca70678"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "bf9af83c5f8519f158d2dc9f271712b7"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "a56e22aa45258cec9af45e67dd4b7b2e"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "2fdfccf668e559aabfd6b1712332c2a3"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "a02141c4dda3531eab491c447758e3ca"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "e54cf036025b706be455836ddb4f7954"
  },
  {
    "url": "tags/python/index.html",
    "revision": "406b4d7174cc3825b3c1518f47c59f68"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "fd0fe2f95b7a14741bc2bd9d96971160"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "091d5fa85d27bceae5cbf2fab1e06b8e"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "0ad464f49711db9812ca5e7d7d4393cc"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "fd01b3e45f81c5ea2c26f9c4cf61702c"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "34749ec50c7a709362df88261d6763f4"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "d069f2e0c18c257ec30fa63559e43df9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8f8f77d6bb62da37c07a51f53d20a7f2"
  },
  {
    "url": "tags/web/index.html",
    "revision": "fe0d2353d1d12e7c70bc7c0c9f0aed13"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "de18b02a7726b1e78d5a0ab41178a3fa"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "0cc849cd8545b401d00763dacbe0349a"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "183ddcd0c82f08b32c691519954c5738"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "b186687691cfa55d425d2164812d6b83"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "afafc9ed2e859879d201abd33925c19f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4079a0a1150fdaae16a3ad53c8bf5fc1"
  },
  {
    "url": "timeline/index.html",
    "revision": "6f9e994e39a751fd5812c1e00c320b76"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "c334e1faec7833279455f499b1ad2ead"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "0fd8053e35ee3f369700627d97777773"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "e46eac7e9f00b8d814832e54a96f8e2f"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "ea3794a9f91767999508a33af89f0328"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "696521fe1f6c07c6478acd695e2ade98"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "151efd74936e71dcb3cc763f3a47eca7"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "533253e1818a826209339b6882ee9759"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "55402220eef6d8880587d3a69122725d"
  },
  {
    "url": "技术文章/c/VsCode.html",
    "revision": "2d1ca72a67ac23170d4467dc72919f87"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "5dc71f055948783de2503b7e2006cb44"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "edf22b86a3682337f186397ec26eb112"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "f0e098522542610c9d3cf473bcb573b8"
  },
  {
    "url": "技术文章/dev/shadowsocks.html",
    "revision": "4387d640d2d83b100b9805576d6adb49"
  },
  {
    "url": "技术文章/index.html",
    "revision": "425feaf79840ce44296b3f0add3ef7b9"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "3a464ebc314325aa0ae75ab27b7264de"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "efbae47f486595b26fb08f5659e51a0a"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "c4bc9588d4ffac3ab3c632a14d7cc81d"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "711e425fa8a1c237d5cd65acad4ca15e"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "8b78236f01fa5175204aed99b0e25df7"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "64ec6b8c929132f024be2cdd418135a0"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "1a7ecd2dddc916d5ac47293c6a3aac0c"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "617b6c300476b0f00ab2388c21ce15f1"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "29b10f60766b1e893c96b42f5513eb4d"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "e2d91200987c197d817cfe02ccf7c8bc"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "ed00a3b0f1a634ffd886fd94e344d0ea"
  },
  {
    "url": "技术文章/vue/figma.html",
    "revision": "657f827ef7784f483d44bdad56a464ca"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "14976d48a61c453382fce47246797eb3"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "06629d104dd241d606ab44ae2f37d1ee"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2349b4b7bcff129b0bd030a0ab4d443e"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "c449b17f185f41e808f96319a7f10591"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "d81dcba805f3d0e823aa6262a0d8d663"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "cc64fee8926a35a8a058da1f252ee2a3"
  },
  {
    "url": "综合分享/claude-code.html",
    "revision": "814ce85d7dc22326fa5a2645b86c702f"
  },
  {
    "url": "综合分享/deepseek.html",
    "revision": "f99548937b789bde32e46fd42d294827"
  },
  {
    "url": "综合分享/life.html",
    "revision": "78fb9a22f4c6bcd21f0702da5de1ee4e"
  },
  {
    "url": "综合分享/openai-api.html",
    "revision": "c900e95709c3fd43028c08d625ebeb74"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "58a02eb1a2f1b820ad9c7d996d45dc3d"
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
