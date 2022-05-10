import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import Loading from '../../Loading';

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string) => void;
  screenshot: string;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!); //Seleciona qual elemento da page quer tirar a foto "nesse caso a page toda"
    const base64image = canvas.toDataURL('image/png'); // faz a conversão para o formato PNG base64 "base64 é um formato de texto"

    onScreenshotTook(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type='button'
        className='flex items-end justify-end w-10 h-10 p-1 transition-colors border-transparent rounded-md text-zinc-400 hover:text-zinc-100'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight='fill' />
      </button>
    );
  }

  return (
    <button
      type='button'
      onClick={handleTakeScreenshot}
      className='p-2 transition-colors border-transparent rounded-md bg-zing-800 hover:bg-zinc-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
    >
      {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  );
}
