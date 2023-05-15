import Footer from "app/components/Footer";
import Header from "app/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pb-24">
      <Header />
      <Footer />
    </main>
  );
}
