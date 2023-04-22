import Button from "@/components/Button";
import Greeting from "@/components/Greeting";
import useCurrentUser from "@/hooks/useCurrentUser";
import MetaHead from "@/meta/MetaHead";
import { signOut } from "next-auth/react";

export default function Home() {
	const { isLoading: loading } = useCurrentUser();
	const { data: currentUser } = useCurrentUser();
	return (
		<div className="w-full ">
			<MetaHead label="Twinklify | Home" />
			{currentUser ? (
				<>
					{loading && <h1 className="text-xl text-teal-600">Loading . . .</h1>}
					<div className="w-full h-full flex flex-col px-3 ">
						<p className="text-lg text-neutral-400">Today&apos;s tasks:</p>
					</div>
				
					
				</>
			) : (
				<Greeting />
			)}
		</div>
	);
}
