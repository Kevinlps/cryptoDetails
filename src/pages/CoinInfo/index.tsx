import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import Coin from '../../models/Coin'
import { BackButton, BackLik, BackLinkPanel, CardRow, Container, InfoCard, RowKey, Rowvalue,  } from './styles'

type Location = {
  state:{
    coin:Coin
  }
}

const CoinInfo = () => {
  const location:Location = useLocation()
  const { coin } = location.state

const {vsCurrency} = useContext(UserContext)

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: vsCurrency,
})

  return (
    <Container>
      <InfoCard>
        
        <CardRow>
          <RowKey>Nome: </RowKey>
          <Rowvalue>{coin.name}</Rowvalue>
        </CardRow>

        <CardRow>
          <RowKey>Simbulo: </RowKey>
          <Rowvalue>{coin.symbol}</Rowvalue>
        </CardRow>

       <CardRow>
          <RowKey>Logo: </RowKey>
          <Rowvalue>{coin.logo}</Rowvalue>
        </CardRow>

        <CardRow>
          <RowKey>Valor: </RowKey>
          <Rowvalue>{moneyFormatter.format(coin.currentPrice)}</Rowvalue>
        </CardRow>

        <CardRow>
          <RowKey>Capitalização: </RowKey>
          <Rowvalue>{moneyFormatter.format(coin.marketCap)}</Rowvalue>
        </CardRow>

        <CardRow>
          <RowKey>Volume total: </RowKey>
          <Rowvalue>{coin.totalVolume}</Rowvalue>
        </CardRow>

        <CardRow>
          <RowKey>Variação na ultima hora: </RowKey>
          <Rowvalue>{coin.priceChange1H.toFixed(5)}%</Rowvalue>
        </CardRow>

      </InfoCard>
      <BackLinkPanel>
      <BackLik to='/'>
        <BackButton>Voltar</BackButton>
      </BackLik>
      </BackLinkPanel>
      
    </Container>
  )
}

export default CoinInfo
