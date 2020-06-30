<template>
	<div>

		<!-- List Crypto Components -->
		<cryptoComponent :getPrice='getPrice' :price='price' :priceArray='priceArray' :converter='converter'/>
		<!-- / List Crypto Components -->

	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import cryptoComponent from "../components/cryptoComponent";

export default {
	name: "CryptoPage",
	components: {
		cryptoComponent
	},
	methods: {
	},
	computed: {
		...mapGetters("crypto", ["getPrice"]),
		...mapState("crypto", ["price", "priceArray", "converter"])
	}
};
</script>