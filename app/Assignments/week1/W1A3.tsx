"use client";
import React from "react";
import { SecondaryButton } from "@/app/components/Buttons";
import InputBox from "@/app/components/InputBox";
import { ChangeEvent, useState } from "react";
import crypto from "crypto";
import BlockContainer from "@/app/components/BlockContainer";

function W1A3() {
  const [input, setInput] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("");
  const [hash, setHash] = useState<string>("");

  function clear(e: any) {
    e.preventDefault();
    setPrefix("");
    setInput("");
    setHash("");
  }

  return (
    <BlockContainer>
      <div className="flex justify-between">
        <h2 className="text-2xl text-white font-medium pb-2">
          Find Hash With Input and Prefix
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
        <InputBox
          label="Prefix For Hash"
          placeholder="Prefix"
          value={prefix}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const len = e.target.value.length;
            setPrefix("".padStart(Math.min(len, 2), "0"));
          }}
        />
        <SecondaryButton
          className="text-white"
          onClick={(e) => {
            e.preventDefault();
            const hash = findHashWithPrefix(input, prefix);
            setHash(hash);
          }}
        >
          Generate SHA-256 Hash
        </SecondaryButton>
        <InputBox label="Output Hash" value={hash} classNameInput="w-full" />
      </div>
    </BlockContainer>
  );
}

export default W1A3;

function findHashWithPrefix(str: string, prefix: string) {
  let input = 0;
  while (true) {
    let inputStr = str + input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return hash;
    }
    input++;
  }
}
