import React from "react";
import img1 from "../../public/assets/images/product1.png";
import img2 from "../../public/assets/images/product2.png";
import img3 from "../../public/assets/images/product3.png";
import img4 from "../../public/assets/images/product4.png";
import img5 from "../../public/assets/images/product5.png";
import img6 from "../../public/assets/images/product6.png";
import img7 from "../../public/assets/images/product7.png";
import img8 from "../../public/assets/images/product8.png";
import img9 from "../../public/assets/images/product9.png";
import img10 from "../../public/assets/images/product10.png";

const Products3D = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore our products below or reach out to us in the chat for more
            help on choosing{" "}
          </h1>
        </div>

        <div className="images">
          <div className="box">
            {images.map((image, index) => (
              <span key={index} style={{ "--i": index + 1 }}>
                <img src={image} alt={`Image ${index + 1}`} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products3D;
