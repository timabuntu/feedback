import { Camera } from 'phosphor-react';

export function ScreenshotButton() {
  function handleTakeScreenshot() {}

  return (
    <button
      type='button'
      onClick={handleTakeScreenshot}
      className='p-2 transition-colors border-transparent rounded-md bg-zing-800 hover:bg-zinc-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
    >
      <Camera className='w-6 h-6 text-zinc-100' />
    </button>
  );
}
