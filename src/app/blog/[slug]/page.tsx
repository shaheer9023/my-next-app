import { useRouter } from 'next/router';  

const BlogPost = () => {  
    const router = useRouter();  
    const { slug } = router.query;  

    return (  
        <div>  
            <h1 className="text-2xl font-bold">Blog Post: {slug}</h1>  
            <p>This is a dynamic blog post page.</p>  
        </div>  
    );  
};  

export default BlogPost;