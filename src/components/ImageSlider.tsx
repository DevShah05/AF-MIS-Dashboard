import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface ImageSliderProps {
  filters: {
    [key: string]: string;
  };
}

interface Slide {
  title: string;
  preImage: string;
  postImage: string;
}

const dummySlides: Slide[] = [
  {
    title: 'New Classroom Construction - Damodar',
    preImage: 'https://via.placeholder.com/400x250?text=Pre+Activity',
    postImage: 'https://via.placeholder.com/400x250?text=Post+Activity',
  },
  {
    title: 'Toilet Construction - Bargarh',
    preImage: 'https://via.placeholder.com/400x250?text=Pre+Activity',
    postImage: 'https://via.placeholder.com/400x250?text=Post+Activity',
  },
  {
    title: 'Smart Class Development - Wadi',
    preImage: 'https://via.placeholder.com/400x250?text=Pre+Activity',
    postImage: 'https://via.placeholder.com/400x250?text=Post+Activity',
  },
];

const ImageSlider: React.FC<ImageSliderProps> = ({ filters }) => {
  // Optional: Add filtering logic here using filters if needed in the future
  console.log(filters); // 🛠️ Avoids TypeScript unused prop warning for now

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-[#6B1E82] mb-4">Pre/Post Activity Images</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
      >
        {dummySlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="text-center">
              <h3 className="text-md font-semibold mb-3">{slide.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div>
                  <img
                    src={slide.preImage}
                    alt="Pre Activity"
                    className="rounded-lg w-full"
                  />
                  <p className="mt-2 text-sm text-gray-600">Pre Activity</p>
                </div>
                <div>
                  <img
                    src={slide.postImage}
                    alt="Post Activity"
                    className="rounded-lg w-full"
                  />
                  <p className="mt-2 text-sm text-gray-600">Post Activity</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
