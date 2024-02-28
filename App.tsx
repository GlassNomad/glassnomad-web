import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from './Orders/Orders';


return (
     <Router> 
        <div className="grid-container"> 
        <link rel="stylesheet" href="style.css" />
        <title>Emerald Tiger</title>

         <body>
             <div> 
                <header className="header"> </header>
                </div>
                <div className = "header-links">
                    <Link to="/">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/orders">Orders</Link>
                </div>
                    </body>
                   </div>
                   <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Products />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/orders.:id" element={<OrdersDetail />} />
                        
                    </Routes>
                   </main>
                   </Router>
                    );
                    return <div>Home Page Content</div>;

                  
                    export default App;

