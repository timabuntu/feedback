import { FeedbackType, feedbackTypes } from '../..';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <div className='flex w-full gap-2 py-8'>
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className='flex flex-col items-center flex-1 w-24 gap-2 py-5 border-2 border-transparent rounded-lg focus:outline-none focus:border-brand-500 hover:border-brand-500 bg-zinc-800'
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            type='button'
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
  );
}
