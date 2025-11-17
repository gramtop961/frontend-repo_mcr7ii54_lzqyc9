import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import MenuPreview from './components/MenuPreview'
import Gallery from './components/Gallery'
import Reserve from './components/Reserve'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Soundtrack from './components/Soundtrack'
import Rhythm from './components/Rhythm'

function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <CustomCursor />
      <Soundtrack />
      <Rhythm />
      <Header />
      <Hero />
      <Story />
      <MenuPreview />
      <Gallery />
      <Reserve />
      <Footer />
    </div>
  )
}

export default App
