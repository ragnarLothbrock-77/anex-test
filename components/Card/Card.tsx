import Employee from '../../public/info-employee.svg';
import Delete from '../../public/delete-profile.svg';
import Update from '../../public/update-profile.svg';
import { UsersInterface } from "@/interfaces/user.interface";

interface CardProps {
  setUpdateFormOpen: (arg: boolean) => void;
  onDelete: () => void;
  currentUser: UsersInterface;
}


export const Card = ({ setUpdateFormOpen, onDelete, currentUser }: CardProps) => {
  const handleFormOpen = () => {
    setUpdateFormOpen(true)
  }

  return (
    <div className="rounded-xl bg-gray-700 p-8 w-1/2">
      {currentUser &&
        <div key={currentUser.id} className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-5">
            <Employee />
            <span className="font-bold text-xl">{currentUser.name}</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase mb-2">Contacts:</h3>
            <div className="flex gap-3">
              <span className="font-bold">Phone:</span>
              <span>{currentUser.phone}</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold">Email:</span>
              <span>{currentUser.email}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase mb-2">Location:</h3>
            <div className="flex gap-3">
              <span className="font-bold">City:</span>
              <span>{currentUser.city}</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold">Work at:</span>
              <span>{currentUser.company}</span>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <div onClick={handleFormOpen} className="cursor-pointer py-4 px-5 w-1/2 bg-blue-500 flex justify-center items-center rounded-lg"><Update /></div>
            <div onClick={onDelete} className="cursor-pointer w-1/2 bg-red-500 flex justify-center items-center rounded-lg"><Delete /></div>
          </div>
        </div>
      }
    </div >
  )
}