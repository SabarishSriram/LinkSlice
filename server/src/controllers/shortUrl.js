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
    if (shortUrl.length == 0) {
      res.status(404).send({ message: "Full Url's not Found" });
    } else {
      res.send(shortUrl);
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

export const getUrl = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const shortUrl = await urlModel.findOne({ shortUrl: id });
    if (!shortUrl) {
      res.status(404).send({ message: "Url does not exist" });
    } else {
      shortUrl.click++;
      res.redirect(shortUrl.fullUrl);
      shortUrl.save();
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

export const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUrl = await urlModel.findByIdAndDelete(id);
    if(deleteUrl){
      res.status(201).send("Data deleted succesfully")
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
