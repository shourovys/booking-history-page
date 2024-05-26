import Image from 'next/image';

interface BookingFlightSegmentDetailsProps {
  route: string;
  duration: string;
  departureTime: string;
  departureDate: string;
  arrivalTime: string;
  arrivalDate: string;
  iconSrc: string;
}

const BookingFlightSegmentDetails: React.FC<
  BookingFlightSegmentDetailsProps
> = ({
  route,
  duration,
  departureTime,
  departureDate,
  arrivalTime,
  arrivalDate,
  iconSrc,
}) => {
  return (
    <div className='flex gap-3 pt-3'>
      <Image
        loading='lazy'
        src={iconSrc}
        alt='flight details icon'
        className='shrink-0 my-auto w-6 m-1 aspect-square'
        height={24}
        width={24}
      />
      <div className='w-full grid grid-cols-3 gap-3 '>
        <div className='flex flex-col flex-1'>
          <div className='text-base font-semibold leading-6 text-slate-800'>
            {route}
          </div>
          <div className='text-sm leading-5 text-gray-500'>{duration}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='text-base font-semibold leading-6 text-slate-800'>
            {departureTime}
          </div>
          <div className='text-sm leading-5 text-gray-500'>{departureDate}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='text-base font-semibold leading-6 text-slate-800'>
            {arrivalTime}
          </div>
          <div className='text-sm leading-5 text-gray-500'>{arrivalDate}</div>
        </div>
      </div>
    </div>
  );
};

export default BookingFlightSegmentDetails;
