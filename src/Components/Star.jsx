import { FaStar } from "react-icons/fa";
import { useState } from "react";




function Star({stars}) {
  
    const [reating, setReating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentValue) => {
        setReating(getCurrentValue);
    };
    const handleMouseMove = (getCurrentValue) => {
        setHover(getCurrentValue);
        // console.log(getCurrentValue)
    };
    const handleMouseLeave = () => {
      setHover(reating);

    };

    const handleBtn = () =>{
      console.log("is working")
      window.location.reload()
    }


    return (
      <>
        <div className="flex justify-center items-center  w-full h-40">
            {[...Array(stars)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        key={index}
                        className={
                            index <= (reating || hover) ? "active text-yellow-400" : "inActive text-black"
                        }
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                    />
                    
                );
            })}
            
        </div>
        <div>
        <button type="button"
            onClick={() => handleBtn()}
            className="p-2 bg-blue-400 hover:bg-blue-600 mx-auto flex rounded-xl"
            >Forget</button>
        </div>
        </>
    );
}

export default Star;


