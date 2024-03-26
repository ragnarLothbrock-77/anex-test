import { useMutation, useQuery, useQueryClient } from 'react-query';
import { UsersInterface } from '../../interfaces/user.interface';
import { UsersServices } from '../../app/services/users.services';
import { generateRandomString } from '../../helpers/stringIdGenerator';
import { AppForm } from '../AppForm/AppForm';

interface FormProps {
  setFormOpen: (arg: boolean) => void;
}


export const EmployeeForm = ({ setFormOpen }: FormProps) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation('create_user', (data: UsersInterface) => UsersServices.createUser(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('users_list');
      setFormOpen(false);
    }
  });


  const handleEmployeeCreate = async (values: any) => {
    await mutateAsync({
      ...values,
      id: generateRandomString()
    })
  }


  return <AppForm onSubmit={handleEmployeeCreate} />
}