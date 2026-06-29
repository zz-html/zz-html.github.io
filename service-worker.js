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
    "revision": "55d3aaaf52750a527ce6c62d32c7b1a7"
  },
  {
    "url": "assets/css/0.styles.1dd3b73a.css",
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
    "url": "assets/js/1.8acf92f4.js",
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
    "url": "assets/js/15.482f0343.js",
    "revision": "3735344ed34f57546af0e5d160f2d8eb"
  },
  {
    "url": "assets/js/16.fa914ec9.js",
    "revision": "a0ab99649dc37f4803d3e469cb49b549"
  },
  {
    "url": "assets/js/17.d131bf72.js",
    "revision": "1573222cca77e8c192b9a4eab7a09517"
  },
  {
    "url": "assets/js/18.0d7be3bf.js",
    "revision": "dbe77adac8549fe746a32f6b594860c7"
  },
  {
    "url": "assets/js/19.d290c842.js",
    "revision": "adb0dc752d16b3cd38fc69de95de4c75"
  },
  {
    "url": "assets/js/2.b438d5f2.js",
    "revision": "f7e51752c99da12919d12061bfb89730"
  },
  {
    "url": "assets/js/20.4589c25a.js",
    "revision": "4f273c44d09601dc7b83d910bc757e5c"
  },
  {
    "url": "assets/js/21.dad54926.js",
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
    "url": "assets/js/26.9353679d.js",
    "revision": "8e8d82ac1b2eaf2f6b95bab28f87c302"
  },
  {
    "url": "assets/js/27.f7f68f94.js",
    "revision": "d5ed132a8cfb230233be2a8f6d1b8746"
  },
  {
    "url": "assets/js/28.167be72f.js",
    "revision": "d97754e0fcb6efb5f0ce977b96558418"
  },
  {
    "url": "assets/js/29.f7ed90d0.js",
    "revision": "53d56f76a44f161e0bc62d8d087550ae"
  },
  {
    "url": "assets/js/3.98987245.js",
    "revision": "cc37985c5d20e19414176380bd89e776"
  },
  {
    "url": "assets/js/30.f2e786a3.js",
    "revision": "c9fbb8a72ca7a81424c33b949b7a7255"
  },
  {
    "url": "assets/js/31.f58c769c.js",
    "revision": "d2517b449d078457e442ab43cac00333"
  },
  {
    "url": "assets/js/32.71cfc47e.js",
    "revision": "6580bbad44e0c5185fafce71f684abe8"
  },
  {
    "url": "assets/js/33.b84294f8.js",
    "revision": "540da26258b7b26364d490efcce16a9d"
  },
  {
    "url": "assets/js/34.31e32e01.js",
    "revision": "df762631867e4ec9d974800606044e96"
  },
  {
    "url": "assets/js/35.da798022.js",
    "revision": "34a88870d8fc34103cb092308e226f4e"
  },
  {
    "url": "assets/js/36.a87acd90.js",
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
    "url": "assets/js/39.4bb57c04.js",
    "revision": "d2a634458dfcab80f03612b8ea6260c6"
  },
  {
    "url": "assets/js/4.d6781816.js",
    "revision": "27c0529bbc5a6006449d1fc479fe54db"
  },
  {
    "url": "assets/js/40.1a6affd1.js",
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
    "url": "assets/js/44.d0fb39b8.js",
    "revision": "efe8d531d751b04b6367677e3e5b02f4"
  },
  {
    "url": "assets/js/45.7deef957.js",
    "revision": "0d886da809bbca25fef7e0dfc8c9d893"
  },
  {
    "url": "assets/js/46.180f29d9.js",
    "revision": "b0399e35e8f69c1efaa730474658a1e8"
  },
  {
    "url": "assets/js/47.ee9c7506.js",
    "revision": "c92301cd773858ebc196dcc2bddfb351"
  },
  {
    "url": "assets/js/48.2c2e3066.js",
    "revision": "13085f30c81edbdd8a82fdc6145f0d35"
  },
  {
    "url": "assets/js/49.16a40d0f.js",
    "revision": "6aa2fa4927d35e6e9525f007da1a4edd"
  },
  {
    "url": "assets/js/5.b7c69d3d.js",
    "revision": "c685e10c86a3fc3f7ec3fd834ab9bc01"
  },
  {
    "url": "assets/js/50.d995dbbe.js",
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
    "url": "assets/js/53.61a3605f.js",
    "revision": "ecd3d4a5256f444fac52f1ace22e56f5"
  },
  {
    "url": "assets/js/54.02e00200.js",
    "revision": "4a8f1abf0bd9bf2fa1cbc36b8b5cc561"
  },
  {
    "url": "assets/js/55.0fd8db62.js",
    "revision": "26513054d6f51789b500eae0453a8025"
  },
  {
    "url": "assets/js/56.7e363387.js",
    "revision": "feb6c742cc5ac8b8b4470200b48ded70"
  },
  {
    "url": "assets/js/57.6714477a.js",
    "revision": "3bf396d3b13dd5353214a7bc699ec1fc"
  },
  {
    "url": "assets/js/58.03c6f802.js",
    "revision": "dde5e203b657ef43fdfb9c5ee1964968"
  },
  {
    "url": "assets/js/59.d7de4c1d.js",
    "revision": "142963c04587304b8f1ea98788b9a556"
  },
  {
    "url": "assets/js/6.1b37d758.js",
    "revision": "0775fadf340784ffab6e56576ed7b708"
  },
  {
    "url": "assets/js/60.0cf56014.js",
    "revision": "c7516ed57eb9b677d13d9a475cbd2db6"
  },
  {
    "url": "assets/js/61.0da67bf0.js",
    "revision": "c92018d415aec4786034ec34c6dcaf2b"
  },
  {
    "url": "assets/js/62.a44fec1f.js",
    "revision": "c722693e77c3e003a2b9fe53c8a3d06d"
  },
  {
    "url": "assets/js/63.9dbf5e7c.js",
    "revision": "8d0eac142a9e8326a736a1e840a3ab22"
  },
  {
    "url": "assets/js/64.383adb6e.js",
    "revision": "4e95812b67652eb6e90c9bfa0926c71b"
  },
  {
    "url": "assets/js/65.9c27d9d8.js",
    "revision": "64e3acb28449cbe0c16e1c0a3581d402"
  },
  {
    "url": "assets/js/66.a401c6da.js",
    "revision": "f4e03613fb4eacd3cd1040d78143c37e"
  },
  {
    "url": "assets/js/67.d02e23f4.js",
    "revision": "d946792928a50f51d44eaf1dbdf0f051"
  },
  {
    "url": "assets/js/68.87acaa03.js",
    "revision": "de75274185d82c0387876816b799c362"
  },
  {
    "url": "assets/js/69.22e726bf.js",
    "revision": "7ddeaaa939ebd1f2dac66a11cb66dfd9"
  },
  {
    "url": "assets/js/7.4df40ea5.js",
    "revision": "b18e03cec3ddc1de984219bf42d4ddee"
  },
  {
    "url": "assets/js/70.303b19bd.js",
    "revision": "c1ddef3bd5f896af20f27df41ccbcf92"
  },
  {
    "url": "assets/js/71.ca3056cd.js",
    "revision": "31b5c0d15fc15b6977aa97a0dbbf3a73"
  },
  {
    "url": "assets/js/72.cf9fb7da.js",
    "revision": "9bf130c1a5a55f2862dd1c303917799b"
  },
  {
    "url": "assets/js/73.2c38b4be.js",
    "revision": "53e4605831ca6c3cf3d96665519429e5"
  },
  {
    "url": "assets/js/74.d3359de5.js",
    "revision": "0b372779abfd5eeed96738d1f0d9bd91"
  },
  {
    "url": "assets/js/75.ac400ada.js",
    "revision": "c1d9032e2287d89277c301d0fbe4a225"
  },
  {
    "url": "assets/js/76.6871d264.js",
    "revision": "6af865eda43d282872b3eedea983adc1"
  },
  {
    "url": "assets/js/77.bd503486.js",
    "revision": "5b9663dacd04cea831a16355d93450e5"
  },
  {
    "url": "assets/js/78.5107ff99.js",
    "revision": "23cc9341697cd6e673ffce194e14c79a"
  },
  {
    "url": "assets/js/8.30a120cb.js",
    "revision": "8aae6153cb9b27c369a97f637d31e3ac"
  },
  {
    "url": "assets/js/9.b9d754ba.js",
    "revision": "7f725f6ddb587f5b2dceb6021a7fdf94"
  },
  {
    "url": "assets/js/app.be0528bc.js",
    "revision": "ab5a7f8ca0eaf2ba3e1b65d2f0aff72c"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.c1e67d87.js",
    "revision": "ade545d58832b9a095d6f49210ebdf48"
  },
  {
    "url": "assets/js/vendors~flowchart.6ef9577e.js",
    "revision": "a73b2840801f576da4ad00db680ee367"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "0f518fcf82401e75d7ecb4258d879944"
  },
  {
    "url": "categories/C/index.html",
    "revision": "7fb08cbc627f7ea056f513b67aa85701"
  },
  {
    "url": "categories/claude-code/index.html",
    "revision": "adc824c6ad50cd77ce90025ae3d32a10"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "1d4d36566f0a2ac0a726a3ef72e4b161"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "73988cd6a97a1ffd260f70133829c4e5"
  },
  {
    "url": "categories/index.html",
    "revision": "9fdc6d496c505c5b9a9b0ca63d9380f8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "957a69b8ad6948e00215043c8d2fd1a0"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "ff65799894ff099dada16ca54235448b"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "2cb239de2af1828008d2b6c3244d3c94"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "e279e9d04af78a05f5cbb46bc609dcbd"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a3c680203ba722fca8bd7d56c428a3dd"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "78786e9167ae24aa52b28661a98edc9c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1d67bbd6a43d356c6ea9e5d50c22930b"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "0a3fc95d744ae60a158008c44323ea64"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "d90b0c9b67e85282c719b2614ae2e76a"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "02658c89599183bc8d2bbe0d7b6af8d1"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "0c663061947b1398957bb28f27691db3"
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
    "revision": "9a785e87534bdb4624b2117a33632479"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7629395de490ce5d476e8edaf06d6fbf"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "e33f1b6d95174a613b1763abd8168ab6"
  },
  {
    "url": "tags/C/index.html",
    "revision": "e246e0900c06445c0b93083c0ef3ed5d"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "8579a5405c056ed189f48781567ff18f"
  },
  {
    "url": "tags/dev/index.html",
    "revision": "147f6e24f949a28455fc9eeb80c43264"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "b4e7606eb1bb370fd547540a06339d9e"
  },
  {
    "url": "tags/figma/index.html",
    "revision": "87bc2c064b1a6e2613528a8dc9d5e54b"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "fdeb6d260013ad87d09006727c202dd3"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9e5da39c74339de748d932d4c8d0864d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "93afa87d4430bd433dd2069b2fae2848"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "05d903bb89c0df6c267d6c9b671e3a8e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ffbd6f193bc57a81fff834c9a78f7e22"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "dad5f6866a00737a27bf08a5579e30b8"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "25977f41ee2a8dbdc2e083f2321ba4ec"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "3dc45b5e196fbec87e75745adf9354c3"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "6eec17dd60a56f9e81364ec139029140"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "32a890ef68786d8f103a73b7c8f1020e"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "6c76f14f57b167898f676ed436539573"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "4dc93c897789e8da11a0165fb074fa8e"
  },
  {
    "url": "tags/python/index.html",
    "revision": "04cd525ae76afa6dda07bd1bfe4e6ac3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "660c5b3eec6de6899365c2d57026fa99"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "86352a5fc33c0ba4c97deb9d4b7efad1"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "3bfedd9ffbbcfe6cce02b6482c6d62cc"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "5f8ce3c9e2bc0ba2e585dde0dae5dcdd"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "e55cc89be7e0197264425faf13559f20"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "5fc60cbf8c7322fc06bb97c853d244ce"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "34b88a548904593ca8bde7c2dd8341c4"
  },
  {
    "url": "tags/web/index.html",
    "revision": "d3dac7a39507e4e622faeb1b4b81035f"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "283498f1603806a76811f471732fd87f"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "b24cad38c6ba2760f602266ebf7593c1"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "bc6fe78eefbc550b1898cdd32ec2a0d7"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "c73bf6baae286f622ca224b61c9c45f2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "eb6e5d8393083d70d720612820df9509"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "a3c859eeece474793d7af8b0222fd381"
  },
  {
    "url": "timeline/index.html",
    "revision": "c19d7617bd55cee023de28addca05dec"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "d3f5d71428162c13dd4702b51c0ee745"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "777dd612f1bb8e04a8c1c1fa1c228d52"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "e721d377076818e87b5ae4a9dd67bfbf"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "981f2c731bef75f157608063bc7d7ad8"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "04279fd409d797b820f77b52f23a7118"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "c55bae3002d7fb6ba28a1cfe87a2caff"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "3db31d935579578753fe9b020ca1ddaf"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "883b98a6fa007ac2f5e852794cf4126c"
  },
  {
    "url": "技术文章/c/VsCode.html",
    "revision": "78666db86ba1f66f40532530141ae655"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "b369ba3099804b06e6bd670c772d7c09"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "54cdb7f23409e0ec9f97b17ef1e56908"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "9252d30739e0b4d877c644b061cc61d4"
  },
  {
    "url": "技术文章/dev/shadowsocks.html",
    "revision": "a1cc25cad537fa832c4d44b81e9eb65a"
  },
  {
    "url": "技术文章/index.html",
    "revision": "bf41261494a548e247c55a2da2728378"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "36219687ca3abe7f6d8ad3788f1e6d88"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "7dc2de902d8632ba0c70138924704cf8"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "203dabaa4ecef08cbef61690e385cd8c"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "1401c1975fd723bc65fb5eb71a0a9479"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "dbe6d7aeb678090de1284770ae74fc2b"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "9040d88094389e68ee9ca3cb24cfebd7"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "36cc7bf6320c266829f7773e7fe94812"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "44d683471a669136b6624275967800ee"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "0355568e2ff44c22a72efe4a46e70f48"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "cd4ae4a00aa8d18068a906af0c082683"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "a2e11bb23653862b68217bea5a5e1471"
  },
  {
    "url": "技术文章/vue/figma.html",
    "revision": "292dfadd22aae6eaa95de9e28edc224a"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "60dcb6665b5d06d32e2e7c06bdef5f6e"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "7825d0f41794cbfc124e5fd7778fa43d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3dc72d6d7dd7bc3745a5f53b4a678ece"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "455c41d236cffabfc08c5a7ab5c8364d"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "bffaeafa2036b452f135107dcc03fcee"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "c103d5e7d9b0971dc13170a8f147786c"
  },
  {
    "url": "综合分享/claude-code.html",
    "revision": "2181047af087fac846da55a9e31b6b5a"
  },
  {
    "url": "综合分享/deepseek.html",
    "revision": "0eba823ce5ae07efd13cd8233e5e3ac4"
  },
  {
    "url": "综合分享/life.html",
    "revision": "8e7c5709f05944fc8f0856cb79db256a"
  },
  {
    "url": "综合分享/openai-api.html",
    "revision": "c82d5fe70f0ec2011d3942f2b23d37e8"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "39fed8e2ffcb06721cd96179491ef478"
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
