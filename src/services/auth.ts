import supabase from "../utils/supabase";

export const handleAuthSubmit = (data: {
  email: string;
  password: string;
}) => {
  const {email, password} = data;
  console.log(supabase);
};