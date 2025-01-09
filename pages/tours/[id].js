import Center from "@/components/Center";
import Header from "@/components/Header";
import {mongooseConnect} from "@/lib/mongoose";
import TransferCards from "@/components/Transfer/TransferCards";
import { Product } from "@/models/Product"; 
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

export default function TransferPage({product}) {
  console.log(product);

  if (!product) return <div>Loading...</div>;

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
      <Header3>Description</Header3>
      <p>{product.description}</p>
      <div className=" my-8">
        <Header3>Inclusions</Header3>
        <p>{product.inclusions}</p>
        <Header3>Exclusions</Header3>
        <p>{product.exclusions}</p>
      </div>
      <div className="border-t border-gray-200 my-8">
        <Header3>Details</Header3>
        <p>{product.language}</p>
        <p>{product.duration}</p>
        <p>{product.number_of_passengers}</p>
        <p>{product.meeting_point}</p>
        <p>{product.google_map_link}</p>
      </div>
      <div className="border-t border-gray-200 my-8">
        <Header3>Cancellation Policy</Header3>
        <p>{product.cancellation_policy}</p>
      </div>
      <div className="border-t border-gray-200 my-8">
        <Header3>Reviews</Header3>
        <p>{product.reviews}</p>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}