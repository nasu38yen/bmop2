import Container from '@mui/material/Container';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { UserProvider } from '../utils/UserContext'

export default function Layout({ children }) {
  return (
    <UserProvider>
      <Header />
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
      <Container maxWidth="lg">
        <Footer />
      </Container>
    </UserProvider>
  )
}