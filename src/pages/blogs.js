import React from 'react';
import * as styles from '../style/main.module.css';
import { Link } from 'gatsby';
import { graphql,  useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from '../components/Navbar';

export default function Blogs() {
  const query = useStaticQuery(
    graphql`
      {
        allContentfulPosts {
          edges {
            node {
              author
              content{
                json
              }
              image {
                fluid {
                  src
                }
              }
              slug
              title
              subtitle
            }
          }
        }
      }
    `
  );
  return (
    <div>
      <div>
        <Navbar />
        <h2 style={{ textAlign: 'center', fontSize: "35px", fontFamily: 'cursive', marginTop: '20px' }}>BLOGS</h2>
      </div>
      <div style={{ marginTop: '10px', padding: '0 20% 0 20%' }}>
        {query.allContentfulPosts.edges.map((edge, index) => (
          <Link
            className={styles.links}
            to={`/blog/${edge.node.slug}`}
            key={index}
          >
            <div className="card-group">
              <div className="card">
                <img src={edge.node.image.fluid.src} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Title : {edge.node.title}</h5>
                  <h5 className="card-title">SubTitle : {edge.node.subtitle}</h5>
                  <p className="card-text">Description : {documentToReactComponents(edge.node.content.json)}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Author : {edge.node.author}</small>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
