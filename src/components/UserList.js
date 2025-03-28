import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import EditUserModal from "./EditUserModal";
import "bootstrap/dist/css/bootstrap.min.css";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchUsers();
    });

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
            setUsers(response.data.data);
            setTotalPages(response.data.total_pages);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Users List</h2>
            <div className="row">
                {users.map((user) => (
                    <div key={user.id} className="col-md-4 mb-4">
                        <Card className="shadow-sm text-center">
                            <Card.Img variant="top" src={user.avatar} alt="Avatar" className="rounded mx-auto mt-3" style={{ width: "80px", height: "80px" }} />
                            <Card.Body>
                                <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                                <Card.Text className="text-muted">{user.email}</Card.Text>
                                <div className="d-flex justify-content-center gap-2">
                                    <Button variant="warning" size="sm" onClick={() => { setSelectedUser(user); setShowModal(true); }}>Edit</Button>
                                    <Button variant="danger" size="sm" onClick={() => setUsers(users.filter((u) => u.id !== user.id))}>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3 gap-3">
                <FontAwesomeIcon icon={faLessThan} style={{ cursor: page === 1 ? "not-allowed" : "pointer", opacity: page === 1 ? 0.5 : 1 }} onClick={() => page > 1 && setPage(page - 1)} />
                <span className="fw-bold">Page {page} of {totalPages}</span>
                <FontAwesomeIcon icon={faGreaterThan} style={{ cursor: page === totalPages ? "not-allowed" : "pointer", opacity: page === totalPages ? 0.5 : 1 }} onClick={() => page < totalPages && setPage(page + 1)} />
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Edit User</Modal.Title></Modal.Header>
                <Modal.Body>{selectedUser && <EditUserModal user={selectedUser} closeModal={() => setShowModal(false)} onSave={(updatedUser) => setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)))} />}</Modal.Body>
            </Modal>
        </div>
    );
};

export default UsersList;





