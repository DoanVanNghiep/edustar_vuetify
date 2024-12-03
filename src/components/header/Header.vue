<template>
  <div class="mx-auto fixed-top z-50 w-100 bg-white shadow-sm">
    <div
      class="container d-flex justify-content-between align-items-center py-3"
    >
      <!-- Logo -->
      <div
        class="d-flex align-items-center cursor-pointer"
        @click="redirectToHome"
      >
        <img src="/logoCamTrongSuot.png" alt="Logo" class="w-10 h-10" />
        <h2 class="ms-2 text-2xl font-weight-bold text-warning">EduStar</h2>
      </div>

      <!-- Menu Header
      <MenuHeader /> -->

      <!-- Dropdown Menu for smaller screens -->
      <div class="d-lg-none">
        <el-dropdown>
          <span class="cursor-pointer">
            <MenuOutlined />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="navigate('/')"
                >TRANG CHỦ</el-dropdown-item
              >
              <el-dropdown-item>
                <a
                  :href="`https://mocktest.edustar.com.vn/?jwt=${jwt}&id=${id}`"
                  target="_blank"
                >
                  THI THỬ
                </a>
              </el-dropdown-item>
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
              <el-dropdown-item @click="navigate('/new')"
                >TIN TỨC</el-dropdown-item
              >
              <el-dropdown-item @click="showModalRegisterAcc"
                >ĐĂNG KÝ TƯ VẤN</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { MenuHeader } from "../menu/MenuHeder.vue";
import { MenuOutlined } from "@ant-design/icons-vue";

export default {
  name: "",
  components: {
    MenuOutlined,
  },
  setup() {
    const router = useRouter();
    const jwt = ref(null);
    const id = ref(null);

    const redirectToHome = () => {
      router.push("/");
    };

    return {
      redirectToHome,
      jwt,
      id,
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
.cursor-pointer {
  cursor: pointer;
}

.text-warning {
  color: #f79500;
}
</style>
