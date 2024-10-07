import Head from 'next/head';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
const Home = () => {
  return (
    <div>
      <Head>
        <title>Jayjay Dinero | Portfolio</title>
        <meta name="description" content="Personal Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* Header Component */}
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Add other sections such as Projects, About, etc., if needed */}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
