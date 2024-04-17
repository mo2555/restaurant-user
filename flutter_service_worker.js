'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "329f1d4128a7675af20f7e30891bf9a4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91de10810f1261f6b5bfd0c29671f81e",
".git/logs/refs/heads/master": "91de10810f1261f6b5bfd0c29671f81e",
".git/objects/07/46e34e2d4272fa12c94097fa054d3c57c4f566": "be6a6b8f95606e9184cfc2323d79919f",
".git/objects/1d/77b3508868cf9cc97a1ca6069f0dc720f8b5dd": "b5bb2719d7efb406451c09ff885f4512",
".git/objects/20/00aafb98c93d9471ad438b0397aaf8c36e88f4": "32996376232f1c02d4f83c76a0653e83",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/35/f0253ebde3d738fec00a352f5134f5b078a7cb": "2e9f33a7e1a398f1e5f6d67b9492fb70",
".git/objects/55/3338888443b9a005f37f8004d6e8b0fdf9052e": "d2821375512a10520430263c9ed251c5",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/6c/0b8635858dc7ad44b93df54b762707ce49eefc": "4301997f66617848371b4f6ad8aeafc1",
".git/objects/80/2badb23697d26883dfb290f9206af642ac1c29": "859fb93187dae6b7bc042912edc583b9",
".git/objects/82/9fe3467274fa3aae6058ac9018addc4aefebf5": "9f447f2ec5b2e3c5ea22ad04682e0d34",
".git/objects/93/fb1c5b95f309d6194ec5b47c71d9da20eb16b4": "fc43c79a2a6d17f486e4187909fcd2b8",
".git/objects/a5/dbb7b1bc18a47ba597d8482ea8f4e6acc11fa0": "17e5bdaa769b9dac7975c941f6716472",
".git/objects/d7/5c5cc01151e630bb917d427dd457d50f1468fb": "7d9a8c1891fc74aa9e9aafc7228ec5fc",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "16dddc707aa9dac997e2bdb7482d8c64",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "1a16809a3a296b65911ab7b1b4ce2459",
".idea/web.iml": "002a4bd99b8722cfd94059ee6b5a364b",
".idea/workspace.xml": "7a3b6f65f7d7a0e7390502983f43b9ab",
"assets/AssetManifest.bin": "3bae990b25108dfc9230c5a8f216e082",
"assets/AssetManifest.bin.json": "ec94d0fc67b966839d95c8b43db27550",
"assets/AssetManifest.json": "2b291a80066fa63bf07af7f08f2dcd23",
"assets/assets/fonts/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/assets/fonts/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/icons/add.svg": "c5bbcac1287ce5743d7cbf4a4215e6bc",
"assets/assets/icons/bg.png": "0c3cb2076cbbbc0936bd3e0ed38e92cd",
"assets/assets/icons/cart.svg": "fdd1ef07e655a05adefbe25b50d0c910",
"assets/assets/icons/check.svg": "12f8754d9cbdbd0dff409db154e2e230",
"assets/assets/icons/clear.svg": "d5224956d7b2be3a55df8929914b2998",
"assets/assets/icons/customer_support.svg": "96c42b4d7f690afed63997be98189998",
"assets/assets/icons/empty.png": "517e54ec0307ceb9b46a09e6594bd0a2",
"assets/assets/icons/loading.json": "0dc807aafa826dbca0c69d7e277c06c5",
"assets/assets/icons/loading_white.svg": "e4a9545c5e406583fc5b51aa1b5d4684",
"assets/assets/icons/logo.png": "7d785952a00ff8ff738dabd538c11af1",
"assets/assets/icons/logo_splash_android12.png": "6ae3ee3dbc3f19f27baec90e251d0afe",
"assets/assets/icons/logo_splash_android12_dark.png": "2c35b51a84b8059f816b628bf5978492",
"assets/assets/icons/meal.png": "0c0aa9ba2ab6783c2884a1ab106adaef",
"assets/assets/icons/menu.svg": "45ea3a26cf63590e1d6068a042eb98ee",
"assets/assets/icons/min.svg": "5c3cf62505ed66b6456a9e44aeb1ec13",
"assets/assets/icons/profile.png": "c4cd8f8dd5dd68bc2d125fb198b10eb8",
"assets/assets/icons/splash.png": "6e94a78df6e7696fdf27c714d453fd16",
"assets/assets/icons/star.svg": "161f626a923460c1e2dd031a94f1e006",
"assets/assets/icons/star_in.svg": "2eb03c25aec3fb764eb6d16ead9e7b10",
"assets/assets/test/big_pizza.png": "28483b2a70786be178c98bb06da7698e",
"assets/assets/test/pizza.png": "af1bfa9990a8874e44a80e1aa50eeb84",
"assets/assets/test/ring.mp3": "b079fd5f93760d8f99b5138c72da358d",
"assets/assets/test/test_slider.png": "9a070aaf1c70dac7f84bbb822c8d5617",
"assets/assets/translations/ar.json": "6072fe9d43478711a540cb713241138f",
"assets/assets/translations/en.json": "381e02801b16824e9771540a9b551fed",
"assets/FontManifest.json": "145f013e3bbe4def196f5f07bd91820c",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "4ae421b7e08b0d74edc099dde2b5c297",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5072607cff487a84eb0ef7451bdb944c",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "56dbf7dd3b95a20c792dd2c70af59c48",
"icons/Icon-512.png": "7ce3e5a04a64fb74bae69283e8ca17a5",
"icons/Icon-maskable-192.png": "56dbf7dd3b95a20c792dd2c70af59c48",
"icons/Icon-maskable-512.png": "7ce3e5a04a64fb74bae69283e8ca17a5",
"index.html": "19b0eaddf235361a28f837b4d08f4b8e",
"/": "19b0eaddf235361a28f837b4d08f4b8e",
"main.dart.js": "9fe706efcc86c8a3c6c127afc4b51fa5",
"manifest.json": "ecdf72247e0319e2a5f95c017d8d8a04",
"version.json": "8066f5636dbc5d1a9ec7742f33f58544"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
