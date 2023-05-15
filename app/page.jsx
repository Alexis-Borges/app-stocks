import Footer from "app/components/Footer";
import Header from "app/components/Header";
import Body from "app/components/Body";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pb-24">
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
