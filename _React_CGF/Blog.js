function Blog() {
    return (
        <div className="blog">
            <h1>My Blog!!</h1>

            <h2>My Web Development Experience</h2>
            <p>
                Before enrolling in this web development class, my experience in the field was quite limited.
                I had never ventured into web development, and my knowledge was primarily centered
                around using the internet rather than creating it. However, I was eager to learn,
                so I decided to take some initiative on my own. I started by working on a
                few personal projects related to HTML and CSS, trying to grasp the fundamentals
                of web design. Despite my best efforts, JavaScript was still uncharted territory
                for me. This class marks my first exposure to JavaScript, and I'm enthusiastic
                about the opportunity to learn it from scratch. I'm looking forward to gaining
                practical experience and delving deeper into the world of web development
                through this course. It's a challenging but exciting journey, and I'm ready
                to embrace it wholeheartedly.

            </p>

            <h2>Database Design</h2>
            <div className="imageBox">
                <div className="imageTextContainer">
                    <div>
                        Click
                        <a target="_blank" rel="noopener noreferrer" href="json/database.json" style={{ color: "rgb(255, 0, 0)" }}>
                            here
                        </a>
                        to see my proposed JSON file.
                    </div>
                </div>
            </div>

            <h2>Database Experience</h2>
            <div className="imageBox">
                <p>
                    DatabaseExperience
                    My database experience is relatively limited as I have only had some exposure to
                    databases, primarily with basic systems like MySQL. During my college courses,
                    I was introduced to the fundamental concepts of database management,
                    including designing simple database schemas and executing basic SQL
                    queries. While my experience is modest, I am enthusiastic about
                    expanding my knowledge and practical skills in database management as
                    I progress through my college studies, with the aim of gaining more hands-on experience in this
                    field.
                </p>
            </div>

            <h2>Homework Review</h2>
            <div className="imageBox">
                <p>
                    Working with the HTML page was easier than managing the CSS file, as the latter requires more attention
                    to maintain a good design. Connecting json file was straightforward
                    but a bit tricky. Keeping the content organized was also challenging. Overall, the homework was enjoyable.
                </p>
            </div>
        </div>
    );
}
