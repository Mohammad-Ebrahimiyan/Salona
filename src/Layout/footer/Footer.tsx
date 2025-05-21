import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#282828', color: '#fff', py: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{xs:12, sm:6, md:3}} >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Quick Links
          </Typography>
          <Box>
            <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Home
            </Link>
            <Link href="/product-list" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Products
            </Link>
            <Link href="/cart" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Cart
            </Link>
            <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Contact Us
            </Link>
          </Box>
        </Grid>

        <Grid  size={{xs:12, sm:6, md:3}}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Information
          </Typography>
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: support@shop.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +1 234 567 890
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Address: 123 Shop Street, City, Country
            </Typography>
          </Box>
        </Grid>

        <Grid  size={{xs:12, sm:6, md:3}}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <Facebook />
            </IconButton>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <Twitter />
            </IconButton>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <Instagram />
            </IconButton>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>


      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Salona. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
