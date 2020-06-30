<template>
	<v-app>

		<!-- Sidebar Components -->
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense>
				<v-list-item link to="/">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content >
						<v-list-item-title>Retour au site</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/addArticle">
					<v-list-item-action>
						<v-icon>mdi-plus-box</v-icon>
					</v-list-item-action>
					<v-list-item-content >
						<v-list-item-title>Créé un article</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<!-- / Sidebar Components -->

		<!-- Navbar Components -->
		<v-app-bar app color="purple" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Tuto Admin Vuetify</v-toolbar-title>
		</v-app-bar>
		<!-- / Navbar Components -->

		<!-- Content Router -->
		<v-content>
      
			<router-view />

		</v-content>
		<!-- / Content Router -->

		<!-- Footer Components -->
		<v-footer color="indigo" app>
			<span class="white--text">&copy; 2019 By Drk</span>
		</v-footer>
		<!-- Footer Components -->
	</v-app>
  
</template>

<script>
export default {
	data: () => ({
		drawer: null
	})
};
</script>