import FormError from "../errors/FormError";
import supabase from "../utils/supabase";

export const handleAuthSubmit = async (data: {
  email: string;
  password: string;
}) => {
  const {email, password} = data;

  if (!(email && password)) {
	throw new FormError("Please fill all the fields");
  }

  if (password?.length < 6) {
	throw new FormError("Password must be at least 6 characters long");
  }

  const {user, session, error} = await supabase.auth.signIn({
	email,
	password,
  }, {
	shouldCreateUser: true,
  })

  if (error) {
	throw new FormError(error?.message);
  }

  return {user, session};
};