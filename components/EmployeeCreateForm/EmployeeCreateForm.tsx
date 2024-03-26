import { useMutation, useQuery, useQueryClient } from 'react-query';
import { UsersInterface } from '../../interfaces/user.interface';
import { UsersServices } from '../../app/services/users.services';
import { generateRandomString } from '../../helpers/stringIdGenerator';
import { AppForm } from '../AppForm/AppForm';
import { useState } from 'react';
import { Toast } from '../Toast/Toast';
import { Controller } from '../Controller/Controller';
import Close from '../../public/close.svg';

interface FormProps {
  setFormOpen: (arg: boolean) => void;
}


export const EmployeeForm = ({ setFormOpen }: FormProps) => {
  const [isToast, setIsToast] = useState<boolean>(false)
  const queryClient = useQueryClient();
  const { mutate } = useMutation('create_user', (data: UsersInterface) => UsersServices.createUser(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('users_list');
      setIsToast(true);
      setTimeout(() => {
        setIsToast(false);
        setFormOpen(false);
      }, 1000);
    }
  });


  const handleEmployeeCreate = (values: any) => {
    mutate({
      ...values,
      id: generateRandomString()
    })
  }


  return (
    <>
      {
        isToast
          ? <Toast variant='success' text='Success' />
          : <>
            <AppForm onSubmit={handleEmployeeCreate} />
            <Controller onClick={() => setFormOpen(false)} isAbsolute={true} bg="bg-red-500">{<Close />}</Controller>
          </>
      }
    </>
  )
}