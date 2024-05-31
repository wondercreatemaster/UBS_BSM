import React from 'react'
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref)
{
	const { onChange, ...other } = props;
	return (
		<IMaskInput
			{...other}
			mask="0000/000"
			inputRef={ref}
			onAccept={(value) => onChange({ target: { name: props.name, value } })}
			overwrite
		/>
	);
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextMaskCustom