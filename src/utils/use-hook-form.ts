import { UIState } from "@@/types/ui-state";
import { ControllerFieldState, FormState } from "react-hook-form";

export function formStateToUIState(formState: FormState<any>): UIState {
  if (formState.isSubmitting) return "loading";
  else if (formState.isSubmitSuccessful) return "success";
  else if (formState.errors) return "error";
  else return "idle";
}

export function fieldStateToUIState(
  formState: FormState<any>,
  fieldState: ControllerFieldState
): UIState {
  if (formState.isSubmitting) return "loading";
  else if (formState.isSubmitSuccessful) return "success";
  else if (fieldState.error) return "error";
  else return "idle";
}
