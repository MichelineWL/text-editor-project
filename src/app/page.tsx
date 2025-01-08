'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen gap-x-6">
      <button 
        className="border-2 py-4 px-5" 
        onClick={() => router.push('/wys')}
      >
        Wysiwyg Editor
      </button>
      <button 
        className="border-2 py-4 px-10" 
        onClick={() => router.push('/cdk')}
      >
        CK Editor
      </button>
      <button 
        className="border-2 py-4 px-10" 
        onClick={() => router.push('/jod')}
      >
        React Jodit
      </button>
    </div>
  );
}
