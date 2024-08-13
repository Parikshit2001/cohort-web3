"use client";
import BlockContainer from "@/app/components/BlockContainer";
import { SecondaryButton } from "@/app/components/Buttons";
import InputBox from "@/app/components/InputBox";
import { ethers } from "ethers";

import React, { useState } from "react";

function W2A1() {
  const [mnemonic, setMnemonic] = useState("");
  const [wallets, setWallets] = useState(["dsa"]);

  const handleGenerateMnemo = (e: any) => {
    e.preventDefault();
    const newMnemonic = ethers.Mnemonic.entropyToPhrase(ethers.randomBytes(16));
    setMnemonic(newMnemonic);
  };

  const handleAddWallet = (e: any) => {
    e.preventDefault();
    if (!mnemonic) {
      alert("Generate mnemonic first");
      return;
    }
  };

  const handleclear = (e: any) => {
    e.preventDefault();
    setMnemonic("");
    setWallets([]);
  };

  return (
    <BlockContainer>
      <div className="flex justify-between">
        <h2 className="text-2xl text-white font-medium pb-2">
          Create Web Based Wallets
        </h2>
        <SecondaryButton onClick={handleclear}>Clear</SecondaryButton>
      </div>
      <div className="flex flex-col space-y-3 py-5">
        <div className="flex flex-col space-y-1 pb-4">
          <SecondaryButton onClick={handleGenerateMnemo}>
            Generate Mnemonic
          </SecondaryButton>
          <InputBox label="mnemonic" classNameInput="w-full" value={mnemonic} />
        </div>
        <SecondaryButton className="mt-5" onClick={handleAddWallet}>
          Add Wallet
        </SecondaryButton>
        {wallets.map((wallet, index) => (
          <p key={index}>
            Wallet{index + 1}: {wallet}
          </p>
        ))}
      </div>
    </BlockContainer>
  );
}

export default W2A1;
