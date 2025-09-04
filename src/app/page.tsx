import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";


export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-1xl md:text-3xl font-bold text-gray-900 leading-tight mt-80">
          Find Comfortable and Inclusive Spots for Everyone
        </h1>
        <p className="mt-6 text-lg md:text-xl md-20 text-gray-600 max-w-2xl">
          From cafes to city parks, we help you to find inclusive and comfortable locations to visit.
        </p>
        <br />
        <SearchBar />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white max-w-7xl mx-auto px-6 mt-70">
        <h2 className="text-3xl font-bold text-center text-gray-900">Features</h2>
        <div className="flex flex-wrap gap-6 p-6 mt-5">
          <Card
            name="Summarecon Bandung"
            image="https://images-residence.summarecon.com/images/article/Summaba.jpg"
            location="Jl. Sentra Raya Selatan Raya Barat, Rancabolang"
            rating={4.5}
          />
          <Card
            name="Kopi Berbagi"
            image="https://bandungoke.com/wp-content/uploads/2023/12/IMG-20231227-WA0042.jpg"
            location="Jl. Mars Utara III 40E Bandung"
            rating={5}
          />
          <Card
            name="Summarecon Bandung"
            image="https://images-residence.summarecon.com/images/article/Summaba.jpg"
            location="Jl. Sentra Raya Selatan Raya Barat, Rancabolang"
            rating={4.5}
          />
          <Card
            name="Kopi Berbagi"
            image="https://bandungoke.com/wp-content/uploads/2023/12/IMG-20231227-WA0042.jpg"
            location="Jl. Mars Utara III 40E Bandung"
            rating={5}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}