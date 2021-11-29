import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as styles from '../style/main.module.css';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';
import heroImage from '../Images/heroImage.jpg';

export default function HomeIndex() {

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1 className={styles.Heading}>Your Blogs Is Here</h1>
            <h3 className={styles.desc}>Medium is different from the rest of the free blogging sites.
              It offers a no-frills approach to content publishing as it allows bloggers to write what they are passionate
              about without having to worry about coding, design, domain, or other issues.</h3>
            <Link to='/blogs'>
              <div className={styles.btnContiner}>
                <button>Your Blogs</button>
              </div>
            </Link>
          </div>
          <div className="col-sm-6">
            <div className={styles.imageCont}>
              <img width="400px" height="400px" src={heroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

