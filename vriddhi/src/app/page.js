import Image from 'next/image'
import About from './components/About'
import Team from './components/Team'

export default function Home() {
  return (
    <div>
      <About/>
      <Team/>
    </div>
  )
}