import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

export function Widget() {
  const [] = useState();

  return (
    <div className='absolute bottom-4 right-4'>
      <p>Bem-Vindo Usuário</p>

      <button className='flex items-center h-12 px-3 text-white rounded-full bg-brand-500 group'>
        <ChatTeardropDots className='w-6 h-6' />

        <span className='overflow-hidden transition-all duration-500 ease-linear max-w-0 group-hover:max-w-xs'>
          <span className='pl-2'>Feedback</span>
        </span>
      </button>
    </div>
  );
}
