import axios from "axios"
let dynamicRoutes = () => {
	return axios
	.get("https://tweelingblog.nl/wp-json/wp/v2/posts")
	.then(res => {
		return res.data.map(post => `/blog/${post.slug}`)
	})
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
	title: 'tweelingblog',
	htmlAttrs: {
	  lang: 'en'
	},
	meta: [
	  { charset: 'utf-8' },
	  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
	  { hid: 'description', name: 'description', content: '' }
	],
	link: [
	  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
	]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
	routes: dynamicRoutes
  }
}
