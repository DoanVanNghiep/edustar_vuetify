<template>
  <v-app-bar app>
    <div class="relative flex items-center">
      <img
        src="/logoCamTrongSuot.png"
        alt="EduStar Logo"
        class="h-[4rem] phone:h-[3rem] tablet:h-[4.5rem] laptop:h-[5rem] desktop:h-[6rem] mr-2"
      />
      <h2
        class="text-[#fb9400] text-4xl font-medium tablet:text-5xl laptop:text-6xl desktop:text-7xl"
      >
        EduStar
      </h2>
    </div>
    <v-spacer></v-spacer>
    <v-btn
      text
      :class="{ 'text--blue': active === 'home' }"
      @click="navigate('home')"
      >TRANG CHỦ</v-btn
    >
    <v-btn
      text
      :class="{ 'text--blue': active === 'exam' }"
      @click="navigate('exam')"
      >THI THỬ</v-btn
    >
    <v-btn
      text
      :class="{ 'text--blue': active === 'courses' }"
      @click="navigate('courses')"
      >KHÓA HỌC</v-btn
    >
    <v-btn
      text
      :class="{ 'text--blue': active === 'schedule' }"
      @click="navigate('schedule')"
      >LỊCH THI VSTEP</v-btn
    >
    <v-btn
      text
      :class="{ 'text--blue': active === 'news' }"
      @click="navigate('news')"
      >TIN TỨC</v-btn
    >
    <v-btn
      text
      :class="{ 'text--blue': active === 'consultation' }"
      @click="navigate('consultation')"
      >ĐĂNG KÍ TƯ VẤN</v-btn
    >
    <v-btn text>
      <v-icon large color="gold">mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      active: "home",
    };
  },
  methods: {
    navigate(page) {
      this.active = page;
      console.log(`Navigating to: ${page}`);
    },
  },
};
</script>
<style scoped>
.logo-container {
  display: flex;
  align-items: center;
}

.logo-container img {
  margin-right: 10px;
}

.edustar-text {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: orange;
  letter-spacing: 1px;
}
</style>
