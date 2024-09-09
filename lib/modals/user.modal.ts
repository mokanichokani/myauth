import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  role:{
    type: String,
  },
  profile: {
    skills: [String],
    experience: [
      {
        company: String,
        position: String,
        duration: String
      }
    ]
  },
  postedJobs: [], // List of job IDs posted by the employer
  appliedJobs: [],
});

const User = models?.User || model("User", UserSchema);

export default User;