import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background: #FFF1DA;
  border: 1px solid rgba(22, 82, 125, 0.08);
  border-radius: 35px;
  padding: 38px 40px;
  width: 725px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const FeatureGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 45%;

  h4 {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin: 0;
    color: #222222;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin: 5px 0 0;
    color: #495560;
  }
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #7BBCB0;
`

export default function RolesofTransfer() {
  return (
    <Card>
      <FeatureGroup>
        <Feature>
          <Icon />
          <div>
            <h4>Free Cancellation</h4>
            <p>Cancel up to 24 hours in advance to receive a full refund</p>
          </div>
        </Feature>
        <Feature>
          <Icon />
          <div>
            <h4>Health Precautions</h4>
            <p>Special health and safety measures apply. Learn more</p>
          </div>
        </Feature>
      </FeatureGroup>
      <FeatureGroup>
        <Feature>
          <Icon />
          <div>
            <h4>Mobile Ticketing</h4>
            <p>Use your phone or print your voucher</p>
          </div>
        </Feature>
        <Feature>
          <Icon />
          <div>
            <h4>Duration 3.5 Hours</h4>
            <p>Check availability to see starting times</p>
          </div>
        </Feature>
      </FeatureGroup>
      <FeatureGroup>
        <Feature>
          <Icon />
          <div>
            <h4>Instant Confirmation</h4>
            <p>Don't wait for the confirmation!</p>
          </div>
        </Feature>
        <Feature>
          <Icon />
          <div>
            <h4>Live Tour Guide In English</h4>
            <p>English</p>
          </div>
        </Feature>
      </FeatureGroup>
    </Card>
  )
}
