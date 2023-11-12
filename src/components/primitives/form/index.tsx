"use client";

import { FormProvider } from "react-hook-form";
import { useFormField } from "./use-form-field";
import { FormItem } from "./item";
import { FormControl } from "./control";
import { FormLabel } from "./label";
import { FormDescription } from "./description";
import { FormMessage } from "./message";
import { FormField } from "./field";

const Form = FormProvider;

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
