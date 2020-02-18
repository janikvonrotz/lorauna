import { useState } from 'react'

const useToggle = (data) => {
  const [active, setActive] = useState(data)

  const toggle = (event) => {
    if (event) event.preventDefault()
    setActive(!active)
  }

  return [
    active,
    toggle
  ]
}

const useForm = (callback, data) => {
  const [values, setValues] = useState(data)

  const handleChange = (event) => {
    if (event.persist) {
      event.persist()
    }
    if (event.target.type === 'checkbox') {
      setValues(values => ({
        ...values,
        [event.target.name]: event.target.checked
      }))
    } else {
      setValues(values => ({
        ...values,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    callback(values)
  }

  return [
    values,
    handleChange,
    onSubmit
  ]
}

export {
  useToggle,
  useForm
}
