<template>
	<div>
		<!-- Title Components -->
		<titleComponent titre="Welcome To VueJS !" />
		<!-- / Title Components -->

		<!-- Search Bar Component -->
		<searchComponent v-on:searchToParent="getChildSearch" />
		<!-- / Search Bar Components -->

		<!-- Card News Components -->
		<newsComponent titre="News :" :getNewsDate='getNewsData' :dataNews="filterNewsData" :countData="countNewsData" />
		<!-- / Card News Components -->

		<!-- List Result Components -->
		<resultComponent titre="Liste Result :" />
		<!-- / List Result Components -->
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import titleComponent from "../components/titleComponent";
import newsComponent from "../components/newsComponent";
import resultComponent from "../components/resultComponent";
import searchComponent from "../components/searchComponent";

export default {
	name: "HomePage",
	components: {
		titleComponent,
		searchComponent,
		newsComponent,
		resultComponent
	},
	methods: {
		getChildSearch (value) {
			// alert(value);
			this.editSearchNewsData(value)
		},
		...mapActions('home', ['editSearchNewsData'])
	},
	computed: {
		...mapGetters("home", ["getNewsData", "countNewsData", "filterNewsData"]),
		...mapState("home", ['newsData', 'searchNewsData'])
	}
};
</script>