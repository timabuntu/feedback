import { CloseButton } from '../CloseButton';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto, representando um bug',
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada, representando uma ideia',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem, representando um pensamento',
    },
  },
};

export function WidgetForm() {
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className='text-xl leading-6'>deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className='flex w-full gap-2 py-8'>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button className='flex flex-col items-center flex-1 w-24 gap-2 py-5 border-2 border-transparent rounded-lg focus:outline-none focus:border-brand-500 hover:border-brand-500 bg-zinc-800'>
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>

      <footer className='text-xs text-neutral-400'>
        <p>
          Feito com ♥ pela{' '}
          <a
            className='underline underline-offset-2'
            href='https://rocketseat.com.br'
          >
            Rocketseat
          </a>
        </p>
      </footer>
    </div>
  );
}
