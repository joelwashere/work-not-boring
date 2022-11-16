import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { HiClipboardCopy, HiOutlineUserCircle } from 'react-icons/hi'

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
    <nav className="flex h-10 w-full py-0 px-4 justify-between items-center">
      <Link href={"/"}>
        <div className="text-2xl font-bold text-black p-1 hover:cursor-pointer hover:text-blue-500">
          Work Not Boring
        </div>
      </Link>
      <div className="my-auto">
        <ul className="max-w-full flex items-center">
          <NavItem href="/chat" text="Chat" />
          <NavItem href="/" text="Contracts" />
          <WalletAddressContainer address={"9Y29...Vpbb"}/>
          <WalletMultiButtonDynamic className="mx-2"/>
          <DropdownMenu profileName="Big Joel"/>
        </ul>
      </div>
    </nav>
  );
};
const WalletAddressContainer = (props: any) => {
  return (
    <div className="group relative bg-black w-32 h-full text-white rounded mx-2 px-2 font-[650] border-2 border-blue-500 border-hidden hover:border-solid hover:cursor-pointer">
      <span className="">{props.address}</span>
      <HiClipboardCopy className="hidden group-hover:inline absolute right-0.5 top-1" color="white"/>
    </div>
  );
}
export const NavItem = (props: any) => {
  return (
    <Link href={props.href}>
      <li className="mx-2 hover:text-blue-500 font-semibold flex">
        {props.icon}
        {props.text}
      </li>
    </Link>
  );
}

const DropdownMenu = (props: any) => {
  return (
    <div className="bg-black rounded-2xl p-0.5 w-40 hover:bg-blue-500">
      <DropdownItem leftIcon={<HiOutlineUserCircle size={25} color="white" />}>
        {props.profileName}
      </DropdownItem>
    </div>
  );
}

const DropdownItem = (props: any) => {
  return (
    <a href="#" className="flex justify-between">
      <span className="mr-2">{props.leftIcon}</span>
      <span className="text-white">{props.children}</span>
      <span>{props.rightIcon}</span>
    </a>
  );
}