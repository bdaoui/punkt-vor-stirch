import React, { useState, useEffect, useContext } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const Blog = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const [blogPostList, setBlogPostList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // New Post States
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");


  //edit render
  const [openEdit, setOpenEdit] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:5005/blog")
      .then((response) => {
        console.log(response.data)
        setBlogPostList(response.data)})
      .catch((err) => console.log(err));
  }, [refresh]);

  const handleSubmitPost = () => {
    const blogPost = {
      author,
      message,
      subject,
    };

    axios
      .post("http://localhost:5005/blog", blogPost)
      .then((response) => {
        console.log(response);
        setRefresh(!refresh);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (e, id) => {
    e.preventDefault()
    const blogPostEdit = {
      author,
      message,
      subject,
      id
    };
    setRefresh(!refresh)
    setOpenEdit(!openEdit)

    axios
      .post(`http://localhost:5005/blog/edit`, blogPostEdit)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  

  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center bg-zinc-50 h-100vh">
        <h1 className="py-10 text-2xl">Welcome to our blog page</h1>

        {isLoggedIn && (
          <div className="w-100wv mx-20 sm:px-6 lg:px-8 my-12 bg-white border-2 border-pink rounded">
            <p className="text-3xl font-bold leading-7 text-center text-black m-5">
              Blog
            </p>
            <form action="" onSubmit={handleSubmitPost}>
              <div className="md:flex flex-col md:flex-row justify-center items-center mt-12  ">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none text-black ">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none text-black">
                    Author
                  </label>
                  <input
                    type="text"
                    className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none text-black">
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="h-40 text-base leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-center w-full">
                <button
                  type="submit"
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-pink rounded hover:bg-pink focus:ring-2 focus:ring-offset-2 focus:ring-pink focus:outline-none m-5"
                >
                  Post Blog
                </button>
              </div>
            </form>
          </div>
        )}

        {blogPostList.map((blog) => {
          return ( 
            
            <div
              key={blog._id}
              className="border-pink border-4 md:mx-20 md:p-20 mx-5 p-5 justify-center text-left my-4 "
            >

              {isLoggedIn && 
              <svg onClick={() => setOpenEdit(!openEdit)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:cursor-pointer relative w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>            
              }
                {openEdit &&
                <>
                <form onSubmit={ (e) => handleEdit(e, blog._id)}>
                <h1 className="text-lg py-2">Posted by:<input placeholder={blog.author} onChange={(e) => setAuthor(e.target.value)} className='text-black border-pink border-2' /></h1>
                <h2 className="text-base py-2">Subject: <input placeholder={blog.subject} onChange={(e) => setSubject(e.target.value)} className='text-black border-pink border-2' /></h2>
                <p className="text-xs leading-5"><textarea placeholder={blog.message} onChange={(e) => setMessage(e.target.value)} className='text-black border-pink border-2 w-full' /></p>
                <button type='submit' className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-pink rounded hover:bg-pink focus:ring-2 focus:ring-offset-2 focus:ring-pink focus:outline-none">Edit Blog Post</button>
                </form>
                </>
                }

                {!openEdit &&
                <>
              <h1 className="text-lg py-2">Posted by: {blog.author}</h1>
              <h2 className="text-base py-2">Subject: {blog.subject}</h2>
              <p className="text-xs leading-5">{blog.message}</p>
              </>
              }

            </div>
          );
        })}

        <div className="border-pink border-4 md:mx-20 md:p-20 mx-5 p-5 justify-center text-left my-4">
          <img
            src="https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="logo"
            className="md:float-left object-scale-down w-2/4 m-4"
          />

          <h1 className="text-lg py-2">Posted by: Jane Doe</h1>
          <h2 className="text-base py-2">
            Subject: Eum reprehenderit internos vel deserunt galisum est ratione
            blanditiis{" "}
          </h2>
          <p className="text-xs leading-5">
            Lorem ipsum dolor sit amet. Qui natus ipsam ex quam aspernatur qui
            incidunt quasi ut ratione voluptatem? Est velit cupiditate aut ipsam
            tempore qui architecto commodi. Eum reprehenderit internos vel
            deserunt galisum est ratione blanditiis. Qui animi suscipit cum
            atque rerum sit Quis sunt et harum impedit non omnis consequatur!
            Aut dolor neque eos sapiente consequuntur et facilis veritatis hic
            quos aliquam qui ipsum architecto nam harum laudantium 33 quae
            dolore. Ex quaerat eaque At delectus recusandae non voluptatem
            minus. A corporis internos est maxime quia aut molestiae dolorem aut
            inventore quaerat! Et ducimus maiores et asperiores nihil in optio
            voluptatem ea error rerum. Vel molestias ducimus ut quos similique
            aut rerum deleniti. Eum maxime quia et ipsam soluta 33 praesentium
            voluptates. Est consequatur ducimus rem inventore beatae et tempora
            dolorem! Aut doloremque quis rem saepe illo est rerum voluptatem et
            laboriosam quaerat. Rem pariatur odio et quia molestiae qui quaerat
            libero qui assumenda delectus et dignissimos cupiditate? Ut quia
            sapiente et tempora natus ex incidunt iure est necessitatibus
            assumenda aut expedita reprehenderit non quaerat repellendus aut
            iste doloremque. Est inventore quia est officiis deleniti et omnis
            quam. Et adipisci illum et magni velit ex voluptatem galisum eos
            galisum voluptatibus in natus voluptas et maxime voluptatem? Ad
            iusto eveniet ut earum blanditiis qui aliquam pariatur in sunt nihil
            ad quos dolores. Et dolorem ducimus qui quas consequatur aut
            laboriosam nihil et aliquam quos sit reiciendis ipsum. Eos atque
            enim ut dolor illum est commodi odio et sint aliquam et sunt maiores
            hic cumque quos. Ea debitis voluptatem et nisi velit aut natus
            recusandae ut dolores assumenda aut harum necessitatibus. Qui
            dolorem galisum et omnis amet qui galisum provident et modi
            laboriosam. Aut sunt perferendis eum consectetur possimus aut
            voluptas necessitatibus aut quia sunt et maxime debitis? Et natus
            quam ea magnam accusantium ut suscipit dolores aut dolores aliquid.
            Eum nihil rerum vel magnam soluta aut debitis ratione quo culpa
            dignissimos et impedit nihil. Nam totam aliquam sit labore doloribus
            aut nihil fuga aut ipsam nihil et numquam delectus. Est rerum
            voluptas et doloribus omnis qui veritatis reprehenderit ea
            voluptatem sint voluptas provident ut recusandae dolorem ut expedita
            aspernatur!Lorem ipsum dolor sit amet. Qui natus ipsam ex quam
            aspernatur qui incidunt quasi ut ratione voluptatem? Est velit
            cupiditate aut ipsam tempore qui architecto commodi. Eum
            reprehenderit internos vel deserunt galisum est ratione blanditiis.
            Qui animi suscipit cum atque rerum sit Quis sunt et harum impedit
            non omnis consequatur! Aut dolor neque eos sapiente consequuntur et
            facilis veritatis hic quos aliquam qui ipsum architecto nam harum
            laudantium 33 quae dolore. Ex quaerat eaque At delectus recusandae
            non voluptatem minus. A corporis internos est maxime quia aut
            molestiae dolorem aut inventore quaerat! Et ducimus maiores et
            asperiores nihil in optio voluptatem ea error rerum. Vel molestias
            ducimus ut quos similique aut rerum deleniti. Eum maxime quia et
            ipsam soluta 33 praesentium voluptates. Est consequatur ducimus rem
            inventore beatae et tempora dolorem! Aut doloremque quis rem saepe
            illo est rerum voluptatem et laboriosam quaerat. Rem pariatur odio
            et quia molestiae qui quaerat libero qui assumenda delectus et
            dignissimos cupiditate? Ut quia sapiente et tempora natus ex
            incidunt iure est necessitatibus assumenda aut expedita
            reprehenderit non quaerat repellendus aut iste doloremque. Est
            inventore quia est officiis deleniti et omnis quam. Et adipisci
            illum et magni velit ex voluptatem galisum eos galisum voluptatibus
            in natus voluptas et maxime voluptatem? Ad iusto eveniet ut earum
            blanditiis qui aliquam pariatur in sunt nihil ad quos dolores. Et
            dolorem ducimus qui quas consequatur aut laboriosam nihil et aliquam
            quos sit reiciendis ipsum. Eos atque enim ut dolor illum est commodi
            odio et sint aliquam et sunt maiores hic cumque quos. Ea debitis
            voluptatem et nisi velit aut natus recusandae ut dolores assumenda
            aut harum necessitatibus. Qui dolorem galisum et omnis amet qui
            galisum provident et modi laboriosam. Aut sunt perferendis eum
            consectetur possimus aut voluptas necessitatibus aut quia sunt et
            maxime debitis? Et natus quam ea magnam accusantium ut suscipit
            dolores aut dolores aliquid. Eum nihil rerum vel magnam soluta aut
            debitis ratione quo culpa dignissimos et impedit nihil. Nam totam
            aliquam sit labore doloribus aut nihil fuga aut ipsam nihil et
            numquam delectus. Est rerum voluptas et doloribus omnis qui
            veritatis reprehenderit ea voluptatem sint voluptas provident ut
            recusandae dolorem ut expedita Et adipisci illum et magni velit ex
            voluptatem galisum eos galisum voluptatibus in natus voluptas et
            maxime voluptatem? Ad iusto eveniet ut earum blanditiis qui aliquam
            pariatur in sunt nihil ad quos dolores. Et dolorem ducimus qui quas
            consequatur aut laboriosam nihil et aliquam quos sit reiciendis
            ipsum. Eos atque enim ut dolor illum est commodi odio et sint
            aliquam et sunt maiores hic cumque quos. voluptatem sint voluptas
            provident ut recusandae dolorem ut expedita
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
