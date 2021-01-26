export const state = () => ({
	posts: []
})

export const mutations = {
	updatePosts: (state, payload) => {
		state.posts = payload
	}
}

export const actions = {
	async getPosts({
		state,
		commit
	}) {
		if (state.posts.length) return
		try {
			let posts = await fetch("https://tweelingblog.nl/wp-json/wp/v2/posts").then(res => res.json())
			posts = posts
			.filter(el => el.status === "publish")
			.map(({ id, slug, title, excerpt, date, tags, content, yoast_head }) => ({
				id,
				slug,
				title,
				excerpt,
				date,
				tags,
				content,
				yoast_head
			}))
			commit("updatePosts", posts)
		} catch (err) {
			console.log(err)
		}
	}
}