import DeafultCarousel from "@/components/layout/Carousel";
import NavBar from "@/components/layout/header/NavBar";
import DeafultCard from "@/components/layout/leiloes_online/Card";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="h-72 w-4/6 flex justify-center items-center mb-2 mx-auto">
          <DeafultCarousel/>
        </section>
        <div className="bg-purple-800 flex justify-center py-2 justify-between w-4/6 mx-auto">
          <section className="flex justify-center align-center text-white m-2">LEILÕES ONLINE</section>
        </div>
        <div className="flex justify-center bg-pink-500 py-1 w-4/6 mx-auto"></div>
        <section className="flex flex-wrap justify-center space-x-10 w-4/6 mt-2 mx-auto">
          <DeafultCard />
          <DeafultCard />
          <DeafultCard />
          <DeafultCard />
        </section>
        <section>Depoimentos</section>
      </main>
      <footer></footer>
    </div>
  );
}
