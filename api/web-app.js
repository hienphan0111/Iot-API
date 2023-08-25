import { Router } from "express";
import Data from "../models/Data.js";

const routerWeb = Router();

const getAll = async (req, res) => {
  const records = await Data.find({});

  if (records) {
    res.status(200).json(records.map((item) => {
      return {
        id: item._id,
        quantity: item.quantity,
        time: item.createdAt,
      }
    }));
  }
};

routerWeb.route('/').get(getAll);

export default routerWeb;
