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
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/en","/en/__data.json","/en/method","/en/method/__data.json","/en/chapter2","/en/chapter2/__data.json","/en/chapter3","/en/chapter3/__data.json","/hi","/hi/__data.json","/hi/method","/hi/method/__data.json","/hi/chapter2","/hi/chapter2/__data.json","/hi/chapter3","/hi/chapter3/__data.json","/bn","/bn/__data.json","/bn/method","/bn/method/__data.json","/bn/chapter2","/bn/chapter2/__data.json","/bn/chapter3","/bn/chapter3/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
