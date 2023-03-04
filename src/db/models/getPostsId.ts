
import { postIdSchema } from '../schemas/postId';
import dotenv from "dotenv";
import mongoose from "mongoose";
import {IConfig, IPostId} from "@src/posting-base/types/types"

dotenv.config();

export const getPostsIds = (config: IConfig) => {
  return new Promise((resolve, reject) => {
    const GetPostIdModel = mongoose.model("model", postIdSchema, `${process.env.NODE_ENV}-${config.channelName}`);
    GetPostIdModel.find({}).exec((err, data: IPostId[]) => {
      if (err) reject(err);
      resolve(data)
    });
  });
};