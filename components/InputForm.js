import React from 'react'
import { useField } from "formik"
import { Field, ErrorMessage } from "formik"

const InputForm = ({
  labelTitle,
  type,
  id,
  name,
  onBlur,
  onChange,
  placeholder,
  padding,
  flex,
  ...rest
}) => {
  const [field, meta, helpers] = useField({ name })

  const { value } = field
  const { error, touched } = meta
  const { setValue } = helpers

  const showError = touched && error

  const handleBlur = (event) => {
    field.onBlur(event)

    if (onBlur) {
      onBlur(event.target.value)
    }
  }

  const handleChange = (event) => {
    const { value: newValue } = event.target
    setValue(newValue)

    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div className={`flex flex-col ${padding}`}>
      <label className="uppercase text-sm py-2">{labelTitle}</label>
      <input
        id={name}
        type={type}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        error={showError ? error : null}
        placeholder={placeholder}
        className={`border-2 rounded-lg p-3 ${flex} border-gray-300`}
        {...rest}
      />
      {error && <ErrorMessage
        component="span"
        className="m-1 text-xs text-red-500"
        name={name}
      />}
    </div>
  )
}

export default InputForm