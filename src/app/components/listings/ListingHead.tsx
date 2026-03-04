import useCountries from '@/app/hooks/useCountries';
import Heading from '../Heading';
import Image from 'next/image';

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
}

const ListingHead: React.FC<ListingHeadProps> = ({ title, locationValue, imageSrc }) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <Heading title={title} subtitle={`${location?.region},${location?.label}`} />

      <div className="relative z-0 h-[60vh] w-full overflow-hidden rounded-xl">
        <Image alt="image" fill src={imageSrc} className="w-full object-cover" />
      </div>
    </>
  );
};

export default ListingHead;
