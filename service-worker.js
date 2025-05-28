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
    "revision": "fce1ee38fb373b6b5ee9e83fd016b209"
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
    "url": "assets/js/12.6fa8bbec.js",
    "revision": "17948a4adef56af833d046e8b8a57864"
  },
  {
    "url": "assets/js/13.b84fcc4c.js",
    "revision": "713214054332ef1641dcd13ab9519941"
  },
  {
    "url": "assets/js/14.f265d961.js",
    "revision": "0491b16641e05ada58c1d9e25ec0cad7"
  },
  {
    "url": "assets/js/15.23ecb6f4.js",
    "revision": "11487bd25c2c6e1ca2b99b096f52f363"
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
    "url": "assets/js/18.ba37a637.js",
    "revision": "96dc485fbae3c70cc0de36869748ba97"
  },
  {
    "url": "assets/js/19.08e917b4.js",
    "revision": "7770634d38c73be3777721872e1aeb3f"
  },
  {
    "url": "assets/js/20.9788aa0c.js",
    "revision": "5c6a1a0eca38763115d3a5f90291e199"
  },
  {
    "url": "assets/js/21.597d795b.js",
    "revision": "8df71b2fe84d9d88b4a784561add8e82"
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
    "url": "assets/js/25.7d8bf73f.js",
    "revision": "34db3758839f48b5513f1e5499706bc6"
  },
  {
    "url": "assets/js/26.21d8922a.js",
    "revision": "b44bd5965b851447814276451f69b78e"
  },
  {
    "url": "assets/js/27.3cd01ff0.js",
    "revision": "199f912acad6faae004c1a2f666870c6"
  },
  {
    "url": "assets/js/28.a747e9d2.js",
    "revision": "bceb66f99cfe31c904854df0f88ce4bd"
  },
  {
    "url": "assets/js/29.e475afe3.js",
    "revision": "198fc485c4c98372f7f54a814dfe6832"
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
    "url": "assets/js/32.c81fdc02.js",
    "revision": "a6d73b80e74b6a76f319932734b4fbaa"
  },
  {
    "url": "assets/js/33.f8c92c61.js",
    "revision": "118ae2da9ba38c0dd4f497653b1e1f22"
  },
  {
    "url": "assets/js/34.d9ce97bc.js",
    "revision": "8cad453ef4fc9cadd7a004286a71dbc7"
  },
  {
    "url": "assets/js/35.308263c8.js",
    "revision": "983dd57a22e0b27d7907fb5c76de5c24"
  },
  {
    "url": "assets/js/36.c57154a1.js",
    "revision": "26abea455104c2f0ff0ce698ffd38d5e"
  },
  {
    "url": "assets/js/37.7f27dfd5.js",
    "revision": "35a1bfbbffc2d2ae629ebed4b0cea144"
  },
  {
    "url": "assets/js/38.24e964f7.js",
    "revision": "a166ddeac05fe9d83b39acb7a36fb7b8"
  },
  {
    "url": "assets/js/39.69a34bcf.js",
    "revision": "11450fef1efe01f683f4963b0417ea1a"
  },
  {
    "url": "assets/js/4.d512d2ed.js",
    "revision": "01366d58c06f80ec287e43819a9077bc"
  },
  {
    "url": "assets/js/40.bcce8d6d.js",
    "revision": "503dd6f4fc006948a4c6c818850c73d3"
  },
  {
    "url": "assets/js/41.4913a6d0.js",
    "revision": "8fdff8399c5af5be75b0aeffd89ac029"
  },
  {
    "url": "assets/js/42.ecd1edec.js",
    "revision": "aad2d7f0e0732336857a2f15cda145e7"
  },
  {
    "url": "assets/js/43.bc0959e9.js",
    "revision": "60d996dc27126ec497dfc469c9983a3a"
  },
  {
    "url": "assets/js/44.d8585603.js",
    "revision": "a7dc69e6bfc2c43f00ae211e3b961c0c"
  },
  {
    "url": "assets/js/45.b7d4d3c3.js",
    "revision": "c727c3abe2e068d86fd0f3ec1a8047f9"
  },
  {
    "url": "assets/js/46.96c8967c.js",
    "revision": "260c3e9c297d0b83f1845f5519d5a6a1"
  },
  {
    "url": "assets/js/47.293381e5.js",
    "revision": "8bd379bcc6a00633c03938a589458530"
  },
  {
    "url": "assets/js/48.d8b41c26.js",
    "revision": "d96fefeaa4d9b94022bc31673916e47c"
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
    "url": "assets/js/8.5adf1464.js",
    "revision": "0520ddbb269aa74f52c4f2d5d6a24611"
  },
  {
    "url": "assets/js/9.c0a6bfd9.js",
    "revision": "78ec9f079e4c8ef23c1a3164184ad032"
  },
  {
    "url": "assets/js/app.064b1c11.js",
    "revision": "c34699a69630dd8d25924d6ed6ba98ba"
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
    "revision": "92cf5b3371fd2b1f85dfbf4fa98f251e"
  },
  {
    "url": "categories/C/index.html",
    "revision": "848c3f028109c24dd71076497480f351"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "41716cf33a9805db9e0df714abcbece7"
  },
  {
    "url": "categories/drivers/index.html",
    "revision": "813fd2a006c7ff6a8ff2bb0ab266cae4"
  },
  {
    "url": "categories/index.html",
    "revision": "23b6b8115f4bef27b0fdbe117f6f3542"
  },
  {
    "url": "categories/java/index.html",
    "revision": "329810961fc807c937d4641dae754ce9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d617222735844fc71d920076aef0d247"
  },
  {
    "url": "categories/jni/index.html",
    "revision": "de0f26a62d12ebabe05fa1bd905b8ef5"
  },
  {
    "url": "categories/OpenTelemetry/index.html",
    "revision": "b2fb355dd6ac9d66dc6b1bde9a33a870"
  },
  {
    "url": "categories/python/index.html",
    "revision": "40b3b1e0f45ff66b44041c9308deb3bc"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "c3629655fb824e194a9e1116998b6505"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "72e5d6e793c4801ad344fcecc80347f5"
  },
  {
    "url": "categories/嵌入式/index.html",
    "revision": "81ce4ef378ebba5338d6528e49c429da"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "5958fd9ea471cb66187c9d69ce11a61c"
  },
  {
    "url": "categories/综合/index.html",
    "revision": "199434ebcac4ce33f23e58a60db62e62"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "9874b379efdccc70cfbb104a1db2dbb0"
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
    "revision": "cb59bf5b7c962c26e019aff5bf7d8692"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3d537f3bedd501f2bfc4b5d7233453b1"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "b8f530333174b2e8660379e3a626a881"
  },
  {
    "url": "tags/C/index.html",
    "revision": "40b81addfd8a823f556ceb49667a14cb"
  },
  {
    "url": "tags/c51/index.html",
    "revision": "b824dc9bb5d76730ff547b7ceb830576"
  },
  {
    "url": "tags/dev/index.html",
    "revision": "8f23a3d366b178113775bb8c2163a4e8"
  },
  {
    "url": "tags/drivers/index.html",
    "revision": "78f2e42b68c1f9a50f1fad1accbf6ea3"
  },
  {
    "url": "tags/figma/index.html",
    "revision": "d9f79df32a32dc683614bdf82bff8403"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "80b5c4ff7753044bad2fe5646816f3cc"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4e9baaf78d3008bc398180b2f243e8fd"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "667003443fe492d5b8efda51b21b30bd"
  },
  {
    "url": "tags/jni/index.html",
    "revision": "6fa490b86b2cde8cfa7e8c57848a0bcb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "48750d58feb43c57e63f433432d486fc"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "70f0751acb3699fb9905014732cedd46"
  },
  {
    "url": "tags/meida/index.html",
    "revision": "bc588c85ed99ec7fd993aeb867e01049"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "99a9becfbff5fe9db7befeba4945c8ed"
  },
  {
    "url": "tags/OpenTelemetry/index.html",
    "revision": "51230d358e05263e10b9800e68fb7f9d"
  },
  {
    "url": "tags/Pdf/index.html",
    "revision": "aa2fd72c7b31e2b9fa918c49b27f372f"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "f60936bec282c36701b959b73b2cee13"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "8f17529b884fe06b0fade1d37dde7989"
  },
  {
    "url": "tags/python/index.html",
    "revision": "6bb87d20958e536898eaf6e81b3d1584"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b440b6152737957522f70e76351a8f85"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f1bb5cb0ffcd7905ff7e2d4a88463a53"
  },
  {
    "url": "tags/stm32/index.html",
    "revision": "d7c08899ba6d2869fe4f552dd0be402c"
  },
  {
    "url": "tags/Tailwindcss/index.html",
    "revision": "57662b462044a69115b0dfbb1cb07d15"
  },
  {
    "url": "tags/ts/index.html",
    "revision": "44d02edcafb71a20c71f5847bc2d6393"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "a629ec69d85de203f47a468f88708236"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6dbf84210f9c66b663d8cb65fbe17f91"
  },
  {
    "url": "tags/web/index.html",
    "revision": "e076cc38c1f6c077bd55e5b5f4720439"
  },
  {
    "url": "tags/yolo/index.html",
    "revision": "03a1952dc03ded94eb4900b6c000927a"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "cdbc8e5fb1d6ff3db4b2dec39071407b"
  },
  {
    "url": "tags/综合/index.html",
    "revision": "f7705dfb0b3cf5707865f024d0713d57"
  },
  {
    "url": "tags/网站搭建/index.html",
    "revision": "1c3c3c5af8cd5c1b420e571628d83404"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "65139fcc75d493658c6d877004f326a1"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "dee090018ddf5a347ae0abbc5f6608f1"
  },
  {
    "url": "timeline/index.html",
    "revision": "1a4b2236a003301f292bd217829f2365"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/AI/AI.html",
    "revision": "0b895c0ca88c0bef6e63c0b919416d6c"
  },
  {
    "url": "技术文章/c/AppAttack.html",
    "revision": "3841f26ecfd49350bed9e81f26d8cae8"
  },
  {
    "url": "技术文章/c/drivers.html",
    "revision": "52424b39a0f07995271d045eaf2076ca"
  },
  {
    "url": "技术文章/c/FFmpeg.html",
    "revision": "2b437cd2e869ea9d7ff8eee642664f08"
  },
  {
    "url": "技术文章/c/jni.html",
    "revision": "3fc9b147d3495982cfb0250883fc296b"
  },
  {
    "url": "技术文章/c/OpenCV.html",
    "revision": "d20e2789a0dda0fa880fabca8f4413ae"
  },
  {
    "url": "技术文章/c/OpenGL.html",
    "revision": "1e91ddd51ac1057e5e91e7d6642c38cd"
  },
  {
    "url": "技术文章/c/SDL.html",
    "revision": "a394edc585134edd52b1c19a9754c8bd"
  },
  {
    "url": "技术文章/c/VsCode.html",
    "revision": "f797910ce06b865acb378fed037a8cb9"
  },
  {
    "url": "技术文章/c/Webrtc.html",
    "revision": "66dab86b9b1ed4d6361fc810194baaa0"
  },
  {
    "url": "技术文章/c/协议.html",
    "revision": "cf549872d5e251cd0793a19ea6dbfee9"
  },
  {
    "url": "技术文章/dev/frp.html",
    "revision": "a9f85883499fc564f45f6e8402063c2d"
  },
  {
    "url": "技术文章/dev/shadowsocks.html",
    "revision": "d48bb8a1077f5cd0e886ce394224c0e2"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1fc2c0a1d0481cd6150d3b1f5c90cb20"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d07c5e9138743eb6e900b88563c93d4c"
  },
  {
    "url": "技术文章/java高级/javase.html",
    "revision": "b3f84b2184b0f488a70b5be2c31e8deb"
  },
  {
    "url": "技术文章/java高级/OpenTelemetry.html",
    "revision": "e541a4412dad2ea7afb297219f497b58"
  },
  {
    "url": "技术文章/java高级/pdf.html",
    "revision": "5251ae1db0948715608d3b766634086b"
  },
  {
    "url": "技术文章/java高级/pdf2.html",
    "revision": "ef9862c1819b7a3e198139c30ca48812"
  },
  {
    "url": "技术文章/python/django.html",
    "revision": "5f0fa2e8089c03333e7f7f272272b2ab"
  },
  {
    "url": "技术文章/python/mario.html",
    "revision": "5969540c2f3ef765ad40ef3800b2db78"
  },
  {
    "url": "技术文章/python/opencv.html",
    "revision": "d6b28765b217787533c38d0ffb36bdaf"
  },
  {
    "url": "技术文章/python/python.html",
    "revision": "77f6a10e218bc3ff06969bcdb3b20e23"
  },
  {
    "url": "技术文章/python/robot.html",
    "revision": "6a5197cc2c063b4650663e1ffb6e9f12"
  },
  {
    "url": "技术文章/python/yolo.html",
    "revision": "0d9f96943ca9b51e38485f349eb647cd"
  },
  {
    "url": "技术文章/vue/figma.html",
    "revision": "8475ae02350559db348db1ad40d0f8e4"
  },
  {
    "url": "技术文章/vue/Pinia.html",
    "revision": "4519e441aff8cc5cb4d615ba83735b9c"
  },
  {
    "url": "技术文章/vue/Tailwindcss.html",
    "revision": "429a67e9f6a196b17f78cf3078cff2e9"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "af2e1972c4cbb2786db00716b8981906"
  },
  {
    "url": "技术文章/vue/VueJs.html",
    "revision": "783fcb4d7f73551b143cd6dde18efb07"
  },
  {
    "url": "技术文章/vue/VueTs.html",
    "revision": "9a0b44f26897dbee5d5191c7dfd746dc"
  },
  {
    "url": "综合分享/c51.html",
    "revision": "7d96a8fe3da004953ab03888761f3ab8"
  },
  {
    "url": "综合分享/deepseek.html",
    "revision": "e39a097bc15f165e176fec23ced5639a"
  },
  {
    "url": "综合分享/life.html",
    "revision": "0829882080c01c24cdbf076d5271a395"
  },
  {
    "url": "综合分享/openai-api.html",
    "revision": "75ebb4a57e6dad57846c5e304824fe50"
  },
  {
    "url": "综合分享/stm32.html",
    "revision": "1d38d51f5aa93bc37424483e066b642e"
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
