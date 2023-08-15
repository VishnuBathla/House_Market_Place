import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function renderSlide(imageLink) {
    return (
      <div key={imageLink}>
        <img style={{height:"40vh",objectFit:'contain',margin:'0 auto'}} src={imageLink} alt="" />
      </div>
    );
  }
export default function Carousel({images}) {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };
  
    function CustomPrevArrow(props) {
      const { onClick } = props;
      return (
        <div style={{zIndex:1,position:'absolute',top:"20vh",cursor:'pointer'}} onClick={onClick}>Previous</div>
      );
    }
  
    function CustomNextArrow(props) {
      const { onClick } = props;
      return (
        <div style={{zIndex:1,position:'absolute',top:"20vh",right:0,cursor:'pointer'}} onClick={onClick}>
          Next
        </div>
      );
    }
  
    return (
    <div style={{width:"90%",margin:'0 auto',textAlign:'left',fontWeight:'bolder'}}>
          {/* {console.log(corousel)} */}
      <Slider {...settings} >
        {images.map((image) => renderSlide(image))}
      </Slider>
      </div>
    );
  }