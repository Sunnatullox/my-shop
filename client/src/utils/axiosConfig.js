export const base_url = "http://localhost:5000/api";

const getTokenfromLocalstorg = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer")) || localStorage.getItem("token")
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenfromLocalstorg.token ||  getTokenfromLocalstorg || ""}`,
    Accept: "application/json",
  },
};
