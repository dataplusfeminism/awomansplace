export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon copy.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","headlines/ch1-getty.png","headlines/headlines-1.png","headlines/headlines-2.png","headlines/headlines-3.png","illustrations/awareness-sensitization.png","illustrations/black-border-long.png","illustrations/black-border.png","illustrations/civic-infra.png","illustrations/civil-society.png","illustrations/collage-cover-monochrome.psd","illustrations/collage-cover.png","illustrations/collage.png","illustrations/comic-ban.png","illustrations/comic-bn.png","illustrations/comic-en.png","illustrations/comic-eng.png","illustrations/comic-hi.png","illustrations/comic-hin.png","illustrations/feminist-utopia-bn.png","illustrations/feminist-utopia-en.png","illustrations/feminist-utopia-hi.png","illustrations/feminist-utopia.png","illustrations/health-counselling.png","illustrations/legal-interventions.png","illustrations/logo.png","illustrations/pink-border.png","illustrations/strengthen-reporting.png","logo.png","logos/logo-anandam.jpeg","logos/logo-df-pink.png","logos/logo-df-teal.png","logos/logo-duspmit.png","logos/logo-lcau.png","logos/logo-parcham.jpg","logos/logo-pov.png","logos/logo-rdf.png","logos/logo-rdf.webp","logos/logo-sappho.jpeg","logos/logo-sappho.png","logos/logo-swayam.png","robots.txt","site.webmanifest","womens-place-main.png"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg",".webp":"image/webp",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.YhF6kVUn.js",app:"_app/immutable/entry/app.eDO1cE3G.js",imports:["_app/immutable/entry/start.YhF6kVUn.js","_app/immutable/chunks/BgAFRdRJ.js","_app/immutable/chunks/DGhRV1CF.js","_app/immutable/chunks/NGToSnMG.js","_app/immutable/entry/app.eDO1cE3G.js","_app/immutable/chunks/cYdHAS5C.js","_app/immutable/chunks/DGhRV1CF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/[lang]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[lang]/chapter2",
				pattern: /^\/([^/]+?)\/chapter2\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[lang]/chapter3",
				pattern: /^\/([^/]+?)\/chapter3\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[lang]/method",
				pattern: /^\/([^/]+?)\/method\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
