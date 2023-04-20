import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-top: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  margin-top: 10px;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('male');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 10000), // assign a random ID to the user
      name,
      surname,
      email,
      age,
      sex
    };
    setUsers([...users, newUser]); // add the new user to the list of users
    setName('');
    setSurname('');
    setEmail('');
    setAge('');
    setSex('male');
  };

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input type="text" value={name} onChange={(event) => setName(event.target.value)} required minLength="4" />
        </Label>
        <Label>
          Surname:
          <Input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} required minLength="4" />
        </Label>
        <Label>
          Email:
          <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} pattern=".+@gmail\.com" />
        </Label>
        <Label>
          Age:
          <Input type="number" value={age} onChange={(event) => setAge(event.target.value)} min="18" />
        </Label>
        <Label>
          Sex:
          <select value={sex} onChange={(event) => setSex(event.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Sex: {user.sex}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default App;
