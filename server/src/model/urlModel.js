import mongoose from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      default: () => nanoid().substring(0, 10),
    },
    click: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    Timestamp: true,
  }
);

const urlModel = mongoose.model("ShortUrl", urlSchema);
export default urlModel;
