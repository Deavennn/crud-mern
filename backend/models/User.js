import mongoose from 'mongoose';

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  joinedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export default mongoose.model('Users', User);
