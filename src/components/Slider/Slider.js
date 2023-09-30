import React from 'react';
import { useRef } from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './Slider.css';
export default function Slider() {
    const scrollToBookList = () => {
        window.scrollTo(0, 800);
    };
    return (
        <div className='slider'>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://images.toplist.vn/images/800px/doc-sach-bao-phong-ngua-dang-tri-o-nguoi-gia-884726.jpg'
                    alt='...'
                >
                    <h5 className='slider_title'>Choose Your Book!</h5>
                    <p className='slider_content'>Find Books for <br /> All Ages!</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://toplist.vn/images/800px/quan-cafe-sach-dep-nhat-danh-cho-mot-sach-o-ha-noi-236756.jpg'
                    alt='...'
                >
                    <h5 className='slider_title'>Choose Your Book!</h5>
                    <p className='slider_content'>Books that Really <br /> Matter</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://nhahangso.cdn.vccloud.vn/wp-content/uploads/2022/12/xac-dinh-khach-hang-muc-tieu-cua-quan-cafe-sach.webp'
                    alt='...'
                >
                    <h5 className='slider_title'>Choose Your Book!</h5>
                    <p className='slider_content'>Meet Favorite <br /> Authors</p>
                </MDBCarouselItem>
            </MDBCarousel>
            {/* <button onClick={scrollToBookList} className='btn_discover'>
                DISCOVER YOUR NEXT BOOK
            </button> */}

        </div>




    );
}