export interface ToastProps {
  variant: 'success' | 'error';
  text: 'Success' | 'Error. Try again';
}

export const Toast = ({ variant, text }: ToastProps) => {
  const bg: string = variant === 'success' ? 'bg-green-600' : 'bg-red-500';

  return (
    <div className={`p-10 ${bg} rounded-xl`}>
      <span className="text-xl font-bold">{text}</span>
    </div>
  )
}