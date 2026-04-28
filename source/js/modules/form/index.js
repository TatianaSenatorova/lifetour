import { initValidateForm } from "./validate-form.js";
import { initInputLabel } from "./show-input-label.js";

const initForm = () => {
  initValidateForm();
  initInputLabel();
};

export { initForm };
