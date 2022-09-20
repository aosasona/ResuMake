import {User} from "@supabase/supabase-js";
import {useEffect, useState} from "react";
import {ResumeData} from "../types/resume";
import supabase from "../utils/supabase";

export default function useResumeData(user: User | null) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<ResumeData | null>(null);

  useEffect(() => {
	const fetchData = async () => {
	  const {data, error} = await supabase.from("resume").select("*").eq("id", user?.id).single();
	  if (error) throw error;
	  return data;
	};
	if (user) {
	  fetchData()
		.then(data => setData(data))
		.catch(err => setError(err))
		.finally(() => setLoading(false));
	}
  }, [user]);

  return {data, loading, error};
}