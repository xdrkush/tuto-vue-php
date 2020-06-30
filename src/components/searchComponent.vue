<template>
	<div>
		<!-- Search Bar Component -->
		<v-container class="fill-width" fluid>
			<v-row align="center" justify="center">
				<v-toolbar class="mx-auto" max-width="700" dark color="indigo">
					<v-text-field
						v-model='childSearch'
						class="mx-4"
						flat
						hide-no-data
						hide-details
						label="Rechercher"
						solo-inverted
					></v-text-field>
					<v-btn icon v-on:click="changeSearch">
						<v-icon>mdi-magnify</v-icon>
					</v-btn>
				</v-toolbar>
			</v-row>
		</v-container>
		<!-- / Search Bar Components -->
	</div>
</template>

<script>
export default {
	name: 'searchComponent',
	data() {
		return {
			childSearch: ''
		}
	},
	computed: {
		changeSearch () {
			return this.$emit('searchToParent', this.childSearch)
		}
	}
};
</script>