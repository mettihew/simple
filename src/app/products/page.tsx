
import Image from 'next/image';
import Link from 'next/link'; 

interface Product {
  _id: string;
  name: string; 
  price: number;
  description?: string;
  productImages: string[]
}

async function getProducts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const apiUrl = `${baseUrl}/api/products`;
       
    
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data: Product[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error in getProducts:', error);
    return []; // Return empty array on error to avoid crashing the page
  }
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product._id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <Image src={product.productImages[0]} width={100} height={100} alt={product.name}/>
              {product.description && <p>{product.description}</p>}
              {/* Optional: Add a link to a product detail page */}
              <Link href={`/products/${product._id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

