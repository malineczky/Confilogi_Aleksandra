import chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";
import opera from "../assets/logo-opera.svg";
import dots from "../assets/bg-dots.svg";

function HomeDowlonadExtension() {
  return (
    <>
      <div className="extensions">
        <div className="extensions__single extensions__single--one">
          <img src={chrome} alt="" className="extensions__icon" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 62</p>
          <img src={dots} alt="" className="extensions__single--dots" />
          <button className="extensions__btn btn blue__button">
            Add & Install Extension
          </button>
        </div>
        <div className="extensions__single extensions__single--two">
          <img src={firefox} alt="" className="extensions__icon" />
          <h3>Add to Firefox</h3>
          <p>Minimum version 62</p>
          <img src={dots} alt="" className="extensions__single--dots" />
          <button className="extensions__btn btn blue__button">
            Add & Install Extension
          </button>
        </div>
        <div className="extensions__single extensions__single--three">
          <img src={opera} alt="" className="extensions__icon" />
          <h3>Add to Opera</h3>
          <p>Minimum version 62</p>
          <img src={dots} alt="" className="extensions__single--dots" />
          <button className="extensions__btn btn blue__button">
            Add & Install Extension
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeDowlonadExtension;
