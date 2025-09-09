'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingProps {
  value?: number; // nilai default
  onChange?: (value: number) => void;
}

const Rating: React.FC<RatingProps> = ({ value = 0, onChange }) => {
  const [rating, setRating] = useState<number>(value);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="focus:outline-none"
          onClick={() => {
            setRating(star);
            onChange && onChange(star);
          }}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          <FaStar
            size={20}
            className={`transition-colors duration-200 ${
              star <= (hover || rating) ? 'text-yellow-400' : 'text-blue-900 opacity-20'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default Rating;