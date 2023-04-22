import React from "react";
import NavbarItem from "./NavbarItem";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlinePieChart } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { useRouter } from "next/router";
import CreateButton from "@/components/CreateButton";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import defaultImage from "../../../public/images/defaultImage.png";
import Image from "next/image";

const Navbar = () => {
	const { pathname } = useRouter();
	const { data: currentUser } = useCurrentUser();

	return (
		<div className="w-full bg-zinc-700 mb-20">
			<div className=" py-3 px-5 flex items-center justify-between">
				<div className="flex flex-col items-start">
					{!currentUser ? (
						<p className="text-xl text-teal-600 font-bold">Twinklify</p>
					) : (
						<>
							<Image
								src={defaultImage}
								className="w-12 h-12 rounded-full border border-neutral-300 border-dashed"
								alt="Avatar"
							/>
							<p className="text-lg text-neutral-300 mt-3">
								{" "}
								What&apos;s up,{" "}
								<b className="text-teal-600">{currentUser?.name} !</b>
							</p>
						</>
					)}
				</div>
				<div className="flex items-center">
					<NavbarItem
						icon={BiHomeAlt2}
						label="Home"
						path="/"
						isActive={pathname === "/" ? true : false}
					/>
					<NavbarItem
						icon={AiOutlinePieChart}
						label="Analytics"
						path="/analytics"
						isActive={pathname === "/analytics" ? true : false}
					/>
					{currentUser && (
						<NavbarItem
							icon={CiLogin}
							label="Log Out"
							onClick={() => signOut()}
						/>
					)}

					<CreateButton />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
