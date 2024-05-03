import {
  Alert,
  Button,
  Label,
  Modal,
  Spinner,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { HiInformationCircle } from "react-icons/hi";
import { AuthContext } from "../providers/AuthProvider";

const Blogs = () => {
  const { role } = useContext(AuthContext);
  const [blogModal, setBlogModal] = useState(false);
  const [owner, setOwner] = useState(false);
  const [alertState, setAlertState] = useState(false);
  const [localLoading, setLocalLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://iudonordbserver.vercel.app/api/blogs/", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("AC_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data);
        setLocalLoading(false);
      });
  }, []);

  const deleteBlog = (id) => {
    const link =
      role == "admin"
        ? "https://iudonordbserver.vercel.app/api/blogs"
        : "https://iudonordbserver.vercel.app/api/blogs/my-blogs";

    fetch(`${link}/${id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("AC_token"),
      },
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        allBlogs();
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAlertState(false);
    const title = event.target.title.value;
    const details = event.target.details.value;

    const blogData = {
      title,
      details,
    };

    fetch("https://iudonordbserver.vercel.app/api/blogs/create-blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("AC_token"),
      },
      body: JSON.stringify({ blogData }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          setAlertState(true);
        }
        setBlogModal(false);
        myBlogs();
      });
  };

  const myBlogs = () => {
    setOwner(true);
    setLocalLoading(true);
    fetch("https://iudonordbserver.vercel.app/api/blogs/my-blogs", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("AC_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data);
        setLocalLoading(false);
      });
  };

  const allBlogs = () => {
    setOwner(false);
    setLocalLoading(true);
    fetch("https://iudonordbserver.vercel.app/api/blogs/", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("AC_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data);
        setLocalLoading(false);
      });
  };

  return (
    <div className="container mx-auto min-h-screen">
      {alertState ? (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Failed!</span> Try posting again.
        </Alert>
      ) : null}
      {localLoading ? (
        <Modal show={localLoading} size="md" popup>
          <Modal.Body>
            <div className="text-center my-5">
              <Spinner
                className="text-lime-500"
                aria-label="Extra large spinner example"
                size="xl"
              />
            </div>
            <h1 className="text-center text-xl text-lime-500">
              Please Wait...
            </h1>
          </Modal.Body>
        </Modal>
      ) : null}
      <div className="flex justify-between">
        <div>
          {!owner && role == "donor" ? (
            <Button onClick={myBlogs} gradientMonochrome="cyan">
              My blogs
            </Button>
          ) : (
            <Button onClick={allBlogs} gradientMonochrome="cyan">
              All blogs
            </Button>
          )}
        </div>
        <div>
          {role == "donor" ? (
            <Button
              onClick={() => setBlogModal(true)}
              gradientMonochrome="cyan"
            >
              create blog
            </Button>
          ) : null}
          <Modal show={blogModal} onClose={() => setBlogModal(false)}>
            <Modal.Header>Create Blog</Modal.Header>
            <form onSubmit={handleSubmit}>
              <Modal.Body>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="title" value="Blog Title" />
                  </div>
                  <TextInput
                    id="title"
                    type="text"
                    placeholder="Title..."
                    required
                  />
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="details" value="Blog Details" />
                  </div>
                  <Textarea
                    id="details"
                    placeholder="Write blog..."
                    required
                    rows={4}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" color="failure">
                  Post
                </Button>
                <Button color="gray" onClick={() => setBlogModal(false)}>
                  Discard
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      </div>
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-cyan-500 mt-10">Blogs:</h1>
        <div className="mt-10">
          {blogs?.length ? (
            blogs.map((blog) => (
              <BlogCard
                blog={blog}
                ownerShip={owner}
                deleteBlog={deleteBlog}
                role={role}
                key={blog?._id}
              ></BlogCard>
            ))
          ) : (
            <h1 className="text-3xl md:my-20 my-5 text-cyan-500 text-center">
              No Blogs Found!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
