import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '../components/Link';

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={3}>
      <Toolbar>
        <Link href="/" underline="none" variant="logo" color="inherit" noWrap>
          ニュー永UN寺
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
