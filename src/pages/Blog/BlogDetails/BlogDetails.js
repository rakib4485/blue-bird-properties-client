import React from 'react';
import { FaUserAlt } from "react-icons/fa";

const BlogDetails = () => {
    return (
        <div>
            <div className='my-5 mx-[10%]'>
                <div className='flex justify-center'>
                    <img className='rounded-md' src="https://i.ibb.co/Hh8ssbr/blog-1.jpg" alt="" />
                </div>
                <div>
                    <p className='my-2 flex items-center gap-2'><FaUserAlt className='text-blue-700'/> Admin </p>
                    <h2 className='text-2xl font-semibold'>The Best of San Francisco Houses</h2>
                    <p className='text-justify mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut, blanditiis qui libero repellendus voluptates sit in veniam, sapiente quae numquam odit quis repudiandae quam totam tenetur eum eius a, magni laboriosam dolores hic. Sequi non tenetur ex, atque saepe modi quisquam cumque recusandae cupiditate vero dolore dicta amet aut voluptas fuga? Quos similique, amet quisquam voluptatibus illum quis beatae fugiat provident a nulla, maxime possimus quae veritatis excepturi corporis sed laborum eaque? Minima inventore, rerum asperiores nesciunt porro, assumenda deleniti qui tenetur nisi aliquid ipsum tempora iusto quisquam labore consequuntur, atque eos quibusdam debitis iure distinctio aspernatur suscipit sapiente ipsam minus? Eius quae error eum atque officiis quis maiores vitae, dolores natus, itaque, aspernatur odit soluta amet vero dolore praesentium minima magnam labore! Velit minus ab atque repellat reiciendis reprehenderit iusto dolore, facilis illo ad doloribus voluptatem repellendus, a eveniet non porro cupiditate incidunt quibusdam molestias aut rerum. Officia?</p>
                </div>
                <div className="my-7 w-3/4 mx-auto">
                    <div className='flex gap-3 items-center'>
                        <div>
                            <img className='rounded-md' src="https://i.ibb.co/cQb2r3H/indoor-1.jpg" alt="" />
                        </div>
                        <div>
                            <img className='w-3/4 rounded-md' src="https://i.ibb.co/fH3dpv2/indoor-2.jpg" alt="" />
                            <img className='w-3/4 mt-3 rounded-md' src="https://i.ibb.co/r5PYJrn/indoor-3.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='my-8'>
                    <p className='uppercase font-semibold mb-3'>Post a comment</p>
                    <form>
                        <textarea name="" id="" className='textarea textarea-bordered' cols="40" rows="6" placeholder='Write here..'></textarea>
                        <br />
                        <input type="submit" className='uppercase bg-black text-white px-4 py-3 rounded-md' value="send comment" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;