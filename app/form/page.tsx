"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Loader from "@/components/ui/loader";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { Leaf, ArrowLeft } from "lucide-react";

export default function FormPage() {
	const { toast } = useToast();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		crop_start: "",
		crop_end: "",
		cropType: "",
		lat: "",
		long: "",
	});
	const [predictionResult, setPredictionResult] = useState(null);
	const [submitClicked, setSubmitClicked] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitClicked(true)
		console.log("Form submitted:", formData);
		toast({
			title: "Form submitted!",
			description: "Processing your request. Please wait for at least 20 minutes",
		});
		// Send the form data to the ML model endpoint
		try {
			const response = await fetch("http://localhost:8000/predict", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},

				body: JSON.stringify(formData), // Convert form data to JSON
			});
			console.log("Got response: ");
			console.log(response);

			setSubmitClicked(false)
			// Check if the response is okay and handle the model's response
			if (response.ok) {
				const result = await response.json();
				console.log("Prediction result:", result);
				setPredictionResult(result);
				toast({
					title: "Prediction received!",
					description: "Scroll down to see the results.",
				});
			} else {
				console.error("Failed to get prediction from model");
				toast({
					title: "Error!",
					description: "Failed to get prediction from model.",
				});
			}
		} catch (error) {
			console.error("Error:", error);
			setSubmitClicked(false)
			toast({
				title: "Network error!",
				description: "Could not connect to the ML model.",
			});
		}
		// Reset form after submission
		setFormData({
			name: "",
			email: "",
			crop_start: "",
			crop_end: "",
			cropType: "",
			lat: "",
			long: "",
		});
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSelectChange = (value: string) => {
		setFormData((prevData) => ({
			...prevData,
			cropType: value,
		}));
	};

	return (
		<div className="flex flex-col min-h-screen">
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link className="flex items-center justify-center" href="/">
					<Leaf className="h-6 w-6 text-green-600" />
					<span className="ml-2 text-2xl font-bold text-gray-900">
						AgroTech
					</span>
				</Link>
			</header>
			<main className="flex-1 mx-auto">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Get Started with AgroTech
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
									Fill out the form below and we&apos;ll get
									in touch to discuss how we can optimize your
									farm.
								</p>
							</div>
						</div>
						<div className="mx-auto max-w-[600px] mt-8">
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<Label htmlFor="name">Name</Label>
									<Input
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Label htmlFor="cropType">
										Primary Crop Type
									</Label>
									<Select
										onValueChange={handleSelectChange}
										value={formData.cropType}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select a crop type" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="barley">
												Barley
											</SelectItem>
											<SelectItem value="cassava">
												Cassava
											</SelectItem>
											<SelectItem value="chickpea">
												Chickpea
											</SelectItem>
											<SelectItem value="cotton">
												Cotton
											</SelectItem>
											<SelectItem value="cowpea">
												Cowpea
											</SelectItem>
											<SelectItem value="fababean">
												Fababean
											</SelectItem>
											<SelectItem value="groundnut">
												Groundnut
											</SelectItem>
											<SelectItem value="maize">
												Maize
											</SelectItem>
											<SelectItem value="millet">
												Millet
											</SelectItem>
											<SelectItem value="mungbean">
												Mungbean
											</SelectItem>
											<SelectItem value="pigeonpea">
												Pigeonpea
											</SelectItem>
											<SelectItem value="potato">
												Potato
											</SelectItem>
											<SelectItem value="rapeseed">
												Rapeseed
											</SelectItem>
											<SelectItem value="rice">
												Rice
											</SelectItem>
											<SelectItem value="sorghum">
												Sorghum
											</SelectItem>
											<SelectItem value="soybean">
												Soybean
											</SelectItem>
											<SelectItem value="sugarbeet">
												Sugarbeet
											</SelectItem>
											<SelectItem value="sugarcane">
												Sugarcane
											</SelectItem>
											<SelectItem value="sunflower">
												Sunflower
											</SelectItem>
											<SelectItem value="sweetpotato">
												Sweetpotato
											</SelectItem>
											<SelectItem value="tobacco">
												Tobacco
											</SelectItem>
											<SelectItem value="wheat">
												Wheat
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div>
									<Label htmlFor="crop_start">
										Crop Sowing Date
									</Label>
									<Input
										id="crop_start"
										name="crop_start"
										type="date"
										value={formData.crop_start}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Label htmlFor="crop_end">
										Crop Harvesting Date
									</Label>
									<Input
										id="crop_end"
										name="crop_end"
										type="date"
										value={formData.crop_end}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Label htmlFor="lat">Latitude</Label>
									<Input
										id="lat"
										name="lat"
										type="Float"
										value={formData.lat}
										onChange={handleChange}
										required
										min={-90}
										max={90}
									/>
								</div>
								<div>
									<Label htmlFor="long">Longitude</Label>
									<Input
										id="long"
										name="long"
										type="Float"
										value={formData.long}
										onChange={handleChange}
										required
										min={-90}
										max={90}
									/>
								</div>
								<Button
									type="submit"
									className="w-full bg-green-600 hover:bg-green-700"
								>
									Submit
								</Button>
							</form>
						</div>
					</div>
				</section>
				{predictionResult && (
					<div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4 rounded-lg shadow-md">
						<h2 className="text-2xl font-semibold text-green-800 mb-2">
							Prediction Result:
						</h2>
						<pre className="text-green-700 bg-green-100 p-4 rounded-md overflow-x-auto">
							{JSON.stringify(predictionResult, null, 2)}
						</pre>
					</div>
				)}
				{submitClicked && <Loader />}
				<Toaster />
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500">
					© 2024 AgroTech Inc. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#"
					>
						Terms of Service
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#"
					>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	);
}
