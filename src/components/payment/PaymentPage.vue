<template>
  <v-container>
    <v-row>
      <!-- Thông tin người dùng -->
      <v-col cols="12" md="4">
        <v-card outlined class="pa-4 elevation-1">
          <v-card-title class="text-h6 font-weight-bold">
            Thông tin người dùng
          </v-card-title>
          <v-card-text>
            <v-form ref="userForm" v-model="isUserFormValid">
              <!-- Email -->
              <v-text-field
                v-model="user.email"
                label="Địa chỉ email"
                outlined
                dense
                required
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <!-- Họ và tên -->
              <v-text-field
                v-model="user.name"
                label="Họ và tên"
                outlined
                dense
                required
                :rules="[rules.required]"
              ></v-text-field>

              <!-- Số điện thoại -->
              <v-text-field
                v-model="user.phone"
                label="Số điện thoại"
                outlined
                dense
                type="tel"
                required
                :rules="[rules.required, rules.phone]"
              ></v-text-field>

              <!-- Địa chỉ -->
              <v-text-field
                v-model="user.address"
                label="Địa chỉ"
                outlined
                dense
                :rules="[rules.required]"
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tóm tắt đơn hàng -->
      <v-col cols="12" md="4">
        <v-card outlined class="pa-4 elevation-1">
          <v-card-title class="text-h6 font-weight-bold"
            >Tóm tắt đơn hàng</v-card-title
          >
          <v-card-text>
            <div class="mb-2">
              <strong>Tên khóa học:</strong>
              {{ course.name || "Chưa có thông tin" }}
            </div>
            <div class="mb-2">
              <strong>Giá tiền:</strong>
              <span class="text-primary">{{
                course.price ? course.price + " " : "Chưa có thông tin"
              }}</span>
            </div>
            <div class="mb-2">
              <strong>Lịch trình:</strong>
              {{ course.schedule || "Chưa có thông tin" }}
            </div>
            <div class="mb-2">
              <strong>Số buổi học:</strong>
              {{ course.numberTeachingSessions || "Chưa có thông tin" }}
            </div>
            <div class="mb-2">
              <strong>Yêu cầu học viên:</strong>
              {{ course.requestStudents || "Chưa có thông tin" }}
            </div>
          </v-card-text>
        </v-card>

        <!-- Phương thức thanh toán -->
        <v-card outlined class="mt-4 pa-4 elevation-1">
          <v-card-title class="text-h6 font-weight-bold"
            >Phương thức thanh toán</v-card-title
          >
          <v-card-text>
            <!-- Radio buttons -->
            <form>
              <div>
                <input
                  type="radio"
                  id="payment-direct"
                  name="paymentMethod"
                  value="direct"
                  v-model="paymentMethod"
                />
                <label for="payment-direct">Thanh toán trực tiếp</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="payment-online"
                  name="paymentMethod"
                  value="online"
                  v-model="paymentMethod"
                />
                <label for="payment-online">Thanh toán online</label>
              </div>
            </form>

            <!-- Hiển thị URL dựa trên phương thức thanh toán -->
            <div v-if="paymentMethod === 'direct'" class="mt-4"></div>
            <div v-if="paymentMethod === 'online'" class="mt-4"></div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Thanh toán -->
      <v-col cols="12" md="4">
        <v-card outlined class="pa-4 elevation-2">
          <v-card-title class="text-h6 font-weight-bold"
            >Thanh toán</v-card-title
          >
          <v-card-text>
            <v-alert type="warning" border="left" elevation="0">
              Khi bạn đã mua khóa học, vui lòng không chia sẻ tài khoản.
            </v-alert>
            <v-row>
              <v-col cols="6" class="font-weight-medium">Số lượng:</v-col>
              <v-col cols="6" class="text-right font-weight-medium">1</v-col>
              <v-col cols="6" class="font-weight-medium">Tổng tiền:</v-col>
              <v-col cols="6" class="text-right text-primary font-weight-bold">
                {{ course.price }}
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :disabled="!isUserFormValid"
              color="primary"
              block
              large
              @click="processPayment"
            >
              THANH TOÁN
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import PaymentService from "@/services/PaymentService";

export default {
  setup() {
    const route = useRoute();
    const course = ref({});
    const user = ref({
      email: "",
      receiveEmail: false,
      name: "",
      phone: "",
      address: "",
    });
    const paymentMethod = ref("direct");
    const isUserFormValid = ref(false);

    const rules = {
      required: (value) => !!value || "Trường này là bắt buộc.",
      email: (value) => /.+@.+\..+/.test(value) || "Email không hợp lệ.",
      phone: (value) =>
        /^\d{10,11}$/.test(value) || "Số điện thoại không hợp lệ.",
    };

    const fetchCourseDetails = () => {
      PaymentService.getCourseForPayment(route.params.id)
        .then((res) => {
          if (res.data && res.data.success) {
            course.value = res.data.data; // Lấy thông tin khóa học từ API
          } else {
            console.error("Dữ liệu không hợp lệ:", res.data);
          }
        })
        .catch((error) => {
          console.error("Lỗi khi lấy dữ liệu khóa học:", error);
        });
    };

    const processPayment = () => {
      if (paymentMethod.value === "direct") {
        window.open("https://example.com/direct-payment", "_blank");
        alert(
          "Bạn đã chọn thanh toán trực tiếp. Vui lòng xem chi tiết ở liên kết."
        );
      } else if (paymentMethod.value === "online") {
        window.open("https://example.com/online-payment", "_blank");
        alert("Bạn đã chọn thanh toán online. Liên kết thanh toán đã được mở.");
      }
    };

    onMounted(() => {
      fetchCourseDetails();
    });

    return {
      course,
      user,
      paymentMethod,
      isUserFormValid,
      rules,
      processPayment,
    };
  },
};
</script>

<style scoped>
.v-container {
  padding: 24px;
}
.v-card {
  border-radius: 8px;
}
.v-card-title {
  margin-bottom: 8px;
}
.v-alert {
  background-color: #ffe08a !important;
  color: #5a4e3d !important;
}
.text-primary {
  color: #1976d2 !important;
}
</style>
