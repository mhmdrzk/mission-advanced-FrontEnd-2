import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import movieImages from "@/components/data/movieData";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner
        imageSrc="/img/banner.png"
        imageAlt="Sci-Fi Banner"
        title="The Galactic Frontier"
        description="Petualangan melintasi bintang demi mengungkap misteri semesta."
        showGenreDropdown={false}
      />
      <section className="mt-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl   font-bold text-white">
          Melanjutkan Tonton Film
        </h2>
        <Carousel images={movieImages.continueWacth} isSingleOnMobile={true} />
      </section>

      <section className="mt-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl  font-bold text-white">
          Top rating Film dan Series hari ini
        </h2>
        <Carousel images={movieImages.topRatingFilm} />
      </section>

      <section className="mt-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl  font-bold text-white">
          Film Trending
        </h2>
        <Carousel images={movieImages.trendingFilm} />
      </section>

      <section className="mt-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl   font-bold text-white">
          Rilis Baru
        </h2>
        <Carousel images={movieImages.newFilm} />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
