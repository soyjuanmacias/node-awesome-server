import { Schema } from 'mongoose';

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
    },

    salt: {
      type: String,
      default: 10,
    },

    role: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true
  },
);

userSchema.virtual('fullName').get(() => `${this.name} ${this.lastName}`);

const User = mongoose.model('users', userSchema);

export default User;
