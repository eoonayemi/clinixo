import mongoose from "mongoose";
import dotenv from "dotenv";
import doctorModel from "../../models/doctorModel.js"; // Adjust the path to your model
import { doctors } from "../../constants/index.js"; // Adjust the path to your data file

// Configure dotenv to load environment variables
dotenv.config();

const MONGO_URI = process.env.MONGODB_URI; // Make sure you have MONGO_URI in your .env file

const seedDatabase = async () => {
  try {
    // 1. Connect to the database
    await mongoose.connect(MONGO_URI);
    console.log("✅ Database connection successful!");

    // 2. Clear existing data
    await doctorModel.deleteMany({});
    console.log("🗑️  Previous doctor data cleared!");

    // 3. Insert new seed data
    await doctorModel.insertMany(doctors);
    console.log("🌱 Database seeded with new doctor data!");
  } catch (error) {
    console.error("❌ Error seeding the database:", error);
  } finally {
    // 4. Disconnect from the database
    await mongoose.connection.close();
    console.log("🔌 Database connection closed.");
  }
};

// Run the seeder function
seedDatabase();
