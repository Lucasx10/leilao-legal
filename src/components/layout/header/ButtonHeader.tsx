import { url } from "inspector";
import Link from "next/link";

export default function ButtonHeader({ icone, nome, url }: any) {
  return (
    <Link href={url}>
      <div className="flex flex-col border-2 border-gray-500 py-4 px-2 justify-center items-center rounded-md hover:bg-gray-200">
        <span>{icone}</span>
        <p>{nome}</p>
      </div>
    </Link>
  );
}
