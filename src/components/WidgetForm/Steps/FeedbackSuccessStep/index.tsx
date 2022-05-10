import { CloseButton } from '../../../CloseButton';
import { CheckSquare } from 'phosphor-react';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className='flex flex-col items-center py-10 w-[304px]'>
        <CheckSquare weight='fill' className='w-12 h-12 fill-green-400' />

        <span className='mt-2'>Agradecemos o seu Feedback!</span>
        <button
          onClick={onFeedbackRestartRequested}
          type='button'
          className='px-6 py-2 mt-6 text-sm leading-6 transition-colors border-transparent rounded-md bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500'
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
