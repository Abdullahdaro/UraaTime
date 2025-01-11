import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 29px 20px;
  gap: 16px;
  width: 472px;
  height: 845px;
  background: #fff1da;
  border-radius: 35px;
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  gap: 4px;
  width: 116px;
  height: 22px;
  background: rgba(55, 56, 123, 0.5);
  border-radius: 90px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #37387b;
`;

const FormInput = styled.input`
  width: 100%;
  height: 48px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #545f71;
  border-radius: 6px;
  padding: 0 15px;
  font-size: 16px;
  color: #545f71;
`;

const FormRow = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const FormInputHalf = styled(FormInput)`
  width: calc(50% - 5px);
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  background: #37387b;
  border: 1px solid #ffffff;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;

export default function FormComponent() {
  return (
    <FormContainer>
      <SectionTitle>Directions</SectionTitle>
      <FormSection>
        <FormGroup>
          <FormLabel>From:</FormLabel>
          <FormInput type="text" placeholder="Drop off location" />
        </FormGroup>
        <FormRow>
          <FormInputHalf type="text" placeholder="Airbnb" />
          <FormInputHalf type="text" placeholder="Hotel" />
        </FormRow>
        <FormGroup>
          <FormLabel>Address:</FormLabel>
          <FormInput type="text" placeholder="Name of hotel" />
        </FormGroup>
      </FormSection>

      <SectionTitle>Passenger Information</SectionTitle>
      <FormSection>
        <FormGroup>
          <FormLabel>Name & Surname:</FormLabel>
          <FormInput type="text" placeholder="John Wick" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Email:</FormLabel>
          <FormInput type="email" placeholder="john.wick@email.com" />
        </FormGroup>
        <FormRow>
          <FormInputHalf type="text" placeholder="Code" />
          <FormInputHalf type="text" placeholder="Enter your phone number" />
        </FormRow>
        <FormGroup>
          <FormLabel>Flight Code:</FormLabel>
          <FormInput type="text" placeholder="TK 0000" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Date:</FormLabel>
          <FormInput type="text" placeholder="02 Sep 2023, 00:00" />
        </FormGroup>
      </FormSection>
      <SubmitButton>Complete the payment</SubmitButton>
    </FormContainer>
  );
}
