import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  HiClipboardCopy,
  HiCog,
  HiLogout,
  HiOutlineArrowSmRight,
  HiOutlineGlobeAlt,
  HiOutlineUser,
  HiOutlineUserCircle,
  HiQuestionMarkCircle
} from 'react-icons/hi';

export const Navbar: FC = (props: any) => {

  return (
    <nav className={"absolute flex h-10 w-full py-6 px-3 justify-between items-center "+ (props.style)} >
      <Link href={"/"}>
        <div className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#f2f2f2] p-1 hover:cursor-pointer">
          Work Not Boring
        </div>
      </Link>
      <div className="my-auto">
        <ul className="max-w-full flex items-center">
          {/*TODO: Implement chat backend
          <NavItem href="/chat" text="Chat" /> */}
          {/*TODO: Implement non-custodial account backend
           <WalletAddressContainer address={"9Y29...Vpbb"}/> */}
          {/*<OnboardingButton /> */}
          {/*<DropdownMenu icon={<HiOutlineUserCircle size={24} color="white" />} text={"[User Name]"} />*/}
        </ul>
      </div>
    </nav>
  );
};

const WalletAddressContainer = (props: any) => {
  return (
    <div className="group relative bg-black w-32 h-full text-white rounded mx-1 px-2 font-[650] border-2 border-blue-500 border-hidden hover:border-solid hover:cursor-pointer">
      <span className="">{props.address}</span>
      <HiClipboardCopy className="hidden group-hover:inline absolute right-0.5 top-1" color="white"/>
    </div>
  );
}

export const NavItem = (props: any) => {
  return (
    <Link href={props.href}>
      <li className="mx-2 hover:text-blue-500 font-semibold">
        {props.icon}
        {props.text}
      </li>
    </Link>
  );
}

function DropdownItem(props: any) {
  return (
    <a href="#" className="flex h-12 items-center transition-all padding-0.5 bg-blue-500/80 first:rounded-t-lg last:rounded-b-lg border-2 border-white border-hidden hover:border-solid">
      <span className="mx-2">{props.leftIcon}</span>
      {props.children}
      <span className="ml-auto mr-2">{props.rightIcon}</span>
    </a>
  );
}

const DropdownMenu = (props: any) => {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("main");

  let menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if(!menuRef.current?.contains(e.target))
        setOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return() => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <div ref={menuRef} className="relative bg-black rounded-2xl p-0.5 md:w-44 text-white hover:bg-stone-700">
      <a href="#" className="flex" onClick={() => setOpen(!open)}>
        {props.icon}
        <span className="hidden md:block m-auto">{props.text}</span>

        <div className="absolute top-7 w-full">
          {open &&
            <>
              <DropdownItem leftIcon={<HiLogout size={26} />}>
                Sign Out
              </DropdownItem>
              <DropdownItem leftIcon={<HiOutlineGlobeAlt size={26} />} rightIcon={<HiOutlineArrowSmRight size={20}/>}>
                Language
              </DropdownItem>
              <DropdownItem leftIcon={<HiCog size={26} />}>
                Settings
              </DropdownItem>
              <DropdownItem leftIcon={<HiQuestionMarkCircle size={26} />}>
                Help
              </DropdownItem>
            </>
            }
        </div>
      </a>
    </div>
  );
}
