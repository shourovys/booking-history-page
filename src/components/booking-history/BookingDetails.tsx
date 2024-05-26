import { bookingData } from '@/utils/data';
import React from 'react';
import BookingFlightInfoDetails from './BookingFlightInfoDetails';
import BookingFlightInfoHeader from './BookingFlightInfoHeader';
import BookingFlightSegmentDetails from './BookingFlightSegmentDetails';
import BookingHeader from './BookingHeader';

const BookingDetails: React.FC = () => {
  return (
    <section className='flex flex-col bg-white rounded-lg shadow-sm md:max-w-full overflow-hidden'>
      <BookingHeader {...bookingData.header} />
      <section className='flex flex-col p-4 bg-white rounded-lg md:max-w-full'>
        {bookingData.segments.map((segment, index) => (
          <React.Fragment key={index}>
            <BookingFlightInfoHeader {...segment.header} />
            {segment.segmentDetails && (
              <BookingFlightSegmentDetails {...segment.segmentDetails} />
            )}
            {segment.infoDetails && (
              <BookingFlightInfoDetails {...segment.infoDetails} />
            )}
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};

export default BookingDetails;
