import {ResumeData} from "../types/resume";
import supabase from "../utils/supabase";

export const updateResumeData = async (data: ResumeData) => {
  const {error} = await supabase.from("resume").upsert(data, {returning: "minimal", ignoreDuplicates: true});
  if (error) throw error;
  return true;
};