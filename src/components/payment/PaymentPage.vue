<template>
  <v-container>
    <v-row>
      <!-- Thông tin người dùng -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h6 font-weight-bold">
            Thông tin người dùng
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="paymentInfo.email"
                label="Địa chỉ email *"
                :rules="[
                  (v) => !!v || 'Email là bắt buộc',
                  (v) => /.+@.+\..+/.test(v) || 'Email không hợp lệ',
                ]"
                required
              ></v-text-field>
              <v-checkbox
                v-model="receiveFiles"
                label="Bạn cần nhập địa chỉ email và xác nhận."
              ></v-checkbox>
              <v-text-field
                v-model="paymentInfo.name"
                label="Họ và tên *"
                :rules="[(v) => !!v || 'Họ và tên là bắt buộc']"
                required
              ></v-text-field>
              <v-text-field
                v-model="paymentInfo.phone"
                label="Số điện thoại *"
                :rules="[
                  (v) => !!v || 'Số điện thoại là bắt buộc',
                  (v) => /^\d{10,11}$/.test(v) || 'Số điện thoại không hợp lệ',
                ]"
                required
              ></v-text-field>
              <v-text-field
                v-model="paymentInfo.address"
                label="Địa chỉ *"
                :rules="[(v) => !!v || 'Địa chỉ là bắt buộc']"
                required
              ></v-text-field>
              <v-text-field
                v-model="paymentInfo.confirmPassword"
                label="Mật khẩu để xác nhận *"
                type="password"
                :rules="[(v) => !!v || 'Mật khẩu là bắt buộc']"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tóm tắt đơn hàng -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h6 font-weight-bold">
            Tóm tắt đơn hàng
          </v-card-title>
          <v-card-text v-if="course">
            <div class="d-flex align-center mb-3">
              <v-img
                src="https://via.placeholder.com/100"
                max-width="100"
                max-height="100"
                class="mr-4"
              ></v-img>
              <div>
                <h3 class="text-subtitle-1 font-weight-bold">
                  {{ course.name }}
                </h3>
                <p class="mb-1">
                  <strong>Giá tiền:</strong> {{ formatPrice(course.price) }}
                </p>
                <p class="mb-1">
                  <strong>Giảng viên:</strong> {{ course.teacher }}
                </p>
                <p class="mb-1">
                  <strong>Số điện thoại:</strong> {{ course.teacherPhone }}
                </p>
                <p class="mb-1">
                  <strong>Ngày thi:</strong> {{ course.examDate }}
                </p>
              </div>
            </div>
            <v-divider class="my-3"></v-divider>
            <div>
              <p><strong>Phương thức thanh toán:</strong></p>
              <v-radio-group v-model="paymentMethod">
                <v-radio label="Thanh toán trực tiếp" value="offline"></v-radio>
                <v-radio label="Thanh toán online" value="online"></v-radio>
              </v-radio-group>
            </div>
          </v-card-text>
          <v-card-text v-else>
            <v-alert type="info">Đang tải thông tin khóa học...</v-alert>
          </v-card-text>
        </v-card>

        <!-- Thanh toán -->
        <v-card class="mt-4">
          <v-card-text>
            <p class="text-danger text-caption mb-3">
              - Khi bạn đã mua khóa học yêu cầu không chia sẻ tài liệu. Đây là
              đặc quyền của người mua.<br />
              - Người dùng nếu thanh toán trực tiếp hãy đến địa chỉ thanh toán
              để gặp nhân viên.
            </p>
            <v-divider></v-divider>
            <div class="d-flex justify-space-between align-center mt-3">
              <p><strong>Số lượng:</strong> 1</p>
              <p><strong>Tổng tiền:</strong> {{ formatPrice(course.price) }}</p>
            </div>
            <v-btn
              color="primary"
              block
              class="mt-3"
              :disabled="!valid"
              @click="submitPayment"
            >
              Thanh Toán
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "PaymentPage",
  data() {
    return {
      course: null, // Chứa thông tin khóa học
      paymentInfo: {
        email: "",
        name: "",
        phone: "",
        address: "",
        confirmPassword: "",
      },
      receiveFiles: false,
      paymentMethod: "offline",
      valid: false,
    };
  },
  methods: {
    formatPrice(price) {
      return `${price.toLocaleString()} VND`;
    },
    async fetchCourse() {
      const id = this.$route.params.id; // Lấy id từ params
      try {
        const response = await axios.get(`http://localhost:8080/service/${id}`);
        this.course = response.data.data; // Gán dữ liệu khóa học vào biến
      } catch (error) {
        console.error("Lỗi khi lấy thông tin khóa học:", error);
      }
    },
    submitPayment() {
      console.log("Thông tin thanh toán:", this.paymentInfo);
      alert("Thanh toán thành công! Cảm ơn bạn.");
    },
  },
  created() {
    this.fetchCourse(); // Lấy thông tin khóa học khi component được tạo
  },
};
</script>

<style scoped>
.text-danger {
  color: #ff0000;
}
</style>
