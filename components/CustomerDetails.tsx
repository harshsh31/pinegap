import { Customer } from "@/types/types";
import { getRandomNumber } from "@/utils/utils";
import { useState, useEffect } from "react";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    const res = await fetch(
      `https://picsum.photos/v2/list?page=${getRandomNumber()}&limit=9`
    );
    const data = await res.json();
    setPhotos(data.map((photo: any) => photo.download_url));
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, [customer]);

  return (
    <>
      <h2 className="text-2xl font-bold mb-2">{customer.name}</h2>
      <h4 className="text-xl mb-4">{customer.title}</h4>
      <p className="text-lg mb-2">{customer.description}</p>
      <p className="mb-6">{customer.address}</p>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index}`}
            className="w-32 h-32 object-cover rounded-lg" // Tailwind classes for fixed size and object-fit
          />
        ))}
      </div>
    </>
  );
};

export default CustomerDetails;
