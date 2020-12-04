import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {
  string, func, bool, shape,
} from 'prop-types';
import isEmpty from 'lodash.isempty';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import MuiTextField from '../../../atoms/MuiTextField';
/*
 * Molecule FieldInput
 */
const FieldInput = ({
  name,
  id,
  label,
  type,
  variant,
  Adornment,
  className,
  shrinkLabel,
  maxLength,
  placeholder,
  ariaDescribedBy,
  validationRules,
}) => {
  // access the react hook form api via context
  const { register, errors } = useFormContext();
  return (
    <div className={className}>
      <MuiTextField
        name={name}
        id={id}
        label={label}
        type={type}
        variant={variant}
        inputRef={register(validationRules)}
        inputProps={{
          maxLength,
          placeholder: isEmpty(placeholder) ? undefined : placeholder,
          'aria-describedby': ariaDescribedBy,
        }}
        // Material-ui API; have to disable the below rule
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          startAdornment: Adornment
            ? <InputAdornment position="start"><Adornment /></InputAdornment>
            : undefined,
        }}
          InputLabelProps={{ shrink: shrinkLabel ? true : undefined }}
        error={errors?.[name] ? true : undefined}
      />
      <ErrorMessage name={name} errors={errors} render={({ message }) => (
          <FormHelperText error={errors?.[name] ? true : undefined} >{message}</FormHelperText>
      )}
      />
    </div>
  );
};

FieldInput.defaultProps = {
  id: '',
  type: 'text',
  label: '',
  className: '',
  variant: 'standard',
  placeholder: '',
  ariaDescribedBy: '',
  shrinkLabel: false,
  Adornment: null,
  maxLength: '',
  validationRules: {},
};

FieldInput.propTypes = {
  name: string.isRequired,
  id: string,
  type: string,
  label: string,
  className: string,
  variant: string,
  validationRules: shape({}),
  shrinkLabel: bool,
  Adornment: func,
  maxLength: string,
  placeholder: string,
  ariaDescribedBy: string,
};

export default FieldInput;
