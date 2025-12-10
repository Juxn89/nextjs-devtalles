import { redirect } from "next/navigation";

import { Pagination, Title } from "@/components";
import { getPaginatedUsers } from "@/actions";
import { UsersTable } from "./ui/UsersTable";

export default async function OrdersPage() {

	const { ok, users = [] } = await getPaginatedUsers()

	if(!ok)
		redirect('/login')

	return (
		<>
      <Title title="Users Management" />

      <div className="mb-10">
				<UsersTable users={ users } />
				<Pagination totalPages={ 1 } />
      </div>
		</>
	);
}