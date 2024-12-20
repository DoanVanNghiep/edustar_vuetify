<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h5">
        <v-icon left>mdi-book-open</v-icon> Danh sách Khóa học
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="registeredCourse"
          item-value="id"
          class="elevation-2"
          dense
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Quản lý Khóa học</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn color="primary" dark @click="refreshCourses">
                <v-icon left>mdi-refresh</v-icon> Làm mới
              </v-btn>
            </v-toolbar>
          </template>

          <template v-slot:item.price="{ item }">
            <span>{{ item.price }}</span>
          </template>

          <!-- Nút Mua Khóa học -->
          <template v-slot:item.action="{ item }">
            <v-btn color="success" small @click="buyCourse(item)">
              <v-icon left>mdi-cart</v-icon> Mua khóa học
            </v-btn>
          </template>

          <template v-slot:no-data>
            <v-alert type="info" border="left" dark>
              Không có dữ liệu khóa học để hiển thị.
            </v-alert>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import apiClient from "@/services/apiService";

export default {
  name: "CourseList",
  data() {
    return {
      registeredCourse: [], // Dữ liệu khóa học từ API
      headers: [
        { text: "Tên Khóa học", value: "name" },
        { text: "Giá", value: "price" },
        { text: "Hình thức học", value: "learnOnlineOrOffline" },
        { text: "Thao tác", value: "action", sortable: false }, // Thêm cột mới
      ],
      loadingCourseId: null, // Trạng thái loading cho từng khóa học
    };
  },
  methods: {
    async refreshCourses() {
      try {
        const data = await apiClient.readCourse();
        this.registeredCourse = data;
      } catch (error) {
        console.error("Lỗi khi gọi API readCourse:", error);
        // Không cần thông báo lỗi cho người dùng, chỉ log vào console
      }
    },

    formatPrice(price) {
      return price ? `${price} VND` : "Chưa cập nhật";
    },

    async buyCourse(course) {
      // Điều hướng đến URL cụ thể
      window.location.href = `/payment/${course.id}`;
    },
  },
  mounted() {
    this.refreshCourses(); // Gọi API khi component được mount
  },
};
</script>

<style scoped>
/* Thêm một chút khoảng cách để bảng trông thoáng hơn */
v-container {
  padding: 24px;
}
</style>
