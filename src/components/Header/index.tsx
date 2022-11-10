import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { AppTitle, Container, SelectVsCurrency, VsCurrencyLabel, VsCurrencyOption } from './styles'

const Header = () => {
const {vsCurrency,setVsCurrency} = useContext(UserContext)

  return (
    <Container>
      <AppTitle>Crypto Currencies</AppTitle>
      <VsCurrencyLabel>Moeda Alvo:</VsCurrencyLabel>
      <SelectVsCurrency value={vsCurrency} onChange={(event)=> setVsCurrency(event.target.value)}>
          <VsCurrencyOption value='brl'>Real Brasileiro</VsCurrencyOption>
          <VsCurrencyOption value='usd'>Dólar Americano</VsCurrencyOption>
          <VsCurrencyOption value='eur'>Euro</VsCurrencyOption>
          <VsCurrencyOption value='jpy'>Iene</VsCurrencyOption>
          <VsCurrencyOption value='cny'>Renminbi</VsCurrencyOption>
      </SelectVsCurrency>
    </Container>
  )
}

export default Header
