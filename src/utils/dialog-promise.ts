import type { Component } from "vue";
//@ts-ignore
import { $vfm } from "vue-final-modal";

export interface DialogResult<T> {
  /** the used button or 'close' if closed otherwise */
  action: string | "close";
  /** available if the dialog is 'successful' */
  result?: T;
}
type PropsObject = Record<string, any>;

/**
 * Shows the given dialog and waits. Returns the used button and a 'business' result.
 *
 * @param dialogComponent a modal Vue component
 * @param props additional properties for the dialogComponent
 * @return (a promise of) the clicked dialog button, and a value emitted by this dialog button
 *   (via closeWithResult/closeWithoutResult) or undefined if the user otherwise closed the dialog
 **/
export function getFromModal<RESULT>(
  dialogComponent: Component,
  props: PropsObject = {}
): Promise<DialogResult<RESULT>> {
  return new Promise(async (resolve) => {
    $vfm.show({
      component: dialogComponent,
      bind: props,
      on: {
        result: (result: DialogResult<RESULT>) => {
          resolve(result);
        },
        closed() {
          // fallback if no explicit 'result' event has been emitted before closing
          resolve({ action: "close" });
        }
      }
    });
  });
}

export function getResultFromModal<RESULT>(
  dialogComponent: Component,
  props: PropsObject = {}
): Promise<RESULT | undefined> {
  return getFromModal<RESULT>(dialogComponent, props).then((r) => r.result);
}

export function openAlert(
  alertComponent: Component,
  props: PropsObject = {}
) {
  $vfm.show({
    component: alertComponent,
    bind: props,
  });
}

type DialogComponentInstance = {
  $emit: (event: "update:modelValue" | "result", data?: any) => void;
};
export function closeWithResult<RESULT>(
  dialogInstance: DialogComponentInstance,
  action: string,
  result: RESULT
): void {
  dialogInstance.$emit("result", {
    action: action,
    result
  } as DialogResult<RESULT>);
  dialogInstance.$emit("update:modelValue", false); // make the parent close us
}
export function closeWithoutResult(
  dialogInstance: DialogComponentInstance,
  action: string
): void {
  dialogInstance.$emit("result", { action: action } as DialogResult<any>);
  dialogInstance.$emit("update:modelValue", false); // make the parent close us
}
export function close(dialogInstance: DialogComponentInstance): void {
  closeWithoutResult(dialogInstance, "close");
}

/**
 * Returns the close* methods for inclusion in the 'methods' option
 *
 * @example <caption>use as follows with the Options API</caption>
 * methods: {
 *   ...closeMethods(),
 *   //other component methods
 * }
 */
export function closeMethods<RESULT>() {
  // these will all be bound to the component instance
  return {
    closeWithResult: function (
      this: DialogComponentInstance,
      action: string,
      result: RESULT
    ) {
      closeWithResult(this, action, result);
    },
    closeWithoutResult: function (
      this: DialogComponentInstance,
      action: string
    ) {
      closeWithoutResult(this, action);
    },
    close: function (this: DialogComponentInstance) {
      close(this);
    }
  };
}