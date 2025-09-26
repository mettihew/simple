// api/products/route.ts


import '@/lib/db';


import { Product } from '@/models/product';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const results = await Product.find()
       return NextResponse.json(results)
    } catch (error) {
        console.log(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
