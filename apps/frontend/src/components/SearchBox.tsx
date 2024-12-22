import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";

import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex bg-[#171717] text-cyan-50 p-4 rounded-full mr-8">
        <BsSearch
          size={25}
          className="border-solid border-spacing-x-0.5 border-cyan-500"
        />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            O que você procura?
          </SheetTitle>
          <SheetDescription className="w-1/3 m-auto">
            <Command>
              <CommandInput placeholder="Digite o que procura..." />
              <CommandList>
                <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>
              </CommandList>
            </Command>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SearchBox;
