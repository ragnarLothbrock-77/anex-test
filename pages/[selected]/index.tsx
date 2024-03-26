import { Controller } from "../../components/Controller/Controller";
import { Card } from "../../components/Card/Card";
import Close from '../../public/close.svg';
import { useRouter } from "next/router";
import { useState } from "react";
import { AppForm } from "../../components/AppForm/AppForm";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { UsersInterface } from "../../interfaces/user.interface";
import { UsersServices } from "../../app/services/users.services";
import { Toast } from "../../components/Toast/Toast";


const STORY_MOC_STRING = 'jlnn';

export default function SelectedEmployee() {
  const { asPath, push } = useRouter();
  const queryClient = useQueryClient();
  const { data } = useQuery('users_list', () => UsersServices.getUsers());

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isSuccesResponce, setIsSuccesResponce] = useState<boolean>(false);
  const [isToast, setIsToast] = useState<boolean>(false);

  const currentId = asPath.split('/').join('') || STORY_MOC_STRING;
  const initialValue = data?.find(function (item) {
    return item.id === currentId;
  });


  const deleteMutation = useMutation(['delete_employee'], (id: string) => UsersServices.deleteUser(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('users_list');
      setIsToast(true);
      setIsSuccesResponce(true);
      setTimeout(() => {
        push('/');
      }, 1000);
    },
    onError: () => {
      setIsToast(true);
      setTimeout(() => {
        setIsToast(false);
      }, 1000);
    }
  })

  const updateMutation = useMutation('update_employee', (data: UsersInterface) => UsersServices.updateUser(data, currentId), {
    onSuccess: () => {
      queryClient.invalidateQueries('users_list');
      setIsFormOpen(false);
      setIsToast(true);
      setIsSuccesResponce(true);
      setTimeout(() => {
        setIsSuccesResponce(false);
        setIsToast(false);
      }, 1000)
    },
    onError: () => {
      setIsFormOpen(false);
      setIsToast(true);
      setTimeout(() => {
        setIsToast(false);
        setIsFormOpen(true);
      }, 1000)
    }
  });


  const handleFormUpdate = (values: any) => {
    return updateMutation.mutate({
      ...values
    })
  }

  const handleEmployeeDelete = () => {
    return deleteMutation.mutate(currentId);
  }

  const handleProfileClose = () => {
    push(`/`);
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      {
        isFormOpen
          ? <>
            <AppForm onSubmit={handleFormUpdate} initialValue={initialValue} />
            <Controller onClick={() => setIsFormOpen(false)} bg="bg-red-500" isAbsolute><Close /></Controller>
          </>
          : isToast
            ? <Toast
              variant={isSuccesResponce ? 'success' : 'error'}
              text={isSuccesResponce ? 'Success' : 'Error. Try again'} />
            : <>
              <Card currentUser={initialValue as UsersInterface} onDelete={handleEmployeeDelete} setUpdateFormOpen={setIsFormOpen} />
              <Controller onClick={handleProfileClose} bg="bg-red-500" isAbsolute><Close /></Controller>
            </>
      }
    </div>
  )
}