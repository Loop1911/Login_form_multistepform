import { FormWrapper } from "./FormWrapper"

type AddressData = {
  State: string
  city: string
  state: string
  zip: string
  country: string
  taluka: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({

  city,
  state,
  zip,
  country,
  taluka,


  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">

      <label>Country</label>
      <input
        autoFocus
        required
        type="text"
        value={country}
        onChange={e => updateFields({ country: e.target.value })}
      />

      <label>State</label>
      <input

        required
        type="text"
        value={state}
        onChange={e => updateFields({ state: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      />
      <label>Taluka</label>
      <input
        required
        type="text"
        value={taluka}
        onChange={e => updateFields({ taluka: e.target.value })}
      />
      <label>Pincode</label>
      <input
        required
        type="text"
        value={zip}
        onChange={e => updateFields({ zip: e.target.value })}
      />



    </FormWrapper>
  )
}
