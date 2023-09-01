import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MachineCard(props) {
  return (
    <div className="my-12">
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
            width: "100vw",
          }}
          image={props.img}
          title="green iguana"
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
            Contact Us
          </Button>
          <Button
            size="small"
            sx={{ color: "black", backgroundColor: "white" }}
          >
            Know More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MachineCard;
