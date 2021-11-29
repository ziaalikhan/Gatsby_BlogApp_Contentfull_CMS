import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/Navbar";
import * as styles from '../style/main.module.css';
import { Link } from 'gatsby';

const BlogPost = ({ pageContext: { data } }) => {
    return (
        <div>
            <Navbar />
            <Link className={styles.links} to='/blogs'>
                <div style={{ marginTop: '10px', paddingLeft: "10%", color: "#6f42c1", fontSize: "20px" }}>
                    <p>Back to Blogs</p>
                </div>
            </Link>
            {
                data && (
                    <div>
                        <div className={styles.blog_post_Cont}>
                            <div className={styles.blog_post_image}>
                                <img src={data.image.fluid.src} alt='BloGs' width='400px' height="400px" />
                            </div>
                            <div className={styles.blog_post_titles}>
                                <p>Tittle : {data.title}</p>
                                <p>SubTitle : {data.subtitle}</p>
                                <p>Author : {data.author}</p>
                            </div>
                        </div>
                        <div className={styles.blog_post_richText}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt atque, fuga iste nulla sapiente deserunt distinctio aut odio repudiandae cumque amet nihil vitae fugiat. Laudantium deserunt temporibus omnis ducimus numquam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam quo accusamus unde repudiandae totam dignissimos officiis ab quos placeat eum, quae distinctio. Rerum corporis quo quod! Architecto, accusantium soluta?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem at nulla mollitia dolorem quam illo fuga commodi tempora voluptate. Adipisci exercitationem, iusto suscipit dignissimos tempora accusantium officia quaerat commodi!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dolore veritatis repellendus ipsa ratione exercitationem hic fugit voluptatem pariatur nulla eos est, ut illum quis natus magni unde. Praesentium, asperiores?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolor vero omnis aliquid nostrum repudiandae deleniti, voluptatibus quod suscipit inventore, culpa earum a! A explicabo soluta, recusandae excepturi cupiditate laudantium.
                                {documentToReactComponents(data.content.json)}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );

};


export default BlogPost;