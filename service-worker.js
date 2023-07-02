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
    "revision": "c18d86210524d2f5c99b1091de068f8c"
  },
  {
    "url": "assets/css/0.styles.581d8858.css",
    "revision": "d344be99697de457390e0d22320d0059"
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
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/rtp.aff959a0.png",
    "revision": "aff959a0ca0bde247071cc1ab9080113"
  },
  {
    "url": "assets/js/1.d06d4e52.js",
    "revision": "3e021cc44ec5f35c334cd5211e276768"
  },
  {
    "url": "assets/js/10.495feb6c.js",
    "revision": "9087eb1a90d47b32b1b526faeff2da9f"
  },
  {
    "url": "assets/js/11.7e868ce2.js",
    "revision": "244d20b7b3d21bc389d84a217ceac1cb"
  },
  {
    "url": "assets/js/12.1031a608.js",
    "revision": "3cc71ad84698d79c9177862d69c8c614"
  },
  {
    "url": "assets/js/13.db4395a4.js",
    "revision": "a3746614dde4492e392defbe42fb3915"
  },
  {
    "url": "assets/js/14.1972905f.js",
    "revision": "db7e021fe9ae01002990aa30c762f5f5"
  },
  {
    "url": "assets/js/15.8eb1499e.js",
    "revision": "c28c4a4746d0a1f2a132532995f2fc25"
  },
  {
    "url": "assets/js/16.bc7055ca.js",
    "revision": "bb7691f937e89528ce4a58fc0a43fb39"
  },
  {
    "url": "assets/js/17.4146bc5f.js",
    "revision": "567058920405d1f62df4262949ba5b8b"
  },
  {
    "url": "assets/js/18.59f7fdd9.js",
    "revision": "d9571378679ae2c0bc6085e71cf2de17"
  },
  {
    "url": "assets/js/19.22ed8637.js",
    "revision": "41145964997920f8df812b8ace10aac9"
  },
  {
    "url": "assets/js/4.543e768b.js",
    "revision": "aabd1a38749192a68a01f829f1d60546"
  },
  {
    "url": "assets/js/5.c3e4b482.js",
    "revision": "ab8cad2d9e8ac3745e8cdb86115ca8a2"
  },
  {
    "url": "assets/js/6.e93493a4.js",
    "revision": "08bea4efc4eaea7dba44c28f058795d1"
  },
  {
    "url": "assets/js/7.d6441cc4.js",
    "revision": "bcea7d4752ce5e5ce1937f2a4eb753b1"
  },
  {
    "url": "assets/js/8.015185ba.js",
    "revision": "97ff32dd244e94dcd991d5e1b3aa71d7"
  },
  {
    "url": "assets/js/9.1f427cdd.js",
    "revision": "8d4f91ba2ed0c45a56274762702670d6"
  },
  {
    "url": "assets/js/app.31f5297f.js",
    "revision": "411546d7b90263839ba01cb2b80d337e"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.a67a7b3e.js",
    "revision": "14b98d41232a26a063a6a51115951c6c"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5dd0e13e7b697575c1d6a91318fd575b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "39a1f57edbe7bb79df1cb82f46184351"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4f6108819ce3eea6623c12b03e6a51d2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "caeedbcab7b049827e411eb1f46d972f"
  },
  {
    "url": "categories/流媒体/index.html",
    "revision": "fc6a78dd8ee913edb10b37809d836a74"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "099ba99b58f0560d6edd298bdd2024ba"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "d9fbce4384b78a22fa72a604334bfe9a"
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
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "02d6da82138d95fdb3bb108417e8064b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8cd7b84ab8fc31e6abd1ac7d2bf97add"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "7ace9039bd7f32cb9862b68033d27cc9"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "fd218803f9ef39e1af33a6a11db13f87"
  },
  {
    "url": "tags/js/index.html",
    "revision": "bb900cb05427108a6e0659c65018a92e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "df60363015ad6e9a6c940c50e93d2972"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "23887c7862dce4c5e78b9f52f0cfda0c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "24e696a02fc2d3befb7d7288456a51b3"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "fb8fc95756ff7635b319a509f31f6db6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "030533a4d382b3edd92e4edf7726c8b9"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1fd02d3c78f65f496b6384904297f247"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b0225c26b3c467fee4c176473d76e8ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "9219d300ac2c72ff7b0ce9a61ada9a1a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d91ddd1ba1ac00109fd718a4033a70f3"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d2b42eccc66b135f6bcde6dbe14a45e1"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d10095a3043e9fa1b61c9c73ede7097f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ac237bf759023da249fb19ed7d8559a0"
  },
  {
    "url": "技术文章/流媒体/协议.html",
    "revision": "923c7b1557ffcc446a33a87cd330525e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "69baa5715c45f0f010cf9f8464862d7c"
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
