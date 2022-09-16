import FormError from "../errors/FormError";

export const handleError = (error: Error) => {
  if (error instanceof FormError) {
	return error?.message;
  }
  return "Something went wrong";
}