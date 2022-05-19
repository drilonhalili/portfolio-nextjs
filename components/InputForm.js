import React from 'react'
import { Field, ErrorMessage } from "formik"

const InputForm = ({
  labelTitle,
  type,
  id,
  name,
  placeholder,
  padding,
  flex,
  ...rest
}) => {
  return (
    <div className={`flex flex-col ${padding}`}>
      <label className="uppercase text-sm py-2">{labelTitle}</label>
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`border-2 rounded-lg p-3 ${flex} border-gray-300`}
        {...rest}
      />
      <ErrorMessage component="span" className='m-1 text-xs text-red-500' name={name} />
    </div>
  )
}

export default InputForm