import supabase from "./supabaseClient";

export async function getBlogs() {
  const { data } = await supabase.from("blogs").select();

  return data;
}
// export async function getBlogs(category) {
//   const { data } = await supabase
//     .from("blogs")
//     .select()
//     .eq("category", category)
//     .order("created_at", { ascending: false });

//   return data;
// }
export async function getBlog(id) {
  const { data } = await supabase.from(`blogs`).select().eq("id", id).single();

  return data;
}
