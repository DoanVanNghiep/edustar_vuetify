<template>
  <v-card>
    <v-card-title class="text-h5">Danh sách khóa học</v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="courses"
        item-value="id"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Khóa học</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="loadCourses">Làm mới</v-btn>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { fetchCourses } from "@/api/courseApi";

export default {
  name: "CourseList",
  data() {
    return {
      courses: [], // Dữ liệu khóa học
      headers: [
        { text: "ID", value: "id" },
        { text: "Tên Khóa Học", value: "name" },
        { text: "Mô Tả", value: "description" },
      ],
    };
  },
  methods: {
    async loadCourses() {
      try {
        // Gọi API để lấy danh sách khóa học
        const fetchedCourses = await fetchCourses();
        console.log("Fetched courses:", fetchedCourses); // Kiểm tra dữ liệu
        this.courses = fetchedCourses; // Gán dữ liệu vào biến courses
      } catch (error) {
        console.error("Lỗi khi tải khóa học:", error);
      }
    },
  },
  mounted() {
    this.loadCourses(); // Tự động tải dữ liệu khi component được mount
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
