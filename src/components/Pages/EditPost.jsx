import React, {useEffect,useState} from 'react'
import {Container,PostForm} from '../container/Container'
import appwriteService from '../../appwrite/config'
import {useNavigate, useParas} from 'react-router-dom'
 
function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParas()
    const  navigate = useNavigate()

    useEffect(()=> {
        if (slug) {
            appwriteService.getPost(slug).then((post)={
                if (post) {
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    })

   return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
   ) : null 
}

export default EditPost
