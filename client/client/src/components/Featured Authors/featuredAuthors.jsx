import React from "react";
import authorImg1 from "../../images/author1.jpg"
import authorImg2 from "../../images/author2.jpg"
import authorImg3 from "../../images/author3.jpg"
import "../Featured Authors/featuredAuthor.css"
const featuredAuthors = () => {
    return (
        <div className="featuredAuthor">
            <h1>Featured Authors</h1>

            <div className="authorDetails">
                <div>
                    <img src={authorImg1} alt="bookstore"></img>
                </div>
                <div className="Adetails">
                    <h2>Gayle Forman</h2>
                    <p style={{fontStyle:"italic"}}>Gayle Forman is an American young adult fiction author. She was born in June 5, 1978 in in Los Angeles. Her best known novel is If I Stay which topped the New York bestseller list for young adult fiction category. It was later made into a film to. Forman began her career with writing for Seventeen Magazine</p>
                </div>
            </div>
            <div className="authorDetails">
                <div>
                    <img src={authorImg2} alt="bookstore"></img>
                </div>
                <div className="Adetails">
                    <h2>Erich Segal</h2>
                    <p style={{fontStyle:"italic"}}>An American author, screenwriter, and educator Erich Wolf Segal (16 June, 1937- 17 January, 2010) shot to fame as the author of Love Story . The tragic novel was later adapted into a motion picture which was also a major hit. Son of a teaher, Segal attended Midwood High School in Brooklyn, USA.</p>
                </div>
            </div>
            <div className="authorDetails">
                <div>
                    <img src={authorImg3} alt="bookstore"></img>
                </div>
                <div className="Adetails">
                    <h2>Sylvia Plath</h2>
                    <p style={{fontStyle:"italic"}}>Sylvia Plath was born on 27 Oct , 1932 in Boston , US was an American poet , novelist , short story writer . She wrote poetry , friction and short stories . Her best work was confessional poetry in which she wrote The colossus and other poems . long with this her notable works include The Bell Jar .</p>
                </div>
            </div>
        </div>

    )
}
export default featuredAuthors;