import * as React from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import productData from "../data/productData.json";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function ItemCard() {
  const [perPage, setPerPage] = React.useState(10);
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleChangePerPage = (event) => {
    setPerPage(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categories = [
    ...new Set(productData.map((product) => product.category)),
  ];

  const filteredProducts = selectedCategory
    ? productData.filter((product) => product.category === selectedCategory)
    : productData;
  return (
    <div style={{ backgroundColor: "#ffc0cb", margin: "0 auto", width: "100%" }}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Paper sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mt: 1, mr: 2 }}>
            Products per page:
          </Typography>
          <Select value={perPage} onChange={handleChangePerPage}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
          <Select
            value={selectedCategory}
            onChange={handleChangeCategory}
            sx={{ ml: 2 }}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </Paper>
      </Grid>
      {filteredProducts.slice(0, perPage).map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Paper
            elevation={5}
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: "56.25%",
              }}
              image={product.image}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Divider />
              <Typography>{product.description}</Typography>
              <Divider />
              <Typography>Price: ${product.price}</Typography>
              <Divider />
              <Typography>Availability: {product.quantity} items</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy</Button>
              {product.isRentable ? <Button size="small">Rent</Button> : null}
            </CardActions>
          </Paper>
        </Grid>
      ))}
    </Grid>
    </div>
  );
}
