import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function MachineCard(props) {
  return (
    <div className="my-12 sm:w-[48%] cursor-pointer">
      <Card
        sx={{
          width: "80%",
          margin: "auto",
          backgroundColor: "black",
          border: "1px solid white",
          color: "#000000",
          boxShadow: "2px 2px 20px white",
        }}
      >
        <CardMedia
          sx={{
            backgroundSize: "cover",
            height: "15rem",
            backgroundColor: "#adadad",
            overflow: "hidden",
            transform: ".5s ease-out;",
            rotate: "360deg",
            width: "100%",
          }}
          image={props.img}
          title="Machinery"
        />

        <CardContent sx={{ backgroundColor: "#adadad" }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="black">
            {props.containt}
          </Typography>
        </CardContent>
        <CardActions sx={{ backgroundColor: "grey" }}>
          <Button
            size="small"
            sx={{ color: "black", backgroundColor: "white" }}
          >
            <Link to="/contactUs">Contact Us</Link>
          </Button>
          <Button
            size="small"
            sx={{ color: "black", backgroundColor: "white" }}
          >
            <Link to="/gallery">Know More</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MachineCard;
