import express from "express";
import urlModel from "../model/urlModel.js";

export const createUrl = async (req, res) => {
  try {
    const { fullUrl } = req.body;
    const urlFound = await urlModel.find({ fullUrl });
    if (urlFound.length > 0) {
      res.status(409).send(urlFound);
    } else {
      const shortUrl = await urlModel.create({ fullUrl });
      res.status(201).send(shortUrl);
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

export const getAllUrl = async (req, res) => {
  try {
    const shortUrl = await urlModel.find();
    if (shortUrl.length < 0) {
      res.status(404).send({ message: "Url not Found" });
    } else {
      res.send(shortUrl);
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

export const getUrl = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

export const deleteUrl = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
