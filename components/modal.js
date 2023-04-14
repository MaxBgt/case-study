import { useEffect, useRef, useState } from "react";

export default function Modal({ addProjects }) {
  const [showModal, setShowModal] = useState(false);
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        setShowModal(false);
      }
    };
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const projectId = Math.random().toString(36).substring(2, 8).toUpperCase();

    addProjects({ clientName, projectName, image, clientId, projectId, email });

    setClientName("");
    setProjectName("");
    setImage("");
    setEmail("");
    setShowModal(false);
  };

  return (
    <>
      <span className="add-clients" onClick={() => setShowModal(true)}>
        Add Client
      </span>

      {showModal && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2 className="modal-title">Add new Client</h2>
            <form method="POST" className="form" onSubmit={handleSubmit}>
              <label htmlFor="text"></label>
              <input
                type="text"
                placeholder="Client name"
                className="client-name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
              />
              <label htmlFor="text"></label>
              <input
                type="text"
                placeholder="Project name"
                className="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
              <label htmlFor="text"></label>
              <input
                type="text"
                placeholder="Contact information"
                className="contact-infos"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="image-upload" className="add-img">
                Add an image :
              </label>
              <input
                type="file"
                name="image-upload"
                id="image-upload"
                accept="image/*"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
                required
              />
              <input type="submit" value="Add Client" className="submit" />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
