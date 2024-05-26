export const bookingData = {
  header: {
    stepNumber: 1,
    routeFrom: 'DAC',
    routeTo: 'JFK',
    tripType: 'Round Trip',
    dates: '25 Mar - 4 Apr 2023',
    stops: '1 Stop',
    totalDuration: '33h 20m',
  },
  segments: [
    {
      header: {
        iconSrc: '/image/gray_location.svg',
        type: 'departure',
        location: 'Dhaka',
        terminal: 'Terminal 1',
        airport: 'Hazrat Shahjalal International Airport',
      },
      segmentDetails: {
        route: 'DAC - DXB',
        duration: '12 hr 20 min',
        departureTime: '07:30 PM',
        departureDate: '28 Mar, Friday',
        arrivalTime: '08:50 AM',
        arrivalDate: '29 Mar, Saturday',
        iconSrc: '/image/name.svg',
      },
      infoDetails: {
        airline: 'Turkish Airlines',
        flightNumber: 'TUR467',
        aircraft: 'Airbus Industrie 737-800-738',
        travelClass: 'ECONOMY-Y (O)',
        stopoverNoticeText:
          'Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality',
      },
    },
    {
      header: {
        iconSrc: '/image/gray_location.svg',
        type: 'layover',
        location: 'Dubai: 12 hr 20 min ',
        terminal: '',
        airport: 'Dubai International Airport',
      },
      segmentDetails: {
        route: 'DXB - JFK',
        duration: '14 hr 10 min',
        departureTime: '10:00 AM',
        departureDate: '29 Mar, Saturday',
        arrivalTime: '01:10 PM',
        arrivalDate: '29 Mar, Saturday',
        iconSrc: '/image/name.svg',
      },
      infoDetails: {
        airline: 'Turkish Airlines',
        flightNumber: 'TUR468',
        aircraft: 'Airbus Industrie 777-300ER',
        travelClass: 'ECONOMY-Y (O)',
      },
    },
    {
      header: {
        iconSrc: '/image/blue_location.svg',
        type: 'departure',
        location: 'New York',
        terminal: 'Terminal 4',
        airport: 'John F Kennedy International Airport',
      },
    },
  ],
};
