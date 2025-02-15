import styled from "styled-components";
import { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #C7C7C7;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #a8a8a8;
  }
`;

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
  
      register(data.data); // Use the user data from response
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };      

  return (
    <FormContainer>
      <h1>Register</h1>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={ev => setName(ev.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />
        <Button type="submit">Register</Button>
      </StyledForm>
      <p>
        Already have an account? <Link href="/login">Login here</Link>
      </p>
    </FormContainer>
  );
}