import { UsersServices } from "@/app/services/users.services";
import { useQuery } from "react-query";

export const { data, isLoading, error } = useQuery('users list', () => UsersServices.getUsers(), {
  onSuccess: (data) => {
    console.log(data);
    // setEmployees(data);
  },
  onError: (error: any) => {
    console.log(error?.message);
  }
})