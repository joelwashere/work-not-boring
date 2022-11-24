import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="hidden md:block absolute bottom-0 mx-auto p-2 w-full text-right pr-2">
      <p className="text-white text-base font-light cursor-default mr-2">
        Powered by Rebound Studios
      </p>
    </footer>
  );
};
