import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
  try {
    await mongooseConnect();
    
    const { city } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }

    const query = {
      city: new RegExp(city, 'i') // Case-insensitive search
    };

    const results = await Product.find(query);
    res.status(200).json(results);
    
  } catch (error) {
    console.error('Search API error:', error);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
} 