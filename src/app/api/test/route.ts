// api/test/route.ts

import '@/lib/db';
import { Product } from '@/models/Product';

export async function GET() {
    try {
        const results = await Product.find()
       return Response.json(results)
    } catch (error) {
        console.log('oops, mongo bad');
        return new Response('error', {status: 500})
    }
}