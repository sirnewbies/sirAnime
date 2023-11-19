import Footer from '@/components/Footer';
import Navbar from './../components/Navbar';
import Card from '@/components/Card';
import Header from '@/components/Header';
import getAnimeResponse from '@/libs/api-libs';

const Page = async() => {
  const thisPage = 1
  const endPoint = "home"
  const beranda = await getAnimeResponse(`${endPoint}`, `page=${thisPage}`)

  return(
    <div>
      <Navbar/>
      <div className="px-4">
      <Header route="Beranda" title="Lihat semua" href="/ongoing"/>
        <Card api={beranda}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Page
