"use client";
import BlockContainer from "@/app/components/BlockContainer";
import { SecondaryButton } from "@/app/components/Buttons";
import InputBox from "@/app/components/InputBox";
import { Keypair } from "@solana/web3.js";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { ethers } from "ethers";

import React, { useState } from "react";
import nacl from "tweetnacl";

function W2A1() {
  const [mnemonic, setMnemonic] = useState("");
  const [wallets, setWallets] = useState(["dsa"]);
  const [seed, setSeed] = useState<string | Buffer>("");
  const [number, setNumber] = useState(0);

  const handleGenerateMnemo = (e: any) => {
    e.preventDefault();
    const newMnemonic = ethers.Mnemonic.entropyToPhrase(ethers.randomBytes(16));
    setMnemonic(newMnemonic);
    const newSeed = mnemonicToSeedSync(newMnemonic);
    setSeed(newSeed);
    setWallets([]);
    setNumber(0);
  };

  const handleAddWallet = (e: any) => {
    e.preventDefault();
    if (!mnemonic) {
      alert("Generate mnemonic first");
      return;
    }
    const path = `m/44'/501'/${number}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();
    setWallets([...wallets, publicKey]);
    setNumber((prev) => prev + 1);
  };

  const handleclear = (e: any) => {
    e.preventDefault();
    setMnemonic("");
    setWallets([]);
    setSeed("");
    setNumber(0);
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
          {/* <InputBox label="mnemonic" classNameInput="w-full" value={mnemonic} /> */}
          <div className="text-sm">
            <p className="font-bold">Mnemonic</p>
            <p className="bg-white w-full px-2 py-1 rounded-lg">{mnemonic}</p>
          </div>
        </div>
        <SecondaryButton className="mt-5" onClick={handleAddWallet}>
          Add Wallet
        </SecondaryButton>
        {wallets.map((wallet, index) => (
          <p key={index} className="text-sm">
            Wallet{index + 1}: <span className="text-xs">{wallet}</span>
          </p>
        ))}
      </div>
    </BlockContainer>
  );
}

export default W2A1;
