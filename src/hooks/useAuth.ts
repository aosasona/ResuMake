import {User} from "@supabase/supabase-js";
import {useEffect, useState} from "react";
import supabase from "../utils/supabase";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
	const session = supabase.auth.session()
	const authenticatedUser = session?.user ?? null
	setUser(authenticatedUser)
	setLoading(false)
  }, [])

  return {user, loading}
}

export default useAuth;