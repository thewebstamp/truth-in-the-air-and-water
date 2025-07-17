import './imageCollage.css';

function ImageCollage({iCClass1, iCClass2, iCImg1, iCImg2}) {
    return (
        <div className="image-collage">
            <img className={iCClass1} src={iCImg1} alt="" />
            <img className={iCClass2} src={iCImg2} alt="" />
            <img className='collage-height' src={iCImg2} alt="" />
        </div>
    )
};

export default ImageCollage;