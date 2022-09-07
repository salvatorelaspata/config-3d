import { Button, Rating } from "flowbite-react";
import { Fragment } from "react";
import { ConfigureButton } from "./ConfigureButton";

export const Tile = ({
	title,
	showStars,
	price,
	description,
	image,
	onClickConfiguration,
}) => {
	return (
		<div
			onClick={onClickConfiguration}
			className="w-full max-w-sm flex flex-col bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
		>
			<img
				className="p-8 rounded-t-lg h-60 m-auto"
				src={image}
				alt="product image"
			/>
			<div className="px-5 pb-5 flex flex-col h-full justify-between">
				<h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h3>
				<p>{description}</p>
				{!showStars ? (
					<div className="flex items-center mt-2.5 mb-5" />
				) : (
					<div className="flex items-center mt-2.5 mb-5">
						<Rating size="md">
							<Rating.Star />
							<Rating.Star />
							<Rating.Star />
							<Rating.Star />
							<Rating.Star filled={false} />
						</Rating>
					</div>
				)}
				<div className="flex justify-between items-center">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						{price}
					</span>
					<ConfigureButton size="lg" cb={onClickConfiguration} />
				</div>
			</div>
		</div>
	);
};

// da gestire
const Stars = () => (
	<div className="flex items-center mt-2.5 mb-5">
		<svg
			aria-hidden="true"
			className="w-5 h-5 text-yellow-300"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>First star</title>
			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
		</svg>
		<svg
			aria-hidden="true"
			className="w-5 h-5 text-yellow-300"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Second star</title>
			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
		</svg>
		<svg
			aria-hidden="true"
			className="w-5 h-5 text-yellow-300"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Third star</title>
			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
		</svg>
		<svg
			aria-hidden="true"
			className="w-5 h-5 text-yellow-300"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Fourth star</title>
			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
		</svg>
		<svg
			aria-hidden="true"
			className="w-5 h-5 text-yellow-300"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Fifth star</title>
			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
		</svg>
		<span className="bg-red-200 text-gray-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-400 dark:text-black ml-3">
			5.0
		</span>
	</div>
);
