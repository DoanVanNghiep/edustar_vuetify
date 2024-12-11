import axios from "axios";

const apiClient = {
  async readCourse() {
    try {
      const response = await axios.get("/service/all");
      return response.data.data.items; // Truy cập đúng vào trường 'items'
    } catch (error) {
      console.error("Lỗi khi gọi API readCourse:", error);
      throw error;
    }
  },

  // API gửi yêu cầu thanh toán
  async submitPayment(paymentData) {
    return axios.post("/payment/submit", paymentData); // Giả sử API thanh toán ở backend
  },
};

export default apiClient;
