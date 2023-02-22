import {useState} from 'react'

import {
  MainContainer,
  Paragraph,
  LockImg,
  ButtonElement,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  return (
    <MainContainer>
      <LockImg
        isLocked={isLocked}
        src={`${
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }`}
        alt={`${isLocked ? 'lock' : 'unlock'}`}
      />

      <Paragraph className="paragraph">
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Paragraph>
      <ButtonElement
        isLocked={isLocked}
        onClick={() => setLock(prevState => !prevState)}
        type="button"
        className="button"
      >
        {isLocked ? 'Unlock' : 'Lock'}
      </ButtonElement>
    </MainContainer>
  )
}

export default Unlock
