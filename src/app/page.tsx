import { Navbar, Footer, Card, Rating, Button, SearchBar, Map } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 mt-40">

          {/* kiri: search */}
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight mt-40">
              Find Comfortable and Inclusive Spots for Everyone
            </h1>
            <p className="mt-6 text-lg md:text-xl md-20 text-gray-600 max-w-2xl">
              From cafes to city parks, we help you to find inclusive and comfortable locations to visit.
            </p>
            <br />
            <SearchBar />
          </div>

          {/* kanan: preview */}
          <div>
            <div className="bg-blue-600 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-60 mt-20">
              {/* gambar */}
              <Image
                src={"https://i.pinimg.com/736x/8f/88/2f/8f882fb2e8fc492dd9a20f400d16d068.jpg"}
                alt={"Preview"}
                width={600}
                height={800}
                className="w-3/1 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full mt-70 py-20 bg-white mx-auto px-0">
        <h2 className="text-lg md:text-2xl font-bold text-center text-gray-900">
          Discover More Accessible Places for Everyone!
        </h2>
        <p className="mt-6 mx-auto text-xs md:text-sm text-center text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="mt-10 overflow-x-auto gap-6 py-2">
          <div className="flex gap-6 min-w-max">
            <Card
              name="Summarecon Bandung"
              image="https://images-residence.summarecon.com/images/article/Summaba.jpg"
              location="Jl. Sentra Raya Selatan Raya Barat, Rancabolang"
              rating={4}
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
              rating={4}
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
              rating={4}
            />
            <Card
              name="Kopi Berbagi"
              image="https://bandungoke.com/wp-content/uploads/2023/12/IMG-20231227-WA0042.jpg"
              location="Jl. Mars Utara III 40E Bandung"
              rating={5}
            />
          </div>
        </div>
        <Link href="/dashboard" className="text-gray-700 font-semibold md:underline flex place-content-end mr-50 mt-12 hover:text-blue-600 transition">
          Find More <FaArrowRight className='ml-1 mt-1'/>
        </Link>
      </section>

      {/* Add Submission */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-20 pb-12">

          {/* kiri: form */}
          <div className="">
            <h2 className="text-lg md:text-2xl font-bold text-center text-gray-900 mt-6">
              Become an Inclusion Hero!
            </h2>
            <p className="mt-6 mx-auto text-xs md:text-sm text-center text-gray-600 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full h-full p-12 mt-6">
              <h4 className="text-xs md:text-base font-regular text-left text-gray-900 mb-2">Find the location</h4>
              <SearchBar />
              <h4 className="text-xs md:text-base font-regular text-left text-gray-900 mb-2 mt-6">Rate the location accessibility</h4>
              <Rating />
              {/* <Button /> */}
              <button type="submit" className="flex place-self-end mt-4">
                <Button variant="primary">Submit!</Button>
              </button>
            </div>
          </div>

          {/* kanan: map */}
          <div>
            <div className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-100 h-full">
              <Map />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}