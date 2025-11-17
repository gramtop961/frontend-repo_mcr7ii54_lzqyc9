import Header from './components/Header'
import Hero from './components/Hero'
import MenuPreview from './components/MenuPreview'
import Story from './components/Story'
import Reserve from './components/Reserve'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <Story />
      <MenuPreview />
      <Reserve />
      <Footer />
    </div>
  )
}

export default App
