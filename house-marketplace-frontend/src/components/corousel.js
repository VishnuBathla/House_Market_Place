import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// const imageLinks =["https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UY436_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UY436_FMwebp_QL65_.jpg","https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg"]

export default function Carousel() {
  const navigate = useNavigate()
  const {corousel}= useSelector(state=>state.houses)

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
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
    <span>Recommended</span>
      <Slider {...settings} >
        {corousel.map((house) => (
          <div key={house.image[0]} style={{width:'100%'}} >
          <img style={{height:"40vh",objectFit:'contain',margin:'0 auto',cursor:'pointer'}} src={house.image[0]} alt="" onClick={()=>navigate(`/house/${house.id}`)}/>
          <span style={{position:"relative",left:'40%',background:'black',color:'white',padding:'1%',margin:'2%',borderRadius:'15px'}}>{house.name}</span>
          {/* <span>{house["regular price"]}</span> */}

        </div>
        ))}
      </Slider>
      </div>
    );
  }