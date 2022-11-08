import React from "react";

const AddService = () => {

    const [serviceData,setServiceData] = useState({})

    const handleChange = ()=>{
        
    }


  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold">Add a New Service</h1>
          <div className="w-1/12 p-1 bg-purple-700 mt-3"></div>
        </div>
        <div className="w-full md:w-2/3 mx-auto">
          <div className="card shadow-lg rounded-md bg-white shadow-slate-200 p-4">
            <h1 className="text-4xl text-center text-purple-700 font-semibold my-6">
              New Service
            </h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Title
                  </span>
                </label>
                <input
                  name="title"
                  // onChange={handleOnChange}
                  type="text"
                  placeholder="Enter a title"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Image
                  </span>
                </label>
                <input
                  name="image"
                  // onChange={handleOnChange}
                  type="text"
                  placeholder="Enter a service image"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Service Price
                  </span>
                </label>
                <input
                  name="price"
                  // onChange={handleOnChange}
                  type="number"
                  placeholder="Enter price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Ratings
                  </span>
                </label>
                <input
                  name="ratings"
                  // onChange={handleOnChange}
                  type="number"
                  placeholder="Enter price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Description
                  </span>
                </label>
                <textarea
                  name="descrition"
                  // onChange={handleOnChange}
                  rows={8}
                  placeholder="Enter a long description"
                  className="textarea input-bordered"
                />
              </div>
              <div className="text-center my-6">
                <button className="btn bg-purple-700 btn-lg ">
                  Submit Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
