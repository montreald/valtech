import React, { Component, Fragment } from 'react'
import { Typography } from '@material-ui/core'

class Article extends Component{
  render(){
    const {news} = this.props
    return(
      <Fragment>
        {news.map((item, i) =>{
          return(
            <div key={i}>
              <Typography
                variant="display1"
                gutterBottom
                className="news__title"
              >
                {item.article_1}
              </Typography>
              <div className="article_wrapper">
                <Typography
                  variant="subheading"
                  gutterBottom
                  className="news__card"
                >
                  {item.article_2}
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  className="news__card"
                >
                  {item.article_3}
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  className="news__card"
                >
                  {item.article_4}
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  className="news__card"
                >
                  {item.article_5}
                </Typography>
              </div>
            </div>
          )
        })}
      </Fragment>
    )
  }
}
export default Article
