import {
  string, bool, node, objectOf, oneOfType, func, array,
} from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
import FieldInput from './FieldInput';
import FieldSelect from './FieldSelect';

const Form = ({
  method,
  action,
  mode,
  // @TODO: reValidateMode whether needed ?
  defaultValues,
  children,
  onSubmit,
}) => {
  /*
   * useForm also has optional arguments.
   * Please refer https://react-hook-form.com/api#useForm
   */
  const methods = useForm({
    mode,
    // @TODO: reValidateMode whether needed ?
    defaultValues,
    method,
    action,
  });
  const {
    handleSubmit, ...otherFormMethods
  } = methods;

  return (
    <FormProvider {...otherFormMethods} >
      <form
        method={method}
        action={action}
        onSubmit={handleSubmit(onSubmit)}
        noValidate // could revisit
        autoComplete="off" // could revisit
      >
        {children}
      </form>
    </FormProvider>
  );
};

Form.defaultProps = {
  method: 'POST',
  action: '#',
  mode: 'onTouched',
  // reValidateMode: 'onChange',
  defaultValues: {},
};

Form.propTypes = {
  onSubmit: func.isRequired,
  children: node.isRequired,
  method: string,
  action: string,
  defaultValues: objectOf(oneOfType([string, bool, array])),
  mode: string,
  // reValidateMode: string,
};

Form.FieldInput = FieldInput;

Form.FieldSelect = FieldSelect;

export default Form;
