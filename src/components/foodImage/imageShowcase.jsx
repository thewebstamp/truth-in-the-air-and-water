import "./imageShowcase.css";
import images from "../../assets/images";

const ImageShowcase = ({imgShow1, imgShow2}) => {
  return (
    <section className="image-showcase-section">
      <div className="image-container">
        <img src={imgShow1} alt="" />
        <img src={imgShow2} alt="" />
      </div>
    </section>
  );
};

export default ImageShowcase;
