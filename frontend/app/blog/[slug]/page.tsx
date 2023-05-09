const Post = ({ params }: any) => {
    const { slug } = params;
    return (
        <article>
            <h1>This is test page {slug}</h1>
        </article>
    )
}

export default Post;