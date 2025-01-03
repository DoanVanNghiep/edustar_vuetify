import axios from "axios";

const API_URL = "http://localhost:8080/auth";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", { username, password })
      .then((response) => {
        if (response.data.token && response.data.user_id) {
          localStorage.setItem("user", JSON.stringify(response.data)); // thêm vào localStorage
          this.setCookie(
            "user",
            JSON.stringify({
              token: response.data.token,
              user_id: response.data.user_id,
              username: response.data.username,
              role: response.data.role,
            }),
            1
          );
        }
        return response.data;
      });
  }

  register(username, password, role) {
    return axios.post(API_URL + "signup", { username, password, role });
  }

  logout() {
    const cartKey = this.getCartKey();
    this.deleteCookie(cartKey);
    this.deleteCookie("user");
    localStorage.removeItem("user"); // Xóa thông tin người dùng
  }

  getCurrentUser() {
    const user = this.getCookie("user");
    return user ? JSON.parse(user) : null;
  }

  getCurrentUserRole() {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }

  getCurrentUserId() {
    const user = this.getCurrentUser();
    return user ? user.user_id : null;
  }

  authHeader() {
    const user = this.getCurrentUser();
    return user && user.token ? { Authorization: "Bearer " + user.token } : {};
  }

  getCartKey() {
    const user = this.getCurrentUser();
    return user ? `cart_${user.user_id}` : "cart";
  }

  saveCart(cart) {
    const cartKey = this.getCartKey();
    this.setCookie(cartKey, JSON.stringify(cart), 1);
  }

  loadCart() {
    const cartKey = this.getCartKey();
    const cart = this.getCookie(cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  deleteCookie(name) {
    document.cookie = `${name}=; Max-Age=-99999999;`;
  }
}

export default new AuthService();
