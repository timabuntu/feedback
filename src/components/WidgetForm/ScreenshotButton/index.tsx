import html2canvas from 'html2canvas';
import { Camera } from 'phosphor-react';

export function ScreenshotButton() {
  async function handleTakeScreenshot() {
    const canvas = await html2canvas(document.querySelector('html')!); //Seleciona qual elemento da page quer tirar a foto "nesse caso a page toda"
    const base64image = canvas.toDataURL('image/png'); // faz a conversão para o formato PNG base64 "base64 é um formato de texto"
  }

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
