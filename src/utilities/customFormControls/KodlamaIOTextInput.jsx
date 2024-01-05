import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function KodlamaIOTextInput(...props) {
    const [field,meta] = useField(...props)
  return (
    <>
        <FormField error={meta.touched && !!meta.error}>
            <input {...field}  />
            {meta.touched && !!meta.error ? (
                    <Label pointing basic color='red' content={meta.error}></Label>
            ):null}
        </FormField>
    </>
    )
}
