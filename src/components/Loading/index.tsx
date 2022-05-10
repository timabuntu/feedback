import { CircleNotch } from 'phosphor-react';

export function Loading() {
  return (
    <div className='grid w-6 h-6 overflow-hidden place-items-center'>
      <CircleNotch weight='bold' className='w-4 h-4 animate-spin' />
    </div>
  );
}

export default Loading;
