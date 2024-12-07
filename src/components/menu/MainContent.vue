<template>
  <v-container class="text-center">
    <br />
    <br />
    <br />
    <h2 class="text-orange">Các đơn vị tổ chức thi và cấp chứng chỉ</h2>
    <v-row justify="center" class="mt-5">
      <v-col
        cols="12"
        sm="4"
        md="2"
        v-for="(logo, index) in logos"
        :key="index"
      >
        <v-img :src="logo" contain height="100"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MainContent",
  data() {
    return {
      logos: [
        "/đv_1.jpg",
        "/đv_2.png",
        "/đv_3.png",
        "/đv_4.png",
        "/đv_5.png",
        "/đv_6.jpg",
      ],
    };
  },
};
</script>
