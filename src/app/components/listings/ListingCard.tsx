'use client';

import { useRouter } from 'next/navigation';

import { useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import Button from '../Button';
import { SafeListing, SafeReservation, SafeUser } from '@/app/types';
import HeartButton from '../HeartButton';
import useCountries from '@/app/hooks/useCountries';

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;

      onAction?.(actionId);
    },
    [onAction, actionId, disabled],
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) return null;

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, 'PP')} - ${format(end, 'PP')}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="group col-span-1 cursor-pointer"
    >
      <div className="z-0 flex w-full flex-col gap-2">
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            fill
            alt="listing"
            src={data.imageSrc}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute right-3 top-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>

        {/* Location */}
        <div className="line-clamp-2 text-base font-semibold leading-snug text-gray-900">
          {data.title}
        </div>
        {/* Category or Date */}
        <div className="font-light text-neutral-600">{reservationDate || data.category}</div>

        {/* Price */}
        <div className="flex flex-row items-center gap-1">
          <div className="font-bold text-gray-900">₹ {price.toLocaleString('en-IN')}</div>
          {!reservation && <div className="font-light text-gray-600">night</div>}
        </div>

        {/* Button */}
        {onAction && actionLabel && (
          <Button disabled={disabled} small label={actionLabel} onClick={handleCancel} />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
