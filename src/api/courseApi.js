import axios from "axios";

const API_URL = "http://localhost:8080/service/all";

export const fetchCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu khóa học:", error);
    throw error;
  }
};
