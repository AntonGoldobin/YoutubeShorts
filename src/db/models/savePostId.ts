
const { postIdSchema } = require('../schemas/postId');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
import {Config, GeneralPost} from "@src/posting-base/types/types"

dotenv.config();

export const saveUniquePostId = (post: GeneralPost, config:Config) => {
  if (post) {
    const SaveIdModel = mongoose.model("model", postIdSchema, `${process.env.NODE_ENV}-${config.channelName}`);
    console.log('davePostId: ' + post.id)
    const postId = new SaveIdModel({ postId: post.id, createdAt: post.created });
    postId.markModified('model');

    postId.save(function (err: any, doc: any) {
      if (err) return console.error(err);
      console.log(`Id has been saved to: ${process.env.NODE_ENV}-${config.channelName}`)
    });
  }
};