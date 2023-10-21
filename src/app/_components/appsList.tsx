import { type FC } from "react";
import { api } from "~/trpc/server";
import { App } from "~/app/_components/app";

export const AppsList: FC = async () => {
  const apps = await api.apps.getAll.query();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Apps</h1>
      <div className="flex flex-col gap-4">
        {apps?.map((app) => <App key={app.id} name={app.name} url={app.url} />)}
      </div>
    </div>
  );
};
