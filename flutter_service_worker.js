'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "72bf20f69e5e449501acce329ea4041a",
"assets/AssetManifest.bin.json": "e868d8c78096199e0cd8b00c9ef50d49",
"assets/AssetManifest.json": "54e2c5900be2644a8e27a13e07b2de4e",
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
"assets/assets/icons/facebook.svg": "fdcde38790ea509d4d48f310794c4d63",
"assets/assets/icons/loading.json": "0dc807aafa826dbca0c69d7e277c06c5",
"assets/assets/icons/loading_white.svg": "e4a9545c5e406583fc5b51aa1b5d4684",
"assets/assets/icons/location.svg": "b0e071e51922b60c02fabd219be14786",
"assets/assets/icons/logo.png": "6bb27445098a986973555a4dcc697a69",
"assets/assets/icons/logo_splash_android12.png": "8e930174a512e82972fc82a6e981b401",
"assets/assets/icons/logo_splash_android12_dark.png": "291ab86acbcfc623c3a8c36ec9d01b63",
"assets/assets/icons/meal.png": "0c0aa9ba2ab6783c2884a1ab106adaef",
"assets/assets/icons/menu.svg": "45ea3a26cf63590e1d6068a042eb98ee",
"assets/assets/icons/min.svg": "5c3cf62505ed66b6456a9e44aeb1ec13",
"assets/assets/icons/profile.png": "c4cd8f8dd5dd68bc2d125fb198b10eb8",
"assets/assets/icons/snapchat.svg": "3182fc6938f4858b044abf98e0fa3424",
"assets/assets/icons/splash.png": "6e94a78df6e7696fdf27c714d453fd16",
"assets/assets/icons/star.svg": "161f626a923460c1e2dd031a94f1e006",
"assets/assets/icons/star_in.svg": "2eb03c25aec3fb764eb6d16ead9e7b10",
"assets/assets/icons/twitter.svg": "5ec5a940f1ca7be7a1c7a723d8d834ec",
"assets/assets/test/big_pizza.png": "28483b2a70786be178c98bb06da7698e",
"assets/assets/test/pizza.png": "af1bfa9990a8874e44a80e1aa50eeb84",
"assets/assets/test/ring.mp3": "b079fd5f93760d8f99b5138c72da358d",
"assets/assets/translations/ar.json": "6072fe9d43478711a540cb713241138f",
"assets/assets/translations/en.json": "381e02801b16824e9771540a9b551fed",
"assets/FontManifest.json": "145f013e3bbe4def196f5f07bd91820c",
"assets/fonts/MaterialIcons-Regular.otf": "4a605f5da94f25c87a21ab9601e256e1",
"assets/NOTICES": "ace5841041d3eaed628b179b24fea4ec",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
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
"favicon.png": "94d1a725f62075eb5ead9ff4dd64d7fe",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "bf74791d08cfbff7b7230cbef705e282",
"icons/Icon-512.png": "837bde29078e62065c484e2b2cc32f00",
"icons/Icon-maskable-192.png": "bf74791d08cfbff7b7230cbef705e282",
"icons/Icon-maskable-512.png": "837bde29078e62065c484e2b2cc32f00",
"index.html": "c0599e1936174ccc32ffabfe460d5d04",
"/": "c0599e1936174ccc32ffabfe460d5d04",
"main.dart.js": "759c804559b0f36fc6595d76ddb4e76d",
"manifest.json": "c753aa7bce1bcd42a29f9c6e5dce2555",
"splash/img/dark-1x.png": "af1da74adc4ff32252b10017f86a8fdd",
"splash/img/dark-2x.png": "12d6b7c8056a7d507f3871478bae3ca3",
"splash/img/dark-3x.png": "0598449bf61f15ab8fb7aed6cacbc04a",
"splash/img/dark-4x.png": "fb795aea2c9191985eae428e15b2d55c",
"splash/img/light-1x.png": "af1da74adc4ff32252b10017f86a8fdd",
"splash/img/light-2x.png": "12d6b7c8056a7d507f3871478bae3ca3",
"splash/img/light-3x.png": "0598449bf61f15ab8fb7aed6cacbc04a",
"splash/img/light-4x.png": "fb795aea2c9191985eae428e15b2d55c",
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
