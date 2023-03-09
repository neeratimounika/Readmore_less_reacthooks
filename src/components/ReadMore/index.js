// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  Heading,
  Para,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)
  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const onClickButton = () => setIsReadMore(prevStatus => !prevStatus)
  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />

      <Description>{description}</Description>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
