import useNowNowPlay from '../hooks/useNowPlay'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContatiner from './SecondaryContatiner'

const Browser = () => {

  useNowNowPlay()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContatiner/>
    </div>
  )
}

export default Browser
