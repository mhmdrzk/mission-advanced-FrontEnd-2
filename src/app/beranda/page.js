import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Banner
        imageSrc="/img/banner.png"
        imageAlt="Banner"
        title="The Galactic Frontier"
        description="Petualangan melintasi bintang demi mengungkap misteri semesta."
        showGenreDropdown={false}
      />

      <section className="mt-4">
        <h2 className="text-xl font-bold text-white">
          Melanjutkan Tonton Film
        </h2>
        <Carousel
          category="continueWacth"
          isSingleOnMobile={true}
          showAddButton={false}
        />
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-bold text-white">Top Rating</h2>
        <Carousel category="topRatingFilm" />
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-bold text-white">Film Trending</h2>
        <Carousel category="trendingFilm" />
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-bold text-white">Rilis Baru</h2>
        <Carousel category="newFilm" />
      </section>

      <Footer />
    </div>
  );
}
