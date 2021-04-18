import Sidenews from "./Sidenews";

export default function Breakingnews() {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="trending-top mb-30">
          <h2>Breaking News</h2>
          <div className="trend-top-img">
            <img
              src="https://preview.colorlib.com/theme/aznews/assets/img/trending/trending_top.jpg"
              alt=""
            />
            <div className="trend-top-cap">
              <h2>
                <a href="details.html">
                  Welcome To The Best Model Winner Contest At Look of the year
                </a>
              </h2>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>
        </div>
        <h3 className="trending-title">Trending News</h3>
        <div className="trending-bottom">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-bottom mb-35">
                <div className="trend-bottom-img mb-30">
                  <img src="assets/img/trending/trending_bottom1.jpg" alt="" />
                </div>
                <div className="trend-bottom-cap">
                  <span className="color1">Lifestyple</span>
                  <h4>
                    <a href="details.html">
                      Get the Illusion of Fuller Lashes by “Mascng.”
                    </a>
                  </h4>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                  <p>
                    <a href="#">Read more</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-bottom mb-35">
                <div className="trend-bottom-img mb-30">
                  <img src="assets/img/trending/trending_bottom2.jpg" alt="" />
                </div>
                <div className="trend-bottom-cap">
                  <span className="color2">Sports</span>

                  <h4>
                    <a href="details.html">
                      Get the Illusion of Fuller Lashes by “Mascng.”
                    </a>
                  </h4>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                  <p>
                    <a href="#">Read more</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-bottom mb-35">
                <div className="trend-bottom-img mb-30">
                  <img src="assets/img/trending/trending_bottom3.jpg" alt="" />
                </div>
                <div className="trend-bottom-cap">
                  <span className="color3">Travels</span>
                  <h4>
                    <a href="details.html">
                      {" "}
                      Welcome To The Best Model Winner Contest
                    </a>
                  </h4>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                  <p>
                    <a href="#">Read more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidenews />
    </div>
  );
}
