/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eeV6ADUhrHF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Loader() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm dark:bg-gray-950/50">
			<div className="flex flex-col items-center space-x-4">
                <div className="animate-spin rounded-full border-4 border-gray-300 border-t-green-600 h-12 w-12" />
				<div className="h-8 w-8 animate-spin text-gray-100 dark:text-gray-400" />
				<p className="text-lg font-medium text-gray-100 dark:text-gray-400">
					Processing your request...
				</p>
			</div>
		</div>
	);
}
