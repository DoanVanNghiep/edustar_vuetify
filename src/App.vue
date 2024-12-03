<template>
  <v-app>
    <!-- Thanh điều hướng -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-icon left>mdi-school</v-icon> Quản lý Khóa học
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Nội dung chính -->
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="grey darken-4" dark>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center">
            <span>© {{ new Date().getFullYear() }} Quản lý Khóa học</span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
}
</style>
