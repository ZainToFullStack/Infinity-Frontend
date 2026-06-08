import React, { useEffect, useState } from "react";
import "../../styles/homepagemainsec4.css";

function Homesec4() {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        fetch("https://infinity-backend-alpha.vercel.app/api/auth/allprojects")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setProjects(data.projects);
                    setFilteredProjects(data.projects);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching projects:", err);
                setLoading(false);
            });
    }, []);

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            // case "complete":
            case "done":
                return "status-complete";
            case "pending":
                return "status-pending";
            case "upcoming":
                return "status-upcoming";
            default:
                return "status-default";
        }
    };

    const handleFilter = (filter) => {
        setActiveFilter(filter);
        if (filter === "All") setFilteredProjects(projects);
        else
            setFilteredProjects(
                projects.filter((p) => p.status.toLowerCase() === filter.toLowerCase())
            );
    };

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalOpen(false);
    };

    return (
        <section className="projects-section">
            <h2 className="projects-title">
                <span className="line"></span>
                Our Projects
                <span className="line"></span>
            </h2>

            <p className="projects-subtitle">
                Explore Infinity Corps’ real projects, showcasing innovation and practical results.
            </p>

            <ul className="projects-filters">
                {["All", "Done", "Pending", "Upcoming"].map((filter, index) => (
                    <li key={index}>
                        <button
                            className={activeFilter === filter ? "active-filter" : ""}
                            onClick={() => handleFilter(filter)}
                        >
                            {filter}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="projects-gallery">
                {loading && <p>Loading projects...</p>}
                {!loading && filteredProjects.length === 0 && <p>No projects added.</p>}

                {filteredProjects.map((project) => (
                    <div
                        className="project-card"
                        key={project._id}
                        onClick={() => openModal(project)}
                    >
                        <div className="projectimgcontainer"> <img src={project.images} alt={project.title} className="project-img" /></div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <span className="project-year">{project.year}</span>
                            {/* {project.status && (
                                <span className={`project-status ${getStatusClass(project.status)}`}>
                                    {project.status}
                                </span>
                            )} */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && selectedProject && (
                <div className="project-modal" onClick={closeModal}>
                    <div
                        className="project-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={closeModal}>
                            &times;
                        </button>
                        <img
                            src={selectedProject.images}
                            alt={selectedProject.title}
                            className="modal-img"
                        />
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.description}</p>
                        <p><strong>Year:</strong> {selectedProject.year}</p>
                        <p><strong>Status:</strong> {selectedProject.status}</p>
                        {selectedProject.projectLink && (
                            <a
                                href={selectedProject.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Project
                            </a>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Homesec4;