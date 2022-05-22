import { useContext, useEffect, useState } from 'react'
import { ScrollView, useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import axios from 'axios'

import getStatusBarStyle from '../../utils/getStatusBarStyle'
import { StateContext } from '../../context'
import Header from '../../components/Header'
import CategoryFilter from '../../components/CategoryFilter'
import Section from '../../components/Section'
import ProductCardCarousel from '../../components/ProductCardCarousel'
import ProductCardList from '../../components/ProductCardList'
import ActionSheet from '../../components/ActionSheet'
import { Container, Loading, Divider } from './styles'

const URL = 'https://fakestoreapi.com/products'
const LIMIT = 'limit=30'
const CATEGORY_DEFAULT = 'Últimos'

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([CATEGORY_DEFAULT])
  const [selected, setSelected] = useState(categories[0])
  const { state } = useContext(StateContext)
  const colorScheme = useColorScheme()

  const url = selected !== categories[0]
    ? `${URL}/category/${selected}?${LIMIT}`
    : `${URL}?${LIMIT}`

  const hasNotCategory = selected === CATEGORY_DEFAULT

  const newProducts = products.slice(0, 5)
  const restProducts = hasNotCategory
    ? products.slice(Math.max(products.length - 5, 0))
    : products

  useEffect(() => {
    axios.get(`${URL}/categories`)
      .then((result) => {
        setCategories([
          ...categories,
          ...result.data
        ])
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then((result) => {
        setProducts(result.data)
        setLoading(false)
      })
  }, [selected])

  if (categories.length <= 1 && isLoading) {
    return <Loading size="large" full />
  }

  return (
    <>
      <StatusBar style={getStatusBarStyle(colorScheme)} />
      <Container open={state.cart.length}>
        <Header title="Produtos" />
        <CategoryFilter
          data={categories}
          selected={selected}
          setSelected={setSelected}
        />

        {isLoading ? (
          <Loading size="large" />
        ) : (
          <ScrollView>
            {hasNotCategory && (
              <Section title="Novidades" noContentPadding>
                <ProductCardCarousel data={newProducts} />
                <Divider/>
              </Section>
            )}
            <Section title="Listagem" noContentPadding>
              <ProductCardList data={restProducts} />
            </Section>
          </ScrollView>
        )}

      </Container>
      <ActionSheet />
    </>
  )
}