import Link from "next/link";
import React, { FC, useCallback } from "react";
import { IconType } from "react-icons";

interface NavbarItemProps {
	icon: IconType;
	label: string;
	path?: string;
	isActive?: boolean;
	onClick?: () => void;
}

const NavbarItem: FC<NavbarItemProps> = ({ label, icon: Icon,  path, isActive, onClick }) => {
	 const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
}, [onClick])
	return (
		<Link href={path ? path : '' }>
			<div onClick={handleClick} className=" mx-2 w-10 h-10  flex items-center justify-center rounded-full bg-neutral-900 transition cursor-pointer">
				<Icon size={21} color={isActive ? "teal" : "white"} title={label} />
			</div>
		</Link>
	);
};

export default NavbarItem;
