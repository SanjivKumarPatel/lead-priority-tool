import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true, trim: true },

    location: { type: String, trim: true },

    industry: { type: String, required: true, trim: true },

    companySize: { type: Number, required: true, min: 1 },

    location: { type: String, trim: true },

    score: { type: Number, default: 0 },

    priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Low' },

    scoreReasons: { type: [String], default: [] }
  },
  {
    timestamps: true
  }
)

const Lead = mongoose.model('Lead', leadSchema)

export default Lead