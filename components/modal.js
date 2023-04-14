import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <span className="add-clients" onClick={() => setShowModal(true)}>
        Add Client
      </span>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2 className="modal-title">Add new Client</h2>
            <form
              method="POST"
              className="form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="text"></label>
              <input
                type="text"
                placeholder="Client name"
                className="client-name"
              />
              <label htmlFor="text"></label>
              <input
                type="text"
                placeholder="Project name"
                className="project-name"
              />
              <label for="image-upload" className="add-img">
                Add an image
              </label>
              <input
                type="file"
                name="image-upload"
                id="image-upload"
                accept="image/*"
              />
              <input type="submit" value="Add Client" className="submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
