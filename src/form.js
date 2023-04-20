import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, surname, email, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Surname:
        <input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;