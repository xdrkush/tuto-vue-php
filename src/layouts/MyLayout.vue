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
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/contact">
					<v-list-item-action>
						<v-icon>mdi-email</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Contact</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/crypto">
					<v-list-item-action>
						<v-icon>mdi-bitcoin</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Crypto</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<!-- / Sidebar Components -->

		<!-- Navbar Components -->
		<v-app-bar app color="indigo" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Tuto Vuetify</v-toolbar-title>
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