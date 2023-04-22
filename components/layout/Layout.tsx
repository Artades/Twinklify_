import React from "react";


import Navbar from "@/components/layout/navbar/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="h-screen bg-black">
			<div className="container h-full mx-auto xl:px-30 max-w-6xl">
				<div
					className="
					w-full
              border-x-[1px] 
              border-neutral-800
			  flex flex-col items-center 
          "
				>
					<Navbar />

					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
