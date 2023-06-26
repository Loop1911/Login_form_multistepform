import "tailwindcss/tailwind.css"

import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import { AddressForm } from "./AddressForm"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"


type FormData = {
  firstName: string
  lastName: string
  age: string
  State: string
  city: string
  state: string
  zip: string
  email: string
  password: string
  DateofBirth: string
  gender: string
  country: string
  taluka: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  State: "",
  taluka: "",
  country: "",
  city: "",
  state: "",
  zip: "",
  DateofBirth: "",
  email: "",
  gender: "",
  password: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
  }

  return (
    <div className="relative bg-white border-1 border-black p-8 m-4 rounded-md font-serif max-w-full">
    <form onSubmit={onSubmit}>
      <div className="absolute top-0 right-0 mt-2 mr-2">
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
      <div className="mt-4 flex gap-2 justify-end">
        {!isFirstStep && (
          <button type="button" onClick={back} className="bg-blue-500 text-white px-4 py-2 rounded">
            Back
          </button>
        )}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {isLastStep ? "Finish" : "Next"}
        </button>
      </div>
    </form>
  </div>
)
}
export default App
