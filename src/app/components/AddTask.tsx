"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

const AddTask = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="btn btn-primary w-full"
      >
        Adicionar tarefa <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};

export default AddTask;
