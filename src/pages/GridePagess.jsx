import React from "react";

const GridePagess = () => {
  return (
    <>
      <section className="container my-20">
        <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold my-12">
          Grid Three Column
        </h1>
        <p>
          <div
            id="filters-container"
            class="cbp-l-filters-text block lg:flex md:flex text-left mb-10"
          >
            <div data-filter="*" class="cbp-filter-item cbp-filter-item-active">
              &nbsp;All &nbsp;/
            </div>
            <div data-filter=".branding" class="cbp-filter-item">
              &nbsp; Branding &nbsp;/
            </div>
            <div data-filter=".illustration" class="cbp-filter-item">
              &nbsp; Illustration &nbsp;/
            </div>
            <div data-filter=".logo" class="cbp-filter-item">
              &nbsp; Logo
            </div>
          </div>
        </p>
        <div className="grid sm:grid-cols-3  md:grid-cols-3 Lg:grid-cols-2 gap-7 mb-12">
          {/*<img src="/Container 7.png" alt="" className="w-full" />
          <img src="/Container 8.png" alt="" className="w-full" />
          <img src="/Container 9.png" alt="" className="w-full" /> */}
          <div class="relative group w-full h-full bg-gray-200 overflow-hidden">
            <div class="absolute left-0  bottom-0 w-[500px] h-[100px] bg-black text-white p-4 transform -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
              <h2 class="text-xl font-bold">Lightbox Project</h2>
              <p class="text-sm mt-2">Image</p>
            </div>
            <img src="/container1.png" alt="" className="w-full" />
          </div>
          {/*  */}
          <div class="relative group w-full h-full bg-gray-200 overflow-hidden">
            <div class="absolute left-0  bottom-0 w-[500px] h-[100px] bg-black text-white p-4 transform -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
              <h2 class="text-xl font-bold">Lightbox Project</h2>
              <p class="text-sm mt-2">Video</p>
            </div>
            <img src="/Container 2.png" alt="" className="w-full" />
          </div>
          {/*  */}
          <div class="relative group w-full h-full bg-gray-200 overflow-hidden">
            <div class="absolute left-0  bottom-0 w-[500px] h-[100px] bg-black text-white p-4 transform -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
              <h2 class="text-xl font-bold">Catalogue</h2>
              <p class="text-sm mt-2">Branding</p>
            </div>
            <img src="/Container 3.png" alt="" className="w-full" />
          </div>
          {/*  */}
          <div class="relative group w-full h-full bg-gray-200 overflow-hidden">
            <div class="absolute left-0  bottom-0 w-[500px] h-[100px] bg-black text-white p-4 transform -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
              <h2 class="text-xl font-bold">Small Jar</h2>
              <p class="text-sm mt-2">Art</p>
            </div>
            <img src="/Container 4.png" alt="" className="w-full" />
          </div>
          {/*  */}
          <div class="relative group w-full h-full bg-gray-200 overflow-hidden">
            <div class="absolute left-0  bottom-0 w-[500px] h-[100px] bg-black text-white p-4 transform -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
              <h2 class="text-xl font-bold">Funky Paper</h2>
              <p class="text-sm mt-2">Identity</p>
            </div>
            <img src="/Container 5.png" alt="" className="w-full" />
          </div>
          {/*  */}
          <div class="relative group w-full h-full bg-gray-200 overflow-hidden">
            <div class="absolute left-0  bottom-0 w-[500px] h-[100px] bg-black text-white p-4 transform -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
              <h2 class="text-xl font-bold">Cusion Mockup</h2>
              <p class="text-sm mt-2">Photoshop</p>
            </div>
            <img src="/Container 6.png" alt="" className="w-full" />
          </div>
          {/*  */}
        </div>
      </section>
    </>
  );
};

export default GridePagess;
