import React from "react";

const SinglePage = () => {
  return (
    <>
      <div className="container">
        <div className=" carousel ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="/Container 6.png" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="/Container 8.png" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="/Container 4.png" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="/Container 9.png" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <br />

        <div className="flex">
          <div>
            <h1 className="text-6xl font-semibold my-6">Branding Package</h1>
            <h1 className="text-2xl  my-6">Identity</h1>
            <p className="pb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              voluptatum nam rerum animi corrupti recusandae adipisci error
              natus? Veniam aperiam at aliquam accusantium omnis rem ipsa saepe
              harum sed. Quos quasi, laborum eius error porro itaque sit officia
              necessitatibus tempora debitis tenetur eos, aperiam nobis dolor
              laboriosam. Animi minima rem ad porro quibusdam delectus iusto
              praesentium officiis a repellat recusandae aut, qui modi incidunt
              eius fugiat nemo. Soluta praesentium est nostrum, ab qui animi
              iure commodi dolor architecto vero eveniet amet cumque
              perspiciatis explicabo iusto rem. Debitis et, omnis expedita
              reiciendis illum iusto animi nesciunt deleniti aut quidem ducimus
              autem adipisci? Nemo tempore explicabo modi voluptatem, molestias
              rem doloremque qui alias possimus veniam magnam hic sunt
              asperiores veritatis debitis non?
            </p>
          </div>
          <div className="w-[40%]">
            <h1 className="text-2xl font-semibold my-6">Categories</h1>
            <p>Branding</p>
            <hr />
            <h1 className="text-2xl font-semibold my-6">Tags</h1>
            <p>Cool, Light</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
