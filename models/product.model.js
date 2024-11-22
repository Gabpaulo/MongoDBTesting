const mongoose = require("mongoose");

const QuestionsSchema = mongoose.Schema(
  {
    questionInfo: {
      type: String,
      required: [true, ""],
    },

    quantity: {
      type: Number,
      required: [true, "PLease input quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please input price"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Questions =  mongoose.model("Questions",ProductSchema);

module.exports=Questions;
