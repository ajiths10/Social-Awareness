import React from "react";
import Posts from "./posts";
import "./posts.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PostPopup from "./PostPopup";

const Home = () => {
  const arrayValue = [
    {
      avatar: "A",
      username: "Test User",
      date: "August 03, 2022",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUFxTQ4fthAGfYTVUaD7vLmSafKSEuaUOJlEndeelZYYn5wRl64W09jbin6nHfPCpwTk&usqp=CAU",
      typo1:
        "when students attempt to resolve a conflict between themselves (relationship skills), the process is made easier when both are able to empathize with each other (social awareness).",
      typo2:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      typo3:
        "Set aside off of the heat to let rest for 10 minutes, and then serve.",
    },
    {
      avatar: "S",
      username: "Test User 02",
      date: "June 12, 2022",
      imageUrl:
        "https://3.imimg.com/data3/HK/ES/MY-8916040/social-awareness-500x500.png",
      typo1:
        "Social awareness, or socialization, is an important skill for kids to develop in order to build positive relationships and make responsible decisions. In addition to improving relationships and communication skills, social awareness is also important for our own emotional well-being",
      typo2:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      typo3:
        "Set aside off of the heat to let rest for 10 minutes, and then serve.",
    },
    {
      avatar: "V",
      username: "Test User 03",
      date: "August 2, 2022",
      imageUrl:
        "https://i0.wp.com/www.thesocialemotionalteacher.com/wp-content/uploads/2021/04/Slide19-1.jpeg?fit=800%2C800&ssl=1",
      typo1:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like",
      typo2:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      typo3:
        "Set aside off of the heat to let rest for 10 minutes, and then serve.",
    },
    {
      avatar: "T",
      username: "Test User 04",
      date: "july 28, 2022",
      imageUrl:
        "https://lifeskillscollaborative.in/wp-content/uploads/2013/09/Group-134.png",
      typo1:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like",
      typo2:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      typo3:
        "Set aside off of the heat to let rest for 10 minutes, and then serve.",
    },
  ];

  const readMoreHandler = (e) => {
    e.preventDefault();
    let link = document.createElement("a");
    link.href =
      "https://www.google.com/search?q=social+awareness+news&rlz=1C5CHFA_enAU969AU969&sxsrf=ALiCzsZIFPk9Rfyb5kZ2BCnzwJr-XHn-ig:1658558267552&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjJr4GDs475AhVW2DgGHVveCRIQ_AUoA3oECAEQBQ&biw=1920&bih=944&dpr=1";
    link.target = "_blank";
    link.click();
  };

  return (
    <>
      <div className="body-main-container">
        <div className="post-main-container">
          <h1>Social Awareness</h1>
          <div className="post-sub-container">
            {arrayValue.map((buscat, index) => {
              return <Posts data={buscat} key={index} />;
            })}
          </div>
        </div>
        <div>
          <div className="post-subside-main-container">
            <div className="post-subside-container">
              <div>
                <span>
                  <h4>
                    <DoneAllIcon color="success" /> Raise Your Voice
                  </h4>
                </span>
                <span>
                  <h4>
                    <DoneAllIcon color="success" /> Stop Discrimination
                  </h4>
                </span>
                <span>
                  <h4>
                    <DoneAllIcon color="success" /> Aware People
                  </h4>
                </span>
              </div>
            </div>

            <div className="post-subside-container">
              <div className="post-subside-two-container">
                <h4>A Cause for change</h4>
              </div>
              <div className="readmore-container">
                <button onClick={readMoreHandler} className="readmore-button">
                  Read more
                </button>
              </div>
            </div>
            <div className="post-subside-container">
              <div className="post-subside-two-container">
                <h4>About US</h4>
              </div>
              <div className="readmore-container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  soluta perferendis eius iusto vel illo repellat ducimus,
                  aperiam doloribus. Dolores sequi culpa minima quam nobis
                  repudiandae omnis tempore excepturi. Tenetur!
                </p>
              </div>
            </div>
            <div className="post-subside-container">
              <div className="post-subside-two-container">
                <h4>Get In Touch</h4>
              </div>
              <div className="readmore-container">
                <p>
                  Please contact us through email or phone number for further
                  information and queries.
                </p>
                <p>Call: 012 345 6789 </p>
                <p>E-mail: Example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostPopup />
    </>
  );
};

export default Home;
