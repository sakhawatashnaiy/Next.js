import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div> 
          <ul>
              <Link href="/"><li>Home</li></Link>
              <Link href="/about"><li>About</li></Link>
              <Link href="/contact"><li>Contact</li></Link> 
              <Link href="/services"><li>Services</li></Link>   
                
          </ul>
      </div>
  );
}
