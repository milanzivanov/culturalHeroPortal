import supabase from "./supabaseClient";

export async function getBlogs() {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select(
        "*, categories(id, category_name, category_bg), members(member_name, member_avatar)",
      )
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Error fetching blogs: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { error: "Failed to fetch blogs" };
  }
}

export async function getBlog(id) {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select(
        "*, categories(category_name, category_bg), members(member_name, member_avatar)",
      )
      .eq("id", id)
      .single();
    if (error) {
      throw new Error(`Error fetching blogs: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { error: "Failed to fetch blog" };
  }
}
