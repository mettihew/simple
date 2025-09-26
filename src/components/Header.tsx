import Link from "next/link";

export default function Header(){
    return(
        <div className="flex justify-around">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/test">Test</Link>
        </div>
    )
}