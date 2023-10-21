import { AppsList } from "~/app/_components/appsList";
import { CreateApp } from "~/app/_components/createApp";

export default function Apps() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <CreateApp />
      <AppsList />
    </main>
  );
}
