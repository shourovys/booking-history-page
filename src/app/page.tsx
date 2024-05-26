import BookingDetails from '@/components/booking-history/BookingDetails';
import Breadcrumb, { BreadcrumbItem } from '@/components/common/Breadcrumb';

export default function BookingHistory() {
  const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Booking History', href: '#' },
    { label: 'Flight', href: '#' },
    { label: 'STFL17121182045413' },
  ] as const;

  return (
    <section className=''>
      <Breadcrumb items={BREADCRUMB_ITEMS} />
      <BookingDetails />
    </section>
  );
}
