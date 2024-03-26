import { UsersInterface } from '@/interfaces/user.interface';
import UserActive from '../../public/current.svg';
import { Tag } from '../Tag/Tag';
import Phone from '../../public/phone.svg';
import Mail from '../../public/mail.svg';
import Info from '../../public/info.svg';
import { SyntheticEvent } from 'react';

interface LabelProps {
  onSelectEmployee: (id: string) => void;
}

export const Poster = ({ name, phone, email, id, onSelectEmployee }: Pick<UsersInterface, 'name' | 'phone' | 'email' | 'id'> & LabelProps) => {
  const handleStopPropagination = (e: SyntheticEvent) => {
    e.stopPropagation();
  }
  return (
    <li className="bg-blue-500 rounded-xl p-8 aspect-square">
      <div className="flex flex-col items-center gap-5 h-full">
        <div className="grow h-full flex flex-col items-center gap-5">
          <UserActive />
          <span className="font-bold text-lg">{name}</span>
          <p className="text-xs font-bold -mt-3">{phone}</p>
        </div>
        <div className="flex w-full justify-center gap-2">
          <Tag variant='tel' extra={phone}>{<Phone />}</Tag>
          <Tag variant='mail' extra={email}>{<Mail />}</Tag>
          <Tag onClick={() => onSelectEmployee(id)} variant='info'>{<Info onClick={handleStopPropagination} />}</Tag>
        </div>
      </div>
    </li>
  )
}