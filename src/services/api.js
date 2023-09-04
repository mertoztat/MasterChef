import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const GET_RECIPES = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllCategories = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipes = async (query) => {
  try {
    const response = await api.get(`${GET_RECIPES}${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
