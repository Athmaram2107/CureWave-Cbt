"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "/app/App.css";

const Testimonials = () => {
  return (
    <div className="py-12 h-[30rem] bg-[#F2E9E4]">
      <h2 className="text-center text-[#4A6650] mb-8 text-3xl font-heading">
        What Our Clients Say
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-4/5 m-auto"
      >
        <SwiperSlide>
          <div className="p-8 h-64 bg-[#D4E2D4] shadow-lg rounded-xl max-w-2xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <p className="text-lg text-[#333333] italic">
              "CureWave has been a life-saver for me. I struggled with severe
              anxiety, and it was impacting every aspect of my life, from work
              to relationships. The therapists here are incredibly understanding
              and took the time to really understand my situation. With their
              guidance, I've learned techniques that help me manage my anxiety
              effectively. The personalized approach they use made me feel
              heard, valued, and motivated to keep working on myself."
            </p>
            <div className="mt-6 text-right font-bold text-[#4A6650]">
              - Priya S., Client
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8 h-64 bg-[#D4E2D4] shadow-lg rounded-xl max-w-2xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <p className="text-lg text-[#333333] italic">
              "The platform’s ease of use, combined with the genuine care from
              the therapists, has made CureWave my go-to for mental wellness.
              From the first session, I felt understood, and my therapist made
              me feel comfortable sharing my experiences. Their patience and
              guidance have helped me identify triggers for my stress and manage
              it better."
            </p>
            <div className="mt-6  text-right font-bold text-[#4A6650]">
              - Amit K., Client
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8 h-64 bg-[#D4E2D4] shadow-lg rounded-xl max-w-2xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <p className="text-lg text-[#333333] italic">
              "At CureWave, I found a safe space to talk openly about my
              struggles with self-esteem. In every session, my therapist offers
              insightful perspectives that make me rethink my approach to
              challenges. They’ve helped me become more confident and
              self-assured, and I can now set healthy boundaries in my
              relationships. I highly recommend CureWave to anyone needing a
              boost in self-worth and mental strength."
            </p>
            <div className="mt-6 text-right font-bold text-[#4A6650]">
              - Sonia M., Client
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8 h-64 bg-[#D4E2D4] shadow-lg rounded-xl max-w-2xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <p className="text-lg text-[#333333] italic">
              "CureWave offers the perfect combination of professionalism and
              warmth. I've tried several therapists before, but none made me
              feel as comfortable and respected as the team here. My therapist
              has helped me work through long-standing issues that have affected
              my relationships. I have grown so much emotionally since starting
              my sessions, and my relationships are now more stable and
              fulfilling."
            </p>
            <div className="mt-6 text-right font-bold text-[#4A6650]">
              - Anjali R., Client
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8 h-64 bg-[#D4E2D4] shadow-lg rounded-xl max-w-2xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <p className="text-lg text-[#333333] italic">
              "This platform has been a blessing. I came to CureWave after
              experiencing years of unresolved trauma, and with the
              compassionate support of my therapist, I’m finally beginning to
              heal. I’ve learned to face life with a more positive outlook and
              am finding joy in everyday moments again. The sessions are
              well-organized, and I feel genuinely supported every step of the
              way."
            </p>
            <div className="mt-6 text-right font-bold text-[#4A6650]">
              - Sunita B., Client
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8 h-64 bg-[#D4E2D4] shadow-lg rounded-xl max-w-2xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <p className="text-lg text-[#333333] italic">
              "What I love about CureWave is that they approach mental health
              holistically. Beyond the therapy sessions, I’ve benefited from
              additional resources like guided mindfulness exercises and
              educational materials that my therapist recommended. This holistic
              support has been essential to my recovery journey, I felt
              connected with the resources and tips they shared alongside
              therapy, which have given me both hope and motivation."
            </p>
            <div className="mt-6 text-right font-bold text-[#4A6650]">
              - Karan T., Client
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
