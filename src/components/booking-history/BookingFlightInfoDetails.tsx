import { FlightIcon, StopoverIcon } from '@/utils/icon';

interface StopoverNoticeProps {
  noticeText: string;
}

const StopoverNotice: React.FC<StopoverNoticeProps> = ({ noticeText }) => {
  return (
    <div className='flex gap-2 px-3 py-2 mt-4 text-xs leading-4 text-gray-700 bg-orange-100 rounded-md border border-[#FCDEC0] border-solid md:flex-wrap'>
      <StopoverIcon className='shrink-0 my-auto text-xl text-[#F27D00]' />
      <div className='flex-1 md:max-w-full'>{noticeText}</div>
    </div>
  );
};

interface BookingFlightInfoDetailsProps {
  airline: string;
  flightNumber: string;
  aircraft: string;
  travelClass: string;
  stopoverNoticeText?: string;
}

const BookingFlightInfoDetails: React.FC<BookingFlightInfoDetailsProps> = ({
  airline,
  flightNumber,
  aircraft,
  travelClass,
  stopoverNoticeText,
}) => {
  return (
    <div className='flex gap-3 text-sm py-3.5'>
      <div className='flex flex-col items-center -my-3.5'>
        <div className='w-0.5 flex-grow bg-gray-300 rounded-full'></div>
        <FlightIcon className='w-6 h-6 m-1 text-gray-400 transform rotate-180 p-1 my-1' />
        <div className='w-0.5 flex-grow bg-gray-300 rounded-full'></div>
      </div>
      <div className='w-full'>
        <div className='w-full grid grid-cols-3 gap-3 my-auto'>
          <div className='leading-[129%]'>
            <div className='text-gray-700 whitespace-nowrap font-[475] text-ellipsis'>
              {airline}
            </div>
            <div className='mt-1.5 text-gray-500'>
              Flight no : {flightNumber}
            </div>
          </div>
          <div className='text-gray-500'>
            <div className='whitespace-nowrap leading-[129%] text-ellipsis'>
              {aircraft}
            </div>
            <div className='mt-1.5 leading-5'>
              Class :
              <span className='text-gray-500 font-[475]'> {travelClass}</span>
            </div>
          </div>
        </div>
        {stopoverNoticeText && (
          <StopoverNotice noticeText={stopoverNoticeText} />
        )}
      </div>
    </div>
  );
};

export default BookingFlightInfoDetails;
