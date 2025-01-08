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
      <Center>
        <TransferCards 
            product={{
              title: product.title,
              quantity: 1,
              type: product.type,
              passengers: product.passengers,
              price: product.price,
              image: product.images,
            }} /> 
      </Center>

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