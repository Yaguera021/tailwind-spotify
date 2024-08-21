import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>
          <nav className='space-y-5 mt-10'>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-200'
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-200'
            >
              <Search />
              Search
            </a>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-200'
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Rock
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Rap
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Trance
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Progressive
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Techno
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Jazz
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Blues
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              MPB
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Reagge
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Funk
            </a>
          </nav>
        </aside>
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a
              href='#'
              className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'
            >
              <Image
                src='/rock.jpeg'
                alt='Cover Rock'
                width={100}
                height={100}
              />
              <strong>Hybrid Theory</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a
              href='#'
              className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'
            >
              <Image src='/rap.jpeg' alt='Cover Rap' width={100} height={100} />
              <strong>The Eminem Show</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a
              href='#'
              className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'
            >
              <Image
                src='/trance.jpeg'
                alt='Cover Trance'
                width={100}
                height={100}
              />
              <strong>Ajja - Tulpa</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a
              href='#'
              className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'
            >
              <Image
                src='/techno.jpeg'
                alt='Cover Techno'
                width={100}
                height={100}
              />
              <strong>Boris Brejcha Club Vibes</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a
              href='#'
              className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'
            >
              <Image
                src='/neelix.jpeg'
                alt='Cover Progressive'
                width={100}
                height={100}
              />
              <strong>Neelix - Human</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a
              href='#'
              className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'
            >
              <Image src='/mpb.jpeg' alt='Cover Mpb' width={100} height={100} />
              <strong>Jorge Aragão</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>
            Made For Yago Böhm da Cruz
          </h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a
              href=''
              className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '
            >
              <Image
                src='/jazz.png'
                alt='Cover jazz'
                width={100}
                height={100}
                className='w-full'
              />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>
                Linkin Park,and more
              </span>
            </a>
            <a
              href=''
              className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '
            >
              <Image
                src='/reagge.jpeg'
                alt='Cover reagge'
                width={100}
                height={100}
                className='w-full'
              />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>
                Linkin Park and more
              </span>
            </a>
            <a
              href=''
              className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '
            >
              <Image
                src='/blues.jpeg'
                alt='Cover blues'
                width={100}
                height={100}
                className='w-full'
              />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>
                Linkin Park and more
              </span>
            </a>
            <a
              href=''
              className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '
            >
              <Image
                src='/techno.jpeg'
                alt='Cover techno'
                width={100}
                height={100}
                className='w-full'
              />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>
                Linkin Park,and more
              </span>
            </a>
            <a
              href=''
              className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '
            >
              <Image
                src='/trance.jpeg'
                alt='Cover trance'
                width={100}
                height={100}
                className='w-full'
              />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>
                Linkin Park and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 py-3 px-5 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image
            src='/techno.jpeg'
            alt='Cover techno'
            width={80}
            height={80}
            className='w-full'
          />
          <div className='flex flex-col'>
            <strong className='font-normal'>Gravity</strong>
            <span className='text-xs text-zinc-400 whitespace-nowrap'>
              Boris Brejcha
            </span>
          </div>
          <Heart size={40} className='text-zinc-200 ml-6' />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>02:12</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-80 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>02:21</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} className='text-zinc-200' />
          <LayoutList size={20} className='text-zinc-200' />
          <Laptop2 size={20} className='text-zinc-200' />
          <div className='flex items-center gap-2'>
            <Volume size={20} className='text-zinc-200' />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-12 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} className='text-zinc-200' />
        </div>
      </footer>
    </div>
  );
}
