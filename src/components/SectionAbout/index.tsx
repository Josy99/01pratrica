import { useState } from 'react'

import AvatarProfile from '../../assets/img/avatar.png'
import { Container, ContentImage, ContentDescription } from './styles'
import { Button } from '../Button'

interface IUsers {
  id: number
  name: string
}

export function SectionAbout() {
  const [user, setUser] = useState<IUsers>({ id: 1, name: 'Antónia' })
  return (
    <Container>
      <ContentImage>
        <img src={AvatarProfile} alt="Avatar Mayk Brito" />
      </ContentImage>
      <ContentDescription>
        <h2>Olá Mundo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          illo voluptates, laboriosam mollitia et omnis enim rerum officiis
          dolore distinctio voluptatibus, minima autem perspiciatis magni
          similique! Perspiciatis, aut itaque? Laudantium.
        </p>

        <Button title="Free Consultarion" />
      </ContentDescription>
    </Container>
  )
}
