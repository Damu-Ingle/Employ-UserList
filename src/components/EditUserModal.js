import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const EditUserModal = ({ user, closeModal, onSave }) => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSave = async () => {
    setLoading(true);
    setMessage("");

    try {
        
      const updatedUser = { ...user, first_name: firstName, last_name: lastName, email: email };
      
      onSave(updatedUser); // ✅ Now this function is properly defined
      setMessage("User updated successfully!");

      setTimeout(() => {
        closeModal();
      }, 1000);
    } catch (error) {
      setMessage("Error updating user.");
      console.error("Error updating user:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        {message && <p className="text-success">{message}</p>}

        <Button variant="primary" disabled={loading} onClick={handleSave}>
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </Form>
    </div>
  );
};

export default EditUserModal;
