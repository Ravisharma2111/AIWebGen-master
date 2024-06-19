import { Data } from "@measured/puck";
import fs from "fs";

export const getPage = (path: string) => {
  try {
    // Read data from the JSON file
    const allData: Record<string, Data> | null = fs.existsSync("database.json")
      ? JSON.parse(fs.readFileSync("database.json", "utf-8"))
      : null;
    
    // Log the retrieved data
    console.log("Retrieved data from database:", allData);
    
    // Return the data for the specified path
    return allData ? allData[path] : null;
  } catch (error) {
    // Handle any errors that occur during file reading
    console.error("Error reading database:", error);
    return null;
  }
};
