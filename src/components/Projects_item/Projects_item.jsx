import React from 'react';
import './Projects_item.css';

function Projects_item(props) {
    return (
        <div className="swiper_block">
          <div className={"slider_img"+props.img}>
            <div className="slider_html"></div>
            <div className="slider_css"></div>
            <div className="slider_js"></div>
            <div className="slider_jquery"></div>
            <div className="slider_react"></div>
            <div className="slider_figma"></div>
          </div>
          <p className="slider_text1">{props.title}</p>
          <p className="slider_text2">{props.description}</p>
          <p className="slider_text3"><a href={props.url} className="url">GitHub</a></p>
        </div>
    );
}


export default Projects_item;