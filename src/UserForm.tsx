import { FormWrapper } from "./FormWrapper"

type UserData = {
  firstName: string
  lastName: string
  age: string
  gender: string
  DateofBirth: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  firstName,
  lastName,
  age,
gender,
DateofBirth,



  updateFields,
}: UserFormProps) {

  const formatDateOfBirth = (value: string) => {
    const strippedValue = value.replace(/-/g, "");
    const formattedValue = strippedValue
      .slice(0, 6)
      .replace(/(\d{2})(\d{2})(\d{2})/, "$1-$2-$3");
    return formattedValue;
  };

  const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatDateOfBirth(rawValue);
    updateFields({ DateofBirth: formattedValue });
  };
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      />

<label>Gender</label>
      <input
        required
     
        type="text"
        value={gender}
        onChange={e => updateFields({ gender: e.target.value })}
      />

<label>Date of Birth</label>
      <input
        required
        type="text"
        value={DateofBirth}
        onChange={handleDateOfBirthChange}
      />
    </FormWrapper>
  )
}


