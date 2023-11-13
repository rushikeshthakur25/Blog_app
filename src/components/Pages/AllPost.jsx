import React,{useEffect,useState} from 'react'
import appwriteService from "../../appwrite/config";
import {Container,PostCard} from '../container/Container';


function AllPost() {
    const [posts , setPosts] = useEffect([])
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts) =>{
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <Container>
        <div className='flex flex-wrap'>
            {posts.map((post)=> 
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard post={post}/>
                </div>
            )}

        </div>
    </Container>
  )
}


export default AllPost
