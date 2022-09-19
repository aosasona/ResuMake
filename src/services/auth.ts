import AlertError from "../errors/AlertError";
import FormError from "../errors/FormError";
import supabase from "../utils/supabase";

const siteUrl = window.location.host
const redirectUrl = `http://${siteUrl}/resume`

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
	redirectTo: redirectUrl,
  })

  if (error) {
	throw new FormError(error?.message);
  }

  return {user, session};
};

export const handleGithubAuth = async () => {
  const {user, session, error} = await supabase.auth.signIn({
	provider: "github",
  }, {
	shouldCreateUser: true,
	redirectTo: redirectUrl,
  });

  if (error) {
	throw new FormError(error?.message);
  }

  return {user, session};
}

export const handleGoogleAuth = async () => {
  const {user, session, error} = await supabase.auth.signIn({
	provider: "google",
  }, {
	shouldCreateUser: true,
	redirectTo: redirectUrl,
  });

  if (error) {
	throw new FormError(error?.message);
  }

  return {user, session};
}

export const handleAuthLogout = async () => {
  const {error} = await supabase.auth.signOut();

  if (error) {
	throw new AlertError(error?.message);
  }
}