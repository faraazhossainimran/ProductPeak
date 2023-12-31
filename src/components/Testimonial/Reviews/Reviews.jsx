import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
const Reviews = ({ reviews }) => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews ? (
          <>
            {reviews.length === 0 ? (
              <p></p>
            ) : (
              <>
                {reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-center py-6 bg-stone-100 my-6">
                      <div className="avatar">
                        <div className="w-24 rounded-full mt-6">
                          <img
                            src={
                              review?.userImage ||
                              "https://i.ibb.co/gTS38Db/alex-knight-2-EJCSULRw-C8-unsplash.jpg"
                            }
                            alt={`Avatar of ${review?.reviewFrom}`}
                          />
                        </div>
                      </div>
                      <h2 className="text-2xl">{review?.reviewFrom}</h2>
                      <h2 className="text-xl mt-2">{review?.reviewText}</h2>
                    </div>
                  </SwiperSlide>
                ))}
              </>
            )}
          </>
        ) : (
          <button className="btn mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            No Reviews has been given
            <div className="badge">0</div>
          </button>
        )}
      </Swiper>
    </>
  );
};

export default Reviews;
