import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          My Web Apps
        </h1>
        <p>
          A great place to keep track of and use all your web apps in a simple
          UI that is akin to a mobile app screen.
        </p>
        <p>
          Open your apps in a new tab, this tab, or a in modal to enable quick
          access and multi tasking
        </p>
        <div className="grid grid-cols-1 gap-4 p-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl border border-gray-800 p-4 hover:bg-gray-100 active:bg-gray-200"
            href="/apps"
          >
            <h3 className="text-2xl font-bold">Get Started</h3>
            <div className="text-lg">
              <p>
                Create a free account to get started managing all your web apps
                in one place.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
