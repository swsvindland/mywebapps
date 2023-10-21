"use client";
import { type FC, useState } from "react";
import { Modal } from "~/app/_components/modal";
import { Input } from "~/app/_components/input";
import { api } from "~/trpc/react";

export const CreateApp: FC = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    name: "",
    url: "",
  });
  const utils = api.useUtils();

  const submit = api.apps.create.useMutation({
    onSuccess: async () => {
      await utils.apps.getAll.invalidate();
    },
  });

  const handleAccept = () => {
    submit.mutate(state);
    setOpen(false);
  };

  const handleDecline = () => {
    setState({
      name: "",
      url: "",
    });
    setOpen(false);
  };

  return (
    <div className="flex w-full justify-end">
      <button
        onClick={() => setOpen(true)}
        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
      >
        Create
      </button>
      <Modal
        open={open}
        setOpen={setOpen}
        title="Create App"
        body={
          <div>
            <Input
              label="Name"
              value={state.name}
              onChange={(event) =>
                setState({ ...state, name: event.target.value })
              }
            />
            <Input
              label="URL"
              value={state.url}
              onChange={(event) =>
                setState({ ...state, url: event.target.value })
              }
            />
          </div>
        }
        cancel={handleDecline}
        accept={handleAccept}
      />
    </div>
  );
};
