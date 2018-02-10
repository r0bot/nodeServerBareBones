import mongoose from 'mongoose';

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: '',
  },
  lastName: {
    type: String,
    trim: true,
    default: '',
  },
  displayName: {
    type: String,
    trim: true,
    default: '',
  },
  email: {
    type: String,
    trim: true,
    default: '',
    match: [/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/, 'Please fill a valid email address'],
  },
  username: {
    type: String,
    unique: 'Username already exists',
    required: 'Please fill in a username',
    trim: true,
  },
  password: {
    type: String,
    default: '',
  },
  roles: {
    type: [{
      type: String,
      enum: ['user', 'admin'],
    }],
    default: ['user'],
  },
  phoneNumber: {
    type: String,
    trim: true,
    default: '',
  },
  city: {
    type: String,
    trim: true,
    default: '',
  },
  country: {
    type: String,
    trim: true,
    default: '',
  },
  postalCode: {
    type: Number,
  },
  address: {
    type: String,
    trim: true,
    default: '',
  },
  gender: {
    type: [{
      type: String,
      enum: ['male', 'female'],
    }],
    trim: true,
    default: 'male',
  },
  provider: {
    type: String,
    required: 'Provider is required',
  },
  providerData: {},
  additionalProvidersData: {},
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

UserSchema.methods.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));
UserSchema.methods.validPassword = password => bcrypt.compareSync(password, this.password);

UserSchema.pre('save', (next) => {
  // TODO Set the is updated property of the user here

  next();
});

module.exports = mongoose.model('User', UserSchema);
