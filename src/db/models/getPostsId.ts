
import { postIdSchema } from '../schemas/postId';
import dotenv from "dotenv";
import mongoose from "mongoose";
import {Config, PostId} from "@src/posting-base/types/types"

dotenv.config();

export const getPostsIds = (config: Config) => {
  return new Promise((resolve, reject) => {
    const GetPostIdModel = mongoose.model("model", postIdSchema, `${process.env.NODE_ENV}-${config.channelName}`);
    GetPostIdModel.find({}).exec((err, data: PostId[]) => {
      if (err) reject(err);
      resolve(data)
    });
  });
};