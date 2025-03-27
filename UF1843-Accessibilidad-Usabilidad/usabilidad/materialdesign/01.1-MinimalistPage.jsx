import { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, Typography, Button, Box, Container, Card, CardMedia, CardContent } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MinimalistPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <AppBar position="absolute" elevation={0} sx={{ background: "transparent", color: "black" }}>
        <Toolbar>
          <IconButton edge="start" onClick={() => setOpen(true)} sx={{ color: "black" }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}>
            Minimalist UI
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 200 }}>
          {["Home", "About", "Services", "Contact"].map((text) => (
            <ListItem button key={text} sx={{ padding: "10px 20px", textAlign: "center" }}>
              <Typography variant="body1">{text}</Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Hero Section */}
      <Container sx={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Simplicity is the Ultimate Sophistication
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "500px", opacity: 0.7 }}>
          A clean, simple, and modern design approach that removes all distractions.
        </Typography>
        <Button variant="contained" sx={{ mt: 4, borderRadius: "30px", padding: "10px 30px", textTransform: "none", background: "black", color: "white" }}>
          Get Started
        </Button>
      </Container>

      {/* Card Section */}
      <Container sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Featured Work
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          {/* First Card (Picsum Image) */}
          <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia component="img" height="200" image="https://picsum.photos/400/300?random=1" alt="Minimalist Design" />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Elegant Minimalism
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                A perfect blend of simplicity and elegance for modern web design.
              </Typography>
            </CardContent>
          </Card>

          {/* Second Card (Another Picsum Image) */}
          <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia component="img" height="200" image="https://picsum.photos/400/300?random=2" alt="Minimalist Aesthetic" />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Modern Aesthetic
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Clean lines, white spaces, and stunning visuals—less is more.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ textAlign: "center", padding: "20px 0", mt: 8, borderTop: "1px solid #ddd", opacity: 0.7 }}>
        <Typography variant="body2">© 2025 Minimalist UI. All rights reserved.</Typography>
      </Box>
    </>
  );
}
