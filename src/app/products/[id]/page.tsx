import Image from "next/image";


interface Product {
  id: string;
  name: string;
  price: number;
  productImages: string[];
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/products/${id}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch {
    return null;
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  // const { id } = await params; // Await first! if you get error
  const product = await getProduct(params.id);


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      {product.productImages.length > 0 && (
        <Image 
          src={product.productImages[0]} 
          alt={product.name}
          width={500}
          height={500}
          className="w-full max-w-md h-auto"
        />
      )}
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-xl text-green-600 mt-2">${product.price}</p>
    </div>
  );
}

