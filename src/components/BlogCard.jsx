/* eslint-disable react/prop-types */
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";

const BlogCard = ({ blog, ownerShip, deleteBlog, role }) => {
  const [detailsModal, setDetailsModal] = useState(false);

  return (
    <div className="my-5">
      <div>
        <Modal show={detailsModal} onClose={() => setDetailsModal(false)}>
          <Modal.Header>
            <h1 className="text-cyan-500">{blog.title}</h1>
          </Modal.Header>
          <Modal.Body>{blog.details} </Modal.Body>
          <Modal.Footer>
            {ownerShip ? (
              <div>
                <Button
                  onClick={() => deleteBlog(blog._id)}
                  gradientMonochrome="failure"
                >
                  Delete
                </Button>
              </div>
            ) : role == "admin" ? (
              <div>
                <div className="mr-28 md:mr-48 lg:mr-96">
                  <h1 className="text-sm">Author</h1>
                  <h1 className="text-lg">{blog?.author?.name}</h1>
                </div>
                <div>
                  <Button
                    onClick={() => deleteBlog(blog._id)}
                    gradientMonochrome="failure"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-sm">Author</h1>
                <h1 className="text-lg">{blog?.author?.name}</h1>
              </div>
            )}
          </Modal.Footer>
        </Modal>
      </div>
      <Card className="max-w-xl mx-auto">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blog?.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {blog?.details.length > 150
            ? blog.details.slice(0, 150) + "..."
            : blog?.details}
        </p>
        <Button onClick={() => setDetailsModal(true)} size="sm" color="failure">
          Read more
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card>
    </div>
  );
};

export default BlogCard;
