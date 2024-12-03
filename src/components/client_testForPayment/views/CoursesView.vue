<template>
  <v-container>
    <CourseList />
  </v-container>
</template>

<script>
import CourseList from "@/components/client_testForPayment/CourseList.vue";

export default {
  name: "CoursesView",
  components: {
    CourseList,
  },
};
</script>
