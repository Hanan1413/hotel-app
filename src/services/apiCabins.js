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


export async function deleteCabin(id) {
  const {  data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting cabin:', error);
    throw new Error(`Cabin could not be deleted: ${error.message}`);
  }

  return data;
}


 