import {UpdateResumeDataVars} from "../types/resume_service";
import {filterObject} from "../utils/filter";
import supabase from "../utils/supabase";

export const updateResumeData = async ({data, userId}: UpdateResumeDataVars) => {
  data = filterObject(data, ["created_at", "updated_at"]);
  const {error} = await supabase.from("resume").upsert(data, {returning: "minimal", count: "exact"});
  if (error) throw error;
  return;
};