"use client"
import { useState } from "react"

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <article className="flex flex-col gap-4">
        <header className="flex flex-row items-center gap-4">
          <span className="block h-10 w-10 bg-white/10 rounded-full" />
          <h2 className="font-medium text-sm">Name</h2>
        </header>
        <section className="block w-full h-64 bg-white/10 rounded-md" />
        <footer className="flex flex-row">
          <button
            onClick={() => setIsLiked((prevState) => !prevState)}
            className={`flex-1 font-medium text-sm transition-colors hover:bg-white/10 p-4 rounded-md ${isLiked && 'bg-green-900 text-green-400 hover:bg-green-950'}`}
          >
            {isLiked ? "Curtido" : "Curtir"}
          </button>
          <button
            className="flex-1 font-medium text-sm transition-colors hover:bg-white/10 p-4 rounded-md"
          >
            Comentar
          </button>
          <button
            className="flex-1 font-medium text-sm transition-colors hover:bg-white/10 p-4 rounded-md"
          >
            Compartilhar
          </button>
        </footer>
      </article>
    </>
  );
}

export const Posts = () => {
  return (
    <ol className="flex flex-col gap-8 mt-8">
      {[...new Array(5)].map((_, i) => (
        <li key={i}>
          <Post />
        </li>
      ))}
    </ol>
  );
}