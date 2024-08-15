import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
		navigation: true,
        autoplay: {
            delay: 8500,
            disableOnInteraction: false,
        },
        loop: true
    };
const Testimonial2 = () => {
    return (
        <>
        <section className="testimonial-section-two">
            <div className="auto-container">
                <div className="testimonials">
                    <div className="swiper-container testimonial-content">
						<Swiper {...swiperOptions}>
							<SwiperSlide className="swiper-slide">
								<div className="testimonial-block-two">
									<div className="row">
										<div className="image-column col-lg-6 col-md-12">
											<figure className="image"><img src="/images/resource/testimonial-2-1.png" alt=""/></figure>
										</div>
										<div className="content-column col-lg-6 col-md-12">
											<span className="icon icon-quote"></span>
											<div className="text">I recently had the pleasure of experiencing great logistics support from <span>LogiSend</span>. From the moment I reached out to their customer service team, I was impressed by their knowledge, professionalism, and willingness to assist.</div>
											<div className="info-box">
												<h4 className="name">Daniel Kobra</h4>
												<div className="designation">Manager at <span>Logisfare</span></div>
												<div className="testimonial-pagination"></div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="swiper-slide">
								<div className="testimonial-block-two">
									<div className="row">
										<div className="image-column col-lg-6 col-md-12">
											<figure className="image"><img src="/images/resource/testimonial-2-1.png" alt=""/></figure>
										</div>
										<div className="content-column col-lg-6 col-md-12">
											<span className="icon icon-quote"></span>
											<div className="text">I recently had the pleasure of experiencing great logistics support from <span>LogiSend</span>. From the moment I reached out to their customer service team, I was impressed by their knowledge, professionalism, and willingness to assist.</div>
											<div className="info-box">
												<h4 className="name">Daniel Kobra</h4>
												<div className="designation">Manager at <span>Logisfare</span></div>
												<div className="testimonial-pagination"></div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
                	</div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Testimonial2