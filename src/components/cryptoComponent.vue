<template>
	<div>
		<!-- Card Bitcoin Price Components -->
		<v-container class="full-width" fluid>
			<v-row align="center" justify="center">
				<v-card-text>
					<p class="display-1 text--primary font-italic">{{ title }}</p>
				</v-card-text>
				<v-card max-width="500" class="mx-auto">
					<v-img
						src="https://logos-download.com/wp-content/uploads/2016/06/Bitcoin_logo_yellow-700x438.png"
						height="194"
					></v-img>

					<v-card-actions class>
						<v-btn text color="deep-purple accent-4">
							<h1>
								1
								<v-icon>mdi-bitcoin</v-icon>
								=
							</h1>
						</v-btn>
					</v-card-actions>

					<!-- Card Bitcoin Price Components -->
					<v-container class="full-width" fluid>
						<v-row align="center" justify="center">
							<v-card
								max-width="350"
								class="mx-auto"
								:key="price"
								v-for="(prx, price) in price"
							>
								<v-card-actions class>
									<v-btn text color="deep-purple accent-4">{{prx.rate_float.toFixed(2)}}</v-btn>
									<v-btn text color="deep-purple accent-4">{{prx.code}}</v-btn>
								</v-card-actions>
							</v-card>
						</v-row>
					</v-container>
					<!-- / Card Bitcoin Price Components -->
					
				</v-card>
			</v-row>
		</v-container>
		<!-- / Card Bitcoin Price Components -->

		<!-- Card Converter -->
		<v-toolbar class="mx-auto" max-width="700" dark color="indigo">
			<v-text-field
				v-model="priceBtc"
				type="number"
				class="mx-4"
				flat
				hide-no-data
				hide-details
				label="Convertir BTC"
				solo-inverted
			></v-text-field>
			<v-btn icon v-on:click="inputConverter">
				<v-icon>mdi-bitcoin</v-icon>
			</v-btn>
		</v-toolbar>
		<!-- Card Converter -->

		<!-- Card Bitcoin Price Components -->
		<v-container class="full-width" fluid>
			<v-row align="center" justify="center">
				<v-card max-width="350" class="mx-auto" :key="converter" v-for="(prx, converter) in converter">
					<v-card-actions class>
						<v-btn text color="deep-purple accent-4">{{prx.conversion.toFixed(2)}}</v-btn>
						<v-btn text color="deep-purple accent-4">{{prx.code}}</v-btn>
					</v-card-actions>
				</v-card>
			</v-row>
		</v-container>
		<!-- / Card Bitcoin Price Components -->
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	data() {
		return {
			title: "Crypto API",
			priceBtc: "0.01"
		};
	},
	methods: {
		...mapActions("crypto", ["changeConverter"])
	},
	computed: {
		inputConverter() {
			return this.changeConverter(this.priceBtc);
		}
	},
	props: {
		price: {},
		converter: {}
	}
};
</script>