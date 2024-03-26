import { Controller } from "../../components/Controller/Controller";
import { Card } from "../../components/Card/Card";
import Close from '../../public/close.svg';
import { useRouter } from "next/router";
import { useState } from "react";
import { AppForm } from "../../components/AppForm/AppForm";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { UsersInterface } from "../../interfaces/user.interface";
import { UsersServices } from "../../app/services/users.services";


const STORY_MOC_STRING = 'jlnn';

export default function SelectedEmployee() {
  const { asPath, push } = useRouter();
  const queryClient = useQueryClient();
  const { data } = useQuery('users_list', () => UsersServices.getUsers());

  const [updateFormOpen, setUpdateFormOpen] = useState<boolean>(false);

  const currentId = asPath.split('/').join('') || STORY_MOC_STRING;
  const initialValue = data?.find(function (item) {
    return item.id === currentId;
  });

  const deleteMutation = useMutation(['delete_employee'], (id: string) => UsersServices.deleteUser(id), {
    onMutate: () => {
      console.log('Mutate');
    },
    onSuccess: () => {
      console.log(data);
      queryClient.invalidateQueries('users_list');
      console.log(data);
      push('/');
    }
  })

  const updateMutation = useMutation('update_employee', (data: UsersInterface) => UsersServices.updateUser(data, currentId), {
    onSuccess: () => {
      queryClient.invalidateQueries('users_list');
      setUpdateFormOpen(false);
    }
  });

  const handleFormUpdate = async (values: any) => {
    await updateMutation.mutateAsync({
      ...values
    })
  }

  const handleEmployeeDelete = async () => {
    await deleteMutation.mutateAsync(currentId);
  }

  const handleProfilClose = () => {
    push(`/`);
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      {
        updateFormOpen
          ? <>
            <AppForm onSubmit={handleFormUpdate} initialValue={initialValue} />
            <Controller onClick={() => setUpdateFormOpen(false)} bg="bg-red-500" isAbsolute><Close /></Controller>
          </>
          : <>
            <Card currentUser={initialValue as UsersInterface} onDelete={handleEmployeeDelete} setUpdateFormOpen={setUpdateFormOpen} />
            <Controller onClick={handleProfilClose} bg="bg-red-500" isAbsolute><Close /></Controller>
          </>
      }

    </div>
  )
}