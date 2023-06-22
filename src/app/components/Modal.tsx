"use client";
import { type ReactNode, useState } from "react";

type ModalProps = {
  children: ReactNode
}

export const Modal = (props: ModalProps) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <dialog open={isOpen} className="bg-white/10 absolute w-screen max-w-[800px]">
      <article className="grid grid-cols-2">
        {children}
        <aside className="flex items-end justify-end">
          <button onClick={() => setIsOpen(false)} className="text-white">X</button>
        </aside>
      </article>
    </dialog>
  )
}