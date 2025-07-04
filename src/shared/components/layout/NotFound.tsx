'use client';

import { ArrowLeft } from 'lucide-react';
import StarShopLanding from '../../../../public/starshop-logos/StarShop-Logo-Landing.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  return (
    <main className="flex flex-col gap-4 text-center px-3 md:px-0">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={StarShopLanding}
          alt="StarShop Logo"
          width={200}
          height={100}
        />
      </div>
      <h1 className="text-4xl">Oops! Page not found.</h1>
      <p>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <div className="mt-10  px-8 md:px-0">
        <button
          onClick={() => router.back()}
          aria-label="Back to previous page"
          className=" border border-white rounded-full px-6 py-2 cursor-pointer hover:border-gray-600 hover:text-gray-300"
        >
          <ArrowLeft className="inline w-4" /> Back
        </button>
      </div>
    </main>
  );
};

export default NotFound;
