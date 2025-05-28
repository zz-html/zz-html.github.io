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
    "revision": "8b681e7a5bfdbe9beb240a9bc35b8c39"
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
    "url": "assets/js/10.6839acd2.js",
    "revision": "d470921539930aad5df61a75fc20e728"
  },
  {
    "url": "assets/js/11.b689a2e0.js",
    "revision": "055c962512e33dab7b0ed4e1b7575139"
  },
  {
    "url": "assets/js/12.1869f775.js",
    "revision": "b95c41596673fc0ee2bd9e21625010ac"
  },
  {
    "url": "assets/js/13.b84fcc4c.js",
    "revision": "713214054332ef1641dcd13ab9519941"
  },
  {
    "url": "assets/js/14.207f7a2a.js",
    "revision": "57b9d187b19b04c710fae4a8144907f5"
  },
  {
    "url": "assets/js/15.0180aa79.js",
    "revision": "4aaeceb33ac9336b059010c0e8359294"
  },
  {
    "url": "assets/js/16.ccd3a028.js",
    "revision": "af02c87ca338287a9e302dd2d2b04682"
  },
  {
    "url": "assets/js/17.ae8d1fd8.js",
    "revision": "ffaacd1ac6f84f452291b4df17c60412"
  },
  {
    "url": "assets/js/18.bcb88a4a.js",
    "revision": "3953096dcfd85489878b46894dbcbc88"
  },
  {
    "url": "assets/js/19.21fc1d04.js",
    "revision": "b6479a00155e7521ec28f942993383bb"
  },
  {
    "url": "assets/js/20.9788aa0c.js",
    "revision": "5c6a1a0eca38763115d3a5f90291e199"
  },
  {
    "url": "assets/js/21.3301b0bb.js",
    "revision": "3441d605ea12d4d8186ffa9f2c3cf08b"
  },
  {
    "url": "assets/js/22.45c52a94.js",
    "revision": "3b865ee67bbb41f42edb431408b1e9d3"
  },
  {
    "url": "assets/js/23.517bf997.js",
    "revision": "94561d8ae46dafeca69802fa2ddcd9b8"
  },
  {
    "url": "assets/js/24.68a2c6b6.js",
    "revision": "01014846239f0f765930fc4a5512c13b"
  },
  {
    "url": "assets/js/25.aef84d7c.js",
    "revision": "00b5347c8927a81b90976dae1fed5fa9"
  },
  {
    "url": "assets/js/26.be82726f.js",
    "revision": "5fbb3f36d9f05661b0f2dc3d04dee4cb"
  },
  {
    "url": "assets/js/27.cf03aff7.js",
    "revision": "5f71e5d84e9eba35f2863133609dbc1e"
  },
  {
    "url": "assets/js/28.2238f3a6.js",
    "revision": "772d51cf0fea54ebcbbf3b8907e1d135"
  },
  {
    "url": "assets/js/29.8d2fe34a.js",
    "revision": "c0e7a99de0f32431ab8e06af83d80891"
  },
  {
    "url": "assets/js/30.9a1d8ad4.js",
    "revision": "d6c701ad85613d5bd2d533eb7cfe8449"
  },
  {
    "url": "assets/js/31.f0dfdfa9.js",
    "revision": "cef27e7594ac2d208df4d445e39a7240"
  },
  {
    "url": "assets/js/32.f142622e.js",
    "revision": "e8c7c7dd4c443bffa33369f3d9a4ff8f"
  },
  {
    "url": "assets/js/33.97eaa923.js",
    "revision": "662b04b83284cf747ccd546597be2c72"
  },
  {
    "url": "assets/js/34.78caf584.js",
    "revision": "474b9b1f5fb7386346ee519cc8fd5bdd"
  },
  {
    "url": "assets/js/35.1420ef38.js",
    "revision": "cc2917185332a9600d427e75018e11c1"
  },
  {
    "url": "assets/js/36.d98b7037.js",
    "revision": "ba79176bcd47585e21067f4ed033dda0"
  },
  {
    "url": "assets/js/37.41dac4c6.js",
    "revision": "ce8fb5e0fcd7e84018e48657998fa75d"
  },
  {
    "url": "assets/js/38.bef869f6.js",
    "revision": "ec09c12666f81fef8d97d769dc55a42d"
  },
  {
    "url": "assets/js/39.1deda54c.js",
    "revision": "84513fcd1ad2974b877e19344362232e"
  },
  {
    "url": "assets/js/4.43c06e6e.js",
    "revision": "8cf6c6dab136998c8638d680441277f4"
  },
  {
    "url": "assets/js/40.b5e04153.js",
    "revision": "5b3a8f44b8ff0f8e5ae7bcffa3f9bf0c"
  },
  {
    "url": "assets/js/41.3f363451.js",
    "revision": "ae66e471fa7d8c4e69bd12ea8b8e4600"
  },
  {
    "url": "assets/js/42.d0a76721.js",
    "revision": "d7a82686064a8dcd2f499fdb02141ac9"
  },
  {
    "url": "assets/js/43.806a59f7.js",
    "revision": "5fb48b6457de0bea86e644b481b1dd9d"
  },
  {
    "url": "assets/js/44.8fea4e7a.js",
    "revision": "e2052b1804f0d28c1cb308b927faa9d0"
  },
  {
    "url": "assets/js/45.af142ba0.js",
    "revision": "ce57c480fa540ce7853f9292ec97fd9d"
  },
  {
    "url": "assets/js/46.65275d72.js",
    "revision": "613e67c57908f423afeba3396b053782"
  },
  {
    "url": "assets/js/47.f8831aa4.js",
    "revision": "05496e7824667d87d7d4528ebda8050b"
  },
  {
    "url": "assets/js/48.9b10b912.js",
    "revision": "bf321c6062ca06c7d07ac04d732da5d8"
  },
  {
    "url": "assets/js/5.0b52abd8.js",
    "revision": "86ddf29dd4754e431b3399d003d04e25"
  },
  {
    "url": "assets/js/6.425624a8.js",
    "revision": "add6df352d197bcf0c64088deedfe6aa"
  },
  {
    "url": "assets/js/7.bf7f0b95.js",
    "revision": "3620ed4859ec2a0c9a9b7a684feb0046"
  },
  {
    "url": "assets/js/8.a3d8f059.js",
    "revision": "8e5f155472e826b6305918c4cba10124"
  },
  {
    "url": "assets/js/9.eded2783.js",
    "revision": "3dc1eed5424bdc99eeb80d6a1cddae9f"
  },
  {
    "url": "assets/js/app.0fccf0ec.js",
    "revision": "24cb62e0be653d24e8f73f893e7fd2ca"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.ea297bee.js",
    "revision": "57b921b22c82eb56cbef52d291f6a154"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/AI/index.html",
    "revision": "8ab3d18d4d881091646dc7c1325d7023"
  },
  {
    "url": "categories/C/index.html",
    "revision": "fa589527ff2df412705d69646bdf4fcf"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "2412f3c28f1007f56b6960eb5073e579"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "073a14f6bf210989e252baafaffb3c69"
  },
  {
    "url": "categories/index.html",
    "revision": "77cc0ce0392c6703de760a8cd4734932"
  },
  {
    "url": "categories/java/index.html",
    "revision": "db576b8d9541b447237fd67cf2c1e01d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2c4bbffd82e34c8f59eaf667ea6c6608"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "4d31ccf669319a5d3c0f30fbe7f7a6c8"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "686659b58abf9f23637abbb7a2078bcf"
  },
  {
    "url": "categories/python/index.html",
    "revision": "bec1645984ad723b8aaddbd3f669773a"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "2bc6563eaaf22bc9653075afdb099d3b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f0f182382b019b3239e544ea3885fb8a"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "abb1963f4e52d917283321b2e2b06345"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "b5ae05cec7e2b284626df1413563f235"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "ca63fe186963cb2582eeb89747ce482a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "caabc7cebb64e18c25865abd9a13e611"
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
    "revision": "9e61bc65c7eaeca299f61e1205243968"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "15a198efdcf8b810366d73bc53750412"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "9fafd3a1c53d6209705d39492391cf50"
  },
  {
    "url": "tags/C/index.html",
    "revision": "80cb393ec0984909ecd05fea514a04fd"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "c3be2398dcbd02072a4423cc333c4bec"
  },
  {
    "url": "tags/dev/index.html",
    "revision": "8fefdc49de328ae372420b390bc7bf04"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "ce22345dc769f7799464f63be197fbc6"
  },
  {
    "url": "tags/figma/index.html",
    "revision": "ec57b0bf684fd1d14657146268ecc9e4"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "71e6e8333fc31a0bab39fecf527a5b29"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9be6b8e7390058cf8e81f2f9e47b72b1"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "84001fd2596ebb28ff1bafdfd0c0df38"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "d92a7884977f41e5bfe9a752d1f17c81"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a1f5e91703e9f2e04064d688050369a8"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "8ef397eaae7c9f906c4d6787f0eec7eb"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "0d17042b4587fa5960f663c7ae195f53"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "492dbc29af474c3ab9cd4af076ba1128"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "70a7d8c79aeb12228a2ac2b4277b1541"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "23c237e444f096e07f1781885b19d61b"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "60ec4379acbf3773d76aef67fe43535e"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "75c431da85187ccfbe5a5dc36322172e"
  },
  {
    "url": "tags/python/index.html",
    "revision": "8097d1e2b6865cf642f1af065ab9992a"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "63971437dca84a0039a5e4433a653791"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2590e6883eba8b5d5de87f7bf5b15ea4"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "6f858bda1536312dc03e2547422e2ee2"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "28702da18cd5095e826ad48ec6946696"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "5669446261e066ecac1fc82e0c6de919"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "6bb89bf118302ad8e259d00e72248659"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9994ca00638ec9069c1a829a3315c256"
  },
  {
    "url": "tags/web/index.html",
    "revision": "45c2aeee5bfcbc62a104df63e62f37af"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "5311800e20c70e5c2e77ca396cf9d3b7"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "7a0d64125144535aa9cd50f6e216f708"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "dcd83f8e4c761dc8f970a0fdcf313093"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "51e17bc086aba3934224b4185bb2b270"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b94b918f13bf1525a296ccbeed64ab4f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c5db4087f678bdd8bd64680093fe570a"
  },
  {
    "url": "timeline/index.html",
    "revision": "d6b2ddcf94020aae251f90a600c04a17"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "73160f11fea5f10a35c74ca1b10e6b75"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "35314498cffabe9bc9cea1f6f7644749"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "65d18d020e66c41b61e6d326c66524fc"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "031b27ea468b0961355201ea35455563"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "51b1bfd4f312c8440d9764bc74d5f5cb"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "2617c70f8fc7a1c7f160d835de80dc0c"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "ffc4cdf152c08505dbcd77b2a3ce7091"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "a055a4f80e884f402b84eee6d64f3967"
  },
  {
    "url": "技术文章/c/VsCode.html",
    "revision": "a7ce8a1e41d1cd1469607c8f47b5d99a"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "ca2bb1080198351b7ad3b2b690c4be73"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "27343c1a0fa23817b8cef9270651f568"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "dcfded414672142050a827a185d99ece"
  },
  {
    "url": "技术文章/dev/shadowsocks.html",
    "revision": "64603d2674cfdefeddb9861c92aa7ec2"
  },
  {
    "url": "技术文章/index.html",
    "revision": "bdefcde3d93ba6b8932bcda66f0db3b8"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c291cb7734773987766f1542a1a78ac3"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "6da3e1e1b54777e35b90ba759acaedbc"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "dada95936579a86ffa0f1c77be0f02fb"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "67b1750bd79114d7e1f9efb469fe03fc"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "2f53396c681b3aebb40c1974190a398f"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "58fce689bbbc5f9cd7298ef70db66d57"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "5c193fbac2bda02091774f3ba0749913"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "acb78a037362708c33fb0399d9cc4d5c"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "6b8d47c2d8bc99ea25808ff330b0cbb2"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "f8944387180eb960f671860cfbe2417b"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "db5e02ee0b5163b8df799ba5b73fad2f"
  },
  {
    "url": "技术文章/vue/figma.html",
    "revision": "6806d073b64dba3a4016a40a5db17396"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "39b2be87cb2957d3c6ac62321493de53"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "73dc0df82e8e499f439567e913deb42d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cefd417e8706fca3d10b7944c355df3d"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "c01cd31fbd9fdaed08b0cb6a58dea0a2"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "ee71479d24bf29548f2e812baf372804"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "01536f59c1be12bc89fc3cb0e2e971a3"
  },
  {
    "url": "综合分享/deepseek.html",
    "revision": "8d87f8215d8a429176d2b230bd8ed158"
  },
  {
    "url": "综合分享/life.html",
    "revision": "aa023c85fbfa90b8b0848dd32086ec91"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "4c3fc2d8855be13379f6c86cb683da84"
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
