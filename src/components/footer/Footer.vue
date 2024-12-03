<template>
  <div>
    <div class="bg-white">
      <div class="container text-center py-5">
        <h2 class="display-4 text-warning mb-4">
          Các đơn vị tổ chức thi và cấp chứng chỉ
        </h2>
        <div class="row row-cols-1 row-cols-md-6 g-4 mb-5">
          <div
            v-for="(item, index) in listImageFooter"
            :key="index"
            class="col"
          >
            <img :src="item.img" alt="logo" class="img-fluid" />
          </div>
        </div>
      </div>

      <div class="bg-light py-5">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <img src="/logoCamTrongSuot.png" alt="Logo" class="img-fluid" />
              <h2 class="mt-3 text-warning">EduStar</h2>
              <p class="text-muted">Make English become your power</p>
            </div>
            <div>
              <h2 class="text-warning">Dịch vụ</h2>
              <ul class="list-unstyled">
                <li>
                  <router-link to="/vstep" class="text-dark"
                    >Luyện thi VSTEP</router-link
                  >
                </li>
                <li>
                  <router-link to="/aptis" class="text-dark"
                    >Luyện thi APTIS</router-link
                  >
                </li>
                <li>
                  <router-link to="/toeic" class="text-dark"
                    >Luyện thi TOEIC</router-link
                  >
                </li>
                <li>
                  <router-link to="/ielts" class="text-dark"
                    >Luyện thi IELTS</router-link
                  >
                </li>
                <li>
                  <router-link to="/englishacademic" class="text-dark"
                    >Luyện thi Anh Ngữ Học Thuật</router-link
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-warning">Lịch làm việc</h2>
              <ul class="list-unstyled">
                <li class="text-muted">Tư vấn 24/24</li>
                <li class="text-muted">Thi thử miễn phí</li>
                <li class="text-muted">Lịch ôn tập các chứng chỉ</li>
                <li class="text-muted">Lịch thi các trường Đại học</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark text-white text-center py-3">
      <p>&copy; 2024 EduStar. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      listImageFooter: [
        { img: "/đv_1.jpg" },
        { img: "/đv_2.png" },
        { img: "/đv_3.png" },
        { img: "/đv_4.png" },
        { img: "/đv_5.png" },
        { img: "/đv_6.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
/* Custom Styles */
.bg-light {
  background-color: #f8f9fa;
}

.text-warning {
  color: #f79500 !important;
}

.text-muted {
  color: #6c757d;
}

.text-dark {
  color: #343a40;
}
</style>
