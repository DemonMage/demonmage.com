import PROFILE_PHOTO from "../assets/profilePhoto01.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img src={PROFILE_PHOTO} />
      <section>
        <p>
          Welcome! My name is Aaron and I'm a Software Engineer / Technical
          Support Engineer. The kitty riding my shoulder is Crateos{" "}
          <a href="https://ddowiki.com/page/Crateos" target="_blank">
            (a silly double reference)
          </a>
          , an American Shorthair.
        </p>
      </section>
    </div>
  );
}
export default Home;
