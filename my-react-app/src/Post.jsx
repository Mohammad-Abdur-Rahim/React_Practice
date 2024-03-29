export default function Post({post}){
    console.log(post);
    const {id,title,body}=post;
    return(
        <div>
            <p>Id:{id}</p>
            <h3>title : {title}</h3>
            <p>Body:{body}</p>
        </div>
    )
}