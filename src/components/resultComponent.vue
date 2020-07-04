<template>
	<div>
		<!-- List Result Components -->
		<v-container class="full-width" fluid>
			<v-row align="center" justify="center">
				<v-card-text>
					<p class="display-1 text--primary font-italic"> {{ titre }} :</p>
					<p class="display-1 text--primary font-italic"> Mon Premier getters (items.length): {{ countItems }} :</p>					
				</v-card-text>
				<v-list three-line>
					<template v-for="(item, index) in items">
						<v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

						<v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

						<v-list-item v-else :key="item.title">
							<v-list-item-avatar>
								<v-img :src="item.avatar"></v-img>
							</v-list-item-avatar>

							<v-list-item-content>
								<v-list-item-title v-html="item.title"></v-list-item-title>
								<v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</template>
				</v-list>
			</v-row>
		</v-container>
		<!-- / List Result Components -->
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
	props: {
		titre: String
	},
	computed: {
		...mapState('home', ['items']),
		...mapGetters('home', ['countItems'])
	},
};
</script>