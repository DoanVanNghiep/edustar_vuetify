import axios from "axios";

const apiClient = {
  async readCourse() {
    try {
      const response = await axios.get("/all");
      return response.data.data.items; // Truy cập đúng vào trường 'items'
    } catch (error) {
      console.error("Lỗi khi gọi API readCourse:", error);
      throw error;
    }
  },
};

export default apiClient;
