<template>
	<div>
		<!-- Card News Components -->
		<v-container class="full-width" fluid>
			<v-row align="center" justify="center">
				<v-card-text>
					<p class="display-1 text--primary font-italic">News:</p>
					<p class="display-1 text--primary font-italic">CountNews (oui, n'oublions pas le props du parent): {{ countData }}</p>
				</v-card-text>
				<v-card max-width="344" class="mx-auto" :key="dataNews" v-for="(news, dataNews) in dataNews">
					<v-list-item>
						<v-list-item-avatar color="grey"></v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title class="headline">{{ news.title }}</v-list-item-title>
							<v-list-item-subtitle>by {{ news.author }}</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>

					<v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

					<v-card-text>{{ news.message }}</v-card-text>
				</v-card>
			</v-row>
		</v-container>
		<!-- / Card News Components -->
	</div>
</template>

<script>
export default {
	data: () => ({}),
	props: {
		dataNews: {},
		countData: Number
	},
	computed: {
	}
};
</script>