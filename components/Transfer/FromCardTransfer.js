import styled from "styled-components";

const TransferFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 29px 20px;
  gap: 16px;
  width: 472px;
  height: auto;
  min-height: 845px;
  background: #fff1da;
  border-radius: 35px;
`;

const TransferSectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  gap: 4px;
  width: auto;
  min-width: 116px;
  height: 22px;
  background: rgba(55, 56, 123, 0.5);
  border-radius: 90px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  white-space: nowrap;
`;

const TransferFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const TransferFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const TransferFormLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #37387b;
`;

const TransferFormInput = styled.input`
  width: 100%;
  height: 48px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #545f71;
  border-radius: 6px;
  padding: 0 15px;
  font-size: 16px;
  color: #545f71;
  &::placeholder {
    color: #545f71;
    opacity: 0.7;
  }
  &:focus {
    outline: none;
    border-color: #37387b;
  }
`;

const TransferFormRow = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const TransferFormInputHalf = styled(TransferFormInput)`
  width: calc(50% - 5px);
`;

const TransferSubmitButton = styled.button`
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
  transition: background-color 0.2s ease;
  &:hover {
    background: #2a2b5d;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export default function FormComponent() {
  return (
    <TransferFormContainer>
      <TransferSectionTitle>Directions</TransferSectionTitle>
      <TransferFormSection>
        <TransferFormGroup>
          <TransferFormLabel>From:</TransferFormLabel>
          <TransferFormInput type="text" placeholder="Drop off location" />
        </TransferFormGroup>
        <TransferFormRow>
          <TransferFormInputHalf type="text" placeholder="Airbnb" />
          <TransferFormInputHalf type="text" placeholder="Hotel" />
        </TransferFormRow>
        <TransferFormGroup>
          <TransferFormLabel>Address:</TransferFormLabel>
          <TransferFormInput type="text" placeholder="Name of hotel" />
        </TransferFormGroup>
      </TransferFormSection>

      <TransferSectionTitle>Passenger Information</TransferSectionTitle>
      <TransferFormSection>
        <TransferFormGroup>
          <TransferFormLabel>Name & Surname:</TransferFormLabel>
          <TransferFormInput type="text" placeholder="John Wick" />
        </TransferFormGroup>
        <TransferFormGroup>
          <TransferFormLabel>Email:</TransferFormLabel>
          <TransferFormInput type="email" placeholder="john.wick@email.com" />
        </TransferFormGroup>
        <TransferFormRow>
          <TransferFormInputHalf type="text" placeholder="Code" />
          <TransferFormInputHalf type="text" placeholder="Enter your phone number" />
        </TransferFormRow>
        <TransferFormGroup>
          <TransferFormLabel>Flight Code:</TransferFormLabel>
          <TransferFormInput type="text" placeholder="TK 0000" />
        </TransferFormGroup>
        <TransferFormGroup>
          <TransferFormLabel>Date:</TransferFormLabel>
          <TransferFormInput type="text" placeholder="02 Sep 2023, 00:00" />
        </TransferFormGroup>
      </TransferFormSection>
      <TransferSubmitButton>Complete the payment</TransferSubmitButton>
    </TransferFormContainer>
  );
}
