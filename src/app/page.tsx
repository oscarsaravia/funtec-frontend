"use client";
import { ReviewCard } from "@/components/review/ReviewCard";
import { Navbar } from "../components/navbar/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Formik, Form, Field, FormikHelpers } from 'formik';

type Review = {
  _id:       string;
  stars:     string;
  review:    string;
  name:      string;
  role:      string;
  image:     string;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
}

interface Values {
  name: string;
  email: string;
  department: string;
  time: string;
}

export default function Home() {

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetchReviews();
  }, [])

  const fetchReviews = async() => {
    const { data, status } = await axios.get<Review[]>(
      "http://localhost:5001/review/"
    )

    setReviews(data);
  }

  const validateForm = (values: Values) => {
    const errors = {
      name: "",
      email: "",
    };
    if (values.name === "") {
      errors.name = "Required";
    }
    else if (values.email === "") {
      errors.email = "Required";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }

  const onAppointmentSubmit = async(values: any) => {
    console.log(values);
    await axios.post(
      "http://localhost:5001/appointment/create/",
      values
    )
  }

  return (
    <>
      <div className="xl:h-[823px] h-[1350px] w-screen max-w-screen bg-hero-pattern bg-cover bg-no-repeat">
        <Navbar />
        <div className="home-content relative left-1/2 -translate-x-1/2 flex flex-col xl:flex-row justify-between items-center max-w-[1050px] mt-[50px]">
          <div className="left-part text-center xl:text-left max-w-[693px] flex-col items-center  flex xl:block">
            <h1 className="xl:font-black font-bold leading-[50px] text-[40px] xl:leading-[65px] mb-9 text-primary-blue text-4xl xl:text-6xl max-w-[95vw]">Help to reclaim your life and freedom</h1>
            <h4 className="mb-9 flex font-medium text-xl leading-[30px] max-w-[95vw] xl:w-[539px] text-gray-text">We know how large objects will act, but things on a small scale.</h4>
            <div className="buttons flex flex-col gap-[20px] mb-[80px] xl:mb-[0px] xl:block">
              <button className="bg-[#784F33] w-[182px] text-center leading-[28px] py-3 text-white rounded-[37px] text-[14px] font-bold">Get Quote Now</button>
              <button className="w-[155px] bg-transparent text-center border-2 border-solid border-[#784F33] text-[#784F33] py-3 rounded-[37px] ml-3">Learn More</button>
            </div>
          </div>
          <div className="right-part">
            <div className="form-div bg-white h-[619px] w-[330px] rounded py-10 px-12 flex flex-col">
              <h3 className="text-primary-blue font-bold text-2xl text-center mb-10">Book Appointment</h3>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  department: '',
                  time: '',
                }}
                onSubmit={(
                  values: Values,
                  { setSubmitting }: FormikHelpers<Values>
                ) => {
                  onAppointmentSubmit(values);
                  setSubmitting(false);
                }}
                // validate={validateForm}
              >
                <Form>
                  <label htmlFor="nombre" className="font-bold text-sm mb-[10px]">Name*</label>
                  <Field type="text" name="name" placeholder="Full Name" className="font-montserrat w-[245px] placeholder-[#737373] mb-3 h-[50px] border-[1px] border-[#BDBDBD] bg-[#F9F9F9] py-3 px-5 rounded-[5px]"></Field>
                  <label htmlFor="email" className="font-bold text-sm mb-[10px]">Email*</label>
                  <Field type="email" name="email" placeholder="example@gmail.com" className="font-montserrat w-[245px] placeholder-[#737373] mb-3 h-[50px] border-[1px] border-[#BDBDBD] bg-[#F9F9F9] py-3 px-5 rounded-[5px]"></Field>
                  <label htmlFor="department" className="font-bold text-sm mb-[10px]">Department*</label>
                  <Field as="select" name="department" className="w-[245px] text-[#737373] mb-3 h-[50px] border-[1px] border-[#BDBDBD] bg-[#F9F9F9] py-3 px-5 rounded-[5px] font-montserrat">
                  <option value="op1">Option 1</option>
                  <option value="op2">Option 2</option>
                  <option value="op3">Option 3</option>
                  <option value="op4">Option 4</option>
                  </Field>
                  <label htmlFor="time" className="font-bold text-sm mb-[10px]">Time*</label>
                  <Field as="select" name="time" className="w-[245px] text-[#737373] mb-10 h-[50px] border-[1px] border-[#BDBDBD] bg-[#F9F9F9] py-3 px-5 rounded-[5px] font-montserrat">
                    <option value="op1">4:00 Available</option>
                    <option value="op2">Option 2</option>
                    <option value="op3">Option 3</option>
                    <option value="op4">Option 4</option>
                  </Field>
                  <button type="submit" className="leading-[28px] py-[15px] px-[56.5px] w-[248px] rounded-md text-[0.870rem] font-bold bg-[#295C7A] text-white">Book Appointment</button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* Reseñas */}
      <div className="h-[591px]">
        <div className="clients-text relative left-1/2 -translate-x-1/2 justify-center items-center flex flex-col mt-[80px]">
          <h2 className="font-bold text-[40px] text-primary-blue max-w-[63vw] text-center xl:text-left xl:max-w-[95vw]">What Clients Say</h2>
          <p className="text-gray-text text-sm font-normal max-w-[90vw]font-open-sans w-[60vw] xl:w-[431px] text-center mt-[10px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
        <div className="relative ml-[20px] max-h-[1050px] left-1/2 -translate-x-1/2 justify-center items-center flex flex-row mt-[80px] gap-[30px]">
          {/* <ReviewCard />
          <ReviewCard />
          <ReviewCard /> */}
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
            width={1050}
            breakpoints={{
              1120: {
                slidesPerView: 2,
              },
              1280: {
                // width: 576,
                slidesPerView: 3,
              },
            }}
          >
            {
              reviews?.map((review) => {
                return (
                  <SwiperSlide key={review._id}>
                    <ReviewCard 
                      stars={review.stars}
                      review={review.review}
                      name={review.name}
                      role={review.role}
                      image={review.image}
                    />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}