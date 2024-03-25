'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "7352338e9ffc0347c88fb5cffe241956",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f3a5cd90604ad1b07af51d3b2c5ae6c4",
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
".git/index": "66bf79f8ab2598210871c7ba5e8c4fa2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19ef1cd2c08660ece9e14a954f643af9",
".git/logs/refs/heads/master": "19ef1cd2c08660ece9e14a954f643af9",
".git/logs/refs/remotes/origin/main": "ccb042c3a3dbdda03e86c25ea536f972",
".git/logs/refs/remotes/origin/master": "33ea65fb6d9bc5033273aa1ff0da7e70",
".git/objects/01/3ce6f9c46b60062912ceccd905059268e41f3f": "11e74553dd9b1dfbf44def1e342f1dfa",
".git/objects/02/9fcb5bc2cfe513c50ff9d17cccf443ea8872b2": "e0dfe438968b986d2eed7d4661910a9c",
".git/objects/03/c17da2316ab05222e89bf4c9572ce747e2ee25": "f3aa69054935e253bbe1a6aaaba48944",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/06/c24a43060bb5b29b9dfde4f9574e2ffe2d48e3": "3717ffd00807d52388aa1aae0f760a39",
".git/objects/09/8d2fb5851c92236b72f68263cd91886db729b6": "7605759c2a5f639931d24fdc64171045",
".git/objects/0b/28000cd1915cb9e341156b529fca861396640e": "1e2420f2b1e21c15d5ecc6e326c72127",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/042903b6a3af9b8723342afc3b94a1ec33d126": "8878c165110887f0a70995ce6e3f7254",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/fdfb62ceb2d4293f44d30fd7e99e25d331de59": "8a320fc090ab7320c508be1dbd001f95",
".git/objects/10/bd14659cd3120cab9db9818d08446f87013de0": "53df797df9d0cb2509e9609bd40512cd",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/19/6690ed50e1911b1d7e5435fe89358d98b59e14": "db05ea9d5703e230fbfd1ae4c5dd30ec",
".git/objects/1b/8a71bb375a0d2ca39ccc4835628228d0cd6c11": "a5aef30e18de3bc61e7007c77ea051f9",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/53c50c3b3523588fae14f9beade6fe8f0672ef": "0baa168e06796cf13e4f2e31bd23086b",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/2b/80f082010d87e8deea5038ab06cb3ea4873de0": "7dd69370392c82c544c394753ea0ddcb",
".git/objects/2b/c3207e08b1621588cb97517c529cc25e01b36d": "b18a6aaa9fdaa91ce9fe88f851d3ea74",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2e/096c3d20abcae9ff58ba2fbc3150e12dee6b81": "de8060d418e193b33c2a12d364704bf7",
".git/objects/2f/0143220db09ee3992f7ddd98ea95785bcfb2a2": "b0e0df087c0361862243b6a32d914587",
".git/objects/30/acc8035d57efe02338401bdc58ee80a412280f": "30733a79c4739c95c9b2749d06326d40",
".git/objects/33/64b1e1d93d64eba16fb90b6e3a8693474d1033": "c3d7915f0bb4ba709a3f3598d96613f7",
".git/objects/35/f0253ebde3d738fec00a352f5134f5b078a7cb": "2e9f33a7e1a398f1e5f6d67b9492fb70",
".git/objects/35/f461d03735c487057f5803cb2265510d86b126": "53083fb855c3f66fb3a184c548e820ec",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/38/d283493b380d5e85a9f4ce365648a6936a77cf": "5e20375ef9fe2f04fdf052cc0428c88a",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/40958c4632c774465438a8c698c90cdebc704d": "c50c99833b74d6cfff948eacec53796f",
".git/objects/3d/cc287ef996f7559f65e8463c723a32694743bf": "3542a31fee1452d8c7943154b24d157f",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/a9c39af8f3578246dac1e6fcf8931c75ea4094": "d4370413603cb8bb474e10a11312fab0",
".git/objects/46/9ffed4d4b43011878b4692e45612cf908b7fa1": "010e431fefcbd5798ebec140d672f4c9",
".git/objects/46/cefc353d769c1e08f6a9c8e6d2d869f9a2ac0b": "f8a4e2b5781343de52222d6818f2aa71",
".git/objects/48/2dad2b7077ccb3a9bb5dd67b7468aae60bcd77": "f6be239ac39b901cb73f2daae6b3ca0c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/93a4df7f21e84e8f21e5ee20573ce6f5a1aebe": "079c6bf69fdf026a4f18e3992ec5a2bf",
".git/objects/4a/b2a63d19aef25cf83f685798d03a8ef82d1424": "be4f2b15ab71e4f904c99bd104c7eb64",
".git/objects/4b/57a9c62ac80ac4219ac4c6be5fc1345999639c": "6ea9fcecf1a344e015a03ed541cb7749",
".git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
".git/objects/4e/1a1567e5ddc0536ad55966191692cf58353ee9": "9e038e73a0555ad2112fb8e4cb13f27a",
".git/objects/4e/bb79b62746a86b28131c1f9d29abc6f30b0af4": "97726d4294771b4c5c7db732583a1c87",
".git/objects/4f/2f9c5628995973d951d2feada562a83291c002": "4bb2b911a065a742feb80fb8e83cba90",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/adf64201d2a0a56c7cfbb605c06921f6b6b11b": "d06e54d61b4de988fd827e73015f5a40",
".git/objects/57/91311e99bcdfda80692a0c64b39b86725b7af0": "a3f1751f9147cbe25b97ce3b91a0028b",
".git/objects/59/00cdb901de8ec21b580869c01c70d32e764dae": "498630bca95d427f12739acd32c22b3c",
".git/objects/5b/5efe0d4f96cd722d8793cf6d0fefef8afe5e51": "e29d4c964285957f9db84243a02cff11",
".git/objects/5d/46d5a020589b5e7cbfec6d1078c099d4bc7ed2": "0c04fe1abb952a933ec5c4912a6fe4e2",
".git/objects/61/91064686fb2e2650b125cd1ad19ece06737f78": "b49c6fe7661e7477e937a260c12c2bc6",
".git/objects/62/e1e8061a520662580abc72c17a02848a85c397": "103c4039a55679341e839ed2bf4c0a61",
".git/objects/63/3a0c61cbc41b09829fe92d5f1846da25ef5d6b": "6c8b2a3d20f3d72f3b25f746141f37cc",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/69/e1fbe4ded7e180e6f1f26d8dee796a6767f0ab": "b6ebf79bd96bff4fe0443841da15010d",
".git/objects/72/65979edf50c7de7239b13085b2c6cbb5b39331": "c519eaeffc85481f003657f88ecbc295",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/76/23ae7e23746282cddcc292639e2138dbb6b12b": "93a244cedabcbd541d9a018402779611",
".git/objects/77/c90058b7daa1b453cf0e079fb4b9a6de6b4b8e": "2bc2adedb48395cb1dedb2310df969b4",
".git/objects/78/0cb278d30911adfa3239b365240d1a3a90752c": "9d1b0db0ff30b3d3cec67555e049badc",
".git/objects/78/977021b9d2bcfe617105aff6d324765b23df7a": "7f4f966408cf5a07f5e546e3cb57b9f2",
".git/objects/7a/95c96fec1c952daac4aaef94eda03e8be08fb0": "447c159a134feab0c01d4a2dac7dfbb2",
".git/objects/7b/2a807bc148b369db757deb03afa28c9153c972": "5e2e623b9dd252bb0b742127289c8ba8",
".git/objects/7c/caee9e7b7bab8fde7a18083464a95de035e7e6": "07b90f1fed19ada91d1c5218645f32b3",
".git/objects/7f/a567bb8f4e4a48dd1bc32b1b22dfcceae1cdcd": "d974ea56d24f3597f15a9329e736c335",
".git/objects/7f/bdd9753d91be1ef500670ec52dce4de2897cc0": "0bac624ab1ea539b08fd0d9eecf8dd25",
".git/objects/85/0ff3ecc47d5f18ede99788df40e8b51da54909": "8f0fb7bc9e89f929c7a3fcfbab428fc6",
".git/objects/8a/6a6ac4d82922b9feb1e43929f9616c935c2d9c": "fd33f45bd1fbf28574ddb227cefb6e72",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/b7e68b2d94bf3f3ad47083c7cdc8d02babdbef": "9c06985a0b5f387a1940b6b6f825aaee",
".git/objects/8d/c3c0e12d8483a1ddfc638d8d35106ce7e1430e": "d215a206c0edcc7d8cb7ad5488a7099a",
".git/objects/8f/33de3a4772c4adb0cb680474474442a9230da6": "7a15604d66850ecd1274d973ee2b1d71",
".git/objects/8f/cd5d8303f5ac5ebb020f5f2799d28ffd547344": "a647863026836644ba81c2f017b67f81",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/98/a7cf795719e65fb4120709641d9337c7292ddd": "71eaa504e596a485424460ee0069bfdc",
".git/objects/9c/cd5c38b0fdd9fbf44a5df3b1d780358fae6c45": "cf197854dc946e5088866b6003e1ec60",
".git/objects/9d/785c107adcdc878dca4c2ed57d7f1d6a5bf9ff": "6e8cefa1cb187ed67b2d5a8eaf1d0210",
".git/objects/a4/13a82db57c22b96021fc656c884eb4d4197199": "619d27b4d40cc32f23afd5bc3ab54891",
".git/objects/a4/2fb3aebdd11f6343cd746521e2c772ca0cb86c": "bffc5b8f5eae8b6eb2de124e47972cb4",
".git/objects/a5/edf3017f481ff920c813e46ba2978f1f496e58": "b24330ef7e39b70f28f9bd25c6d53b22",
".git/objects/a5/fbc8e289f45035e51ea8637c4ce283a7b519e7": "3c21656ffb91dfc98992cdf3ce455f8e",
".git/objects/a7/2c4e8469fa256cd0c7e3d3dddfe9db67914180": "40583c8cb0d94f4e349c789cb8d0ab07",
".git/objects/a9/c424ea5c9b5635c58226a09e40ca99fb9c0b9d": "070a00722f5daaf2b590d7983ee06190",
".git/objects/b0/0c915a301c8891835721cd7292ff3a21a14462": "15f4d89157582971fb53d610919b9d10",
".git/objects/b4/c45c9eb4d0192299fe045cebbf6d86dc31f1f4": "1a2d5d4a4b0ccc7241220fc2ad014c04",
".git/objects/b7/d383b304e8c01787456a1de4be364b3782fb7a": "1cfbba597b7bf6cb737a1b10fadefc1a",
".git/objects/b7/fd13bc0acc681f46bdc6f95951004445422b57": "25b50e8cd22b8986b6e57f569718783c",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/5069b5296024168d212b6b2b5513e37e54bba3": "270d75f8a41c0a1d4bc99a68bbc1d294",
".git/objects/be/a3cf73c9be5bba398ba990dfdac9731961b673": "a4e40dc3f918e6335b8ef233110e288c",
".git/objects/c0/44183a28ea85f516001fa949d9a0e6b8f95289": "61b576138198b787f2984a705606f6a3",
".git/objects/c1/cf9eb12b98be25502a40c2a2a877fa9dc78229": "39877da13fe41d7a232604d67004820d",
".git/objects/c2/1e361979d6db40aabe8ab07898b606d331752b": "67ec183b754f612f999a57a75289e9e1",
".git/objects/c5/6c2f0a2ae4987de40c197f987dcfd3381eebae": "520e6a723e71a02e732f03074a8a120b",
".git/objects/c5/e8111b2a56c3283d667d0e8ad0dad0489f9c7d": "940637cc6c86958ecfb3a32ea72809e3",
".git/objects/c8/03e7e0d3df7f67c6cfcd2bcad6c3ae3ec834f9": "115e180b57230fe23ebb048e920edc35",
".git/objects/cb/3e55d821672a6f3ca3adfbf58e7146e4556620": "45759060ed2ab1e6e1c87ad1033ada11",
".git/objects/cc/62845590899a442c6a7ac09874971580350e67": "b3afbab2b329be38dde3699a7a77d3f5",
".git/objects/cf/01cf36de055c177878c50ead5c2f49b956a5b9": "95c27192ae66b0369a342e10de1f14ae",
".git/objects/cf/bc6a2dba5a7866dfbd8e54e16fb9c5906e35e4": "7965d9abaefe4552d410da90b6d5af6f",
".git/objects/cf/c151af2757957f2b93de4ef7c049ea9d5b5450": "5644fe97d92d374372d8e3bac0ab1ea4",
".git/objects/d2/6b278434d3bf31b22fc5484d619734e770122e": "b31a4214db8cf166a26c6f011ac2a993",
".git/objects/d3/2cca838ab320b6809cd5146e39747e0d7d6345": "f1eba3705c25dc359a38454b010e0c93",
".git/objects/d4/ea375a082fba3a7b4af52b8cb8015f0b2970b5": "bcaaf6e82538cc30eb400277b79db797",
".git/objects/d7/058b93fbb0b4c4be8b0529f23a3dc84ab37d7a": "1b243440b57423f15be28b6c4557e7fc",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/f1dd627d8a7583e1f961f64400f0cb93d0024f": "f2fa3fab10f16e4c6dcc3356dc4a135c",
".git/objects/da/0b9db68ae69e5937957a36ae8cb9d42ba455e4": "cd68c88589e3634aa587bdb62e35e9cd",
".git/objects/e1/1db3b262d569aeafa4b07ebc28ae1fa023bcbe": "0623b206c0960c84b402ef537dd4d4c6",
".git/objects/e1/636e55006ce124d0e335519288b5f454f7e18f": "c59d7911e0558ddc2c16a511ecfe473b",
".git/objects/e2/995eaf4c92d123b5429d0c50055d0ce5cae7a7": "8bca4fd5b4cc09a7fd9d8b374d90eefe",
".git/objects/e2/b82ba387bf70fe312423bf37085a73a2603e0c": "b4b5742fcf259c36ad3c2a28e91774e3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/c148be9b95fac49d5f5c473e5d5e03f4d2a946": "9b7da12868eaf6dbb15bc2169b2d8784",
".git/objects/f2/1b13de2c5d6a04f68c285953ee3aff9deb35b3": "55507e7d67a8eeda024ecece1adf361e",
".git/objects/f3/98752e1380baa8a18ba26ca1b2f6a6363a8907": "5864775742b3ac47db019395c9261f34",
".git/objects/f4/a146f0f0a305e3d33f88e66e8fa79dfedf435a": "96bd1a6e100b0d401b6b554223197e82",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f6/17290ad994d16372a88650e53c6b3137851667": "53c4d9754f65e74c557648d007beeaa4",
".git/objects/f8/3bae74aea21101d2d3cdddc38fd381e00249b8": "01f03e759c1aeeac9adb90dad6ffe2de",
".git/objects/f9/80b577c24744e27632ad804d0f896f5518b7d6": "a46e52ee55540a1b9c1bc7573fe562ad",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fc/0bde91167e44bc38f07f2e694047549f4ec680": "2fac024aaa1b1f22e7565005f6636a9d",
".git/objects/fc/14eef3557daabd145b28aad84aac22da3f25c8": "f816394a0b8e26b994c6e8f6bdbd70db",
".git/objects/fc/b6019eaf51be5a9d085e5e282f4532bf034e15": "3a8a1b8bde9a88f917de7c2dbf7f8ad7",
".git/objects/fd/eb1d0755eaa9dc12a6752d9c14cdf67a1dfb93": "69e6af26d2bd0babe8b3681bb6b7fdd4",
".git/objects/fd/f0c6bd0029a5a0f7b19b32b5f7b11713eff642": "388b3bbb48988446e241c927db2cd922",
".git/refs/heads/master": "2c542d79f411ca0ff4c8bdc177d65e79",
".git/refs/remotes/origin/main": "d621cd094a8024426a106156529eaa39",
".git/refs/remotes/origin/master": "2c542d79f411ca0ff4c8bdc177d65e79",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "002a4bd99b8722cfd94059ee6b5a364b",
".idea/workspace.xml": "485ffc257dda8a043bfa4d5f4d26ed65",
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
"assets/assets/icons/logo.png": "9cefb38042cf1d090e78ae723eb2e941",
"assets/assets/icons/logo_splash_android12.png": "121675bcee167c37afcd16e79a6dfa84",
"assets/assets/icons/logo_splash_android12_dark.png": "325f8a7a2aba393a629909d957e904c3",
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
"assets/NOTICES": "cc209b87e728acd3b8e03f6147809bc0",
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
"favicon.png": "ef9736239eefcfa36c99f4207b1abdf3",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "f1f390806b56bb3a743ebb28a5240e84",
"icons/Icon-512.png": "e3e81ae26e257ec9b47b81682d3be1da",
"icons/Icon-maskable-192.png": "f1f390806b56bb3a743ebb28a5240e84",
"icons/Icon-maskable-512.png": "e3e81ae26e257ec9b47b81682d3be1da",
"index.html": "5c123ea2ff914b8baaa85c9932142d03",
"/": "5c123ea2ff914b8baaa85c9932142d03",
"main.dart.js": "f02b7d6bae8cdc9b9b7f5d2f428bf264",
"manifest.json": "8f5d745f22421a7b283da7035b9cb3a6",
"splash/img/dark-1x.png": "a5baddb7ce0a11b997f007c86f985ff9",
"splash/img/dark-2x.png": "7c8b061371d2b68dcb935954c891b993",
"splash/img/dark-3x.png": "ed0afcea9440fc13ec2e83111cc27335",
"splash/img/dark-4x.png": "08cd3e14986098e60a3fb4f339d7a8a0",
"splash/img/light-1x.png": "a5baddb7ce0a11b997f007c86f985ff9",
"splash/img/light-2x.png": "7c8b061371d2b68dcb935954c891b993",
"splash/img/light-3x.png": "ed0afcea9440fc13ec2e83111cc27335",
"splash/img/light-4x.png": "08cd3e14986098e60a3fb4f339d7a8a0",
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
