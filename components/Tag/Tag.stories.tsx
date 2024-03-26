import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import Info from '../../public/info.svg';
import Phone from '../../public/phone.svg';
import Mail from '../../public/mail.svg';

const meta = {
  title: 'EmployeeApp/components/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoTag: Story = {
  args: {
    children: <Info />,
    variant: 'info'
  }
};

export const PhoneTagWithExtraInfoString: Story = {
  args: {
    children: <Phone />,
    variant: 'tel',
    extra: '79251481910'
  }
};

export const MailTagWithExtraInfoString: Story = {
  args: {
    children: <Mail />,
    variant: 'mail',
    extra: 'sammirosh@gmail.com'
  }
};

