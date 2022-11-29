import { useState } from "react";
import { projectsArray } from "../../fakeApi";

const ProjectsList = () => {

    const [projects, setProjects] = useState(projectsArray)

    return (
        <section>
            <h2>Listado de proyectos</h2>

            {projects.map(elm => {
                return (
                    <div key={elm._id}>
                        <h3>{elm.name}</h3>
                        <p>Tech Stack: {elm.techStack}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default ProjectsList