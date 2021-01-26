<template>
	<main class="posts">
		<article class="post" v-for="post in posts" :key="post.id">
			<h2><a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a></h2>
			<p>{{post.yoast_head}}</p>
			<div v-html="post.excerpt.rendered"></div>
		</article>
	</main>
</template>

<script>
export default {
	computed: {
		posts() {
			return this.$store.state.posts;
		}
	},
	created() {
		this.$store.dispatch("getPosts");
	}
}
</script>

<style>
</style>
