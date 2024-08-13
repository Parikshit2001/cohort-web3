"use client";
import React from "react";
import { SecondaryButton } from "@/app/components/Buttons";
import InputBox from "@/app/components/InputBox";
import { ChangeEvent, useState } from "react";
import crypto from "crypto";
import BlockContainer from "@/app/components/BlockContainer";

function W1A2() {
  const [input, setInput] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("");
  const [hash, setHash] = useState<string>("");

  function clear(e: any) {
    e.preventDefault();
    setInput("");
    setHash("");
    setPrefix("");
  }

  return (
    <BlockContainer>
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl text-white font-medium pb-2">
            Find Hash With Prefix
          </h2>
          <SecondaryButton onClick={clear} className="text-white">Clear</SecondaryButton>
        </div>
        <div className="flex flex-col space-y-3">
          <InputBox
            label="Prefix For Hash"
            placeholder="Prefix"
            value={prefix}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const len = e.target.value.length;
              setPrefix("".padStart(Math.min(len, 5), "0"));
            }}
          />
          <SecondaryButton
            className="text-white"
            onClick={(e) => {
              e.preventDefault();
              const val = findHashWithPrefix(prefix);
              setInput(val.input);
              setHash(val.hash);
            }}
          >
            Generate SHA-256 Hash
          </SecondaryButton>
          <InputBox
            label="Input String"
            value={input}
            classNameInput="w-full"
          />
          <InputBox label="Output Hash" value={hash} classNameInput="w-full" />
        </div>
      </div>
    </BlockContainer>
  );
}

export default W1A2;

function findHashWithPrefix(prefix: string) {
  let input = 0;
  while (true) {
    let inputStr = input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
}
