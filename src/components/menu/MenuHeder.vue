<template>
  <v-navigation-drawer app class="pa-3" temporary>
    <v-list dense>
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        link
        :class="{ 'text--blue': active === item.name }"
        @click="setActive(item.name)"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      active: "TRANG CHỦ",
      menuItems: [
        { name: "TRANG CHỦ", label: "Trang chủ" },
        { name: "THI THỬ", label: "Thi thử" },
        { name: "KHÓA HỌC", label: "Khóa học" },
        { name: "LỊCH THI VSTEP", label: "Lịch thi VSTEP" },
        { name: "LỊCH ÔN TẬP", label: "Lịch ôn tập" },
        { name: "TIN TỨC", label: "Tin tức" },
        { name: "ĐĂNG KÝ TƯ VẤN", label: "Đăng ký tư vấn" },
      ],
    };
  },
  methods: {
    setActive(item) {
      this.active = item;
      console.log(`Navigated to: ${item}`);
    },
  },
};
</script>
