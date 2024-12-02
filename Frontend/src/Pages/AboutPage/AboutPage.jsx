import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Video1 from "../../assets/Bg_Video1.mp4";
import Bg1 from "../../assets/images/Bg2.jpeg";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full p-2 text-2xl"
    onClick={onClick}
  >
   <BsFillArrowRightCircleFill/>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-[-60px]  top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full p-2 text-2xl"
    onClick={onClick}
  >
    <BsFillArrowLeftCircleFill/>
  </button>
);

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white container mx-auto my-6 text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-top mt-14 bg-no-repeat" style={{ backgroundImage: `url(${Bg1})` }}>
        <div className="bg-black bg-opacity-50 h-full py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">About Our Store</h1>
          <p className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto">
            Discover premium men's fashion, designed with quality and sophistication.
          </p>
          <button className="mt-8 bg-yellow-500 px-6 py-2 text-lg font-semibold rounded-lg hover:bg-yellow-600 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 text-black px-4 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg text-black max-w-3xl mx-auto mb-8">
          We are a modern men's fashion store offering premium quality apparel tailored for today's man. Our mission is to blend comfort, style, and affordability in every piece we offer.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-8 cursor-pointer">
          <div className="bg-gray-100 p-6 hover:bg-blue-gray-400 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-black mb-2">Quality Fabrics</h3>
            <p className='text-black'>Every piece is crafted from high-quality fabrics, ensuring both durability and comfort.</p>
          </div>
          <div className="bg-gray-100 text-black hover:bg-blue-gray-400 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-black mb-2">Modern Designs</h3>
            <p className='text-black'>Stay in trend with our latest collections, curated to bring out your best style.</p>
          </div>
          <div className="bg-gray-100 text-black hover:bg-blue-gray-400 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-black mb-2">Affordable Prices</h3>
            <p className='text-black'>Enjoy luxury without breaking the bank. Our prices are set to provide the best value.</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Explore Our Collection</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Take a closer look at our carefully crafted pieces and discover what makes us unique.
        </p>
        <div className="flex justify-center w-full">
          <video className="w-full rounded-lg shadow-lg" autoPlay controls>
            <source src={Video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Customer Testimonials Slider */}
      <div className="w-2/3 m-auto mb-20">
        <div className="mt-12">
          <h1 className="text-4xl text-center font-bold mb-12 text-black">Customer Reviews</h1>
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="h-[450px] text-black rounded-xl">
                <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt={d.name} className="h-44 w-44 rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-900 text-center mb-0 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Style?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Discover our collection and find the perfect pieces to enhance your wardrobe. Shop now for quality, style, and affordability.
        </p>
        <button className="bg-yellow-500 px-8 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-600 transition">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default About;
