import Image from 'next/image';

interface BookingFlightInfoHeaderProps {
  iconSrc: string;
  type: string;
  location: string;
  terminal: string;
  airport: string;
}

const BookingFlightInfoHeader: React.FC<BookingFlightInfoHeaderProps> = ({
  iconSrc,
  type,
  location,
  terminal,
  airport,
}) => {
  return (
    <div className='flex gap-3 py-1 text-sm md:flex-wrap'>
      <Image
        loading='lazy'
        src={iconSrc}
        alt='departure icon'
        className='shrink-0 my-auto w-6 m-1 aspect-square'
        height={24}
        width={24}
      />
      <div className='flex flex-1 gap-2 px-4 pt-2.5 pb-3 rounded-md bg-slate-100 md:flex-wrap'>
        <span className='flex-1 font-[475] leading-[138%] text-slate-800'>
          {type === 'departure' ? 'Departure from' : 'Layover at'} {location}
        </span>
        <div className='flex-1 leading-5 text-right text-gray-500 text-ellipsis'>
          {terminal && (
            <span className='text-gray-500 font-[475]'>{terminal}: </span>
          )}
          <span className='text-gray-500'>{airport}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingFlightInfoHeader;
