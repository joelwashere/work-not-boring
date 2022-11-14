import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FC } from 'react';

const WalletDisconnectButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
  { ssr: false }
);
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const Navbar: FC = () => {
  return (
    <nav className="flex h-10 w-full bg-white py-0 px-4 border-b-4 justify-between items-center">
      <Link href={"/"}>
        <div className="text-2xl font-bold text-black p-1 hover:cursor-pointer hover:text-blue-500">
          Work Not Boring
        </div>
      </Link>
      <div className="my-auto">
        <ul className="max-w-full flex">
          <NavItem href="/" text="Contracts" />
          {/* TODO: Change profile button to icon button */}
          <NavItem href="/" text="Profile" />
          <div className="flex gap-2 mx-4">
            <WalletMultiButtonDynamic />
            <WalletDisconnectButtonDynamic />
          </div>  
        </ul>
      </div>
    </nav>
  );
};

export const NavItem = (props: any) => {
  return (
    <Link href={props.href}>
      <li className="mx-2 hover:text-blue-500 font-semibold">
        {props.text}
      </li>
    </Link>
  );
}