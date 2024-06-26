import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="min-h-full flex gap-8 items-center justify-center bg-black
      text-white p-4">
      <Image src="/logo.jpg" width={25} height={25} alt="logo" />
      <Link href="/">Terms of Use</Link>
      <Link href="/">Privacy Policy</Link>
    </footer>
  );
};
