import profilePic from "../../assets/profile_pic.webp";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1">
        <div className="max-w-md mx-auto px-8 py-16">
          <div className="text-center space-y-12">
            <div
              className="space-y-4 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src={profilePic}
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto grayscale"
              />
              <div>
                <h1 className="text-2xl font-light text-gray-900">j0_dev</h1>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                Hi👋🏻, I'm a developer, Dev Tools and UI/UX enthusiast, and a
                YouTuber.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-light text-gray-900">Connect</h2>
              <div className="space-y-2">
                <div>
                  <a
                    href="https://github.com/Jayesh-11"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/@jayesh_dev"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    YouTube
                  </a>
                </div>
                <div>
                  <a
                    href="https://x.com/j0_dev"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Twitter
                  </a>
                </div>
                <div>
                  <a
                    href="#WHILE_FROM_WEB_DEV_STAND_POINT_ITS_A_REALLY_GOOD_PRODUCT_ITS_A_PILE_OF_SHIT_WHEN_IT_COMES_TO_WHOEVER_THE_FUCK_MANAGES_PRODUCT_ITS_A_SHIT_PRODUCT_I_GET_A_HEADACHE_SEEING_WHAT_PEOPLE_POST_THERE"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    title="I would redirect to linkedIn, but I hate LinkedIn, to the very core of my being"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-8 border-t border-gray-100">
        <p className="text-xs text-gray-400">v0.0.1</p>
      </footer>
    </div>
  );
};

export default Home;
