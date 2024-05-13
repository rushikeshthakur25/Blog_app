import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

import img from '../../public/img/blog.png'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                <div className=" max-w-[1200px] h-[28rem] flex flex-col items-center md:flex-row m-auto rounded-lg gap-7 md:gap-10">
          <div className=" w-full md:w-1/2 flex flex-col  gap-5">
            <h1 className="text-4xl md:text-7xl font-extrabold text-sky-800 ">
              Create a{" "}
              <span className="bg-gradient-to-r from-yellow-300  to-red-500 text-transparent bg-clip-text">
                Unique
              </span>{" "}
              and Beautiful Blog
            </h1>
            <p className="text-white text-base">
              Unleash your inner writer and explore a universe of ideas! Share
              your stories, passions, discoveries on Blogverse.
            </p>
            
          </div>
          <div className=" w-full md:w-1/2 flex items-center justify-center">
          <img
              className="w-[350px] md:w-[500px]"
              src={`${img}`}
              alt="Hero Image"
            />
          </div>
        </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home