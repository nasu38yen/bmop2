import Container from '@mui/material/Container';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}