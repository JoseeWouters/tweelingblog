<template>
	<main>
		<article v-if="post">
			<h1>{{ post.title.rendered }}</h1>
			<section v-html="post.content.rendered"></section>
		</article>
	</main>
</template>

<script>
export default {
	computed: {
		posts() {
			return this.$store.state.posts;
		},
		post() {
			return this.posts.find(el => el.slug === this.slug);
		}
	},
	data() {
		return {
			slug: this.$route.params.slug
		};
	},
	created() {
		this.$store.dispatch("getPosts");
	}
}
</script>

<style>

</style>