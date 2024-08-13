"use client";
import { PrimaryButton, SecondaryButton } from "@/app/components/Buttons";
import InputBox from "@/app/components/InputBox";
import { ChangeEvent, useState } from "react";
import crypto from "crypto";
import BlockContainer from "@/app/components/BlockContainer";

function W1A1() {
  const [input, setInput] = useState<string>("");
  const [hash, setHash] = useState<string>("");

  function clear(e: any) {
    e.preventDefault();
    setInput("");
    setHash("");
  }

  return (
    <BlockContainer>
      <div className="flex justify-between">
        <h2 className="text-2xl text-white font-medium pb-2">
          Generating SHA-256 Hash
        </h2>
        <SecondaryButton onClick={clear} className="text-white">Clear</SecondaryButton>
      </div>
      <div className="flex flex-col space-y-3">
        <InputBox
          label="Input String"
          placeholder="Input String"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
        />
        <SecondaryButton
          className="text-white"
          onClick={(e) => {
            e.preventDefault();
            setHash(crypto.createHash("sha256").update(input).digest("hex"));
          }}
        >
          Generate SHA-256 Hash
        </SecondaryButton>
        <InputBox label="Output Hash" value={hash} classNameInput="w-full" />
      </div>
    </BlockContainer>
  );
}

export default W1A1;
