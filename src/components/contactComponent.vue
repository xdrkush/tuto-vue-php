<template>
	<v-container class="full-width" fluid>
		<v-row align="center" justify="center">
			<v-card color="indigo" dark>
				<template v-slot:progress>
					<v-progress-linear absolute color="green lighten-3" height="4" indeterminate></v-progress-linear>
				</template>
				<v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg">
					<v-row>
						<v-col class="text-right" cols="12">
							<v-menu bottom left transition="slide-y-transition">
								<template v-slot:activator="{ on }">
									<v-btn icon v-on="on">
										<v-icon>mdi-dots-vertical</v-icon>
									</v-btn>
								</template>
							</v-menu>
						</v-col>
						<v-row class="pa-4" align="center" justify="center">
							<v-col class="text-center">
								<h3 class="headline">{{ formMessage.name }}</h3>
								<span class="grey--text text--lighten-1">{{ formMessage.email }}</span>
							</v-col>
						</v-row>
					</v-row>
				</v-img>
				<v-form>
					<v-container>
						<v-row>
							<v-col cols="12" md="6">
								<v-text-field
									v-model="formMessage.name"
                  dark
									filled
									color="blue-grey lighten-2"
									label="Name"
								></v-text-field>
							</v-col>
							<v-col cols="12" md="6">
								<v-text-field
									v-model="formMessage.email"
                  dark
									filled
									color="blue-grey lighten-2"
									label="Email"
								></v-text-field>
							</v-col>
							<v-col cols="12" md="12">
                <v-text-field
									v-model="formMessage.subject"
                  dark
									filled
									color="blue-grey lighten-2"
									label="Sujet"
								></v-text-field>
							</v-col>
							<v-col cols="12" md="12">
                <v-textarea
									v-model='formMessage.message'
                  autocomplete="message"
                  label="Message"
                  filled
                  dark
                ></v-textarea>
							</v-col>
							<v-col cols="12" md="6" align='center'>
                <v-btn class="ma-2" tile outlined color="orange" @click='reset()'>
                  Reset
                </v-btn>
							</v-col>
							<v-col cols="12" md="6" align='center'>
                <v-btn class="ma-2" tile outlined color="white" @click="formContact()">
                  <v-icon left>mdi-message</v-icon> Envoyer un message
                </v-btn>
							</v-col>
						</v-row>
					</v-container>
				</v-form>
				<v-divider></v-divider>
			</v-card>
		</v-row>
	</v-container>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
	data() {
		return {
			data: {}
		}
	},
	methods: {
		formContact () {
			// console.log(data)
			this.sendMessage(this.formMessage)
		},
		reset () {
			this.resetMessage()
		},
		...mapActions('contact', ['sendMessage', 'resetMessage'])
	},
	computed: {
		...mapState('contact', ['formMessage'])
	},
};
</script>