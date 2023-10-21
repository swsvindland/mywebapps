import { type FC, type ReactNode } from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className="py-4">
        <nav className="flex w-full items-center justify-center">
          <div className="container">
            <div className="flex justify-between">
              <Image
                className="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                width={32}
                height={32}
              />
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="p-4">{children}</div>
      </main>
    </>
  );
};

export default Layout;
