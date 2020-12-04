/* use path imports to avoid pulling in unused modules from material ui core package */
import { useFormContext, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import {
  string, number, bool, func, arrayOf, oneOfType, shape,
} from 'prop-types';
import MuiTextField from '../../../atoms/MuiTextField';

const makeOptions = (options = [], OptionReactElement = 'option') => {
  const renderOption = (option) => {
    const { label, value } = option;
    return (
      <OptionReactElement
        key={value}
        value={value}
        aria-label={option.value ? label : 'None'}
        disabled={!option.value}
      >
        {label}
      </OptionReactElement>
    );
  };
  return (
    options.map((option) => renderOption(option))
  );
};

/*
 * Molecule FieldSelect
 */
const FieldSelect = ({
  name,
  id,
  className,
  label,
  options,
  native,
  Adornment,
  shrinkLabel,
  displayEmpty,
  validationRules,
}) => {
  const OptionReactElement = native ? 'option' : MenuItem;
  // access the react hook form api via context
  const { errors, control } = useFormContext();
  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        render={({
          onChange, onBlur, value, ref,
        }) => (
          <MuiTextField
            inputRef={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={errors?.[name] ? true : undefined}
            id={id}
            label={label}
            select
            SelectProps={{
              native,
              displayEmpty,
            }}
            InputProps={{
              startAdornment: Adornment
                ? <InputAdornment position="start"><Adornment /></InputAdornment>
                : undefined,
            }}
            InputLabelProps={{ shrink: shrinkLabel ? true : undefined }}
          >
            {makeOptions(options, OptionReactElement)}
          </MuiTextField>
        )}
        rules={validationRules}
      />
      <ErrorMessage name={name} errors={errors} render={({ message }) => (
          <FormHelperText error={errors?.[name] ? true : undefined} >{message}</FormHelperText>
      )}
      />
    </div>
  );
};

FieldSelect.defaultProps = {
  id: '',
  label: '',
  className: '',
  options: [{
    label: 'Select...',
    value: '',
  }],
  shrinkLabel: false,
  Adornment: null,
  displayEmpty: false,
  native: true,
  validationRules: {},
};

FieldSelect.propTypes = {
  name: string.isRequired,
  validationRules: shape({}),
  options: arrayOf(shape({
    label: oneOfType([string, number]),
    value: oneOfType([string, number]),
  })),
  id: string,
  label: string,
  native: bool,
  shrinkLabel: bool,
  className: string,
  Adornment: func,
  displayEmpty: bool,
};

export default FieldSelect;
