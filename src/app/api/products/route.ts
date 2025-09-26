// api/products/route.ts


import '@/lib/db';


import { Product } from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const results = await Product.find()
       return NextResponse.json(results)
    } catch (error) {
        console.log('oops, mongo bad');
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
