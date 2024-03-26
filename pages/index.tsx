import { Controller } from "../components/Controller/Controller";
import { useState } from "react";
import Plus from '../public/plus.svg';
import { EmployeeForm } from "../components/EmployeeCreateForm/EmployeeCreateForm";


export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {
        isFormOpen
          ? <EmployeeForm setFormOpen={() => setIsFormOpen(false)} />
          : <Controller onClick={() => setIsFormOpen(true)} bg="bg-green-600">{<Plus />}</Controller>
      }
    </div>
  );
}
