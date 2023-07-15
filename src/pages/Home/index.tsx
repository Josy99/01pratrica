import { Imagens } from '../../components/Imagens'
import { SectionAbout } from '../../components/SectionAbout'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Imagens />
      <SectionAbout />
    </HomeContainer>
  )
}
