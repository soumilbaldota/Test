const DataDisplay = ({ data }) => {
  return (
      // <div className="justify-center bg-gradient-to-b from-rose-500 to-indigo-700 sm:px-16 lg:px-48 py-4">
      <div className = 'justify-center bg-gray-600  sm:px-16 lg:px-48 py-4'>
      {data && data.employees && data.employees.map((employee) => (
          employee.name && <div
          className="p-8 xt-card rounded-2xl text-white xt-links-default bg-gray-400 transition hover:bg-gray-200 active:bg-gray-400 on:bg-gray-200 my-4"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
        <div key={employee.id}>
          <p
            className="text-blue-600 text-2xl pb-2 font-semibold"
            style={{ fontFamily: "Montserrat" }}><pre>Name: {employee.name}</pre></p>
          <p className="text-blue-500 text-2xl pb-2 font-semibold"
            style={{ fontFamily: "Montserrat" }}><pre>Designation: {employee.designation}</pre></p>
          <p className="text-blue-500 text-2xl pb-2 font-semibold"
                      style={{ fontFamily: "Montserrat" }}><pre>Skills: {employee.skills.join(", ")}</pre></p>

          {employee.projects && (
            
            <div
            className="p-8 xt-card rounded-2xl text-white xt-links-default bg-gray-300 my-4 padding 5"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div>
              <h4 className="text-blue-400 text-xl"
                        style={{ fontFamily: "JetBrains Mono" }}><pre>  Projects:</pre></h4>
              {employee.projects.map((project) => (
                  <div
                  className="p-8 xt-card rounded-2xl text-white xt-links-default bg-gray-100 transition hover:bg-gray-200 active:bg-gray-400 on:bg-gray-200 my-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                <div key={project.name}>
                  <p className="text-blue-400 text-xl"
                        style={{ fontFamily: "JetBrains Mono" }}>{project.name}: {project.description}</p>
                 <div
                  className="xt-card rounded-2xl text-white xt-links-default bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-200 my-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  {project.team && (
                    <div className="p-3 sm:p-9 text-base">
                      <h5
                          className="text-green-400 text-xl"
                          style={{ fontFamily: "JetBrains Mono" }}
                      ><pre>  Team:</pre></h5>
                      {project.team.map((member, index) => (
                        member.role && member.name && member.name!=='undefined'&& <div key={index}>
                          <p className="text-green-400 text-xl"
                          style={{ fontFamily: "JetBrains Mono" }}><pre> {index+1}: {member.name} [{member.role}]</pre></p>
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
                      className="text-orange-400 text-xl"
                      style={{ fontFamily: "JetBrains Mono" }}
                      ><pre>  Tasks:</pre></h5>

                      {project.tasks.map((task) => (
                        task.id && task.name && task.status && task.status!=='undefined' &&<div key={task.id}>

                          <p
                          className="text-orange-400 text-xl"
                          style={{ fontFamily: "JetBrains Mono" }}
                          >
                          <pre>       {task.name} [{task.status}]</pre>
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
