// apiCabins.js
import supabase from "./superbase";

export async function getCabins() {
  // Query to return all cabins fields
  const { data, error } = await supabase.from("cabins").select("*");
  
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}
