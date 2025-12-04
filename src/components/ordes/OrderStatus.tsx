import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";

interface Props {
	isPaid: boolean
}

export const OrderStatus = ({isPaid}: Props) => {
	return (
		<div
			className={clsx(
				"flex items-center rounded-lg py-2 px-3.5 text-bold text-white mb-5",
				{ "bg-red-800": isPaid },
				{ "bg-green-800": isPaid }
			)}
		>
			<IoCartOutline size={30} />
			{/* <span className="mx-2">Payment pending</span> */}
			<span className="mx-2">{isPaid ? "Paid" : "Payment pending"}</span>
		</div>
	);
};
