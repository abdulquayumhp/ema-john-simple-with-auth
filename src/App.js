import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shipping from "./components/shipping/Shipping";
import Shop from "./components/Shop/Shop";
import Main from "./layouts/Main";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import Login from "./Login/Login";
import PrivetRoute from "./routes/PrivetRoute";
import Signup from "./signup/Signup";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			children: [
				{
					path: "/",
					loader: () => fetch("products.json"),
					element: <Shop></Shop>,
				},
				{
					path: "orders",
					loader: productsAndCartLoader,
					element: <Orders></Orders>,
				},
				{
					path: "inventory",
					element: (
						<PrivetRoute>
							<Inventory></Inventory>
						</PrivetRoute>
					),
				},
				{
					path: "shipping",
					element: (
						<PrivetRoute>
							<Shipping />
						</PrivetRoute>
					),
				},
				{
					path: "login",
					element: <Login />,
				},
				{
					path: "signup",
					element: <Signup />,
				},
				{
					path: "about",
					element: <About></About>,
				},
			],
		},
	]);
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
