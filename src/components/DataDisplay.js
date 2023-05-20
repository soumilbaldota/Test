const DataDisplay = ({ data, names, designation, skills}) => {
  return (
      <div className = 'justify-center bg-gray-600  sm:px-16 lg:px-48 py-4'>
      {data && data.employees && data.employees.map((employee) => (
          employee.name && (!names || employee.name.toLowerCase().includes(names.toLowerCase())) && 
          ((employee.designation||!designation) && (!designation || employee.designation.toLowerCase().includes(designation.toLowerCase()))) &&
          ((employee.skills||!skills) && (!skills || employee.skills.join(", ").toLowerCase().includes(skills.toLowerCase()))) &&
          <div
          className="p-5 xt-card rounded-2xl text-white xt-links-default bg-gray-400 transition hover:bg-gray-200 active:bg-gray-400 on:bg-gray-200 my-4"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
        <div key={employee.id}>
          <p
            className="text-blue-600 text-xl pb-2 font-semibold"
            style={{ fontFamily: "JetBrains Mono" }}>Name: {employee.name}</p>
          <p className="text-blue-600 text-xl pb-2 font-semibold"
            style={{ fontFamily: "JetBrains Mono" }}>Designation: {employee.designation}</p>
          <p className="text-blue-600 text-xl pb-2 font-semibold"
                      style={{ fontFamily: "JetBrains Mono" }}>Skills: {employee.skills.join(", ")}</p>

          {employee.projects && (
            
            <div
            className="p-5 xt-card rounded-2xl text-white xt-links-default bg-gray-300 my-4 padding 5"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div>
              <h4 className="text-blue-600 text-l"
                        style={{ fontFamily: "JetBrains Mono" }}>  Projects:</h4>
              {employee.projects.map((project) => (
                  <div
                  className="p-5 xt-card rounded-2xl text-white xt-links-default bg-gray-100 transition hover:bg-gray-200 active:bg-gray-400 on:bg-gray-200 my-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                <div key={project.name}>
                  <p className="text-blue-600 text-l"
                        style={{ fontFamily: "JetBrains Mono" }}>{project.name}: {project.description}</p>
                 <div
                  className="xt-card rounded-2xl text-white xt-links-default bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-200 my-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  {project.team && (
                    <div className="p-3 sm:p-9 text-base">
                      <h5
                          className="text-green-600 text-l"
                          style={{ fontFamily: "JetBrains Mono" }}
                      >  Team:</h5>
                      {project.team.map((member, index) => (
                        member.role && member.name && member.name!=='undefined'&& <div key={index}>
                          <p className="text-green-600 text-l"
                          style={{ fontFamily: "JetBrains Mono" }}> {index+1}: {member.name} [{member.role}]</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>


                <div
                  className="xt-card rounded-2xl text-white xt-links-default bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-200 my-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                <div className="p-3 sm:p-9 text-base">
                  {project.tasks && (
                    <div className="pl-2">
                      <h5
                      className="text-orange-600 text-l"
                      style={{ fontFamily: "JetBrains Mono" }}
                      >  Tasks:</h5>

                      {project.tasks.map((task) => (
                        task.id && task.name && task.status && task.status!=='undefined' &&<div key={task.id}>

                          <p
                          className="text-orange-600 text-l"
                          style={{ fontFamily: "JetBrains Mono" }}
                          >
                                 {task.name} [{task.status}]
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                </div>
                </div>
                </div>
              ))}
            </div>
            </div>
          )}
        </div>
        </div>
      ))}
    </div>
  );
};
  
    

export default DataDisplay;
