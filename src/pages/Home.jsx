import PROFILE_PHOTO from "../assets/profilePhoto01.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="header-image">
        <a href={PROFILE_PHOTO} target="_blank">
          <img src={PROFILE_PHOTO} />
        </a>
      </div>
      <section>
        <p>
          Welcome! My name is Aaron and I'm a Software Engineer / Technical
          Support Engineer. The kitty riding my shoulder is Crateos (
          <a href="https://ddowiki.com/page/Crateos" target="_blank">
            a silly double reference
          </a>
          ), he's an American Shorthair. My hobbies include:
        </p>
        <ul>
          <li>
            Videos Games: Especially RPGs like{" "}
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
            Fantasy & Sci-Fi Reading: Good examples are anything by{" "}
            <a href="https://djangowexler.com/" target="_blank">
              Django Wexler
            </a>
            ,{" "}
            <a href="https://rachelaaron.net/books.php" target="_blank">
              Rachel Aaron
            </a>
            , or{" "}
            <a href="https://nkjemisin.com/writing/" target="_blank">
              N.K. Jemisin
            </a>
          </li>
          <li>
            Roleplaying Games: Such as{" "}
            <a href="https://paizo.com/pathfinder" target="_blank">
              Pathfinder 2E
            </a>{" "}
            or basically anything created by{" "}
            <a
              href="https://sine-nomine-publishing.myshopify.com/"
              target="_blank"
            >
              Kevin Crawford
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Home;
