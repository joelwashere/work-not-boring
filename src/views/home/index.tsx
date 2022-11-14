import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import dynamic from "next/dynamic";
import { FC } from "react";
import { ContractForm } from "../../components/contract-form";

const WalletDisconnectButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
  { ssr: false }
);
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);


export const HomeView: FC = ({ }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ContractForm />
    </div>
  );
}