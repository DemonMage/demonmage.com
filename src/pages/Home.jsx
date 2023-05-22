import PROFILE_PHOTO from "../assets/profilePhoto01.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <a href={PROFILE_PHOTO} target="_blank">
        <img src={PROFILE_PHOTO} />
      </a>
      <section>
        <p>
          Welcome! My name is Aaron and I'm a Software Engineer / Technical
          Support Engineer. The kitty riding my shoulder is Crateos (
          <a href="https://ddowiki.com/page/Crateos" target="_blank">
            a silly double reference
          </a>
          ), he's an American Shorthair. My hobbies include:
          <ul>
            <li>
              Video games especially RPGs like{" "}
              <a
                href="https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/"
                target="_blank"
              >
                Original Sin
              </a>{" "}
              or{" "}
              <a
                href="https://store.steampowered.com/bundle/379/Baldurs_Gate_The_Classic_Saga_Ultimate_Bundle/"
                target="_blank"
              >
                Baldur's Gate
              </a>
              !
            </li>
            <li>
              Fantasy & Sci-Fi Reading good examples are anything by{" "}
              <a href="https://djangowexler.com/" target="_blank">
                Django Wexler
              </a>
              ,{" "}
              <a href="https://rachelaaron.net/books.php" target="_blank">
                Rachel Aaron
              </a>
              ,{" "}
              <a href="https://nkjemisin.com/writing/" target="_blank">
                N.K. Jemisin
              </a>
            </li>
            <li>
              Roleplaying games such as Pathfinder 2E,{" "}
              <a
                href="https://sine-nomine-publishing.myshopify.com/"
                target="_blank"
              >
                Basically anything created by Kevin Crawford
              </a>
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
}
export default Home;
