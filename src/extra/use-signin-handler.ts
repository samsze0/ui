import { UseFormReturn } from "react-hook-form";

export type useSigninHandlerProps = {
  routerPush: (path: string) => void;
  signIn: (
    email: string,
    password: string
  ) => Promise<{ data: any; error: any }>;
  form: UseFormReturn<{ email: string; password: string }>;
  returnToUrl?: string;
};

export function useSigninHandler({
  routerPush,
  signIn,
  form,
  returnToUrl,
}: useSigninHandlerProps) {
  return async function signin(email: string, password: string) {
    const { data, error } = await signIn(email, password);
    if (error) {
      form.setError("email", {
        message: error.message,
      });
      form.setError("password", {
        message: error.message,
      });
      return;
    }
    if (returnToUrl) routerPush(returnToUrl);
    else routerPush("/");
  };
}
