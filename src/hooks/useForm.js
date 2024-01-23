import { useMemo, useState } from 'react';

export const useForm = (initialFormState, validations = {}, checkedValues) => {
  const [formState, setFormState] = useState(initialFormState);
  const [formValidations, setFormValidations] = useState({});

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    Object.keys(validations).length > 0 && createValidators(name, value);

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialFormState);
  };

  const createValidators = (name, value) => {
    const [fn, message] = validations[name];

    checkedValues[`${name}Valid`] = fn(value) ? '' : message;

    setFormValidations(checkedValues);
  };

  const isFormValid = useMemo(() => {
    return (
      Object.values(formValidations).every((value) => value.length === 0 || value === false) &&
      Object.values(formState).every((value) => value.length > 0)
    );
  }, [formState, formValidations]);

  const showValidations = () => {
    for (const fieldName of Object.keys(validations)) {
      const [fn, message] = validations[fieldName];
      checkedValues[`${fieldName}Valid`] = !fn(formState[fieldName]) && message;
    }
    setFormValidations(checkedValues);
  };

  return {
    formState,
    ...formState,
    formValidations,
    ...formValidations,
    isFormValid,
    onInputChange,
    onResetForm,
    showValidations,
  };
};
