
const { postIdSchema } = require('../schemas/postId');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
import {IConfig, IGeneralPost} from "@src/posting-base/types/types"

dotenv.config();

export const saveUniquePostId = (post: IGeneralPost, config:IConfig) => {
  if (post) {
    const SaveIdModel = mongoose.model("model", postIdSchema, `${process.env.NODE_ENV}-${config.channelName}`);
    const postId = new SaveIdModel({ postId: post.id, createdAt: post.created });
    postId.markModified('model');

    postId.save(function (err: any, doc: any) {
      if (err) return console.error(err);
      console.log(`Id has been saved to: ${process.env.NODE_ENV}-${config.channelName}`)
    });
  }
};