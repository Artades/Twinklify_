import Greeting from '@/components/Greeting';
import useCurrentUser from '@/hooks/useCurrentUser';
import MetaHead from '@/meta/MetaHead';
import React from 'react';

const Analytics = () => {
	const { data: currentUser } = useCurrentUser();
    return (
			<>
				<MetaHead label="Twinklify | Analytics" />
				<div className="w-full ">
					<MetaHead label="Twinklify | Home" />
					{currentUser ? (
						<>
							<h1 className="text-3xl text-white">Analytics</h1>
							<hr />
							
						</>
					) : (
						<Greeting />
					)}
				</div>
			</>
		);
};

export default Analytics;