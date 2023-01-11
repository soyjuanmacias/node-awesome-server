import { Schema, model } from 'mongoose';

/**
 * Esquema de usuario con métodos virtuales.
 * Este modelo creará una colección en la base de datos llamada 'users'
 */

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Introduce un nombre para el usuario'],
    },

    lastName: {
      type: String,
      required: [true, 'Introduce un apellido para el usuario'],
    },

    email: {
      type: String,
      required: [true, 'Introduce un email para el usuario'],
      lowercase: true,
      unique: true,
      index: true,
    },

    password: {
      type: String,
      select: false,
    },

    salt: {
      type: String,
      default: 10,
    },

    role: {
      type: String,
      default: 'agent',
      enum: ['admin', 'agent', 'supervisor', 'support'],
    },
  },
  {
    timestamps: true,
  },
);

userSchema.virtual('fullName').get(function() {
  return `${this.name} ${this.lastName}`;
});

const User = model('users', userSchema);

export default User;
