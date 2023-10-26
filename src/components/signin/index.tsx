"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@@/components/primitives/form";
import { FormMessage } from "../primitives/form/message";
import { FormControl } from "../primitives/form/control";
import { FormLabel } from "../primitives/form/label";
import { FormItem } from "../primitives/form/item";
import { FormField } from "../primitives/form/field";
import { Button } from "@@/components/primitives/button";
import { Input } from "@@/components/primitives/input";
import { CustomIcons } from "@@/components/custom-icons";
import { useTranslation } from "react-i18next";
import {
  useSigninHandler,
  useSigninHandlerProps,
} from "@@/extra/use-signin-handler";
import { useContext } from "react";
import { ConfigContext } from "../providers";
import { tw } from "@@/utils/tailwind";
import {
  fieldStateToUIState,
  formStateToUIState,
} from "@@/utils/use-hook-form";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Please enter a valid password.",
  }),
});

export function Signin({
  routerPush,
  returnToUrl,
  signIn,
}: Omit<useSigninHandlerProps, "form">) {
  const { siteConfig } = useContext(ConfigContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { t } = useTranslation();

  const onSubmit = useSigninHandler({
    form,
    routerPush,
    returnToUrl,
    signIn,
  });

  return (
    <div
      className={tw`
        grid items-stretch
        grid-rows-2 lg:grid-cols-2 lg:grid-rows-1
        px-8 sm:px-20 lg:px-0
      `}
    >
      <div className="flex items-center justify-center gap-2">
        <CustomIcons.artizon className="h-12 w-12 dark:text-neutral-50" />
        <span className="font-bold text-xl">{t(siteConfig.displayName)}</span>
      </div>
      <div
        className={tw`
          flex flex-col items-stretch justify-center  
          lg:border-l lg:dark:border-l-neutral-800 lg:px-28
        `}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(({ email, password }) =>
              onSubmit(email, password)
            )}
            className="flex flex-col gap-8 items-stretch"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState, formState }) => (
                <FormItem>
                  <FormLabel>{t("Email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="user@example.com"
                      state={fieldStateToUIState(formState, fieldState)}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState, formState }) => (
                <FormItem>
                  <FormLabel>{t("Password")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      type="password"
                      state={fieldStateToUIState(formState, fieldState)}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" state={formStateToUIState(form.formState)}>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
