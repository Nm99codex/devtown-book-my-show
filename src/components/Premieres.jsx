import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Slider from "react-slick"

const LargeTabs = (props) => {
  return (
    <>
      <div className="hidden lg:block w-3/4 h-3/4 px-9">
        <div className="w-full h-96">
          <img src={props.image}  className="w-full h-full" />
        </div>
        <div className=" space-x-2 text-lg font-bold text-center items-center align-middle">
            {props.title}          
        </div>
      </div>
    </>
  );
};

function SmallTabs(props)
{
  return (
    <>
      <div className="lg:hidden flex flex-wrap space-x-1">
        <div >
          <img src={props.image}/>
        </div>
        <div className="flex justify-between space-x-2 text-md font-bold">
          <div className="hidden lg:flex">
            {props.title}
          </div>
          
        </div>
      </div>
    </>
  )
}

function Premieres(props) {
  return (
    <>
      <div className="text-white">
        <LargeTabs {...props} />
        <SmallTabs {...props} />
      </div>
    </>
  );
}

export default Premieres;
