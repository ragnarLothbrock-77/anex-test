import { UsersInterface } from "../../interfaces/user.interface";
import { Poster } from "../Poster/Poster";
import { useQuery } from "react-query";
import { UsersServices } from "../../app/services/users.services";
import { useRouter } from "next/router";

export const Dashboard = () => {
  const { data, isLoading, isError } = useQuery('users_list', () => UsersServices.getUsers())
  const { push } = useRouter();

  const handleSelectEmployee = (id: string) => {
    const res = data?.
      filter((i: UsersInterface) => i.id === id)
      .map(item => item.id)
      .join('');

    push(`/${res}`)
  }


  return (
    <div className="w-2/5 bg-gray-700 rounded-xl h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="py-8 px-8 flex flex-col gap-10 ">
        <h2 className="text-2xl font-bold">Employees list</h2>
        {isLoading && <div>Loading...</div>}
        {isError && <div className="text-red-500">Error! Try to reload page</div>}
        <ul className="grid grid-cols-2 gap-8">
          {data?.map((item) => (
            <Poster
              id={item.id}
              onSelectEmployee={handleSelectEmployee}
              key={item.id}
              email={item.email}
              phone={item.phone}
              name={item.name}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}