import { response } from "express";
import { error } from "console";
import usersModel from "../models/usersModel.js";
import { userData } from "../types/usersTypes.js";

const usersService = {
  async getAllUsers() {
    try {
      const response = await usersModel.getAllUsers();
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async getUserById(userId: number) {
    try {
      const response = await usersModel.getUserById(userId);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async deleteUserById(userId: number) {
    try {
      const response = await usersModel.deleteUserById(userId);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async postUser(userData: userData) {
    try {
      const response = await usersModel.postUser(userData);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default usersService;
