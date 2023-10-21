import { FC } from "react";
import Link from "next/link";

interface Props {
  name: string;
  url: string;
}

export const App: FC<Props> = ({ name, url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="rounded border border-gray-800 p-4 hover:bg-gray-100 active:bg-gray-200"
    >
      <h2>{name}</h2>
    </Link>
  );
};
