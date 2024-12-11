import axios from "axios";

class PaymentService {
  getCourseForPayment(courseID) {
    return axios.get(`http://localhost:8080/service/${courseID}`);
  }
}

export default new PaymentService();
