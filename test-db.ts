import "dotenv/config";
import { connectToDatabase } from "./database/mongoose";

async function testConnection() {
  try {
    await connectToDatabase();
    console.log("✅ Database connection successful!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
}

testConnection();