import Center from "@/components/Center";
import Header from "@/components/Header";
import {mongooseConnect} from "@/lib/mongoose";
import TransferCards from "@/components/Transfer/TransferCards";
import { Product } from "@/models/Product"; 

export default function TransferPage({product}) {
  return (  
    <>
      <Header />
      <Center>
        <TransferCards 
            product={{
                name: product.title,
                quantity: 1,
                type: product.type,
                passengers: product.passengers,
                price: product.price,
                image: product.images,
                }} /> 
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const transfer = await Product.findById(id);
  return {
    props: {
      transfer: JSON.parse(JSON.stringify(transfer)),
    }
  }
}