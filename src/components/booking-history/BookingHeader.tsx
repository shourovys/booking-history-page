import { ArrowIcon, DotIcon } from '@/utils/icon';

interface BookingHeaderProps {
  stepNumber: number;
  routeFrom: string;
  routeTo: string;
  tripType: string;
  dates: string;
  stops: string;
  totalDuration: string;
}

const BookingHeader: React.FC<BookingHeaderProps> = ({
  stepNumber,
  routeFrom,
  routeTo,
  tripType,
  dates,
  stops,
  totalDuration,
}) => {
  return (
    <header className='flex gap-4 justify-between items-center px-5 py-4 bg-white border-b border-solid border-slate-100 flex-wrap'>
      <div className='flex items-center gap-4'>
        <div className='flex justify-center items-center w-6 h-6 text-sm font-semibold text-white whitespace-nowrap bg-blue-500 rounded-full'>
          {stepNumber}
        </div>
        <div className='flex flex-col self-stretch md:max-w-full'>
          <h2 className='text-lg font-semibold tracking-normal leading-6 text-slate-800 md:max-w-full flex items-center gap-1'>
            {routeFrom} <ArrowIcon className='pt-1 ' /> {routeTo}
          </h2>
          <div className='flex gap-1.5 justify-between items-center py-px text-sm leading-4 text-gray-500 md:flex-wrap'>
            <span>{tripType}</span>
            <DotIcon className='text-gray-400 text-[8px]' />
            <span>{dates}</span>
            <DotIcon className='text-gray-400 text-[8px]' />
            <span className='md:max-w-full'>{stops}</span>
          </div>
        </div>
      </div>
      <div className='justify-center self-stretch px-2 py-1 my-auto text-xs leading-4 text-right text-blue-500 bg-indigo-50 font-[475] rounded-[32px]'>
        {totalDuration}
      </div>
    </header>
  );
};

export default BookingHeader;
