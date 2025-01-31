'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "18f2e9de2d629f05a0a124358555f60c",
"version.json": "1a8540036b6c3eea320259adc411ab23",
"index.html": "3a584339c1ab97603ecfe7ad628d80a9",
"/": "3a584339c1ab97603ecfe7ad628d80a9",
"main.dart.js": "23a369de9882469b6ebfb5d60577d0b9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d1ffb66cfb4d0ae9b30b3a0981067855",
".git/config": "6495f16e78dad88303ed32979ccc5039",
".git/objects/0d/12b875466675b1ca3ae0eeb0ab4059a72ff7e5": "22279ef5c13ee900f1ea5046999a43f2",
".git/objects/32/3614117021cd34b0541e48401ad0bc1b41b293": "2b265acbf6cbbac691e91ca5c2a2cf06",
".git/objects/56/52fbe3a089ef145bf2ba4d96f7d08bf834f0ca": "6af34d4959bf40181da80674605c9c04",
".git/objects/58/a516d5452d69dadcccda186be68fbc70e9c49a": "61fadc9e00f0c0ae4208220dbe9f0ec1",
".git/objects/67/edf74727b11bd2ac998b80ead6116995382445": "7d15834c31afb9da112de3924380edbf",
".git/objects/94/e25f0fb18e20c82b2ce41cd8d1f68bec8614b1": "fe8bfc024e2ec7c10bdb5a22f5e86d2a",
".git/objects/5f/d38c534c58291fd5ceda7e9e87562906c4247c": "bdc46a59c51fed8b5a354135ff98af7f",
".git/objects/9c/71f2c9183504e00a4a26f109cde74c471d7ce2": "5ccb46cd063a3e6e52f16221687bdd70",
".git/objects/a4/434fab881214ffc9b0805b0f8cb83d9bb202e5": "386fb9af4e242060d2071195cd7b2711",
".git/objects/b3/b5943ae5b93dd59cda8287c99bdcae2c7bb6eb": "71d016ba99b3f20fb301d18f24060579",
".git/objects/bd/5008df9987ef092eaecf111d78e808308bcab2": "cd36d3d9577e6c45b66eb61d1aa8607b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/3a1d05b0bf32e3c81079bd5425dc3b78721750": "830006bb19a294fbebc42cb9a95d6bc8",
".git/objects/cf/6cb6d676784ce24492700e099a3d1f4ddc2514": "89856a2036933fe79ad5ac87e736da1a",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/42/a3b0b5ec9713bd34d631d1a271e7febff9a1a3": "7c98f9e16e45208f3cea909cf8503487",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/8f/db353e4b42f901f971729029bedaa07f3f7c2c": "bf85a3154c680779753b8a54674b27ac",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/d0af4e19766aa1d3dcc42d128c781ee3a342eb": "d38b5bcd076fec2a41a750dfc0dc7481",
".git/objects/10/ddccb0a945bd554ae28a7660e74e0cf733cf41": "813ce83412d5f0b23809845813717a7d",
".git/objects/81/47c9359414e0cd5d1be393caca8bae897386c8": "ab88c22bcc4968ed5df377f2e2a402b8",
".git/objects/2f/d44a4d2505a5f50d8f31c32c1fc8172c516a64": "b2e5f31559a36fb5457d1d46ae192255",
".git/objects/2f/edbd80fc769d6d45da721e31c9a59c952405c7": "ffdf641d93c439eb33c1e1ba2c943c86",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/cf6806d08f972561c5e7718141aa82db137984": "5bb36606dc6b5c3d730eab27913b1000",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/41c4178ca44046087219531f7170362bb377ce": "f481cad500c15eea43d30ddf4dcb028e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/338ddc712e76c63e8e7e46bfa25e60eedb8fa2": "8f7a403c5a0ade37831c6d54f32f035c",
".git/objects/a7/c827907ecb1af2089dc207f1f3e1f6cecdf9d1": "c15e19cec8dfb4ac6dadda5e5a54706e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/d5/eb77350a7791937171914f1f561e439b857169": "479f46076b48345cb5a5aabee08f8ff5",
".git/objects/d5/7116fb5f1c196d86d1f686d4f187991a112c4d": "9c7799f646a215976b0ab34d29791542",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9e1397382bb90802aed2ad1428fe9b6a317d04": "f940bee84917a09abc4e1880d52b6160",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/58d91a96d99c5966417964ead2e86fffc86e7c": "061ce7bdfcfbfdacd465c5df7b710371",
".git/objects/c5/ea23893227f762cf34c5b853645980ea5b5b27": "0235996f1c5ab1d1847d910ddcd42f72",
".git/objects/e9/e968c4c507b02c7c503e3850edc2a03f2a2bfe": "22676d462f05a93884be620089034357",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/d76343f8a7baf47f2f9e2666d6617520caacfc": "4ab8962f8cb915d84c8ad3db4f235383",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/70/523814d094a5006142d88107fa6d1d92de18b0": "2dcea578de224816a72e667386e206d2",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "467fea0a57b330eb1a60d88039ffafb0",
".git/logs/refs/heads/main": "949cdd23d5ad22862a92b8e86511bca3",
".git/logs/refs/remotes/origin/main": "a336893d8ae2a2ed50b57df01aa05e4c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "deae9f8af4bbfa9b2356331cbca6399a",
".git/refs/remotes/origin/main": "deae9f8af4bbfa9b2356331cbca6399a",
".git/index": "f427de8c54b261cb248f18a4e520ab27",
".git/COMMIT_EDITMSG": "ea33ff93e0c4d790ebf62786e0436e05",
"assets/AssetManifest.json": "cf441415e3d6b96608670bab1c1a61f5",
"assets/NOTICES": "c81acf2622c169104432c1b2ada9cf06",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a04011881986f7d4b9a25f3b7aa014b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "12009dd75339b032649b2ae45d803611",
"assets/fonts/MaterialIcons-Regular.otf": "4ce3baa94496e3f1b6e8a9e0f0a350f4",
"assets/assets/images/google-logo.28878765ba39f327cf3e.png": "3e1b5c4cf1b6ff33322c5267c89fb53c",
"assets/assets/images/02.b483e9502d81d8a68583.jpg": "751716405622247788b72c636a40f159",
"assets/assets/images/ab01.016884c7bf778010e79c.jpg": "1f268ef737fc9c4b553c347ec271bc25",
"assets/assets/images/cheerful-students-posing-table_23-2147656326.jpg": "bf0276a4cd9f25eba88a84c3a711c75a",
"assets/assets/images/lenovo-logo.ad2ec171d6df96c88b9e.png": "13d872df7d29793f536bdd251a06ef4a",
"assets/assets/images/01.505f19f275234d37ae32.jpg": "e4fad3c6fe992068b1d464d84c1472c1",
"assets/assets/images/03.c538ca3b9bc8f2a5378d.jpg": "f636cb3d1e7c6633669c8a0f7cb905dc",
"assets/assets/images/three-students-studying-doing-homework-together_1262-15319.jpg": "5929d5140dbe304bedab67407628d650",
"assets/assets/images/06.296e0ddb4aa6faa9d579.jpg": "ebb26ccce09855ced14e7840b2736bb1",
"assets/assets/images/ab03.2b6e24b09b3690407ec5.jpg": "f8f7a982082f8f5c957a2abc175860c8",
"assets/assets/images/istockphoto-1437816897-612x612.jpg": "af9fe6b134b58595c099cc88b0fdf61b",
"assets/assets/images/ab02.f851a3dde08585493f97.jpg": "860e016ee76d8176e5e6ccedbbabd64c",
"assets/assets/digital.png": "577c8c1822e0be0cb7dd431226abf501",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
