<template>
  <div>
    <!-- Horizontal Menu for larger screens -->
    <el-menu
      mode="horizontal"
      class="font-weight-bold d-none d-lg-flex"
      :default-active="checkPathname()"
    >
      <el-menu-item index="1" @click="navigate('/')">TRANG CHỦ</el-menu-item>
      <el-submenu index="3">
        <template #title>KHÓA HỌC</template>
        <el-menu-item index="3-1" @click="navigate('/vstep')"
          >Luyện thi VSTEP</el-menu-item
        >
        <el-menu-item index="3-2" @click="navigate('/vstep/luyen-thi-b1')"
          >Luyện thi VSTEP B1</el-menu-item
        >
        <el-menu-item index="3-3" @click="navigate('/vstep/luyen-thi-b2')"
          >Luyện thi VSTEP B2</el-menu-item
        >
        <el-menu-item index="3-4" @click="navigate('/toeic')"
          >Luyện thi TOEIC</el-menu-item
        >
        <el-menu-item index="3-5" @click="navigate('/ielts')"
          >Luyện thi IELTS</el-menu-item
        >
        <el-menu-item index="3-6" @click="navigate('/aptis')"
          >Luyện thi APTIS</el-menu-item
        >
        <el-menu-item index="3-7" @click="navigate('/aptis/luyen-thi-b1')"
          >Luyện thi APTIS B1</el-menu-item
        >
        <el-menu-item index="3-8" @click="navigate('/aptis/luyen-thi-b2')"
          >Luyện thi APTIS B2</el-menu-item
        >
        <el-menu-item index="3-9" @click="navigate('/englishacademic')"
          >Anh Ngữ Học Thuật</el-menu-item
        >
      </el-submenu>
      <el-menu-item index="4" @click="navigate('/test-schedule')"
        >LỊCH THI VSTEP</el-menu-item
      >
      <el-menu-item index="5" @click="navigate('/study-schedule')"
        >LỊCH ÔN TẬP</el-menu-item
      >
      <el-menu-item index="6" @click="navigate('/new')">TIN TỨC</el-menu-item>
    </el-menu>

    <!-- Dropdown Menu for smaller screens -->
    <el-dropdown class="d-lg-none">
      <span class="el-dropdown-link" @click.stop>
        <MenuOutlined />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="navigate('/')">TRANG CHỦ</el-dropdown-item>
          <el-dropdown-item @click="navigate('/vstep')"
            >Luyện thi VSTEP</el-dropdown-item
          >
          <el-dropdown-item @click="navigate('/toeic')"
            >Luyện thi TOEIC</el-dropdown-item
          >
          <el-dropdown-item @click="navigate('/ielts')"
            >Luyện thi IELTS</el-dropdown-item
          >
          <el-dropdown-item @click="navigate('/test-schedule')"
            >LỊCH THI VSTEP</el-dropdown-item
          >
          <el-dropdown-item @click="navigate('/study-schedule')"
            >LỊCH ÔN TẬP</el-dropdown-item
          >
          <el-dropdown-item @click="navigate('/new')">TIN TỨC</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { MenuOutlined } from "@ant-design/icons-vue";

export default {
  name: "MenuHeader",
  components: {
    MenuOutlined,
  },
  setup() {
    const router = useRouter();

    const navigate = (path) => {
      router.push(path);
    };

    const checkPathname = computed(() => {
      const path = router.currentRoute.value.path;
      if (path === "/") return "1";
      if (path.startsWith("/vstep")) return "3";
      if (path.startsWith("/toeic")) return "6";
      if (path.startsWith("/ielts")) return "7";
      if (path.startsWith("/test-schedule")) return "4";
      if (path.startsWith("/study-schedule")) return "5";
      if (path.startsWith("/new")) return "6";
      return "1";
    });

    return {
      navigate,
      checkPathname,
    };
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
