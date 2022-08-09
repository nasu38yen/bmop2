import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="lg">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            BMOP
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
