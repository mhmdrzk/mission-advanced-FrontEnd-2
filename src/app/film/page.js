import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

const film = () => {
  const genres = [
    "Alur",
    "Aku-suka",
    "Anime",
    "Klasik",
    "Drama",
    "Fantasik",
    "Film",
    "Horror",
    "Komedi",
    "Romance",
    "Sci-Fi & Anim",
    "K-Drama",
    "Komedik",
    "Pencarian",
    "Romantis",
    "Sains & Alam",
  ];

  const handleGenreSelect = (selectedGenre) => {
    console.log("Selected Genre:", selectedGenre);
  };
  return (
    <div>
      <Header />

      <Banner
        imageSrc="/img/banner-3.png"
        imageAlt="Sci-Fi Banner"
        title="The Galactic Frontier"
        description="Petualangan melintasi bintang demi mengungkap misteri semesta."
        genres={genres}
        showGenreDropdown={true}
      />

      <section className="mt-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl   font-bold text-white">
          Melanjutkan Tonton Film
        </h2>
        <Carousel
          category="continueWacth"
          isSingleOnMobile={true}
          showAddButton={false}
        />
      </section>

      <section className="mt-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl  font-bold text-white">
          Film persebahan Chill
        </h2>
        <Carousel category="trendingFilm" />
      </section>

      <section className="mt-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl  font-bold text-white">
          Top Rating Film Hari ini
        </h2>
        <Carousel category="topRatingFilm" />
      </section>

      <section className="mt-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl   font-bold text-white">
          Film Trending
        </h2>
        <Carousel category="trendingFilm" />
      </section>

      <section className="mt-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl   font-bold text-white">
          Rilis Baru
        </h2>
        <Carousel category="newFilm" />
      </section>

      <Footer />
    </div>
  );
};

export default film;
