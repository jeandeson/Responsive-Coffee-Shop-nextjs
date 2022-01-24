import Head from "next/head";
import Header from "../components/header/Header";
import HomeSection from "../components/homeSection/HomeSection";
import AboutSection from "../components/aboutSection/AboutSection";
import MenuSection from "../components/menuSection/MenuSection";

export default function Home({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A tasty and healty coffee ecommerce" />
        <meta name="keywords" content="coffee, tasty, healty" />
        <meta name="author" content="Jeandeson Nascimento" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* font awesome cdn link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        ></link>
      </Head>
      <Header />
      <HomeSection />
      <AboutSection />
      <MenuSection />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "Coofee shop" },
  };
}
