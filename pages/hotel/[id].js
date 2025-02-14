import Center from "@/components/Center";
import Header from "@/components/Header";
import {mongooseConnect} from "@/lib/mongoose";
import {Hotel} from "@/models/Hotels"; 
import Footer from "@/components/Footer";
import RolesofTransfer from "@/components/Transfer/RolesofTransfer";
import styled from 'styled-components'

const Header3 = styled.div`
  font-family: 'Volkhov';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  text-transform: capitalize;
  color: #222222;
`;

export default function TransferPage({hotel}) {
  console.log(hotel);

  if (!hotel) return <div>Loading...</div>;

  return (  
    <>
      <Header />
      <div className="border-t border-gray-200 my-8"></div>
      <RolesofTransfer />
      <Center>
        <div className="min-h-[300px]">
          <h2>Details</h2>
        </div>
      </Center>
      <div className="flex flex-col items-center justify-center">
        <h1>{hotel.name}</h1>
      </div>
      <Header3>Description</Header3>
      <p>{hotel.description}</p>    
      <div className=" my-8">
        <Header3>Inclusions</Header3>
        <p>{hotel.inclusions}</p>
        <Header3>Exclusions</Header3>
        <p>{hotel.exclusions}</p>
      </div>
      <div className="border-t border-gray-200 my-8">
        <Header3>Details</Header3>
        <p>{hotel.language}</p>
        <p>{hotel.duration}</p>
        <p>{hotel.number_of_passengers}</p>
        <p>{hotel.meeting_point}</p>
        <p>{hotel.google_map_link}</p>
      </div>
      <div className="border-t border-gray-200 my-8">
        <Header3>Cancellation Policy</Header3>
        <p>{hotel.cancellation_policy}</p>
      </div>
      <div className="border-t border-gray-200 my-8">
        <Header3>Reviews</Header3>
        <p>{hotel.reviews}</p>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const hotel = await Hotel.findById(id);
  return {
    props: {
      hotel: JSON.parse(JSON.stringify(hotel)),
    }
  }
}