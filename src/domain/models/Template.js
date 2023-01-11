import { Schema, model } from 'mongoose';

/**
 * Campos validados requeridos en /create y /edit con celebrate + Joi
 */

const templateSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Template = model('templates', templateSchema);

export default Template;
