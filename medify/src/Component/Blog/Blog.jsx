import React from "react";
import "./Blog.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


import detox from "../assets/latestnews.png";
import dr from "../assets/avatar-img.png";
const Blog = () => {
  return (
    <div className="blog-container">
      <div className="details">
        
          <h4 className="blog">Blog & News</h4>
        
     
          <h3 className="blog-faq">Frequently Asked Question</h3>
        
      </div>
      <div className="blog-card">
        <Card className="card-box">
          <CardActionArea>
            <CardMedia
              component="img"
              height="295"
              image={detox}
              alt="green iguana"
            />
            <CardContent className="card-content">
              <Typography variant="h8" className="medical-text">Medical | March 31, 2024</Typography>
              <Typography variant="h7" className="text-details">
                6 Tips To Protect Your Mental Health When You’re Sick
              </Typography>
              <div className="small-card">
                <img src={dr} alt="" className="blog-name" />
                <p className="name-tag"> Rebecca Lee</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-box">
          <CardActionArea>
            <CardMedia
              component="img"
              height="295"
              image={detox}
              alt="green iguana"
            />
            <CardContent className="card-content">
              <Typography variant="h8" className="medical-text">Medical | March 31, 2024</Typography>
              <Typography variant="h7" className="text-details">
                6 Tips To Protect Your Mental Health When You’re Sick
              </Typography>
              <div className="small-card">
                <img src={dr} alt="" className="blog-name" />
                <p className="name-tag"> Rebecca Lee</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-box">
          <CardActionArea>
            <CardMedia
              component="img"
              height="295"
              image={detox}
              alt="green iguana"
            />
            <CardContent className="card-content">
              <Typography variant="h8" className="medical-text">Medical | March 31, 2024</Typography>
              <Typography variant="h7" className="text-details">
                6 Tips To Protect Your Mental Health When You’re Sick
              </Typography>
             
              <div className="small-card">
                <img src={dr} alt="" className="blog-name" />
                <p className="name-tag"> Rebecca Lee</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        
      </div>
    </div>
  );
};

export default Blog;
