import {useState} from 'react'
import {
  AppContainer,
  AppHeading,
  AppDescription,
  Description,
  CustomButton,
  AppImage,
  ResponsiveContainer,
} from './styledComponents'

const ReadMore = props => {
  const [isHidden, setHideStatus] = useState(true)
  const {reactHooksDescription} = props

  const toggleHideStatus = () => setHideStatus(prevState => !prevState)
  return (
    <AppContainer>
      <ResponsiveContainer>
        <AppHeading>React Hooks</AppHeading>
        <AppDescription>Hooks are a new addition to React</AppDescription>
        <AppImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>
          {isHidden
            ? reactHooksDescription.slice(0, 170)
            : reactHooksDescription}
        </Description>
        <CustomButton onClick={toggleHideStatus}>
          {isHidden ? 'Read More' : 'Read Less'}
        </CustomButton>
      </ResponsiveContainer>
    </AppContainer>
  )
}

export default ReadMore
